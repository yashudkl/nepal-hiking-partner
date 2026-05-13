export interface TrekData {
  id: string
  title: string
  subtitle: string
  image: string
  difficulty: string
  duration: string
  altitude: string
  distance: string
  bestSeason: string
  price: string
  rating: number
  reviews: number
  
  overview: string
  highlights: string[]
  itinerary: Array<{
    day: string
    location: string
    description: string
  }>
  inclusions: string[]
  exclusions: string[]
}

export const treks: TrekData[] = [
  {
    id: 'everest-three-pass',
    title: 'Everest Three Pass Trek',
    subtitle: 'High Mountain Challenge',
    image: 'https://via.placeholder.com/400x250?text=Everest+Three+Pass',
    difficulty: 'Challenging',
    duration: '21 Days',
    altitude: '5,955m',
    distance: '195 km',
    bestSeason: 'September & May',
    price: '$1,799',
    rating: 4.9,
    reviews: 95,
    
    overview: 'Trek across three high mountain passes offering breathtaking panoramic views of the Everest region. This challenging trek combines remote villages, pristine landscapes, and spectacular mountain vistas.',
    
    highlights: [
      'Cross three dramatic high mountain passes',
      'Explore remote Sherpa villages and culture',
      'Panoramic views of Everest massif',
      'Trek through pristine alpine meadows',
      'Stay in teahouses away from tourist crowds',
    ],
    
    itinerary: [
      { day: 'Day 1-2', location: 'Kathmandu to Jiri', description: 'Drive to Jiri and start trekking through traditional villages.' },
      { day: 'Day 3-8', location: 'Jiri to Shivalaya', description: 'Trek through forests and villages towards Everest region.' },
      { day: 'Day 9-14', location: 'First Pass Crossing', description: 'Ascend and cross the first high mountain pass with stunning views.' },
      { day: 'Day 15-20', location: 'Second & Third Passes', description: 'Cross the remaining passes through dramatic alpine terrain.' },
      { day: 'Day 21', location: 'Return to Kathmandu', description: 'Final descent and return journey to Kathmandu.' },
    ],
    
    inclusions: [
      'Professional experienced guide',
      'Teahouse accommodation',
      'All meals and drinking water',
      'Trek permits',
      'Ground transportation',
    ],
    
    exclusions: [
      'International flights',
      'Personal insurance',
      'Tips and gratuities',
      'Personal equipment',
    ],
  },
  {
    id: 'everest-base-camp',
    title: 'Everest Base Camp Trek',
    subtitle: 'Classic Himalayan Experience',
    image: 'https://via.placeholder.com/400x250?text=Everest+Base+Camp',
    difficulty: 'Moderate',
    duration: '14 Days',
    altitude: '5,364m',
    distance: '65 km',
    bestSeason: 'Spring & Fall',
    price: '$1,299',
    rating: 4.8,
    reviews: 324,
    
    overview: 'The most iconic trek in the world. Trek to the base camp of Mount Everest at 5,364m. Experience stunning Himalayan views, pristine mountain villages, and authentic Sherpa culture.',
    
    highlights: [
      'Reach Everest Base Camp at 5,364m',
      'Panoramic views of Everest, Lhotse, and Makalu',
      'Trek through Sherpa villages and monasteries',
      'Witness authentic Himalayan culture',
      'Professional guides ensure safe acclimatization',
    ],
    
    itinerary: [
      { day: 'Day 1-2', location: 'Kathmandu to Lukla', description: 'Arrive in Kathmandu and fly to Lukla gateway.' },
      { day: 'Day 3-4', location: 'Phakding to Namche Bazaar', description: 'Trek through rhododendron forests to Namche Bazaar.' },
      { day: 'Day 5-6', location: 'Acclimatization Days', description: 'Acclimatization hikes and visit monasteries.' },
      { day: 'Day 7-10', location: 'Namche to EBC', description: 'Trek to Everest Base Camp through stunning terrain.' },
      { day: 'Day 11-14', location: 'Return to Kathmandu', description: 'Return journey with Everest views and cultural exploration.' },
    ],
    
    inclusions: [
      'Professional English-speaking guide',
      'Teahouse accommodation',
      'All meals during trek',
      'Trek permits',
      'Airport transfers',
      'Emergency evacuation insurance',
    ],
    
    exclusions: [
      'International flights',
      'Pre/post accommodation',
      'Personal insurance',
      'Personal equipment',
      'Tips and gratuities',
    ],
  },
  {
    id: 'langtang-trek',
    title: 'Langtang Trek',
    subtitle: 'Hidden Valley Adventure',
    image: 'https://via.placeholder.com/400x250?text=Langtang+Trek',
    difficulty: 'Easy to Moderate',
    duration: '7 Days',
    altitude: '3,430m',
    distance: '45 km',
    bestSeason: 'March & October',
    price: '$699',
    rating: 4.6,
    reviews: 412,
    
    overview: 'Escape to the hidden valley of Langtang. Trek through lush forests, charming Tamang villages, and pristine mountain landscapes. Perfect for shorter treks without compromising on beauty.',
    
    highlights: [
      'Trek through verdant forests and alpine meadows',
      'Stay in authentic Tamang villages',
      'View Langtang Glacier up close',
      'Perfect for time-limited travelers',
      'Rich biodiversity and mountain views',
    ],
    
    itinerary: [
      { day: 'Day 1', location: 'Kathmandu to Syabrubesi', description: 'Drive to Syabrubesi and trek begins.' },
      { day: 'Day 2-3', location: 'Syabrubesi to Langtang Village', description: 'Trek through rhododendron forests.' },
      { day: 'Day 4-5', location: 'Langtang Valley Exploration', description: 'Acclimatization hikes and glacier exploration.' },
      { day: 'Day 6', location: 'Return to Syabrubesi', description: 'Descend back through forests.' },
      { day: 'Day 7', location: 'Return to Kathmandu', description: 'Drive back to Kathmandu.' },
    ],
    
    inclusions: [
      'Local guide',
      'Teahouse accommodation',
      'Meals during trek',
      'Langtang National Park permit',
      'Ground transport',
    ],
    
    exclusions: [
      'International flights',
      'Pre/post accommodation',
      'Personal insurance',
      'Tips and gratuities',
      'Personal equipment',
    ],
  },
  {
    id: 'narphu-valley',
    title: 'Narphu Valley Trek',
    subtitle: 'Remote Alpine Wilderness',
    image: 'https://via.placeholder.com/400x250?text=Narphu+Valley',
    difficulty: 'Challenging',
    duration: '16 Days',
    altitude: '5,160m',
    distance: '145 km',
    bestSeason: 'September & May',
    price: '$1,499',
    rating: 4.7,
    reviews: 178,
    
    overview: 'Trek through the remote and pristine Narphu Valley. Experience authentic Tibetan culture, dramatic mountain scenery, and some of Nepal\'s most untouched wilderness areas.',
    
    highlights: [
      'Explore remote Narphu Valley',
      'Authentic Tibetan Buddhist culture',
      'Dramatic alpine landscape and panoramas',
      'Trek off the beaten path',
      'Ancient monasteries and sacred sites',
    ],
    
    itinerary: [
      { day: 'Day 1-2', location: 'Kathmandu to Meta', description: 'Drive and trek begin towards the valley.' },
      { day: 'Day 3-6', location: 'Meta to Kyang', description: 'Trek through remote villages and alpine terrain.' },
      { day: 'Day 7-11', location: 'Kyang to Phu', description: 'Reach the remote Phu village in Narphu Valley.' },
      { day: 'Day 12-15', location: 'Phu Exploration & Return', description: 'Explore the valley regions and trek back.' },
      { day: 'Day 16', location: 'Return to Kathmandu', description: 'Drive back to Kathmandu.' },
    ],
    
    inclusions: [
      'Professional guide',
      'Local accommodation',
      'Meals and water',
      'Trekking permits',
      'Ground transport',
    ],
    
    exclusions: [
      'International flights',
      'Insurance',
      'Tips and gratuities',
      'Personal equipment',
    ],
  },
  {
    id: 'mardi-himal',
    title: 'Mardi Himal Trek',
    subtitle: 'Short Mountain Experience',
    image: 'https://via.placeholder.com/400x250?text=Mardi+Himal',
    difficulty: 'Moderate',
    duration: '5 Days',
    altitude: '2,910m',
    distance: '28 km',
    bestSeason: 'October & April',
    price: '$549',
    rating: 4.7,
    reviews: 298,
    
    overview: 'A short and scenic trek offering stunning views of Mardi Himal peak and the surrounding Annapurna range. Perfect for those with limited time but seeking mountain wilderness.',
    
    highlights: [
      'Stunning views of Annapurna and Mardi Himal',
      'Intimate mountain experience',
      'Lush forest trekking',
      'Perfect for short trips',
      'Minimal crowds and maximum beauty',
    ],
    
    itinerary: [
      { day: 'Day 1', location: 'Pokhara to Kande', description: 'Drive to Kande and trek begins.' },
      { day: 'Day 2-3', location: 'Kande to Mardi Himal Base', description: 'Trek through forests towards Mardi Himal.' },
      { day: 'Day 4', location: 'Mardi Himal Viewpoint', description: 'Early morning hike to viewpoint for sunrise views.' },
      { day: 'Day 5', location: 'Return to Pokhara', description: 'Descend and return to Pokhara.' },
    ],
    
    inclusions: [
      'Guide',
      'Teahouse accommodation',
      'Meals',
      'Ground transport',
    ],
    
    exclusions: [
      'Flights',
      'Insurance',
      'Tips',
      'Equipment',
    ],
  },
  {
    id: 'annapurna-base-camp',
    title: 'Annapurna Base Camp Trek',
    subtitle: 'Majestic Mountain Sanctuary',
    image: 'https://via.placeholder.com/400x250?text=Annapurna+Base+Camp',
    difficulty: 'Moderate',
    duration: '7 Days',
    altitude: '4,130m',
    distance: '50 km',
    bestSeason: 'October & April',
    price: '$849',
    rating: 4.8,
    reviews: 356,
    
    overview: 'Trek to the base camp of Annapurna, surrounded by some of the world\'s highest peaks. Experience pristine mountain beauty and authentic Gurung culture in this sacred mountain sanctuary.',
    
    highlights: [
      'Reach the base camp of Annapurna I',
      'Surrounded by 5 peaks over 7,000m',
      'Pristine alpine landscape',
      'Experience authentic Gurung hospitality',
      'Stunning multi-peak panoramas',
    ],
    
    itinerary: [
      { day: 'Day 1', location: 'Pokhara to Chamche', description: 'Drive to trailhead and trek begins.' },
      { day: 'Day 2-3', location: 'Chamche to Bamboo', description: 'Trek through forests towards higher elevations.' },
      { day: 'Day 4-5', location: 'Bamboo to Base Camp', description: 'Trek to Annapurna Base Camp.' },
      { day: 'Day 6', location: 'Exploration and Return', description: 'Local exploration and begin descent.' },
      { day: 'Day 7', location: 'Return to Pokhara', description: 'Complete return to Pokhara.' },
    ],
    
    inclusions: [
      'Professional guide',
      'Teahouse accommodation',
      'All meals',
      'Permits',
      'Transport',
    ],
    
    exclusions: [
      'Flights',
      'Insurance',
      'Tips',
      'Equipment',
    ],
  },
  {
    id: 'gosaikunda',
    title: 'Gosaikunda Trek',
    subtitle: 'Sacred Alpine Lakes',
    image: 'https://via.placeholder.com/400x250?text=Gosaikunda',
    difficulty: 'Moderate',
    duration: '5 Days',
    altitude: '4,380m',
    distance: '42 km',
    bestSeason: 'June & September',
    price: '$599',
    rating: 4.5,
    reviews: 267,
    
    overview: 'Trek to the sacred Gosaikunda lake at 4,380m. Experience stunning alpine scenery, pristine wilderness, and profound spiritual significance in this lesser-known trekking gem.',
    
    highlights: [
      'Sacred Gosaikunda lake at 4,380m',
      'Multiple pristine alpine lakes',
      'Gosainkund Pass trekking',
      'Spiritual and natural wonder',
      'Off-the-beaten-path adventure',
    ],
    
    itinerary: [
      { day: 'Day 1-2', location: 'Kathmandu to Dhunche', description: 'Drive to Dhunche and trek begins.' },
      { day: 'Day 3-4', location: 'Dhunche to Gosaikunda', description: 'Trek through forests to the sacred lake.' },
      { day: 'Day 5', location: 'Return and Exploration', description: 'Explore lake area and return to base.' },
    ],
    
    inclusions: [
      'Guide',
      'Lodge accommodation',
      'Meals',
      'Permits',
      'Transport',
    ],
    
    exclusions: [
      'Flights',
      'Insurance',
      'Tips',
      'Equipment',
    ],
  },
  {
    id: 'annapurna-circuit',
    title: 'Annapurna Circuit Trek',
    subtitle: 'Diverse Landscape Adventure',
    image: 'https://via.placeholder.com/400x250?text=Annapurna+Circuit',
    difficulty: 'Moderate',
    duration: '16 Days',
    altitude: '5,416m',
    distance: '160 km',
    bestSeason: 'October & April',
    price: '$1,399',
    rating: 4.7,
    reviews: 256,
    
    overview: 'Circumnavigate the Annapurna Massif in one of the world\'s most scenic treks. Experience rhododendron forests, diverse ethnic cultures, and the spectacular Poon Hill sunrise viewpoint.',
    
    highlights: [
      'Complete circuit around Annapurna',
      'Witness Poon Hill sunrise',
      'Cross Thorung La Pass at 5,416m',
      'Diverse cultural experiences',
      'Warm hospitality of local communities',
    ],
    
    itinerary: [
      { day: 'Day 1-2', location: 'Pokhara to Phedi', description: 'Start trekking from Pokhara towards Phedi.' },
      { day: 'Day 3-4', location: 'Phedi to Poon Hill', description: 'Trek to Poon Hill for sunrise views.' },
      { day: 'Day 5-7', location: 'Descent to Baglung', description: 'Trek through farmlands and villages.' },
      { day: 'Day 8-12', location: 'Jomsom to Thorung La', description: 'Trek northward and cross Thorung La Pass.' },
      { day: 'Day 13-16', location: 'Return to Pokhara', description: 'Descend and return to Pokhara.' },
    ],
    
    inclusions: [
      'Guide and porter support',
      'Teahouse accommodation',
      'Meals',
      'ACAP permit',
      'Transport',
    ],
    
    exclusions: [
      'Flights',
      'Pre/post accommodation',
      'Insurance',
      'Tips',
      'Equipment',
    ],
  },
  {
    id: 'manaslu-circuit',
    title: 'Manaslu Circuit Trek',
    subtitle: 'Remote Mountain Wilderness',
    image: 'https://via.placeholder.com/400x250?text=Manaslu+Circuit',
    difficulty: 'Challenging',
    duration: '18 Days',
    altitude: '5,160m',
    distance: '177 km',
    bestSeason: 'September & May',
    price: '$1,599',
    rating: 4.9,
    reviews: 189,
    
    overview: 'Trek around the eighth highest mountain in the world. This remote and less-crowded circuit offers pristine wilderness, authentic Buddhist culture, and dramatic mountain scenery.',
    
    highlights: [
      'Circumnavigate Mount Manaslu (8,163m)',
      'Cross Larkya La Pass at 5,160m',
      'Experience authentic Buddhist monasteries',
      'Trek through remote villages',
      'Encounter Himalayan flora and fauna',
    ],
    
    itinerary: [
      { day: 'Day 1-2', location: 'Kathmandu to Arughat', description: 'Drive to Arughat and acclimatize.' },
      { day: 'Day 3-6', location: 'Arughat to Samdo', description: 'Trek northward with mountain views.' },
      { day: 'Day 7-9', location: 'Samdo to Larkya La Pass', description: 'Challenging ascent to Larkya La Pass.' },
      { day: 'Day 10-14', location: 'Descent to Gorkha', description: 'Trek through diverse landscapes.' },
      { day: 'Day 15-18', location: 'Return to Kathmandu', description: 'Drive back to Kathmandu.' },
    ],
    
    inclusions: [
      'Professional guide',
      'Porter support',
      'Lodge accommodation',
      'Meals and water',
      'Permits',
      'Ground transport',
    ],
    
    exclusions: [
      'Flights',
      'Pre/post accommodation',
      'Insurance',
      'Equipment',
      'Tips',
    ],
  },
]
