import { 
  users, features, useCases, testimonials, faqs, waitlist,
  type User, type InsertUser,
  type Feature, type InsertFeature,
  type UseCase, type InsertUseCase,
  type Testimonial, type InsertTestimonial,
  type Faq, type InsertFaq,
  type Waitlist, type InsertWaitlist
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Feature methods
  getFeatures(): Promise<Feature[]>;
  getFeatureById(id: number): Promise<Feature | undefined>;
  createFeature(feature: InsertFeature): Promise<Feature>;
  
  // UseCase methods
  getUseCases(): Promise<UseCase[]>;
  getUseCaseById(id: number): Promise<UseCase | undefined>;
  createUseCase(useCase: InsertUseCase): Promise<UseCase>;
  
  // Testimonial methods
  getTestimonials(isActive?: boolean): Promise<Testimonial[]>;
  getTestimonialById(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // FAQ methods
  getFaqs(category?: string): Promise<Faq[]>;
  getFaqById(id: number): Promise<Faq | undefined>;
  createFaq(faq: InsertFaq): Promise<Faq>;
  
  // Waitlist methods
  joinWaitlist(waitlistEntry: InsertWaitlist): Promise<Waitlist>;
  getWaitlistEntries(): Promise<Waitlist[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private features: Map<number, Feature>;
  private useCases: Map<number, UseCase>;
  private testimonials: Map<number, Testimonial>;
  private faqs: Map<number, Faq>;
  private waitlistEntries: Map<number, Waitlist>;
  
  private userCurrentId: number;
  private featureCurrentId: number;
  private useCaseCurrentId: number;
  private testimonialCurrentId: number;
  private faqCurrentId: number;
  private waitlistCurrentId: number;
  
  constructor() {
    this.users = new Map();
    this.features = new Map();
    this.useCases = new Map();
    this.testimonials = new Map();
    this.faqs = new Map();
    this.waitlistEntries = new Map();
    
    this.userCurrentId = 1;
    this.featureCurrentId = 1;
    this.useCaseCurrentId = 1;
    this.testimonialCurrentId = 1;
    this.faqCurrentId = 1;
    this.waitlistCurrentId = 1;
    
    // Initialize with seed data
    this.initializeData();
  }
  
  private async initializeData() {
    // Add features
    await this.createFeature({
      title: "Fair & Transparent",
      description: "No fees, no confusion. Everyone pays exactly their share.",
      iconName: "Scale",
      order: 1
    });
    
    await this.createFeature({
      title: "No Awkward Follow-ups",
      description: "15-minute payment window with automatic refunds for everyone who already paid if any group member fails to pay their share in time.",
      iconName: "Bell",
      order: 2
    });
    
    await this.createFeature({
      title: "Works with Any Card",
      description: "Use any credit or debit card. No need for everyone to download an app.",
      iconName: "CreditCard",
      order: 3
    });
    
    await this.createFeature({
      title: "Trusted & Secure",
      description: "Bank-level encryption and security for all your transactions.",
      iconName: "Shield",
      order: 4
    });
    
    await this.createFeature({
      title: "Direct Payments",
      description: "Everyone pays their share directly without external transfers, no forgetting or follow-ups.",
      iconName: "CreditCard",
      order: 5
    });
    
    await this.createFeature({
      title: "Plug & Play for Merchants",
      description: "Easy integration with popular e-commerce platforms and custom checkouts.",
      iconName: "ShoppingCart",
      order: 6
    });
    
    // Add use cases
    await this.createUseCase({
      title: "Dinner with friends",
      description: "Split the bill instantly, even with different items.",
      iconName: "Utensils",
      order: 1
    });
    
    await this.createUseCase({
      title: "Shared vacation",
      description: "Manage group expenses for trips without the headache.",
      iconName: "Plane",
      order: 2
    });
    
    await this.createUseCase({
      title: "Housemates",
      description: "Split rent, utilities, and household purchases painlessly.",
      iconName: "Home",
      order: 3
    });
    
    await this.createUseCase({
      title: "Group gifts",
      description: "Collect money for a present without awkward reminders.",
      iconName: "Gift",
      order: 4
    });
    
    await this.createUseCase({
      title: "Event tickets",
      description: "Buy tickets together and split the cost automatically.",
      iconName: "Ticket",
      order: 5
    });
    
    // Add testimonials
    await this.createTestimonial({
      quote: "SPLTRR saved my friendships! No more awkward 'you still owe me' conversations after group dinners.",
      author: "Layla A.",
      role: "Regular User",
      avatarUrl: "https://randomuser.me/api/portraits/women/33.jpg",
      isActive: true
    });
    
    await this.createTestimonial({
      quote: "Since integrating SPLTRR, our cart abandonment rate for group bookings has dropped by 34%. It's been a game-changer.",
      author: "Faisal K.",
      role: "E-commerce Manager",
      avatarUrl: "https://randomuser.me/api/portraits/men/42.jpg",
      isActive: true
    });
    
    // Add FAQs
    await this.createFaq({
      question: "How does SPLTRR work?",
      answer: "SPLTRR lets you select SPLTRR from the merchant checkout page, invite your group via phone or link, and everyone pays their share. For merchants, it integrates with checkout to offer split payment as an option.",
      order: 1,
      category: "general"
    });
    
    await this.createFaq({
      question: "Is there a fee to use SPLTRR?",
      answer: "SPLTRR is completely free for both individual users splitting expenses with friends and merchants integrating our payment solution.",
      order: 2,
      category: "pricing"
    });
    
    await this.createFaq({
      question: "When will SPLTRR be available?",
      answer: "We're currently in private beta. Join our waitlist to get early access and be notified when we launch publicly.",
      order: 3,
      category: "general"
    });
    
    await this.createFaq({
      question: "How do I integrate SPLTRR with my online store?",
      answer: "SPLTRR offers simple plugins for major e-commerce platforms like Shopify and WooCommerce. Our API is also available for custom integrations.",
      order: 4,
      category: "merchants"
    });
    
    await this.createFaq({
      question: "What if someone doesn't pay their share?",
      answer: "SPLTRR handles this with automated reminders. If the 15-minute time limit expires and there are still unpaid shares, everyone who already paid will automatically receive a full refund. This protects all members from having to cover for others.",
      order: 5,
      category: "general"
    });
    
    await this.createFaq({
      question: "Is my payment information secure?",
      answer: "Absolutely. SPLTRR uses bank-level encryption and security protocols. We never store your full card details on our servers.",
      order: 6,
      category: "security"
    });
  }
  
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }
  
  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }
  
  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Feature methods
  async getFeatures(): Promise<Feature[]> {
    return Array.from(this.features.values()).sort((a, b) => a.order - b.order);
  }
  
  async getFeatureById(id: number): Promise<Feature | undefined> {
    return this.features.get(id);
  }
  
  async createFeature(insertFeature: InsertFeature): Promise<Feature> {
    const id = this.featureCurrentId++;
    const feature: Feature = { 
      ...insertFeature, 
      id,
      order: insertFeature.order ?? 0 
    };
    this.features.set(id, feature);
    return feature;
  }
  
  // UseCase methods
  async getUseCases(): Promise<UseCase[]> {
    return Array.from(this.useCases.values()).sort((a, b) => a.order - b.order);
  }
  
  async getUseCaseById(id: number): Promise<UseCase | undefined> {
    return this.useCases.get(id);
  }
  
  async createUseCase(insertUseCase: InsertUseCase): Promise<UseCase> {
    const id = this.useCaseCurrentId++;
    const useCase: UseCase = { 
      ...insertUseCase, 
      id,
      order: insertUseCase.order ?? 0 
    };
    this.useCases.set(id, useCase);
    return useCase;
  }
  
  // Testimonial methods
  async getTestimonials(isActive?: boolean): Promise<Testimonial[]> {
    let testimonials = Array.from(this.testimonials.values());
    
    if (isActive !== undefined) {
      testimonials = testimonials.filter(t => t.isActive === isActive);
    }
    
    return testimonials;
  }
  
  async getTestimonialById(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialCurrentId++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      avatarUrl: insertTestimonial.avatarUrl ?? null,
      isActive: insertTestimonial.isActive ?? null
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  
  // FAQ methods
  async getFaqs(category?: string): Promise<Faq[]> {
    let faqs = Array.from(this.faqs.values()).sort((a, b) => a.order - b.order);
    
    if (category) {
      faqs = faqs.filter(faq => faq.category === category);
    }
    
    return faqs;
  }
  
  async getFaqById(id: number): Promise<Faq | undefined> {
    return this.faqs.get(id);
  }
  
  async createFaq(insertFaq: InsertFaq): Promise<Faq> {
    const id = this.faqCurrentId++;
    const faq: Faq = { 
      ...insertFaq, 
      id,
      order: insertFaq.order ?? 0,
      category: insertFaq.category ?? null
    };
    this.faqs.set(id, faq);
    return faq;
  }
  
  // Waitlist methods
  async joinWaitlist(insertWaitlist: InsertWaitlist): Promise<Waitlist> {
    const id = this.waitlistCurrentId++;
    const waitlistEntry: Waitlist = { 
      ...insertWaitlist, 
      id,
      company: insertWaitlist.company ?? null,
      isBusinessUser: insertWaitlist.isBusinessUser ?? null,
      message: insertWaitlist.message ?? null,
      createdAt: new Date() 
    };
    this.waitlistEntries.set(id, waitlistEntry);
    return waitlistEntry;
  }
  
  async getWaitlistEntries(): Promise<Waitlist[]> {
    return Array.from(this.waitlistEntries.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
