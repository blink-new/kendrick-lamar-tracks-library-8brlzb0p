import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AlbumCard } from './components/AlbumCard';
import { TrackList } from './components/TrackList';
import { FilterBar } from './components/FilterBar';
import { AudioPlayer } from './components/AudioPlayer';
import { albums, tracks, Track } from './data/kendrickTracks';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { ArrowLeft } from 'lucide-react';
import { Button } from './components/ui/button';

type ViewMode = 'home' | 'album' | 'search';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [currentAlbum, setCurrentAlbum] = useState<string | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredTracks = useMemo(() => {
    let filtered = tracks;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(track => 
        track.title.toLowerCase().includes(query) ||
        track.album.toLowerCase().includes(query) ||
        track.features?.some(feature => feature.toLowerCase().includes(query))
      );
    }

    if (selectedAlbum) {
      filtered = filtered.filter(track => track.album === selectedAlbum);
    }

    if (selectedYear) {
      filtered = filtered.filter(track => track.year === selectedYear);
    }

    if (selectedGenre) {
      filtered = filtered.filter(track => track.genre === selectedGenre);
    }

    return filtered;
  }, [searchQuery, selectedAlbum, selectedYear, selectedGenre]);

  const albumTracks = useMemo(() => {
    if (!currentAlbum) return [];
    return tracks.filter(track => track.album === currentAlbum);
  }, [currentAlbum]);

  const handleAlbumClick = (albumTitle: string) => {
    setCurrentAlbum(albumTitle);
    setViewMode('album');
  };

  const handleBackToHome = () => {
    setViewMode('home');
    setCurrentAlbum(null);
  };

  const clearFilters = () => {
    setSelectedAlbum(null);
    setSelectedYear(null);
    setSelectedGenre(null);
  };

  const handleTrackSelect = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handleTrackChange = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const hasSearchOrFilters = searchQuery || selectedAlbum || selectedYear || selectedGenre;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {viewMode === 'home' && !hasSearchOrFilters && <HeroSection />}

      {hasSearchOrFilters && (
        <FilterBar
          selectedAlbum={selectedAlbum}
          selectedYear={selectedYear}
          selectedGenre={selectedGenre}
          onAlbumChange={setSelectedAlbum}
          onYearChange={setSelectedYear}
          onGenreChange={setSelectedGenre}
          onClearFilters={clearFilters}
        />
      )}

      <main className={`flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${currentTrack ? 'pb-24' : ''}`}>
        {viewMode === 'album' && currentAlbum && (
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={handleBackToHome}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Albums
            </Button>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-6 mb-8">
                <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={albums.find(a => a.title === currentAlbum)?.cover} 
                    alt={currentAlbum}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentAlbum}</h1>
                  <div className="text-gray-600 space-y-1">
                    <p>Album • {albums.find(a => a.title === currentAlbum)?.year}</p>
                    <p>{albumTracks.length} tracks</p>
                    <p className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full mt-2">
                      {albums.find(a => a.title === currentAlbum)?.genre}
                    </p>
                  </div>
                </div>
              </div>
              
              <TrackList 
                tracks={albumTracks} 
                currentTrack={currentTrack}
                isPlaying={isPlaying}
                onTrackSelect={handleTrackSelect}
              />
            </div>
          </div>
        )}

        {viewMode === 'home' && !hasSearchOrFilters && (
          <Tabs defaultValue="albums" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="albums">Albums</TabsTrigger>
              <TabsTrigger value="tracks">All Tracks</TabsTrigger>
            </TabsList>

            <TabsContent value="albums" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Studio Albums</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {albums.map((album, index) => (
                    <div key={album.id} className={`fade-in stagger-${Math.min(index + 1, 5)}`}>
                      <AlbumCard 
                        album={album} 
                        onClick={() => handleAlbumClick(album.title)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tracks" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">All Tracks</h2>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                  <TrackList 
                    tracks={tracks} 
                    showAlbum={true} 
                    currentTrack={currentTrack}
                    isPlaying={isPlaying}
                    onTrackSelect={handleTrackSelect}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        )}

        {hasSearchOrFilters && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Filtered Tracks'}
              </h2>
              <div className="text-sm text-gray-600">
                {filteredTracks.length} track{filteredTracks.length !== 1 ? 's' : ''} found
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <TrackList 
                tracks={filteredTracks} 
                showAlbum={true} 
                currentTrack={currentTrack}
                isPlaying={isPlaying}
                onTrackSelect={handleTrackSelect}
              />
            </div>
          </div>
        )}
      </main>

      <AudioPlayer
        currentTrack={currentTrack}
        playlist={tracks}
        onTrackChange={handleTrackChange}
        isVisible={!!currentTrack}
      />
    </div>
  );
}

export default App;
