import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ProgressiveImage from '@/components/ProgressiveImage';

export default function FeaturedCaseStudy() {
  const { data: featuredProject, isLoading, error } = useQuery({
    queryKey: ['/api/featured-project'],
  });

  if (isLoading) {
    return <FeaturedCaseStudySkeleton />;
  }

  if (error || !featuredProject) {
    return null; // Don't show section if there's an error or no featured project
  }

  return (
    <section className="mt-16">
      <Card className="overflow-hidden border border-gray-200 shadow-sm">
        <CardContent className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Featured Case Study
              </span>
              <h2 className="text-2xl font-light text-gray-800 mb-4">{featuredProject.title}</h2>
              
              <div className="prose prose-blue max-w-none">
                <p className="text-gray-600 mb-3">{featuredProject.excerpt}</p>
                
                <div className="flex items-center mb-6 mt-6">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src={featuredProject.authorAvatar} alt={featuredProject.authorName} />
                    <AvatarFallback>{featuredProject.authorName.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-gray-800">{featuredProject.authorName}</h4>
                    <p className="text-sm text-gray-500">Lead UX Designer</p>
                  </div>
                </div>
                
                <Link href={`/project/${featuredProject.slug}`}>
                  <Button className="inline-flex items-center">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                <ProgressiveImage
                  src={featuredProject.fullImageUrl}
                  lowQualitySrc={`${featuredProject.fullImageUrl.split('&q=')[0]}&q=10&w=50`}
                  alt={`${featuredProject.title} - featured case study`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function FeaturedCaseStudySkeleton() {
  return (
    <section className="mt-16">
      <Card className="overflow-hidden border border-gray-200 shadow-sm">
        <CardContent className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="w-36 h-6 skeleton rounded-full mb-4" />
              <div className="w-3/4 h-8 skeleton rounded mb-4" />
              
              <div className="space-y-3">
                <div className="w-full h-4 skeleton rounded" />
                <div className="w-full h-4 skeleton rounded" />
                <div className="w-2/3 h-4 skeleton rounded" />
              </div>
              
              <div className="flex items-center my-6">
                <div className="rounded-full h-10 w-10 skeleton mr-3" />
                <div>
                  <div className="w-32 h-5 skeleton rounded mb-1" />
                  <div className="w-24 h-4 skeleton rounded" />
                </div>
              </div>
              
              <div className="w-40 h-10 skeleton rounded" />
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden skeleton" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
