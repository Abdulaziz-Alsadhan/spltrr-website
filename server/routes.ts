import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from the public directory
  app.use('/images', express.static(path.join(process.cwd(), 'public', 'images')));
  app.use('/static', express.static(path.join(process.cwd(), 'server', 'public')));
  
  // API routes (all prefixed with /api)
  
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, email, message, timestamp } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Format the email content
      const emailContent = `
Contact form submission:
----------------------
Name: ${name}
Email: ${email}
Message: ${message}
Time: ${timestamp || new Date().toISOString()}
      `;
      
      // In a production environment, you would use a server-side email service
      // For example, using SendGrid or Nodemailer to actually send the email
      
      // For now, we'll just log it since we handle the fallback client-side
      console.log("Contact form submission received:");
      console.log(emailContent);
      
      // TODO: Replace this with actual email sending logic
      // Example using SendGrid (commented out as it requires API key):
      /*
      const msg = {
        to: 'info@spltrr.com',
        from: email,
        subject: `Contact Form Submission from ${name}`,
        text: emailContent,
      };
      await sgMail.send(msg);
      */
      
      return res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "Error processing contact form", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Get all features
  app.get("/api/features", async (req: Request, res: Response) => {
    try {
      const features = await storage.getFeatures();
      return res.json(features);
    } catch (error) {
      console.error("Error fetching features:", error);
      return res.status(500).json({ message: "Failed to fetch features" });
    }
  });

  // Get all use cases
  app.get("/api/use-cases", async (req: Request, res: Response) => {
    try {
      const useCases = await storage.getUseCases();
      return res.json(useCases);
    } catch (error) {
      console.error("Error fetching use cases:", error);
      return res.status(500).json({ message: "Failed to fetch use cases" });
    }
  });

  // Get testimonials
  app.get("/api/testimonials", async (req: Request, res: Response) => {
    try {
      const isActive = req.query.active === "true" ? true : undefined;
      const testimonials = await storage.getTestimonials(isActive);
      return res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Get FAQs
  app.get("/api/faqs", async (req: Request, res: Response) => {
    try {
      const category = req.query.category as string | undefined;
      const faqs = await storage.getFaqs(category);
      return res.json(faqs);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      return res.status(500).json({ message: "Failed to fetch FAQs" });
    }
  });

  // Get FAQ by ID
  app.get("/api/faqs/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid FAQ ID" });
      }
      
      const faq = await storage.getFaqById(id);
      if (!faq) {
        return res.status(404).json({ message: "FAQ not found" });
      }
      
      return res.json(faq);
    } catch (error) {
      console.error("Error fetching FAQ:", error);
      return res.status(500).json({ message: "Failed to fetch FAQ" });
    }
  });

  // Join waitlist
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      const waitlistData = insertWaitlistSchema.parse(req.body);
      const entry = await storage.joinWaitlist(waitlistData);
      
      return res.status(201).json({ 
        message: "Successfully joined waitlist",
        id: entry.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors
        });
      }
      
      console.error("Error joining waitlist:", error);
      return res.status(500).json({ message: "Failed to join waitlist" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
