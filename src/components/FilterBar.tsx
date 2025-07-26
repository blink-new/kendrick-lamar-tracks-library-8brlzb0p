import { Filter, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface FilterBarProps {
  selectedAlbum: string | null;
  selectedYear: number | null;
  selectedGenre: string | null;
  onAlbumChange: (album: string | null) => void;
  onYearChange: (year: number | null) => void;
  onGenreChange: (genre: string | null) => void;
  onClearFilters: () => void;
}

const albums = [
  'Section.80',
  'good kid, m.A.A.d city',
  'To Pimp a Butterfly',
  'DAMN.',
  'Mr. Morale & The Big Steppers'
];

const years = [2011, 2012, 2015, 2017, 2022];
const genres = ['Hip Hop', 'Jazz Rap'];

export function FilterBar({
  selectedAlbum,
  selectedYear,
  selectedGenre,
  onAlbumChange,
  onYearChange,
  onGenreChange,
  onClearFilters
}: FilterBarProps) {
  const hasActiveFilters = selectedAlbum || selectedYear || selectedGenre;

  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="font-medium text-gray-900">Filters</h3>
          </div>
          {hasActiveFilters && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearFilters}
              className="text-orange-600 hover:text-orange-700"
            >
              <X className="w-4 h-4 mr-1" />
              Clear all
            </Button>
          )}
        </div>

        <div className="space-y-4">
          {/* Albums */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Albums</h4>
            <div className="flex flex-wrap gap-2">
              {albums.map((album) => (
                <Badge
                  key={album}
                  variant={selectedAlbum === album ? "default" : "secondary"}
                  className={`cursor-pointer transition-colors ${
                    selectedAlbum === album 
                      ? 'bg-orange-500 hover:bg-orange-600' 
                      : 'hover:bg-gray-200'
                  }`}
                  onClick={() => onAlbumChange(selectedAlbum === album ? null : album)}
                >
                  {album}
                </Badge>
              ))}
            </div>
          </div>

          {/* Years */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Year</h4>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <Badge
                  key={year}
                  variant={selectedYear === year ? "default" : "secondary"}
                  className={`cursor-pointer transition-colors ${
                    selectedYear === year 
                      ? 'bg-orange-500 hover:bg-orange-600' 
                      : 'hover:bg-gray-200'
                  }`}
                  onClick={() => onYearChange(selectedYear === year ? null : year)}
                >
                  {year}
                </Badge>
              ))}
            </div>
          </div>

          {/* Genres */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Genre</h4>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Badge
                  key={genre}
                  variant={selectedGenre === genre ? "default" : "secondary"}
                  className={`cursor-pointer transition-colors ${
                    selectedGenre === genre 
                      ? 'bg-orange-500 hover:bg-orange-600' 
                      : 'hover:bg-gray-200'
                  }`}
                  onClick={() => onGenreChange(selectedGenre === genre ? null : genre)}
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}