import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Project } from '@shared/schema';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import ProgressiveImage from '@/components/ProgressiveImage';

interface ProjectCardProps {
  project?: Project;
  isLoading: boolean;
}

export default function ProjectCard({ project, isLoading }: ProjectCardProps) {
  if (isLoading || !project) {
    return <ProjectCardSkeleton />;
  }

  const formattedDate = project.createdAt 
    ? formatDistanceToNow(new Date(project.createdAt), { addSuffix: true })
    : '';

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="relative pb-[56.25%] bg-gray-100">
        <ProgressiveImage
          src={project.thumbnailUrl}
          lowQualitySrc={`${project.thumbnailUrl.split('&q=')[0]}&q=10&w=50`}
          alt={`${project.title} thumbnail`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white py-1 px-2 rounded text-xs font-medium text-gray-700">
          {/* In a real app, you would map categoryId to category name */}
          {project.categoryId === 2 ? 'UX Design' : 
            project.categoryId === 3 ? 'Mobile Apps' : 
            project.categoryId === 4 ? 'Branding' : 
            project.categoryId === 5 ? 'Illustration' : 
            project.categoryId === 6 ? 'Web Development' : 'Design'}
        </div>
      </div>
      <CardContent className="p-4 flex-grow flex flex-col">
        <Link href={`/project/${project.slug}`} className="hover:underline">
          <h3 className="text-lg font-medium text-gray-800 mb-2">{project.title}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{project.excerpt}</p>
        <div className="flex items-center text-sm">
          <Avatar className="w-8 h-8 mr-2">
            <AvatarImage src={project.authorAvatar} alt={project.authorName} />
            <AvatarFallback>{project.authorName.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="text-gray-700">{project.authorName}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-500">{formattedDate}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden h-full">
      <div className="pb-[56.25%] relative skeleton"></div>
      <CardContent className="p-4">
        <div className="h-6 w-3/4 mb-2 skeleton rounded"></div>
        <div className="h-4 w-full mb-1 skeleton rounded"></div>
        <div className="h-4 w-2/3 mb-4 skeleton rounded"></div>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full skeleton mr-2"></div>
          <div className="h-4 w-24 skeleton rounded"></div>
        </div>
      </CardContent>
    </Card>
  );
}
