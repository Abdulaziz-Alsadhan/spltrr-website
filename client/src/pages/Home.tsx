import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowDownToLine, 
  Beef,
  Users, 
  CreditCard,
  Zap,
  CheckCircle,
  ExternalLink,
  Shield,
  Bell,
  Scale,
  ShoppingCart,
  Utensils,
  Plane,
  Pizza,
  Home as HomeIcon,
  Gift,
  Ticket,
  Mail
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

import { SARSymbol } from '@/components/SARSymbol';
import { ApplePayButton } from '@/components/ApplePayButton';
import CountdownTimer from '@/components/CountdownTimer';
import StepSquare from '@/components/StepSquare';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type Feature, type UseCase } from '@shared/schema';

export default function Home() {
  const { t, language } = useLanguage();
  
  const { data: features, isLoading: featuresLoading } = useQuery<Feature[]>({
    queryKey: ['/api/features'],
  });
  
  const { data: useCases, isLoading: useCasesLoading } = useQuery<UseCase[]>({
    queryKey: ['/api/use-cases'],
  });
  

  
  const getIconByName = (iconName: string) => {
    switch (iconName) {
      case 'Scale': return <Scale className="h-6 w-6 text-primary" />;
      case 'Bell': return <Bell className="h-6 w-6 text-primary" />;
      case 'CreditCard': return <CreditCard className="h-6 w-6 text-primary" />;
      case 'Shield': return <Shield className="h-6 w-6 text-primary" />;
      case 'ShoppingCart': return <ShoppingCart className="h-6 w-6 text-primary" />;
      case 'Utensils': return <Utensils className="h-6 w-6 text-primary" />;
      case 'Plane': return <Plane className="h-6 w-6 text-primary" />;
      case 'Home': return <HomeIcon className="h-6 w-6 text-primary" />;
      case 'Gift': return <Gift className="h-6 w-6 text-primary" />;
      case 'Ticket': return <Ticket className="h-6 w-6 text-primary" />;
      default: return <Zap className="h-6 w-6 text-primary" />;
    }
  };
  
  // Translation mapping for API content
  const featureTranslations = {
    "Fair & Transparent": {
      ar: "عادل وشفاف"
    },
    "No fees, no confusion. Everyone pays exactly their share.": {
      ar: "لا رسوم، لا ارتباك. يدفع الجميع حصتهم بالضبط."
    },
    "No Awkward Follow-ups": {
      ar: "بدون متابعات محرجة"
    },
    "15-minute payment window with automatic refunds for everyone who already paid if any group member fails to pay their share in time.": {
      ar: "نافذة دفع مدتها 15 دقيقة مع استرداد تلقائي للأموال لجميع من دفعوا بالفعل إذا فشل أي عضو في المجموعة في دفع حصته في الوقت المحدد."
    },
    "Direct Payments": {
      ar: "الكل يدفع قطته مباشرة"
    },
    "Everyone pays their share directly without external transfers, no forgetting or follow-ups.": {
      ar: "بدون تحويلات خارجية وبدون نسيان ومتابعات"
    },
    "Works with Any Card": {
      ar: "يعمل مع أي بطاقة"
    },
    "Use any credit or debit card. No need for everyone to download an app.": {
      ar: "استخدم أي بطاقة ائتمان أو خصم. لا داعي للجميع لتنزيل تطبيق."
    },
    "Plug & Play for Merchants": {
      ar: "جاهز للاستخدام الفوري للتجار"
    },
    "Easy integration with popular e-commerce platforms and custom checkouts.": {
      ar: "تكامل سهل مع منصات التجارة الإلكترونية الشائعة وصفحات الدفع المخصصة"
    },
    "Trusted & Secure": {
      ar: "موثوق وآمن"
    },
    "Bank-level security keeps your payment information safe.": {
      ar: "تشفير وأمان بمستوى البنوك لجميع معاملاتك"
    },
    "Bank-level encryption and security for all your transactions.": {
      ar: "تشفير وأمان بمستوى البنوك لجميع معاملاتك"
    },
    "Fast & Easy": {
      ar: "سريع وسهل"
    },
    "Split and settle payments in seconds with just a few clicks.": {
      ar: "قسّم وتسوية المدفوعات في ثوانٍ بنقرات قليلة فقط."
    }
  };

  const useCaseTranslations = {
    "Dinner with friends": {
      ar: "عشاء مع الأصدقاء"
    },
    "Split the bill instantly, even with different items": {
      ar: "تقسيم الفاتورة فورًا، حتى مع وجود عناصر مختلفة"
    },
    "Shared vacation": {
      ar: "إجازة مشتركة"
    },
    "Manage group expenses for trips without the headache": {
      ar: "إدارة نفقات المجموعة للرحلات بدون صداع"
    },
    "Housemates": {
      ar: "زملاء السكن"
    },
    "Split rent, utilities, and household purchases painlessly": {
      ar: "تقسيم الإيجار، والمرافق، ومشتريات المنزل بلا ألم"
    },
    "Group gifts": {
      ar: "هدايا جماعية"
    },
    "Collect money for a present without awkward reminders": {
      ar: "جمع المال لهدية بدون تذكيرات محرجة"
    },
    "Event tickets": {
      ar: "تذاكر الفعاليات"
    },
    "Buy tickets together and split the cost automatically": {
      ar: "شراء التذاكر معًا وتقسيم التكلفة تلقائيًا"
    }
  };

  const faqTranslations = {
    "How does SPLTRR work?": {
      ar: "كيف تعمل سبلتر؟"
    },
    "SPLTRR integrates with your existing checkout to allow customers to split payments easily. When multiple people are paying for a single order, our system sends unique payment links, tracks who has paid, and automatically settles the payment once all participants have contributed.": {
      ar: "تتكامل سبلتر مع صفحة الدفع الخاصة بك للسماح للعملاء بتقسيم المدفوعات بسهولة. عندما يدفع أشخاص متعددون مقابل طلب واحد، يرسل نظامنا روابط دفع فريدة، ويتتبع من دفع، ويسوي الدفع تلقائيًا بمجرد مساهمة جميع المشاركين."
    },
    "SPLTRR lets you select SPLTRR from the merchant checkout page, invite your group via phone or link, and everyone pays their share. For merchants, it integrates with checkout to offer split payment as an option.": {
      ar: "تتيح لك سبلتر اختيار سبلتر من صفحة الدفع الخاصة بالتاجر، ودعوة مجموعتك عبر الهاتف أو الرابط، ويدفع الجميع حصتهم. بالنسبة للتجار، فإنها تتكامل مع صفحة الدفع لتقديم خيار تقسيم الدفع."
    },
    "Is there a fee to use SPLTRR?": {
      ar: "هل هناك رسوم لاستخدام سبلتر؟"
    },
    "SPLTRR charges businesses a small per-transaction fee, but there are no additional fees for end-users. This means your customers can split payments for free, making their experience better without adding cost.": {
      ar: "تفرض سبلتر رسومًا صغيرة على المعاملات للشركات، ولكن لا توجد رسوم إضافية للمستخدمين النهائيين. هذا يعني أن عملاءك يمكنهم تقسيم المدفوعات مجانًا، مما يجعل تجربتهم أفضل دون إضافة تكلفة."
    },
    "SPLTRR is completely free for both individual users splitting expenses with friends and merchants integrating our payment solution.": {
      ar: "سبلتر مجانية تمامًا للمستخدمين الذين يتقاسمون النفقات مع الأصدقاء."
    },
    "Is SPLTRR secure?": {
      ar: "هل سبلتر آمنة؟"
    },
    "Yes, security is our top priority. SPLTRR uses bank-level encryption and never stores complete card details. We comply with all relevant security standards and regulations including PCI DSS.": {
      ar: "نعم، الأمان هو أولويتنا القصوى. تستخدم سبلتر التشفير على مستوى البنوك ولا تخزن أبدًا تفاصيل البطاقة الكاملة. نحن نلتزم بجميع معايير وأنظمة الأمان ذات الصلة بما في ذلك معايير أمان بيانات صناعة بطاقات الدفع (PCI DSS)."
    },
    "How long does it take to integrate SPLTRR?": {
      ar: "كم من الوقت يستغرق دمج سبلتر؟"
    },
    "Most merchants can integrate SPLTRR in under a day with our simple API. Our team provides support throughout the integration process to make it as smooth as possible.": {
      ar: "يمكن لمعظم التجار دمج سبلتر في أقل من يوم باستخدام واجهة برمجة التطبيقات البسيطة الخاصة بنا. يقدم فريقنا الدعم طوال عملية التكامل لجعلها سلسة قدر الإمكان."
    },
    "What payment methods does SPLTRR support?": {
      ar: "ما هي طرق الدفع التي تدعمها سبلتر؟"
    },
    "SPLTRR supports all major credit and debit cards, Apple Pay, and local payment methods popular in Saudi Arabia. We're constantly adding more payment options to make the process as convenient as possible for all users.": {
      ar: "تدعم سبلتر جميع بطاقات الائتمان والخصم الرئيسية، و Apple Pay، وطرق الدفع المحلية الشائعة في المملكة العربية السعودية. نحن نضيف باستمرار المزيد من خيارات الدفع لجعل العملية مريحة قدر الإمكان لجميع المستخدمين."
    },
    "What happens if someone doesn't pay their share?": {
      ar: "ماذا يحدث إذا لم يدفع شخص ما حصته؟"
    },
    "SPLTRR has a configurable time window (default is 15 minutes) for all participants to complete payment. If someone doesn't pay within this window, the entire transaction is canceled and those who already paid receive automatic refunds. This eliminates the risk of partial payments.": {
      ar: "تتيح سبلتر نافذة زمنية قابلة للتكوين (الافتراضي هو 15 دقيقة) لجميع المشاركين لإكمال الدفع. إذا لم يدفع شخص ما خلال هذه النافذة، يتم إلغاء المعاملة بأكملها ويتلقى الذين دفعوا بالفعل استردادًا تلقائيًا للأموال. هذا يلغي مخاطر المدفوعات الجزئية."
    },
    "When will SPLTRR be available": {
      ar: "متى ستكون سبلتر متاحة؟"
    },
    "When will SPLTRR be available?": {
      ar: "متى ستكون سبلتر متاحة؟"
    },
    "We're currently in private beta. Join our waitlist to get early access and be notified when we launch publicly.": {
      ar: "نحن حاليًا في مرحلة الاختبار المغلق. انضم إلى قائمة الانتظار للحصول على وصول مبكر والإخطار عند إطلاقنا للعامة."
    },
    "How do I integrate SPLTRR with my online store": {
      ar: "كيف يمكنني دمج سبلتر مع متجري الإلكتروني؟"
    },
    "How do I integrate SPLTRR with my online store?": {
      ar: "كيف يمكنني دمج سبلتر مع متجري الإلكتروني؟"
    },
    "SPLTRR offers simple plugins for major e-commerce platforms like Shopify and WooCommerce. Our API is also available for custom integrations.": {
      ar: "توفر سبلتر إضافات بسيطة لمنصات التجارة الإلكترونية الرئيسية مثل شوبيفاي ووكومرس. واجهة برمجة التطبيقات الخاصة بنا متاحة أيضًا للتكاملات المخصصة."
    },
    "What if someone doesn't pay their share": {
      ar: "ماذا يحدث إذا لم يدفع شخص ما حصته؟"
    },
    "What if someone doesn't pay their share?": {
      ar: "ماذا يحدث إذا لم يدفع شخص ما حصته؟"
    },
    "SPLTRR handles this with automated reminders. If the 15-minute time limit expires and there are still unpaid shares, everyone who already paid will automatically receive a full refund. This protects all members from having to cover for others.": {
      ar: "تتعامل سبلتر مع هذا من خلال تذكيرات آلية. إذا انتهت مهلة الـ 15 دقيقة وما زالت هناك حصص غير مدفوعة، فسيحصل جميع من دفعوا بالفعل على استرداد كامل تلقائيًا. وهذا يحمي جميع الأعضاء من الاضطرار إلى تغطية تكاليف الآخرين."
    },
    "Is my payment information secure": {
      ar: "هل معلومات الدفع الخاصة بي آمنة؟"
    },
    "Is my payment information secure?": {
      ar: "هل معلومات الدفع الخاصة بي آمنة؟"
    },
    "Absolutely. SPLTRR uses bank-level encryption and security protocols. We never store your full card details on our servers.": {
      ar: "بالتأكيد. تستخدم سبلتر تشفيرًا وبروتوكولات أمان بمستوى البنوك. نحن لا نخزن أبدًا تفاصيل بطاقتك الكاملة على خوادمنا."
    }
  };

  // Helper function to translate content based on language
  const translateApiContent = (text: string, translationMap: Record<string, {ar: string}>) => {
    const { language } = useLanguage();
    console.log('Translating:', text, 'Language:', language);
    console.log('Has translation:', translationMap[text]?.ar ? 'Yes' : 'No');
    
    if (language === 'ar' && translationMap[text]?.ar) {
      return translationMap[text].ar;
    }
    return text;
  };
  
  // Helper functions to get translation keys for use cases
  const getUseCaseTranslationKey = (title: string) => {
    const { t } = useLanguage();
    switch(title.toLowerCase()) {
      case 'dinner with friends':
        return t('useCase.dinner.title');
      case 'shared vacation':
        return t('useCase.vacation.title');
      case 'housemates':
        return t('useCase.housemates.title');
      case 'group gifts':
        return t('useCase.gifts.title');
      case 'event tickets':
        return t('useCase.events.title');
      default:
        return title;
    }
  };
  
  const getUseCaseDescriptionTranslationKey = (title: string) => {
    const { t } = useLanguage();
    switch(title.toLowerCase()) {
      case 'dinner with friends':
        return t('useCase.dinner.description');
      case 'shared vacation':
        return t('useCase.vacation.description');
      case 'housemates':
        return t('useCase.housemates.description');
      case 'group gifts':
        return t('useCase.gifts.description');
      case 'event tickets':
        return t('useCase.events.description');
      default:
        return '';
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-primary/20 text-white">
        <div className="container mx-auto px-4 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >

              
              <h1 className="text-4xl md:text-6xl font-bold">
                {t('home.hero.titleLine1')}
                <span className="block bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                  {t('home.hero.titleLine2')}
                </span>
              </h1>
              
              <p className="text-xl text-white/80">
                {t('home.hero.description')}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4 ml-8">
                <Button 
                  size="lg" 
                  className="rounded-full gradient-button"
                  onClick={() => window.location.href = 'mailto:info@spltrr.com?subject=SPLTRR Waitlist Request'}
                >
                  <span>{t('home.joinWaitlist')} <ArrowRight className="ml-2 h-5 w-5" /></span>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-r from-black/30 to-transparent p-6 rounded-3xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-500/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-t from-green-500/20 to-transparent" />
                
                <div className="relative z-10">
                  <div className="flex flex-col mb-6">
                    <div className="mb-2 bg-red-500/20 text-red-400 px-3 py-1 rounded-md self-start">
                      <div className="flex items-center gap-1">
                        <CountdownTimer 
                          minutes={10} 
                          seconds={0}
                          className="text-xs uppercase tracking-wider font-medium"
                          onTimeUp={() => console.log("Time's up! Payment window closed.")}
                        />
                        <span className="text-xs text-red-400/70 ml-1">• {t('ui.autoRefundIfIncomplete')}</span>
                      </div>
                    </div>
                    <div className="inline">
                      <div className="bg-primary/20 py-2 px-12 rounded-full relative flex items-center justify-center">
                        <div className="absolute left-3">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <span className="font-bold text-white text-sm">{t('home.demo.dinner')}</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-white/60">4 {t('home.demo.people')} 
                          <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                            <SARSymbol /><span className="mx-0.5"></span>126.80
                          </span>
                        </p>
                        <p className="text-xs text-white/50 italic mt-1">{t('home.demo.autoRefund')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <p className="font-medium">{language === 'ar' ? 'عبدالعزيز' : 'Abdulaziz'} {t('home.demo.you')}</p>
                        <p className="text-sm text-white/60">{language === 'ar' ? 'باستا + ماء' : 'Pasta + Water'}</p>
                      </div>
                      <div className="text-right">
                        <p dir="ltr" className="font-bold">
                          <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                            <SARSymbol /><span className="mx-0.5"></span>32.50
                          </span>
                        </p>
                        <p className="text-xs text-green-400">{t('home.demo.paid')}</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <p className="font-medium">{language === 'ar' ? 'شريف' : 'Sherif'}</p>
                        <p className="text-sm text-white/60">{language === 'ar' ? 'ستيك + كولا' : 'Steak + Soda'}</p>
                      </div>
                      <div className="text-right">
                        <p dir="ltr" className="font-bold">
                          <span className="inline" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                            <SARSymbol /><span className="mx-0.5"></span>38.75
                          </span>
                        </p>
                        <p className="text-xs text-green-400">{t('home.demo.paid')}</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <p className="font-medium">{language === 'ar' ? 'عبدالله' : 'Abdullah'}</p>
                        <p className="text-sm text-white/60">{language === 'ar' ? 'سلطة + عصير' : 'Salad + Juice'}</p>
                      </div>
                      <div className="text-right">
                        <p dir="ltr" className="font-bold">
                          <span className="inline" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                            <SARSymbol /><span className="mx-0.5"></span>27.95
                          </span>
                        </p>
                        <p className="text-xs text-yellow-400">{t('home.demo.pending')}</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <p className="font-medium">{language === 'ar' ? 'محمد' : 'Mohammed'}</p>
                        <p className="text-sm text-white/60">{language === 'ar' ? 'برجر + كولا' : 'Burger + Soda'}</p>
                      </div>
                      <div className="text-right">
                        <p dir="ltr" className="font-bold">
                          <span className="inline" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                            <SARSymbol /><span className="mx-0.5"></span>27.60
                          </span>
                        </p>
                        <p className="text-xs text-yellow-400">{t('home.demo.pending')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl">
                    <div>
                      <p className="text-sm">{t('home.demo.totalCollected')}</p>
                      <p className="text-lg font-bold">
                        <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                          <SARSymbol /><span className="mx-0.5"></span>71.25
                        </span> / 
                        <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                          <SARSymbol /><span className="mx-0.5"></span>126.80
                        </span>
                      </p>
                    </div>
                    <Button size="sm" className="rounded-lg bg-green-500 hover:bg-green-600">
                      {t('home.demo.sendReminder')}
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-blue-500/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg transform rotate-6">
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-500/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg transform -rotate-12">
                <Zap className="h-6 w-6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.howItWorks.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.howItWorks.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StepSquare 
              number={1} 
              title={t('home.howItWorks.step1.title')} 
              description={t('home.howItWorks.step1.description')}
              icon={<ShoppingCart className="h-6 w-6" />}
              color="from-green-500 to-green-600"
            />
            
            <StepSquare 
              number={2} 
              title={t('home.howItWorks.step2.title')} 
              description={t('home.howItWorks.step2.description')}
              icon={<Users className="h-6 w-6" />}
              color="from-blue-400 to-blue-600"
            />
            
            <StepSquare 
              number={3} 
              title={t('home.howItWorks.step3.title')} 
              description={t('home.howItWorks.step3.description')}
              icon={<CreditCard className="h-6 w-6" />}
              color="from-green-400 to-blue-500"
            />
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.useCases.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.useCases.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {useCasesLoading && 
              Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 animate-pulse" />
                  <div className="h-6 w-24 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-16 w-full bg-gray-200 rounded animate-pulse" />
                </div>
              ))
            }
            
            {!useCasesLoading && useCases && useCases.map((useCase, index) => {
              // Helper function to get translation keys based on use case titles
              const getTranslationKeys = (title: string) => {
                const keys = {
                  title: '',
                  description: ''
                };
                
                if (title.toLowerCase() === 'dinner with friends') {
                  keys.title = 'useCase.dinner.title';
                  keys.description = 'useCase.dinner.description';
                } else if (title.toLowerCase() === 'shared vacation') {
                  keys.title = 'useCase.vacation.title';
                  keys.description = 'useCase.vacation.description';
                } else if (title.toLowerCase() === 'housemates') {
                  keys.title = 'useCase.housemates.title';
                  keys.description = 'useCase.housemates.description';
                } else if (title.toLowerCase() === 'group gifts') {
                  keys.title = 'useCase.gifts.title';
                  keys.description = 'useCase.gifts.description';
                } else if (title.toLowerCase() === 'event tickets') {
                  keys.title = 'useCase.events.title';
                  keys.description = 'useCase.events.description';
                }
                
                return keys;
              };
              
              const keys = getTranslationKeys(useCase.title);
              const useTitleKey = keys.title ? keys.title : '';
              const useDescKey = keys.description ? keys.description : '';
              
              return (
                <StepSquare
                  key={useCase.id}
                  number={index + 1}
                  title={useTitleKey ? t(useTitleKey) : translateApiContent(useCase.title, useCaseTranslations)}
                  description={useDescKey ? t(useDescKey) : translateApiContent(useCase.description, useCaseTranslations)}
                  icon={getIconByName(useCase.iconName)}
                  color={index % 2 === 0 ? "from-green-400 to-blue-500" : "from-blue-400 to-blue-600"}
                />
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Why SPLTRR Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuresLoading && 
              Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mb-4 animate-pulse" />
                    <div className="h-6 w-32 bg-gray-200 rounded mb-2 animate-pulse" />
                    <div className="h-24 w-full bg-gray-200 rounded animate-pulse" />
                  </CardContent>
                </Card>
              ))
            }
            
            {!featuresLoading && features && features.map((feature) => (
                <Card key={feature.id} className="border-2">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      {getIconByName(feature.iconName)}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{translateApiContent(feature.title, featureTranslations)}</h3>
                    <p className="text-gray-600">{translateApiContent(feature.description, featureTranslations)}</p>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
      </section>
      
      {/* For Merchants Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/10 text-white text-sm px-4 py-1 rounded-full mb-4">
                {t('home.merchants.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('home.merchants.title')}
              </h2>
              <p className="text-xl text-white/80 mb-8">
                {t('home.merchants.description')}
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{t('home.merchants.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{t('home.merchants.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{t('home.merchants.feature3')}</span>
                </li>

              </ul>
              
              <Button 
                size="lg" 
                className="rounded-full bg-white text-gray-900 hover:bg-white/90"
                onClick={() => window.location.href = 'mailto:info@spltrr.com?subject=Checkout Integration Partnership'}
              >
                {t('home.merchants.cta')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-white/10">
                <div className="bg-white/5 p-4 rounded-xl mb-6">
                  <div className="flex flex-col mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">{t('checkout.title')}</h3>
                      <span className="text-sm text-white/60">{t('checkout.step')} 3 {t('checkout.of')} 3</span>
                    </div>
                    <div className="bg-red-500/20 text-red-400 px-2 py-1 rounded flex items-center justify-between text-xs mt-1">
                      <CountdownTimer 
                        minutes={10} 
                        seconds={0}
                        className="flex items-center text-xs"
                        onTimeUp={() => console.log("Checkout time expired! Payment cancelled.")}
                      />
                      <span className="text-white/60 text-xs">{t('checkout.autoRefund')}</span>
                    </div>
                  </div>
                  
                  <div className="border-b border-white/10 pb-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 bg-amber-600 rounded overflow-hidden"></div>
                        <span>{t('food.classicBurger')}</span>
                      </div>
                      <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                        <SARSymbol /><span className="mx-0.5"></span>45.00
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 bg-amber-700 rounded overflow-hidden"></div>
                        <span>{t('food.doubleCheeseBurger')}</span>
                      </div>
                      <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                        <SARSymbol /><span className="mx-0.5"></span>55.00
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 bg-yellow-500 rounded overflow-hidden"></div>
                        <span>{t('food.fries')}</span>
                      </div>
                      <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                        <SARSymbol /><span className="mx-0.5"></span>20.00
                      </span>
                    </div>
                    
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 bg-green-600 rounded overflow-hidden"></div>
                        <span>{t('food.shawarma')}</span>
                      </div>
                      <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                        <SARSymbol /><span className="mx-0.5"></span>35.00
                      </span>
                    </div>

                    <div className="flex justify-between font-bold">
                      <span>{t('checkout.total')}</span>
                      <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                        <SARSymbol /><span className="mx-0.5"></span>155.00
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm text-white/60 mb-3">{t('checkout.paymentMethod')}</p>
                    <Tabs defaultValue="split" className="w-full">
                      <TabsList className="grid grid-cols-2 mb-4">
                        <TabsTrigger value="split" className="data-[state=active]:bg-primary">
                          {t('checkout.splitPayment')}
                        </TabsTrigger>
                        <TabsTrigger value="full" className="data-[state=active]:bg-primary">
                          {t('checkout.payInFull')}
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="split" className="space-y-4">
                        <Tabs defaultValue="equally">
                          <TabsList className="grid grid-cols-3 mb-4 w-full">
                            <TabsTrigger value="equally" className="text-xs">
                              {t('checkout.equally')}
                            </TabsTrigger>
                            <TabsTrigger value="per-product" className="text-xs">
                              {t('checkout.perProduct')}
                            </TabsTrigger>
                            <TabsTrigger value="custom" className="text-xs">
                              {t('checkout.customized')}
                            </TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="equally" className="space-y-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                              <p className="text-sm mb-2">{t('ui.splitEquallyBetween')}</p>
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center text-xs">
                                  <span>{language === 'ar' ? `عبدالعزيز ${t('home.demo.you')}` : `Abdulaziz (You)`}</span>
                                  <span dir="ltr" className="text-green-400"><span className="inline">
                                      <SARSymbol /><span className="mx-0.5"></span>
                                    </span>38.75</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                  <span>{language === 'ar' ? 'شريف' : 'Sherif'}</span>
                                  <span dir="ltr" className="text-green-400"><span className="inline">
                                      <SARSymbol /><span className="mx-0.5"></span>
                                    </span>38.75</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                  <span>{language === 'ar' ? 'عبدالله' : 'Abdullah'}</span>
                                  <span dir="ltr" className="text-yellow-400"><span className="inline">
                                      <SARSymbol /><span className="mx-0.5"></span>
                                    </span>38.75</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                  <span>{language === 'ar' ? 'محمد' : 'Mohammed'}</span>
                                  <span dir="ltr" className="text-yellow-400"><span className="inline">
                                      <SARSymbol /><span className="mx-0.5"></span>
                                    </span>38.75</span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white/10 p-3 rounded-lg flex justify-between">
                              <div>
                                <p className="text-sm">{t('ui.yourShare')}</p>
                                <p dir="ltr" className="font-bold">
                                  <span className="inline" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                                    <SARSymbol /><span className="mx-0.5"></span>38.75
                                  </span>
                                </p>
                              </div>
                              <Button 
                                size="sm" 
                                className="bg-primary hover:bg-primary/90 text-white rounded-lg"
                                onClick={() => window.location.href = '/checkout'}
                              >
                                {t('ui.continue')}
                              </Button>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="per-product" className="space-y-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                              <p className="text-sm mb-2">{t('ui.payForAnyItem')}</p>
                              <div className="flex flex-col gap-3 text-xs">
                                <div className="border border-white/10 p-2 rounded-lg">
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                      <div className="h-8 w-8 bg-amber-600 flex items-center justify-center rounded overflow-hidden">
                                      </div>
                                      <span>{t('food.classicBurger')} (<span className="inline" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                                      <SARSymbol /><span className="mx-0.5"></span>45.00
                                    </span>)</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-green-400">
                                      <CheckCircle className="h-3 w-3" />
                                      <span>{t('ui.paidBy')} {language === 'ar' ? 'عبدالعزيز' : 'Abdulaziz'}</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="border border-white/10 p-2 rounded-lg">
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                      <div className="h-8 w-8 bg-amber-700 flex items-center justify-center rounded overflow-hidden">
                                      </div>
                                      <span>{t('food.doubleCheeseBurger')} (<span className="inline" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                                      <SARSymbol /><span className="mx-0.5"></span>55.00
                                    </span>)</span>
                                    </div>
                                    <ApplePayButton />
                                  </div>
                                </div>

                                <div className="border border-white/10 p-2 rounded-lg">
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                      <div className="h-8 w-8 bg-yellow-500 flex items-center justify-center rounded overflow-hidden">
                                      </div>
                                      <span>{t('food.fries')} (<span className="inline" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                                      <SARSymbol /><span className="mx-0.5"></span>20.00
                                    </span>)</span>
                                    </div>
                                    <ApplePayButton />
                                  </div>
                                </div>
                                
                                <div className="border border-white/10 p-2 rounded-lg">
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                      <div className="h-8 w-8 bg-green-600 flex items-center justify-center rounded overflow-hidden">
                                      </div>
                                      <span>{t('food.shawarma')} (<span className="inline" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                                      <SARSymbol /><span className="mx-0.5"></span>35.00
                                    </span>)</span>
                                    </div>
                                    <ApplePayButton />
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-white/10 p-3 rounded-lg flex justify-between items-center">
                              <div>
                                <div className="text-xs text-white/60">{t('ui.totalPaid')}</div>
                                <div dir="ltr" className="font-bold" style={{ unicodeBidi: 'isolate' }}>
                                      <span className="inline" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                                        <SARSymbol /><span className="mx-0.5"></span>45.00
                                      </span> / 
                                      <span className="inline" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                                        <SARSymbol /><span className="mx-0.5"></span>155.00
                                      </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="text-xs text-green-400">
                                  {t('ui.autoRefundItems')}
                                </div>
                                <Button 
                                  size="sm" 
                                  className="bg-primary hover:bg-primary/90 text-white rounded-lg ml-4"
                                  onClick={() => window.location.href = '/checkout'}
                                >
                                  {t('ui.continue')}
                                </Button>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="custom" className="space-y-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                              <p className="text-sm mb-2">{t('ui.customizeAmounts')}</p>
                              <div className="flex flex-col gap-2 text-xs">
                                <div className="flex justify-between items-center">
                                  <span>{language === 'ar' ? `عبدالعزيز ${t('home.demo.you')}` : `Abdulaziz (You)`}</span>
                                  <div className="inline">
                                    <span className="inline">
                                      <SARSymbol /><span className="mx-0.5"></span>
                                    </span>
                                    <input 
                                      type="text" 
                                      dir="ltr"
                                      className="bg-black/30 border border-white/20 rounded w-16 px-2 py-1"
                                      defaultValue="65.00"
                                    />
                                    <div className="bg-green-500/20 text-green-400 px-1 py-0.5 rounded text-[10px] ml-2">{t('home.demo.paid')}</div>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span>{language === 'ar' ? 'شريف' : 'Sherif'}</span>
                                  <div className="inline">
                                    <span className="inline">
                                      <SARSymbol /><span className="mx-0.5"></span>
                                    </span>
                                    <input 
                                      type="text"
                                      dir="ltr"
                                      className="bg-black/30 border border-white/20 rounded w-16 px-2 py-1"
                                      defaultValue="45.00"
                                    />
                                    <div className="bg-green-500/20 text-green-400 px-1 py-0.5 rounded text-[10px] ml-2">{t('home.demo.paid')}</div>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span>{language === 'ar' ? 'عبدالله' : 'Abdullah'}</span>
                                  <div className="inline">
                                    <span className="inline">
                                      <SARSymbol /><span className="mx-0.5"></span>
                                    </span>
                                    <input 
                                      type="text"
                                      dir="ltr"
                                      className="bg-black/30 border border-white/20 rounded w-16 px-2 py-1"
                                      defaultValue="20.00"
                                    />
                                    <div className="bg-yellow-500/20 text-yellow-400 px-1 py-0.5 rounded text-[10px] ml-2">{t('home.demo.pending')}</div>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span>{language === 'ar' ? 'محمد' : 'Mohammed'}</span>
                                  <div className="inline">
                                    <span className="inline">
                                      <SARSymbol /><span className="mx-0.5"></span>
                                    </span>
                                    <input 
                                      type="text"
                                      dir="ltr"
                                      className="bg-black/30 border border-white/20 rounded w-16 px-2 py-1"
                                      defaultValue="10.00"
                                    />
                                    <div className="bg-yellow-500/20 text-yellow-400 px-1 py-0.5 rounded text-[10px] ml-2">{t('home.demo.pending')}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white/10 p-3 rounded-lg flex justify-between">
                              <div>
                                <p className="text-sm">{t('ui.yourShare')}</p>
                                <p dir="ltr" className="font-bold">
                                      <span className="inline" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                                        <SARSymbol /><span className="mx-0.5"></span>65.00
                                      </span>
                                </p>
                              </div>
                              <Button 
                                size="sm" 
                                className="bg-primary hover:bg-primary/90 text-white rounded-lg"
                                onClick={() => window.location.href = '/checkout'}
                              >
                                {t('ui.continue')}
                              </Button>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </TabsContent>
                      
                      <TabsContent value="full">
                        <div className="bg-white/10 p-3 rounded-lg flex justify-between">
                          <div>
                            <p className="text-sm">{t('checkout.total')}</p>
                            <p dir="ltr" className="font-bold">
                                      <span className="inline" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                                        <SARSymbol /><span className="mx-0.5"></span>155.00
                                      </span>
                            </p>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-primary hover:bg-primary/90 text-white rounded-lg"
                            onClick={() => window.location.href = '/checkout'}
                          >
                            {t('ui.continue')}
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <div className="bg-white/10 w-2 h-2 rounded-full" />
                  <div className="bg-white/30 w-2 h-2 rounded-full" />
                  <div className="bg-white/10 w-2 h-2 rounded-full" />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 bg-blue-500/30 backdrop-blur-sm p-3 rounded-xl transform rotate-6">
                <CreditCard className="h-5 w-5" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-500/30 backdrop-blur-sm p-3 rounded-xl transform -rotate-12">
                <Users className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
