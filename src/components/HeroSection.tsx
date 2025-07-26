import { Play, Calendar, Music2 } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const featuredAlbum = {
    title: 'GNX',
    year: 2024,
    cover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=600&h=600&fit=crop',
    description: 'Kendrick Lamar\'s latest surprise album featuring collaborations with SZA, Lefty Gunplay, and more.',
    trackCount: 12
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Explore the
                <span className="block text-orange-400">Complete</span>
                <span className="block">Kendrick Catalog</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Dive into the complete discography of one of hip-hop's greatest artists. 
                From Section.80 to Mr. Morale & The Big Steppers.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>6 Studio Albums</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>80+ Tracks</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>2011-2024</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Exploring
            </Button>
          </div>

          {/* Featured Album */}
          <div className="fade-in stagger-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-orange-400 mb-2">Featured Album</h3>
                <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={featuredAlbum.cover} 
                    alt={featuredAlbum.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div>
                  <h4 className="text-2xl font-bold">{featuredAlbum.title}</h4>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-300 mt-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredAlbum.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Music2 className="w-4 h-4" />
                      <span>{featuredAlbum.trackCount} tracks</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {featuredAlbum.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Play className="w-4 h-4 mr-2" />
                  View Album
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}