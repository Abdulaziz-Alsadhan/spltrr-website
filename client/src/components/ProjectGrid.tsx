import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/useScrollPosition';

interface ProjectGridProps {
  searchQuery: string;
  categorySlug: string;
}

export default function ProjectGrid({ searchQuery, categorySlug }: ProjectGridProps) {
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);
  const scrollPosition = useScrollPosition();

  const queryParams = new URLSearchParams();
  queryParams.append('limit', limit.toString());
  queryParams.append('offset', offset.toString());

  if (searchQuery) {
    queryParams.append('search', searchQuery);
  }

  if (categorySlug && categorySlug !== 'all') {
    queryParams.append('category', categorySlug);
  }

  const { data: projects, isLoading, error, isFetching } = useQuery({
    queryKey: [`/api/projects?${queryParams.toString()}`],
  });

  const loadMore = () => {
    setLimit(limit + 6);
  };

  // Create skeleton placeholders during loading
  const loadingCards = Array(6).fill(null).map((_, index) => (
    <ProjectCard key={`skeleton-${index}`} isLoading={true} />
  ));

  // Render error state
  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Unable to load projects</h2>
        <p className="text-gray-600 mb-6">There was an error loading the projects. Please try again later.</p>
        <Button onClick={() => window.location.reload()}>Refresh</Button>
      </div>
    );
  }

  // Determine which projects to display
  const projectsToDisplay = projects || [];
  const shouldShowLoadMore = projects && projects.length >= limit;
  
  // If loading initial data, show all skeletons
  const showSkeletons = isLoading || (!isLoading && isFetching && scrollPosition < 200);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Show projects if we have them */}
        {!showSkeletons && projectsToDisplay.map(project => (
          <ProjectCard key={project.id} project={project} isLoading={false} />
        ))}
        
        {/* Show skeletons while loading */}
        {showSkeletons && loadingCards}
      </div>

      {/* Show empty state */}
      {!isLoading && projectsToDisplay.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-gray-800 mb-2">No projects found</h2>
          <p className="text-gray-600">
            {searchQuery 
              ? `No projects match "${searchQuery}". Try a different search term.` 
              : "No projects found for the selected category."}
          </p>
        </div>
      )}

      {/* Load More Button */}
      {shouldShowLoadMore && (
        <div className="mt-10 text-center">
          <Button 
            variant="outline" 
            onClick={loadMore} 
            disabled={isFetching}
            className="font-medium py-2 px-6"
          >
            {isFetching ? "Loading..." : "Load More Projects"}
          </Button>
        </div>
      )}
    </>
  );
}
