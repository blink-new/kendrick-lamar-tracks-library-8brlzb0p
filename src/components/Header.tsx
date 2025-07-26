import { Search, Music } from 'lucide-react';
import { Input } from './ui/input';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-orange-500 rounded-xl flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Kendrick Lamar</h1>
              <p className="text-sm text-gray-500">Tracks Library</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative search-glow rounded-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search tracks, albums, or features..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 border-0 bg-gray-50 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="text-center">
              <div className="font-semibold text-gray-900">5</div>
              <div>Albums</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">70+</div>
              <div>Tracks</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}