import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useDebounce } from '@/hooks/useScrollPosition';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

export default function SearchAndFilter({ onSearch, onCategoryChange, selectedCategory }: SearchAndFilterProps) {
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearchTerm = useDebounce(searchInput, 300);

  const { data: categories, isLoading } = useQuery({
    queryKey: ['/api/categories'],
  });

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleCategoryClick = (slug: string) => {
    onCategoryChange(slug);
  };

  if (isLoading) {
    return <SearchAndFilterSkeleton />;
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-light text-gray-800 mb-2">Browse Portfolio Examples</h1>
          <p className="text-gray-600 max-w-3xl">
            Explore detailed case studies from our community members. Filter by category, search by keyword, or browse the latest submissions.
          </p>
        </div>
        <div className="relative w-full lg:w-72">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchInput}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4"
          />
          <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Filter Categories */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categories?.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.slug ? "default" : "outline"}
            onClick={() => handleCategoryClick(category.slug)}
            className="text-sm font-medium"
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

function SearchAndFilterSkeleton() {
  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <div className="h-10 w-3/4 skeleton rounded mb-2" />
          <div className="h-5 w-full skeleton rounded mb-1" />
          <div className="h-5 w-2/3 skeleton rounded" />
        </div>
        <div className="relative w-full lg:w-72">
          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-9 w-24 rounded-md" />
        ))}
      </div>
    </div>
  );
}
