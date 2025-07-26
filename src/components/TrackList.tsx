import { Play, Pause, Clock, Users } from 'lucide-react';
import { Track } from '../data/kendrickTracks';

interface TrackListProps {
  tracks: Track[];
  showAlbum?: boolean;
  currentTrack?: Track | null;
  isPlaying?: boolean;
  onTrackSelect?: (track: Track) => void;
}

export function TrackList({ 
  tracks, 
  showAlbum = false, 
  currentTrack, 
  isPlaying, 
  onTrackSelect 
}: TrackListProps) {
  if (tracks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Play className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tracks found</h3>
        <p className="text-gray-500">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {tracks.map((track, index) => {
        const isCurrentTrack = currentTrack?.id === track.id;
        const showPauseButton = isCurrentTrack && isPlaying;
        
        return (
          <div 
            key={track.id}
            className="track-hover flex items-center space-x-4 p-4 rounded-lg cursor-pointer group"
            onClick={() => onTrackSelect?.(track)}
          >
            {/* Track Number / Play Button */}
            <div className="w-8 h-8 flex items-center justify-center">
              {isCurrentTrack ? (
                showPauseButton ? (
                  <Pause className="w-4 h-4 text-orange-500" />
                ) : (
                  <Play className="w-4 h-4 text-orange-500" />
                )
              ) : (
                <>
                  <span className="text-sm text-gray-500 group-hover:hidden">
                    {track.trackNumber}
                  </span>
                  <Play className="w-4 h-4 text-orange-500 hidden group-hover:block" />
                </>
              )}
            </div>

            {/* Album Cover (if showing album info) */}
            {showAlbum && (
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={track.albumCover} 
                  alt={track.album}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Track Info */}
            <div className="flex-1 min-w-0">
              <h4 className={`font-medium truncate ${isCurrentTrack ? 'text-orange-500' : 'text-gray-900'}`}>
                {track.title}
              </h4>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                {showAlbum && (
                  <>
                    <span>{track.album}</span>
                    <span>•</span>
                  </>
                )}
                <span>{track.year}</span>
                {track.features && track.features.length > 0 && (
                  <>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{track.features.join(', ')}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{track.duration}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}