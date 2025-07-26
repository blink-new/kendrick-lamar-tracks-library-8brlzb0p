export interface Track {
  id: string;
  title: string;
  album: string;
  year: number;
  duration: string;
  genre: string;
  features?: string[];
  albumCover: string;
  trackNumber: number;
  audioUrl?: string; // URL для аудио файла
}

export interface Album {
  id: string;
  title: string;
  year: number;
  cover: string;
  genre: string;
  trackCount: number;
}

export const albums: Album[] = [
  {
    id: 'gkmc',
    title: 'good kid, m.A.A.d city',
    year: 2012,
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    genre: 'Hip Hop',
    trackCount: 12
  },
  {
    id: 'tpab',
    title: 'To Pimp a Butterfly',
    year: 2015,
    cover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    genre: 'Jazz Rap',
    trackCount: 16
  },
  {
    id: 'damn',
    title: 'DAMN.',
    year: 2017,
    cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    genre: 'Hip Hop',
    trackCount: 14
  },
  {
    id: 'mmatbs',
    title: 'Mr. Morale & The Big Steppers',
    year: 2022,
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    genre: 'Hip Hop',
    trackCount: 18
  },
  {
    id: 'section80',
    title: 'Section.80',
    year: 2011,
    cover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    genre: 'Hip Hop',
    trackCount: 16
  },
  {
    id: 'gnx',
    title: 'GNX',
    year: 2024,
    cover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    genre: 'Hip Hop',
    trackCount: 12
  }
];

