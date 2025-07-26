import { Calendar, Music2 } from 'lucide-react';
import { Album } from '../data/kendrickTracks';

interface AlbumCardProps {
  album: Album;
  onClick: () => void;
}

export function AlbumCard({ album, onClick }: AlbumCardProps) {
  return (
    <div 
      className="album-hover cursor-pointer bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      onClick={onClick}
    >
      <div className="aspect-square mb-4 overflow-hidden rounded-xl">
        <img 
          src={album.cover} 
          alt={album.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
          {album.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{album.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Music2 className="w-4 h-4" />
            <span>{album.trackCount} tracks</span>
          </div>
        </div>
        
        <div className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
          {album.genre}
        </div>
      </div>
    </div>
  );
}