import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Mail, 
  Send, 
  MessageSquareText, 
  Star, 
  HelpCircle, 
  Clock, 
  Users, 
  Building,
  CreditCard, 
  ShieldCheck 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { t, language } = useLanguage();
  
  return (
    <div className="pt-16 pb-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-black to-primary/20 text-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Let's Connect
                </h1>
                <p className="text-xl leading-relaxed mb-8 opacity-90">
                  Have questions about SPLTRR? Want to integrate split payments into your checkout? Our team is here to help.
                </p>
                <Button 
                  size="lg" 
                  className="rounded-full gradient-button"
                  onClick={() => window.location.href = "mailto:info@spltrr.com"}
                >
                  <span>Contact Us</span>
                </Button>
              </motion.div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <MessageSquareText className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Quick Response</h2>
              </div>
              <p className="opacity-90 mb-4">
                Our team typically responds within 24 hours to all inquiries. We're dedicated to getting you the answers you need.
              </p>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-primary fill-primary" />
                ))}
                <span className="ml-2 opacity-80 text-sm">5.0 average response rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Ways To Reach Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-2 border-muted shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">General Support</h3>
                <p className="text-muted-foreground mb-4">
                  For questions about SPLTRR and how to use it
                </p>
                <button 
                  className="text-primary hover:underline font-medium"
                  onClick={() => window.location.href = "mailto:info@spltrr.com"}
                >
                  General Support
                </button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-muted shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Business Inquiries</h3>
                <p className="text-muted-foreground mb-4">
                  For merchants looking to integrate SPLTRR
                </p>
                <button 
                  className="text-primary hover:underline font-medium"
                  onClick={() => window.location.href = "mailto:info@spltrr.com"}
                >
                  Business Support
                </button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-muted shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hours</h3>
                <p className="text-muted-foreground mb-2">
                  Monday - Friday: 9AM - 6PM EST
                </p>
                <p className="text-muted-foreground">
                  Weekend: Online Support Only
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Get quick answers to common questions about SPLTRR, our payment platform, and integration options.
            </p>
          </div>
          
          <Tabs defaultValue="general" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="merchants">For Merchants</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="space-y-6">
              <div className="rounded-lg border-2 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">What is SPLTRR?</h3>
                <p className="text-muted-foreground">
                  SPLTRR is a next-gen payment platform designed to simplify group payments. Whether it's friends splitting a dinner bill, roommates sharing utilities, or teams co-buying gifts, SPLTRR ensures everyone pays their fair share—effortlessly and transparently.
                </p>
              </div>
              
              <div className="rounded-lg border-2 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">When will SPLTRR launch publicly?</h3>
                <p className="text-muted-foreground">
                  SPLTRR is currently in private beta. Join our waitlist to be notified when we open to the public and to get early access.
                </p>
              </div>
              
              <div className="rounded-lg border-2 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Is SPLTRR available on mobile?</h3>
                <p className="text-muted-foreground">
                  Yes, SPLTRR will be available as a mobile app for both iOS and Android. We also offer a web version for desktop users.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="payments" className="space-y-6">
              <div className="rounded-lg border-2 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">How does SPLTRR's payment splitting work?</h3>
                <p className="text-muted-foreground">
                  SPLTRR lets you select SPLTRR from the merchant checkout page, invite your group via phone number or link, and everyone pays their share. The process is seamless, secure, and doesn't require everyone to have the app.
                </p>
              </div>
              
              <div className="rounded-lg border-2 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Is there a fee to use SPLTRR?</h3>
                <p className="text-muted-foreground">
                  SPLTRR is free for individual users splitting expenses with friends. For merchants, we charge a small transaction fee comparable to other payment processors.
                </p>
              </div>
              
              <div className="rounded-lg border-2 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">What payment methods does SPLTRR accept?</h3>
                <p className="text-muted-foreground">
                  SPLTRR works with all major credit and debit cards. We plan to add support for digital wallets and bank transfers in future updates.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="merchants" className="space-y-6">
              <div className="rounded-lg border-2 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar' 
                    ? 'كيف يمكنني دمج سبلتر مع متجري الإلكتروني؟' 
                    : 'How can I integrate SPLTRR with my online store?'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'ar'
                    ? 'توفر سبلتر تكاملًا سهلاً مع منصات التجارة الإلكترونية الشائعة مثل Shopify و WooCommerce. كما نوفر واجهات برمجة التطبيقات للتكامل المخصص مع وثائق مفصلة.'
                    : 'SPLTRR offers easy integration with popular e-commerce platforms like Shopify and WooCommerce. We also provide APIs for custom integration with detailed documentation.'}
                </p>
              </div>
              
              <div className="rounded-lg border-2 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar'
                    ? 'ما هي الفوائد التي تقدمها سبلتر للتجار؟'
                    : 'What benefits does SPLTRR offer merchants?'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'ar'
                    ? 'من خلال تقديم مدفوعات مقسمة عند الدفع، يمكن للتجار تقليل التخلي عن سلة التسوق، وزيادة متوسط قيمة الطلب، وجذب المشترين الجماعيين. خيارات الدفع الجماعي يمكن أن تساعد في تحسين معدلات التحويل للمشتريات الجماعية.'
                    : 'By offering split payments at checkout, merchants can reduce cart abandonment, increase average order value, and attract group purchasers. Group payment options can help improve conversion rates for group purchases.'}
                </p>
              </div>
              
              <div className="rounded-lg border-2 p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar'
                    ? 'كيف تعمل التسويات للتجار؟'
                    : 'How do settlements work for merchants?'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'ar'
                    ? 'يتلقى التجار الدفعة الكاملة بمجرد أن يكمل جميع المشاركين حصصهم. لمزيد من الأمان، نقدم أيضًا خيار الدفع المضمون حيث تضمن سبلتر حصولك على المبلغ الكامل بغض النظر عن المشاركة الفردية.'
                    : 'Merchants receive the full payment once all participants have completed their shares. For added security, we also offer a guaranteed payment option where SPLTRR ensures you receive the full amount regardless of individual participation.'}
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose SPLTRR Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose SPLTRR</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-start">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Trusted</h3>
              <p className="text-muted-foreground">
                Bank-level encryption protects all transactions. Your financial data is never stored on our servers, and we comply with all industry security standards.
              </p>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Works with Any Card</h3>
              <p className="text-muted-foreground">
                SPLTRR is compatible with all major credit and debit cards. No need for everyone to download an app or create an account.
              </p>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">No More Awkward Reminders</h3>
              <p className="text-muted-foreground">
                Our automated reminders tactfully follow up with group members who haven't paid their share yet, so you don't have to.
              </p>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise Solutions</h3>
              <p className="text-muted-foreground">
                For larger businesses, we offer custom solutions with dedicated account management, detailed analytics, and seamless integration options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Waitlist</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Be among the first to experience SPLTRR. Click the button below to join our waitlist and get early access to our platform.
            </p>
            
            <Button 
              size="lg" 
              className="rounded-full gradient-button"
              onClick={() => window.location.href = "mailto:info@spltrr.com"}
            >
              <span>Join Waitlist Now</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
