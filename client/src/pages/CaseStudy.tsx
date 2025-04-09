import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Share2, Heart, Clock, Eye, Star, Calendar, ChevronRight, CreditCard, Users, CheckCircle, Download } from 'lucide-react';
import { Link } from 'wouter';
import { formatDistanceToNow } from 'date-fns';
import { motion } from 'framer-motion';

// Define a case study type for the payment platform
interface CaseStudyData {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  companyName: string;
  companyLogo: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    title: string;
    value: string;
    unit: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  createdAt: string;
}

export default function CaseStudy() {
  const [, params] = useRoute('/case-study/:slug');
  const slug = params?.slug;

  // For demonstration, we're creating a mock case study
  // In a real application, this data would come from an API
  const caseStudy: CaseStudyData = {
    id: 1,
    slug: 'ecommerce-checkout-optimization',
    title: 'How SPLTRR Helped FashionBrand Increase Checkout Conversion by 27%',
    description: 'FashionBrand struggled with cart abandonment on high-value orders involving multiple people. By implementing SPLTRR\'s group payment solution, they were able to significantly increase conversion rates and boost average order value.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    companyName: 'FashionBrand',
    companyLogo: 'https://via.placeholder.com/150',
    industry: 'E-commerce',
    challenge: 'FashionBrand, a leading online fashion retailer, faced a significant challenge with cart abandonment. Data analysis revealed that 34% of abandonment occurred on orders above $200, particularly when customers were buying gifts or group purchases. Customers were reluctant to front the entire cost for a group order and informal payment collection was proving cumbersome.',
    solution: 'SPLTRR integrated its split payment technology into FashionBrand\'s checkout process, allowing customers to divide the payment among multiple people seamlessly. The implementation included a "split payment" option that appears at checkout, enabling the primary customer to invite others to contribute their share. The solution required minimal code changes and was launched within two weeks.',
    results: [
      {
        title: '27',
        value: '27',
        unit: '%',
        description: 'Increase in checkout conversion for orders over $200'
      },
      {
        title: '18',
        value: '18',
        unit: '%',
        description: 'Increase in average order value'
      },
      {
        title: '43',
        value: '43',
        unit: '%',
        description: 'Increase in gift purchases from groups'
      }
    ],
    testimonial: {
      quote: 'SPLTRR has transformed our group purchasing experience. What used to be a friction point is now a competitive advantage. The integration was smooth and the results speak for themselves.',
      author: 'Sarah Johnson',
      role: 'Chief Digital Officer, FashionBrand'
    },
    createdAt: '2024-03-15T14:22:00Z'
  };

  if (!slug) {
    return <CaseStudySkeleton />;
  }

  const formattedDate = caseStudy.createdAt 
    ? formatDistanceToNow(new Date(caseStudy.createdAt), { addSuffix: true })
    : '';

  return (
    <div className="pt-16 pb-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-primary/20 text-white">
        <div className="container relative px-4 py-24 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <Button variant="outline" className="mb-8 rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full text-sm">
                Case Study
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 px-3 py-1 rounded-full text-sm">
                {caseStudy.industry}
              </Badge>
              <div className="flex items-center text-white/70 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {formattedDate}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{caseStudy.title}</h1>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 mt-8">
              <Avatar className="h-16 w-16 border-2 border-white/20 bg-white">
                <AvatarImage src={caseStudy.companyLogo} alt={caseStudy.companyName} />
                <AvatarFallback className="bg-primary/20 text-primary-foreground">
                  {caseStudy.companyName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-xl">{caseStudy.companyName}</p>
                <div className="flex gap-4 mt-3">
                  <Button size="sm" variant="outline" className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white">
                    <Share2 className="mr-2 h-4 w-4" /> Share
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white">
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {caseStudy.results.map((result, index) => (
              <Card key={index} className="border-2 shadow-md overflow-hidden">
                <CardContent className="pt-6 pb-4 px-6 text-center">
                  <p className="text-5xl font-bold text-primary mb-2">{result.value}{result.unit}</p>
                  <p className="text-lg font-medium">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Overview */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Challenge</h3>
              <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Solution</h3>
              <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
            </div>
          </div>
          
          {/* Testimonial */}
          {caseStudy.testimonial && (
            <Card className="border-2 border-primary/20 bg-primary/5 shadow-md overflow-hidden mb-16">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="text-4xl text-primary">"</div>
                  <div>
                    <p className="text-xl italic mb-6">{caseStudy.testimonial.quote}</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4 border border-primary/20">
                        <AvatarFallback className="bg-primary/20 text-primary">
                          {caseStudy.testimonial.author.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{caseStudy.testimonial.author}</p>
                        <p className="text-sm text-gray-600">{caseStudy.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Implementation */}
          <Card className="border-2 shadow-md overflow-hidden mb-16">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Implementation</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Seamless Checkout Integration</h4>
                    <p className="text-gray-700">The SPLTRR payment option was integrated directly into the existing checkout flow, allowing for a non-disruptive user experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Group Invitation System</h4>
                    <p className="text-gray-700">A simple interface for inviting others to contribute, with automatic reminders and payment tracking.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Secured Payment Processing</h4>
                    <p className="text-gray-700">All transactions are processed through SPLTRR's secure payment gateway, ensuring PCI compliance and data protection.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to implement SPLTRR in your business?</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Boost your conversion rates and streamline group payments with our simple integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  Request a Demo
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="rounded-full">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CaseStudySkeleton() {
  return (
    <div className="pt-16 pb-24">
      {/* Hero Section Skeleton */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black z-0"></div>
        
        <div className="container relative z-20 px-4 py-24 max-w-5xl mx-auto">
          <div className="h-10 w-36 bg-gray-700 rounded-full mb-8"></div>
          
          <div className="h-8 w-32 bg-gray-700 rounded-full mb-6"></div>
          
          <div className="h-16 w-3/4 bg-gray-700 rounded-xl mb-6"></div>
          
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 rounded-full bg-gray-700 mr-4"></div>
            <div>
              <div className="h-6 w-32 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-24 bg-gray-700 rounded"></div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
            <div className="h-10 w-24 bg-gray-700 rounded-full"></div>
            <div className="h-10 w-24 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </section>
      
      {/* Content Section Skeleton */}
      <section className="py-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-2">
                  <div className="h-5 w-5 rounded-full bg-gray-300 mr-2"></div>
                  <div className="h-5 w-20 bg-gray-300 rounded"></div>
                </div>
                <div className="h-8 w-20 bg-gray-300 rounded mb-1"></div>
                <div className="h-4 w-32 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
          
          <div className="border-2 border-gray-200 rounded-xl p-8 mb-12">
            <div className="h-8 w-48 bg-gray-300 rounded mb-6"></div>
            <div className="space-y-4">
              <div className="w-full h-4 bg-gray-300 rounded"></div>
              <div className="w-full h-4 bg-gray-300 rounded"></div>
              <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
              <div className="w-full h-4 bg-gray-300 rounded"></div>
              <div className="w-5/6 h-4 bg-gray-300 rounded"></div>
              <div className="w-full h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <div className="h-8 w-48 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                  <div className="aspect-video bg-gray-300"></div>
                  <div className="p-4">
                    <div className="h-5 w-36 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <div className="h-12 w-36 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
