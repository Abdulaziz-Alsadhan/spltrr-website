import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define language type
export type Language = 'en' | 'ar';

// Define translation object type
export type Translations = {
  [key: string]: {
    en: string;
    ar: string;
  };
};

// Create initial translations
const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    ar: 'الرئيسية'
  },
  'nav.about': {
    en: 'About Us',
    ar: 'عن الشركة'
  },
  'nav.partner': {
    en: 'Partner with Us',
    ar: 'الشراكات'
  },
  'nav.joinWaitlist': {
    en: 'Join Waitlist',
    ar: 'الانضمام للقائمة'
  },
  'nav.contactUs': {
    en: 'Contact Us',
    ar: 'تواصل معنا'
  },
  'nav.signIn': {
    en: 'Sign In',
    ar: 'تسجيل الدخول'
  },
  
  // Homepage
  'home.hero.title': {
    en: 'Smart Payments, Simplified Splitting',
    ar: 'المدفوعات الذكية، تقسيم سهل'
  },
  'home.hero.titleLine1': {
    en: 'Split Payments.',
    ar: 'تقسيم المدفوعات.'
  },
  'home.hero.titleLine2': {
    en: 'Simplified.',
    ar: 'بكل سهولة.'
  },
  'home.hero.subtitle': {
    en: 'Empower your checkout with split payment technology designed for businesses worldwide',
    ar: 'تمكين منصة الدفع الخاصة بك بتقنية تقسيم المدفوعات المصممة للشركات في جميع أنحاء العالم'
  },
  'home.hero.description': {
    en: 'SPLTRR makes group expenses fair, fast, and hassle-free. Whether it\'s friends splitting a dinner bill or roommates sharing utility costs.',
    ar: 'في سبلتر، سهّلنا عليك موضوع المصاريف الجماعية، بشكل عادل وبدون أي وجع راس. سواء كنت تقسم فاتورة عشاء مع أصحابك، أو تشارك إيجار شقة مع زميلك، أو حتى سفرة'
  },
  'home.joinWaitlist': {
    en: 'Join the Waitlist',
    ar: 'الانضمام للقائمة'
  },
  'home.sendReminder': {
    en: 'Send Reminder',
    ar: 'إرسال تذكير'
  },
  'home.getEarlyAccess': {
    en: 'Get Early Access',
    ar: 'الحصول على وصول مبكر'
  },
  'home.howItWorks.title': {
    en: 'How SPLTRR Works',
    ar: 'كيف يشتغل سبلتر؟'
  },
  'home.howItWorks.subtitle': {
    en: 'Split any payment in three simple steps. No more chasing friends or doing math.',
    ar: 'قسّم أي دفعة في ثلاث خطوات بسيطة.'
  },
  'home.step1.title': {
    en: 'Choose SPLTRR',
    ar: 'اختر سبلتر'
  },
  'home.step1.description': {
    en: 'Select SPLTRR from the merchant checkout page.',
    ar: 'اختر سبلتر من صفحة الدفع لدى التاجر.'
  },
  'home.step2.title': {
    en: 'Invite Your Group',
    ar: 'ادعُ مجموعتك'
  },
  'home.step2.description': {
    en: 'Add friends via phone number or share a link.',
    ar: 'أضف الأصدقاء عبر رقم الهاتف أو شارك رابطًا.'
  },
  'home.step3.title': {
    en: 'Pay Together',
    ar: 'ادفعوا مع بعض'
  },
  'home.step3.description': {
    en: 'Everyone pays their share. Done!',
    ar: 'الكل يدفع قطته, وانتهينا!'
  },
  'home.howItWorks.step1.title': {
    en: 'Choose SPLTRR',
    ar: 'اختر سبلتر'
  },
  'home.howItWorks.step1.description': {
    en: 'Select SPLTRR from the merchant checkout page.',
    ar: 'اختر سبلتر من صفحة الدفع لدى التاجر.'
  },
  'home.howItWorks.step2.title': {
    en: 'Invite Your Group',
    ar: 'ادعُ مجموعتك'
  },
  'home.howItWorks.step2.description': {
    en: 'Add friends via phone number or share a link.',
    ar: 'أضف الأصدقاء عبر رقم الهاتف أو شارك رابطًا.'
  },
  'home.howItWorks.step3.title': {
    en: 'Pay Together',
    ar: 'ادفعوا مع بعض'
  },
  'home.howItWorks.step3.description': {
    en: 'Everyone pays their share. Done!',
    ar: 'الكل يدفع قطته, وانتهينا!'
  },
  'home.demo.sendReminder': {
    en: 'Send Reminder',
    ar: 'إرسال تذكير'
  },
  'home.useCases.title': {
    en: 'For Every Shared Expense',
    ar: 'لكل نفقة مشتركة'
  },
  'home.useCases.subtitle': {
    en: 'SPLTRR works with any group payment scenario, making cost-sharing simple.',
    ar: 'تعمل سبلتر مع أي سيناريو دفع جماعي، مما يجعل مشاركة التكاليف أمرًا بسيطًا.'
  },
  'useCase.dinner.title': {
    en: 'Dinner with Friends',
    ar: 'عشاء مع الأصدقاء'
  },
  'useCase.dinner.description': {
    en: 'Split the bill instantly, even with different items.',
    ar: 'تقسيم الفاتورة فورًا، حتى مع وجود عناصر مختلفة.'
  },
  'useCase.vacation.title': {
    en: 'Shared vacation',
    ar: 'إجازة مشتركة'
  },
  'useCase.vacation.description': {
    en: 'Manage group expenses for trips without the headache.',
    ar: 'إدارة نفقات المجموعة للرحلات بدون صداع.'
  },
  'useCase.housemates.title': {
    en: 'Housemates',
    ar: 'زملاء السكن'
  },
  'useCase.housemates.description': {
    en: 'Split rent, utilities, and household purchases painlessly.',
    ar: 'تقسيم الإيجار والمرافق ومشتريات المنزل بدون ألم.'
  },
  'useCase.gifts.title': {
    en: 'Group gifts',
    ar: 'هدايا جماعية'
  },
  'useCase.gifts.description': {
    en: 'Collect money for a present without awkward reminders.',
    ar: 'جمع المال للهدية بدون تذكيرات محرجة.'
  },
  'useCase.events.title': {
    en: 'Event tickets',
    ar: 'تذاكر الفعاليات'
  },
  'useCase.events.description': {
    en: 'Buy tickets together and split the cost automatically.',
    ar: 'شراء التذاكر معًا وتقسيم التكلفة تلقائيًا.'
  },
  'home.features.title': {
    en: 'Why Choose SPLTRR',
    ar: 'ليه سبلتر؟'
  },
  'home.features.subtitle': {
    en: 'Features designed to make group payments seamless and stress-free.',
    ar: 'ميزات مصممة لجعل المدفوعات الجماعية سلسة وخالية من التوتر.'
  },
  'home.merchants.badge': {
    en: 'FOR BUSINESSES',
    ar: 'للشركات'
  },
  'home.merchants.title': {
    en: 'Boost Conversion with Group Payments',
    ar: 'عزز التحويل بالمدفوعات الجماعية'
  },
  'home.merchants.description': {
    en: 'Integrate SPLTRR to let customers split payments at checkout. Reduce cart abandonment and grow your conversion rates.',
    ar: 'أربط مع سبلتر للسماح لعملائك بتقسيم المدفوعات عند الدفع , وقلل من عربات التسوق المتروكة وزيادة معدل التحويل.'
  },
  'home.merchants.feature1': {
    en: 'Simple integration with popular e-commerce platforms',
    ar: 'تكامل بسيط مع منصات التجارة الإلكترونية'
  },
  'home.merchants.feature2': {
    en: 'Reduce cart abandonment for group purchases',
    ar: 'تقليل نسبة عربة التسوق المهجورة للمشتريات الجماعية'
  },
  'home.merchants.feature2.description': {
    en: 'When friends can split payments directly at checkout, large purchases become more accessible',
    ar: 'عندما يتمكن الأصدقاء من تقسيم المدفوعات مباشرة عند الدفع، تصبح المشتريات الكبيرة أكثر سهولة'
  },
  'home.merchants.feature3': {
    en: 'Various splitting options for all customers',
    ar: 'خيارات تقسيم متنوعة تلبي احتياجات جميع عملائك'
  },
  'home.merchants.feature3.description': {
    en: 'Split by percentage, amount, or per-item to accommodate different group dynamics and preferences',
    ar: 'تقسيم بالنسبة المئوية أو المبلغ أو لكل عنصر لاستيعاب ديناميكيات وتفضيلات المجموعة المختلفة'
  },
  'home.merchants.feature4': {
    en: 'Dashboard with detailed analytics and insights',
    ar: 'لوحة تحكم بتحليلات ورؤى مفصلة'
  },
  'home.merchants.cta': {
    en: 'Integrate SPLTRR with Your Checkout',
    ar: 'أربط سبلتر بمنصة الدفع الخاصة بك'
  },
  'home.demo.dinner': {
    en: 'Dinner with Friends',
    ar: 'عشاء مع الأصدقاء'
  },
  'home.demo.people': {
    en: 'people • Total:',
    ar: 'أشخاص • الإجمالي:'
  },
  'home.demo.autoRefund': {
    en: '* Automatic refund to all paid members if all payments aren\'t completed within the settlement window',
    ar: '* استرداد تلقائي لجميع الأعضاء الذين دفعوا إذا لم تكتمل جميع المدفوعات ضمن نافذة التسوية'
  },
  'home.demo.you': {
    en: '(You)',
    ar: '(أنت)'
  },
  'home.demo.paid': {
    en: 'Paid',
    ar: 'مدفوع'
  },
  'home.demo.pending': {
    en: 'Pending',
    ar: 'قيد الانتظار'
  },
  'home.demo.totalCollected': {
    en: 'Total Collected',
    ar: 'إجمالي المُحصل'
  },
  'home.demo.totalInvoice': {
    en: 'Total Invoice',
    ar: 'إجمالي الفحص'
  },
  
  // Checkout related translations
  'checkout.title': {
    en: 'Checkout',
    ar: 'الدفع'
  },
  'checkout.step': {
    en: 'Step',
    ar: 'خطوة'
  },
  'checkout.of': {
    en: 'of',
    ar: 'من'
  },
  'checkout.autoRefund': {
    en: 'Automatic refund if not completed in time',
    ar: 'استرداد تلقائي إذا لم يكتمل في الوقت المحدد'
  },
  'checkout.total': {
    en: 'Total',
    ar: 'الإجمالي'
  },
  'checkout.paymentMethod': {
    en: 'Payment method',
    ar: 'طريقة الدفع'
  },
  'checkout.splitPayment': {
    en: 'Split Payment',
    ar: 'دفع مشترك'
  },
  'checkout.payInFull': {
    en: 'Pay in Full',
    ar: 'دفع كامل'
  },
  'checkout.equally': {
    en: 'Equally',
    ar: 'بالتساوي'
  },
  'checkout.perProduct': {
    en: 'Per Product',
    ar: 'لكل منتج'
  },
  'checkout.customized': {
    en: 'Customized',
    ar: 'مخصص'
  },
  // Food items
  'food.classicBurger': {
    en: 'Classic Burger',
    ar: 'برجر كلاسيك'
  },
  'food.doubleCheeseBurger': {
    en: 'Double Cheese Burger',
    ar: 'برجر دبل تشيز'
  },
  'food.fries': {
    en: 'Fries (Large)',
    ar: 'بطاطس (كبير)'
  },
  'food.shawarma': {
    en: 'Shawarma',
    ar: 'شاورما'
  },
  // UI elements for split payment demo
  'ui.splitEquallyBetween': {
    en: 'Split equally between:',
    ar: 'تقسيم بالتساوي بين:'
  },
  'ui.payForAnyItem': {
    en: 'Pay for any item:',
    ar: 'دفع مقابل أي عنصر:'
  },
  'ui.yourShare': {
    en: 'Your share',
    ar: 'حصتك'
  },
  'ui.paidBy': {
    en: 'Paid by',
    ar: 'دفع بواسطة'
  },
  'ui.totalPaid': {
    en: 'Total paid',
    ar: 'إجمالي المدفوع'
  },
  'ui.autoRefundItems': {
    en: 'Automatic refund if all items aren\'t paid within time limit',
    ar: 'استرداد تلقائي إذا لم يتم دفع جميع العناصر ضمن الوقت المحدد'
  },
  'ui.autoRefundIfIncomplete': {
    en: 'auto-refund if incomplete',
    ar: 'استرداد تلقائي إذا لم يكتمل'
  },
  'ui.timeRemaining': {
    en: 'Time remaining',
    ar: 'الوقت المتبقي'
  },
  'ui.continue': {
    en: 'Continue',
    ar: 'متابعة'
  },
  'ui.customizeAmounts': {
    en: 'Customize amounts:',
    ar: 'تخصيص المبالغ:'
  },
  'home.faq.title': {
    en: 'Frequently Asked Questions',
    ar: 'الأسئلة الشائعة'
  },
  'home.faq.subtitle': {
    en: 'Everything you need to know about SPLTRR.',
    ar: 'كل ما تحتاج لمعرفته عن سبلتر.'
  },
  'home.cta.title': {
    en: 'Group expenses don\'t have to be painful.',
    ar: ''
  },
  'home.cta.subtitle': {
    en: 'Join thousands of users who\'ve simplified their shared payments with SPLTRR.',
    ar: ''
  },
  'home.cta.button': {
    en: 'Get Early Access',
    ar: ''
  },
  
  // About
  'about.title': {
    en: 'About SPLTRR',
    ar: 'عن سبلتر'
  },
  'about.subtitle': {
    en: 'Enhancing checkout experiences for businesses around the world',
    ar: 'تحسين تجارب الدفع للشركات في جميع أنحاء العالم'
  },
  'about.vision.title': {
    en: 'Our Vision',
    ar: 'رؤيتنا'
  },
  'about.vision.content': {
    en: 'To transform e-commerce by making group payments simple, secure, and accessible for businesses worldwide.',
    ar: 'تحويل التجارة الإلكترونية من خلال جعل المدفوعات الجماعية بسيطة وآمنة ومتاحة للشركات في جميع أنحاء العالم.'
  },
  'about.mission.title': {
    en: 'Our Mission',
    ar: 'مهمتنا'
  },
  'about.mission.content': {
    en: 'To empower businesses with innovative technology that boosts sales through frictionless group payments while delivering an exceptional customer experience.',
    ar: 'تمكين الشركات بتقنية مبتكرة تعزز المبيعات من خلال المدفوعات الجماعية السلسة مع تقديم تجربة عملاء استثنائية.'
  },
  'about.benefits.title': {
    en: 'Business Benefits',
    ar: 'فوائد الأعمال'
  },
  'about.benefits.protection.title': {
    en: 'Smart Payment Protection',
    ar: 'حماية ذكية للمدفوعات'
  },
  'about.benefits.protection.description': {
    en: 'Our system ensures merchants always receive full payment, with automatic refunds to protect your customers if the group payment process isn\'t completed.',
    ar: 'يضمن نظامنا حصول التجار دائمًا على الدفع الكامل، مع استرداد تلقائي لحماية عملائك إذا لم تكتمل عملية الدفع الجماعي.'
  },
  'about.benefits.conversions.title': {
    en: 'Increased Conversions',
    ar: 'زيادة معدلات التحويل'
  },
  'about.benefits.conversions.description': {
    en: 'Group payment options can help reduce cart abandonment for higher-value products and services by making them more accessible to customers.',
    ar: 'يمكن لخيارات الدفع الجماعي أن تساعد في تقليل هجر عربات التسوق للمنتجات والخدمات ذات القيمة العالية من خلال جعلها أكثر سهولة للعملاء.'
  },
  'about.benefits.integration.title': {
    en: 'Easy Integration',
    ar: 'تكامل سهل'
  },
  'about.benefits.integration.description': {
    en: 'Our API seamlessly integrates with your existing checkout system, requiring minimal development resources.',
    ar: 'يتكامل واجهة برمجة التطبيقات (API) الخاص بنا بسلاسة مع نظام الدفع الحالي لديك، مما يتطلب موارد تطوير بسيطة.'
  },
  'about.cta.title': {
    en: 'Ready to Transform Your Checkout Experience?',
    ar: 'هل أنت جاهز لتحويل تجربة الدفع الخاصة بك؟'
  },
  'about.contactTeam': {
    en: 'Contact Us',
    ar: 'تواصل معنا'
  },
  'about.cta.animated.title': {
    en: 'Ready to Revolutionize Your Checkout Experience?',
    ar: 'هل أنت مستعد لتطوير تجربة الدفع لديك؟'
  },
  'about.cta.animated.description': {
    en: 'Join innovative businesses around the world that are transforming how groups pay online. SPLTRR\'s seamless integration means you could be up and running in less than a day.',
    ar: 'انضم إلى الشركات المبتكرة حول العالم التي تغير طريقة دفع المجموعات أون لاين. التكامل السلس مع سبلتر يعني أنه يمكنك البدء في أقل من يوم واحد.'
  },
  'about.cta.explore': {
    en: 'Explore Integration',
    ar: 'استكشف التكامل'
  },
  
  // Partner
  'partner.title': {
    en: 'Integrate SPLTRR with Your Checkout',
    ar: 'أربط سبلتر بمنصة الدفع الخاصة بك'
  },
  'partner.subtitle': {
    en: 'Boost your sales by enabling seamless group payments on your e-commerce platform',
    ar: 'عزز مبيعاتك من خلال تمكين المدفوعات الجماعية السلسة على منصة التجارة الإلكترونية الخاصة بك'
  },
  'partner.contactUs': {
    en: 'Contact Us',
    ar: 'تواصل معنا'
  },
  'partner.benefits.title': {
    en: 'Supercharge Your Checkout Experience',
    ar: 'تعزيز تجربة الدفع الخاصة بك'
  },
  'partner.benefits.cart.title': {
    en: 'Reduce Cart Abandonment',
    ar: 'تقليل هجر عربات التسوق'
  },
  'partner.benefits.cart.description': {
    en: 'When friends can split payments directly at checkout, large purchases are no longer barriers. Group payment options can help reduce cart abandonment for high-value products.',
    ar: 'عندما يتمكن الأصدقاء من تقسيم المدفوعات مباشرة عند الدفع، لن تكون المشتريات الكبيرة عوائق بعد الآن. خيارات الدفع الجماعي تساعد في تقليل هجر عربات التسوق للمنتجات ذات القيمة العالية.'
  },
  'partner.benefits.aov.title': {
    en: 'Increase Average Order Value',
    ar: 'زيادة متوسط قيمة الطلب'
  },
  'partner.benefits.aov.description': {
    en: 'When customers can split costs, they spend more. Group payment options can potentially increase average order values by making higher-priced items more accessible.',
    ar: 'عندما يتمكن العملاء من تقسيم التكاليف، فإنهم ينفقون أكثر. خيارات الدفع الجماعي يمكن أن تزيد من متوسط قيم الطلبات من خلال جعل المنتجات الأعلى سعراً أكثر سهولة.'
  },
  'partner.benefits.integration.title': {
    en: 'Easy Integration',
    ar: 'تكامل سهل'
  },
  'partner.benefits.integration.description': {
    en: 'Our solution seamlessly integrates with your existing checkout flow. Implementation is simple, requiring minimal development resources with comprehensive documentation.',
    ar: 'يتكامل حلنا بسلاسة مع تدفق الدفع الحالي لديك. التنفيذ بسيط، ويتطلب الحد الأدنى من موارد التطوير مع وثائق شاملة.'
  },
  'partner.benefits.risk.title': {
    en: 'Zero Financial Risk',
    ar: 'بدون مخاطر مالية'
  },
  'partner.benefits.risk.description': {
    en: 'With our smart settlement process and automatic refunds system, your business always receives the full payment with no chargeback risks related to group payment disputes.',
    ar: 'مع عملية التسوية الذكية ونظام الاسترداد التلقائي، تتلقى شركتك دائمًا الدفع الكامل دون مخاطر استرداد الرسوم المتعلقة بنزاعات الدفع الجماعي.'
  },
  'partner.showcase.title': {
    en: 'Perfect For Your Business',
    ar: 'مثالي لعملك'
  },
  'partner.showcase.subtitle': {
    en: 'SPLTRR integrates seamlessly with your checkout process, providing a native experience for your customers',
    ar: 'تتكامل سبلتر بسلاسة مع عملية الدفع الخاصة بك، مما يوفر تجربة أصلية لعملائك'
  },
  'partner.showcase.ecommerce.title': {
    en: 'E-commerce',
    ar: 'التجارة الإلكترونية'
  },
  'partner.showcase.ecommerce.description': {
    en: 'Enable group purchases for high-value items, increasing conversions for premium products.',
    ar: 'تمكين المشتريات الجماعية للعناصر ذات القيمة العالية، وزيادة معدلات التحويل للمنتجات المميزة.'
  },
  'partner.showcase.travel.title': {
    en: 'Travel & Events',
    ar: 'السفر والفعاليات'
  },
  'partner.showcase.travel.description': {
    en: 'Simplify group bookings with our payment splitting, reducing cancellations and no-shows.',
    ar: 'تبسيط الحجوزات الجماعية باستخدام تقسيم المدفوعات، وتقليل عمليات الإلغاء وعدم الحضور.'
  },
  'partner.showcase.food.title': {
    en: 'Food Delivery',
    ar: 'توصيل الطعام'
  },
  'partner.showcase.food.description': {
    en: 'Increase order size by removing the friction of one person paying for the entire group.',
    ar: 'زيادة حجم الطلب من خلال إزالة الاحتكاك الناتج عن دفع شخص واحد للمجموعة بأكملها.'
  },
  'partner.learnMore': {
    en: 'Learn more',
    ar: 'معرفة المزيد'
  },
  'partner.howItWorks.title': {
    en: 'How It Works',
    ar: 'كيف يعمل'
  },
  'partner.howItWorks.splitPayment': {
    en: 'Split Payment',
    ar: 'دفع مشترك'
  },
  'partner.howItWorks.settlementWindow': {
    en: 'Settlement Window',
    ar: 'نافذة التسوية'
  },
  'partner.howItWorks.step1.title': {
    en: '1. Checkout Integration',
    ar: '١. تكامل الدفع'
  },
  'partner.howItWorks.step1.description': {
    en: 'Add the SPLTRR button to your checkout page with a simple integration. The process takes less than a day with our comprehensive documentation.',
    ar: 'أضف زر سبلتر إلى صفحة الدفع الخاصة بك من خلال تكامل بسيط. تستغرق العملية أقل من يوم واحد مع وثائقنا الشاملة.'
  },
  'partner.howItWorks.step2.title': {
    en: '2. Seamless User Experience',
    ar: '٢. تجربة مستخدم سلسة'
  },
  'partner.howItWorks.step2.description': {
    en: 'Customers click the SPLTRR button, enter their friends\' contact info, and we handle the rest. All parties receive payment links with a settlement window for group coordination.',
    ar: 'ينقر العملاء على زر سبلتر، ويدخلون معلومات الاتصال بأصدقائهم، ونحن نتولى الباقي. تتلقى جميع الأطراف روابط الدفع مع نافذة تسوية للتنسيق الجماعي.'
  },
  'partner.cta.title': {
    en: 'Ready to Transform Your Checkout?',
    ar: 'مستعد لتحويل الدفع الخاص بك؟'
  },
  'partner.cta.description': {
    en: 'Join leading merchants who are seeing higher conversion rates and larger order values with SPLTRR\'s checkout integration.',
    ar: 'انضم إلى التجار الرائدين الذين يشهدون معدلات تحويل أعلى وقيم طلبات أكبر مع تكامل الدفع من سبلتر.'
  },
  
  // Footer
  'footer.cta.title': {
    en: '',
    ar: ''
  },
  'footer.cta.description': {
    en: 'Join our waitlist today to be among the first businesses to integrate SPLTRR\'s group payment technology into your checkout experience.',
    ar: 'انضم إلى قائمة الانتظار اليوم لتكون من أوائل الشركات التي تربط تقنية الدفع الجماعي من سبلتر في تجربة الدفع لديك.'
  },
  'footer.sections.platform': {
    en: 'Platform',
    ar: 'المنصة'
  },
  'footer.sections.company': {
    en: 'Company',
    ar: 'الشركة'
  },
  'footer.sections.resources': {
    en: 'Resources',
    ar: 'المصادر'
  },
  'footer.links.home': {
    en: 'Home',
    ar: 'الرئيسية'
  },
  'footer.links.caseStudies': {
    en: 'Case Studies',
    ar: 'دراسات الحالة'
  },
  'footer.links.features': {
    en: 'Features',
    ar: 'المميزات'
  },
  'footer.links.integration': {
    en: 'Integration',
    ar: 'التكامل'
  },
  'footer.links.contact': {
    en: 'Contact',
    ar: 'التواصل'
  },
  'footer.links.aboutUs': {
    en: 'About Us',
    ar: 'عن الشركة'
  },
  'footer.links.partnerWithUs': {
    en: 'Partner with Us',
    ar: 'الشراكات'
  },
  'footer.links.documentation': {
    en: 'Documentation',
    ar: 'المستندات'
  },
  'footer.links.apiReference': {
    en: 'Integration Reference',
    ar: 'مرجع التكامل'
  },
  'footer.links.developerGuide': {
    en: 'Developer Guide',
    ar: 'دليل المطور'
  },
  'footer.links.status': {
    en: 'Status',
    ar: 'الحالة'
  },
  'footer.copyright': {
    en: 'All rights reserved.',
    ar: 'جميع الحقوق محفوظة'
  },
  'footer.legal.privacyPolicy': {
    en: 'Privacy Policy',
    ar: 'سياسة الخصوصية'
  },
  'footer.legal.termsOfService': {
    en: 'Terms of Service',
    ar: 'شروط الخدمة'
  },
  'footer.legal.cookiePolicy': {
    en: 'Cookie Policy',
    ar: 'سياسة ملفات تعريف الارتباط'
  },
  'footer.companyDescription': {
    en: 'A next-gen payment platform designed to simplify group payments by integrating directly into merchant checkout systems to boost conversions and increase sales.',
    ar: 'منصة دفع متطورة مصممة لتبسيط المدفوعات الجماعية عبر التكامل المباشر مع أنظمة الدفع للتجار لزيادة معدلات التحويل والمبيعات.'
  },
  'merchant.plugAndPlay.title': {
    en: 'Plug & Play for Merchants',
    ar: 'جاهز للاستخدام الفوري للتجار'
  },
  'merchant.plugAndPlay.description': {
    en: 'Easy integration with popular e-commerce platforms and custom checkouts.',
    ar: 'تكامل سهل مع منصات التجارة الإلكترونية الشائعة وصفحات الدفع المخصصة'
  },
  'merchant.secure.title': {
    en: 'Secure & Safe',
    ar: 'موثوق وآمن'
  },
  'merchant.secure.description': {
    en: 'Bank-level encryption and security for all your transactions',
    ar: 'تشفير وأمان بمستوى البنوك لجميع معاملاتك'
  },
  
  'merchant.section.title': {
    en: 'Merchant Benefits',
    ar: 'فوائد التجار'
  },
  
  'contact.faq.merchants.integration': {
    en: 'How can I integrate SPLTRR with my online store?',
    ar: 'كيف يمكنني ربط سبلتر بمتجري الإلكتروني؟'
  },
  'contact.faq.merchants.integration.answer': {
    en: 'SPLTRR offers easy integration with popular e-commerce platforms like Shopify and WooCommerce. We also provide options for custom checkout integration with detailed documentation.',
    ar: 'توفر سبلتر تكاملًا سهلاً مع منصات التجارة الإلكترونية الشائعة مثل Shopify و WooCommerce. كما نوفر خيارات للتكامل المخصص مع وثائق مفصلة.'
  },
  
  'contact.faq.merchants.benefits': {
    en: 'What benefits does SPLTRR offer merchants?',
    ar: 'ما هي الفوائد التي تقدمها سبلتر للتجار؟'
  },
  'contact.faq.merchants.benefits.answer': {
    en: 'By offering split payments at checkout, merchants can reduce cart abandonment, increase average order value, and attract group purchasers. Group payment options can make high-value products more accessible to customers.',
    ar: 'من خلال تقديم مدفوعات مقسمة عند الدفع، يمكن للتجار تقليل التخلي عن سلة التسوق، وزيادة متوسط قيمة الطلب، وجذب المشترين الجماعيين. خيارات الدفع الجماعي تجعل المنتجات ذات القيمة العالية في متناول العملاء بشكل أكبر.'
  },
  
  'contact.faq.merchants.settlements': {
    en: 'How do settlements work for merchants?',
    ar: 'كيف تعمل التسويات للتجار؟'
  },
  'contact.faq.merchants.settlements.answer': {
    en: 'Merchants receive the full payment once all participants have completed their shares. For added security, we also offer a guaranteed payment option where SPLTRR ensures you receive the full amount regardless of individual participation.',
    ar: 'يتلقى التجار الدفعة الكاملة بمجرد أن يكمل جميع المشاركين حصصهم. لمزيد من الأمان، نقدم أيضًا خيار الدفع المضمون حيث تضمن سبلتر حصولك على المبلغ الكامل بغض النظر عن المشاركة الفردية.'
  },
  
  // Contact Form Popup
  'contact.form.title': {
    en: 'Contact Us',
    ar: 'تواصل معنا'
  },
  'contact.form.subtitle': {
    en: 'Fill out the form below and we\'ll get back to you as soon as possible.',
    ar: 'املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن.'
  },
  'contact.form.name': {
    en: 'Name',
    ar: 'الاسم'
  },
  'contact.form.namePlaceholder': {
    en: 'Enter your name',
    ar: 'أدخل اسمك'
  },
  'contact.form.email': {
    en: 'Email',
    ar: 'البريد الإلكتروني'
  },
  'contact.form.emailPlaceholder': {
    en: 'Enter your email address',
    ar: 'أدخل عنوان بريدك الإلكتروني'
  },
  'contact.form.message': {
    en: 'Message',
    ar: 'الرسالة'
  },
  'contact.form.messagePlaceholder': {
    en: 'Enter your message',
    ar: 'أدخل رسالتك'
  },
  'contact.form.send': {
    en: 'Send Message',
    ar: 'إرسال الرسالة'
  },
  'contact.form.sending': {
    en: 'Sending...',
    ar: 'جاري الإرسال...'
  },
  'contact.form.cancel': {
    en: 'Cancel',
    ar: 'إلغاء'
  },
  'contact.form.success': {
    en: 'Message Sent',
    ar: 'تم إرسال الرسالة'
  },
  'contact.form.successMessage': {
    en: 'Thank you for your message. We\'ll get back to you soon.',
    ar: 'شكرا لرسالتك. سنعاود الاتصال بك قريبا.'
  },
  'contact.form.error': {
    en: 'Error',
    ar: 'خطأ'
  },
  'contact.form.errorMessage': {
    en: 'There was a problem sending your message. Please try again.',
    ar: 'حدثت مشكلة في إرسال رسالتك. يرجى المحاولة مرة أخرى.'
  },
  'contact.form.warning': {
    en: 'Message Sent (Alternate Method)',
    ar: 'تم إرسال الرسالة (طريقة بديلة)'
  },
  'contact.form.warningMessage': {
    en: 'We used an alternate method to send your message. Please confirm that your email client opened correctly.',
    ar: 'استخدمنا طريقة بديلة لإرسال رسالتك. يرجى التأكد من فتح برنامج البريد الإلكتروني الخاص بك بشكل صحيح.'
  },
  'contact.form.emailClientError': {
    en: 'There was an issue opening your email client. We\'ll try an alternate method.',
    ar: 'حدثت مشكلة في فتح عميل البريد الإلكتروني الخاص بك. سنحاول طريقة بديلة.'
  },
  'contact.form.subject': {
    en: 'Subject',
    ar: 'الموضوع'
  },
  'contact.form.subjectPlaceholder': {
    en: 'Select a subject',
    ar: 'اختر موضوعًا'
  },
  'contact.form.subject.general': {
    en: 'General Inquiry',
    ar: 'استفسار عام'
  },
  'contact.form.subject.integration': {
    en: 'Integration Support',
    ar: 'دعم التكامل'
  },
  'contact.form.subject.partnership': {
    en: 'Partnership Opportunities',
    ar: 'فرص الشراكة'
  },
  'contact.form.subject.feedback': {
    en: 'Feedback',
    ar: 'تعليقات وآراء'
  },
};

// Create language context
type LanguageContextType = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get the language from localStorage
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'en';
  });

  // Effect to handle RTL and language updates
  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Add or remove the RTL direction from the html tag
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
      document.documentElement.classList.remove('rtl');
    }
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};