export const tracks: Track[] = [
  // good kid, m.A.A.d city (2012)
  {
    id: 'sherane',
    title: 'Sherane a.k.a Master Splinter\'s Daughter',
    album: 'good kid, m.A.A.d city',
    year: 2012,
    duration: '4:33',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 1,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 'bitch-dont-kill-my-vibe',
    title: 'Bitch, Don\'t Kill My Vibe',
    album: 'good kid, m.A.A.d city',
    year: 2012,
    duration: '5:10',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 2,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 'backseat-freestyle',
    title: 'Backseat Freestyle',
    album: 'good kid, m.A.A.d city',
    year: 2012,
    duration: '3:32',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 3,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: 'the-art-of-peer-pressure',
    title: 'The Art of Peer Pressure',
    album: 'good kid, m.A.A.d city',
    year: 2012,
    duration: '5:24',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 4,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    id: 'money-trees',
    title: 'Money Trees',
    album: 'good kid, m.A.A.d city',
    year: 2012,
    duration: '6:26',
    genre: 'Hip Hop',
    features: ['Jay Rock'],
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 5,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
  },
  {
    id: 'poetic-justice',
    title: 'Poetic Justice',
    album: 'good kid, m.A.A.d city',
    year: 2012,
    duration: '5:00',
    genre: 'Hip Hop',
    features: ['Drake'],
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 6,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    id: 'maad-city',
    title: 'm.A.A.d city',
    album: 'good kid, m.A.A.d city',
    year: 2012,
    duration: '5:50',
    genre: 'Hip Hop',
    features: ['MC Eiht'],
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 7,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
  },
  {
    id: 'swimming-pools',
    title: 'Swimming Pools (Drank)',
    album: 'good kid, m.A.A.d city',
    year: 2012,
    duration: '5:13',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 8,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  },
  {
    id: 'sing-about-me',
    title: 'Sing About Me, I\'m Dying of Thirst',
    album: 'good kid, m.A.A.d city',
    year: 2012,
    duration: '12:03',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 9,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
  },
  {
    id: 'real',
    title: 'Real',
    album: 'good kid, m.A.A.d city',
    year: 2012,
    duration: '7:23',
    genre: 'Hip Hop',
    features: ['Anna Wise'],
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 10,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'
  },
  {
    id: 'compton',
    title: 'Compton',
    album: 'good kid, m.A.A.d city',
    year: 2012,
    duration: '4:08',
    genre: 'Hip Hop',
    features: ['Dr. Dre'],
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 11,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3'
  },

  // To Pimp a Butterfly (2015)
  {
    id: 'wesley-theory',
    title: 'Wesley\'s Theory',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '4:47',
    genre: 'Jazz Rap',
    features: ['George Clinton', 'Thundercat'],
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 1,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3'
  },
  {
    id: 'for-free',
    title: 'For Free? (Interlude)',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '2:10',
    genre: 'Jazz Rap',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 2,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3'
  },
  {
    id: 'king-kunta',
    title: 'King Kunta',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '3:54',
    genre: 'Jazz Rap',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 3,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3'
  },
  {
    id: 'institutionalized',
    title: 'Institutionalized',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '4:31',
    genre: 'Jazz Rap',
    features: ['Bilal', 'Anna Wise', 'Snoop Dogg'],
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 4,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3'
  },
  {
    id: 'these-walls',
    title: 'These Walls',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '5:00',
    genre: 'Jazz Rap',
    features: ['Bilal', 'Anna Wise', 'Thundercat'],
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 5,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3'
  },
  {
    id: 'u',
    title: 'u',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '4:28',
    genre: 'Jazz Rap',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 6,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 'alright',
    title: 'Alright',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '3:39',
    genre: 'Jazz Rap',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 7,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 'for-sale',
    title: 'For Sale? (Interlude)',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '4:51',
    genre: 'Jazz Rap',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 8,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: 'momma',
    title: 'Momma',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '4:43',
    genre: 'Jazz Rap',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 9,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    id: 'hood-politics',
    title: 'Hood Politics',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '4:52',
    genre: 'Jazz Rap',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 10,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
  },
  {
    id: 'how-much-a-dollar-cost',
    title: 'How Much a Dollar Cost',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '4:21',
    genre: 'Jazz Rap',
    features: ['James Blake', 'Ronald Isley'],
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 11,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    id: 'complexion',
    title: 'Complexion (A Zulu Love)',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '4:23',
    genre: 'Jazz Rap',
    features: ['Rapsody'],
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 12,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
  },
  {
    id: 'the-blacker-the-berry',
    title: 'The Blacker the Berry',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '5:28',
    genre: 'Jazz Rap',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 13,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  },
  {
    id: 'you-aint-gotta-lie',
    title: 'You Ain\'t Gotta Lie (Momma Said)',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '4:01',
    genre: 'Jazz Rap',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 14,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
  },
  {
    id: 'i',
    title: 'i',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '5:36',
    genre: 'Jazz Rap',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 15,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'
  },
  {
    id: 'mortal-man',
    title: 'Mortal Man',
    album: 'To Pimp a Butterfly',
    year: 2015,
    duration: '12:07',
    genre: 'Jazz Rap',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 16,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3'
  },

  // DAMN. (2017)
  {
    id: 'blood',
    title: 'BLOOD.',
    album: 'DAMN.',
    year: 2017,
    duration: '1:58',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 1,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3'
  },
  {
    id: 'dna',
    title: 'DNA.',
    album: 'DAMN.',
    year: 2017,
    duration: '3:05',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 2,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3'
  },
  {
    id: 'yah',
    title: 'YAH.',
    album: 'DAMN.',
    year: 2017,
    duration: '2:40',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 3,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3'
  },
  {
    id: 'element',
    title: 'ELEMENT.',
    album: 'DAMN.',
    year: 2017,
    duration: '3:28',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 4,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3'
  },
  {
    id: 'feel',
    title: 'FEEL.',
    album: 'DAMN.',
    year: 2017,
    duration: '3:34',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 5,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3'
  },
  {
    id: 'loyalty',
    title: 'LOYALTY.',
    album: 'DAMN.',
    year: 2017,
    duration: '3:47',
    genre: 'Hip Hop',
    features: ['Rihanna'],
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 6,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 'pride',
    title: 'PRIDE.',
    album: 'DAMN.',
    year: 2017,
    duration: '4:35',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 7,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 'humble',
    title: 'HUMBLE.',
    album: 'DAMN.',
    year: 2017,
    duration: '2:57',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 8,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: 'lust',
    title: 'LUST.',
    album: 'DAMN.',
    year: 2017,
    duration: '5:07',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 9,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    id: 'love',
    title: 'LOVE.',
    album: 'DAMN.',
    year: 2017,
    duration: '3:33',
    genre: 'Hip Hop',
    features: ['Zacari'],
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 10,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
  },
  {
    id: 'xxx',
    title: 'XXX.',
    album: 'DAMN.',
    year: 2017,
    duration: '4:14',
    genre: 'Hip Hop',
    features: ['U2'],
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 11,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    id: 'fear',
    title: 'FEAR.',
    album: 'DAMN.',
    year: 2017,
    duration: '7:40',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 12,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
  },
  {
    id: 'god',
    title: 'GOD.',
    album: 'DAMN.',
    year: 2017,
    duration: '4:08',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 13,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  },
  {
    id: 'duckworth',
    title: 'DUCKWORTH.',
    album: 'DAMN.',
    year: 2017,
    duration: '4:14',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop',
    trackNumber: 14,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
  },

  // Mr. Morale & The Big Steppers (2022) - Selected tracks
  {
    id: 'united-in-grief',
    title: 'United in Grief',
    album: 'Mr. Morale & The Big Steppers',
    year: 2022,
    duration: '4:23',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 1,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'
  },
  {
    id: 'n95',
    title: 'N95',
    album: 'Mr. Morale & The Big Steppers',
    year: 2022,
    duration: '3:14',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 2,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3'
  },
  {
    id: 'worldwide-steppers',
    title: 'Worldwide Steppers',
    album: 'Mr. Morale & The Big Steppers',
    year: 2022,
    duration: '3:23',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 3,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3'
  },
  {
    id: 'die-hard',
    title: 'Die Hard',
    album: 'Mr. Morale & The Big Steppers',
    year: 2022,
    duration: '3:59',
    genre: 'Hip Hop',
    features: ['Blxst', 'Amanda Reifer'],
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 4,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3'
  },
  {
    id: 'father-time',
    title: 'Father Time',
    album: 'Mr. Morale & The Big Steppers',
    year: 2022,
    duration: '3:20',
    genre: 'Hip Hop',
    features: ['Sampha'],
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    trackNumber: 5,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3'
  },

  // Section.80 (2011) - Selected tracks
  {
    id: 'fuck-your-ethnicity',
    title: 'Fuck Your Ethnicity',
    album: 'Section.80',
    year: 2011,
    duration: '4:02',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 1,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3'
  },
  {
    id: 'hol-up',
    title: 'Hol\' Up',
    album: 'Section.80',
    year: 2011,
    duration: '2:33',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 2,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3'
  },
  {
    id: 'adhd',
    title: 'A.D.H.D',
    album: 'Section.80',
    year: 2011,
    duration: '3:47',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 3,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 'no-makeup',
    title: 'No Make-Up (Her Vice)',
    album: 'Section.80',
    year: 2011,
    duration: '3:35',
    genre: 'Hip Hop',
    features: ['Colin Munroe'],
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 4,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 'hiiipower',
    title: 'HiiiPoWeR',
    album: 'Section.80',
    year: 2011,
    duration: '3:59',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    trackNumber: 5,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },

  // GNX (2024) - Новый альбом!
  {
    id: 'wacced-out-murals',
    title: 'wacced out murals',
    album: 'GNX',
    year: 2024,
    duration: '4:26',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    trackNumber: 1,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    id: 'squabble-up',
    title: 'squabble up',
    album: 'GNX',
    year: 2024,
    duration: '2:33',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    trackNumber: 2,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
  },
  {
    id: 'luther',
    title: 'luther',
    album: 'GNX',
    year: 2024,
    duration: '3:01',
    genre: 'Hip Hop',
    features: ['SZA'],
    albumCover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    trackNumber: 3,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    id: 'man-at-the-garden',
    title: 'man at the garden',
    album: 'GNX',
    year: 2024,
    duration: '2:27',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    trackNumber: 4,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
  },
  {
    id: 'hey-now',
    title: 'hey now',
    album: 'GNX',
    year: 2024,
    duration: '3:02',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    trackNumber: 5,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  },
  {
    id: 'reincarnated',
    title: 'reincarnated',
    album: 'GNX',
    year: 2024,
    duration: '3:51',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    trackNumber: 6,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
  },
  {
    id: 'tv-off',
    title: 'tv off',
    album: 'GNX',
    year: 2024,
    duration: '4:33',
    genre: 'Hip Hop',
    features: ['Lefty Gunplay'],
    albumCover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    trackNumber: 7,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'
  },
  {
    id: 'dodger-blue',
    title: 'dodger blue',
    album: 'GNX',
    year: 2024,
    duration: '2:42',
    genre: 'Hip Hop',
    features: ['Wallie the Sensei', 'Siete7x', 'Roddy Ricch'],
    albumCover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    trackNumber: 8,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3'
  },
  {
    id: 'peekaboo',
    title: 'peekaboo',
    album: 'GNX',
    year: 2024,
    duration: '2:14',
    genre: 'Hip Hop',
    features: ['AzChike'],
    albumCover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    trackNumber: 9,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3'
  },
  {
    id: 'heart-pt-6',
    title: 'heart pt. 6',
    album: 'GNX',
    year: 2024,
    duration: '5:07',
    genre: 'Hip Hop',
    albumCover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    trackNumber: 10,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3'
  },
  {
    id: 'gnx',
    title: 'gnx',
    album: 'GNX',
    year: 2024,
    duration: '2:50',
    genre: 'Hip Hop',
    features: ['Peysoh', 'Hitta J3', 'YoungThreat'],
    albumCover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    trackNumber: 11,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3'
  },
  {
    id: 'gloria',
    title: 'gloria',
    album: 'GNX',
    year: 2024,
    duration: '4:12',
    genre: 'Hip Hop',
    features: ['SZA'],
    albumCover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
    trackNumber: 12,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3'
  }
];