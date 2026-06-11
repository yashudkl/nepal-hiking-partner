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
    duration?: string
  }>
  inclusions: string[]
  exclusions: string[]
}

export const treks: TrekData[] = [
  {
    id: 'everest-three-pass',
    title: 'Everest Three Pass Trek',
    subtitle: 'High Mountain Challenge',
    image: '/assets/everest-three-pass/everest_threepass.webp',
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
      'Experience high altitude mountain wilderness',
      'Ancient monasteries and spiritual sites',
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
    image: '/assets/everest-base-camp/everestbasecamp.webp',
    difficulty: 'Moderate',
    duration: '14 Days',
    altitude: '5,364m',
    distance: '65 km',
    bestSeason: 'Spring & Fall',
    price: '$1,299',
    rating: 4.8,
    reviews: 324,
    
    overview: 'The most iconic trek in the world. Journey to the base camp of Mount Everest at 5,364m. Immerse yourself in breathtaking Himalayan vistas, quaint mountain settlements, and rich Sherpa heritage.',
    
    highlights: [
      'Reach Everest Base Camp at 5,364m',
      'Panoramic views of Everest, Lhotse, and Makalu',
      'Trek through Sherpa villages and monasteries',
      'Witness authentic Himalayan culture',
      'Professional guides ensure safe acclimatization',
      'Experience sunrise from Kala Patthar',
      'Visit Tengboche Monastery',
    ],
    
    itinerary: [
      { day: 'Day 1', location: 'Ramechap to Phakding (2,860m)', description: 'Scenic drive to Ramechap followed by a quick flight into Lukla. Trek through the Dudh Koshi river valley, crossing suspension bridges and passing through coniferous woodlands and traditional Sherpa settlements.', duration: '~5–6 hours' },
      { day: 'Day 2', location: 'Phakding to Monjo (2,850m)', description: 'Walk through verdant forests and picturesque villages. Monjo marks the entrance to Sagarmatha National Park with magnificent mountain views and cultural insights.', duration: '~4–5 hours' },
      { day: 'Day 3', location: 'Monjo to Namche Bazaar (3,440m)', description: 'Steady ascent along scenic pathways into Namche Bazaar, the lively Sherpa commercial center of Khumbu. Enjoy spectacular vistas of Everest, Ama Dablam, and Thamserku.', duration: '~4–5 hours' },
      { day: 'Day 4', location: 'Namche to Kyangjuma (3,550m)', description: 'Journey through high-altitude environments, dense woodlands, and local communities. Kyangjuma provides magnificent Himalayan panoramas and an excellent stopover for altitude adjustment.', duration: '~3–4 hours' },
      { day: 'Day 5', location: 'Kyangjuma to Pangboche (3,930m)', description: 'Trek past elevated settlements and sacred mani walls, arriving at Pangboche, which houses one of the area\'s most venerable monasteries.', duration: '~6–7 hours' },
      { day: 'Day 6', location: 'Pangboche to Dingboche (4,360m)', description: 'Climb through high-altitude grasslands and glacial remnants to reach Dingboche, an important acclimatization point with magnificent perspectives of Lhotse and Ama Dablam.', duration: '~3–4 hours' },
      { day: 'Day 7', location: 'Rest and Acclimatization in Dingboche (4,360m)', description: 'Dedicate this day to recuperation or take a brief exploration to nearby scenic spots. Acclimatization is crucial for high-altitude mountain trekking.', duration: 'Optional excursions' },
      { day: 'Day 8', location: 'Dingboche to Lobuche (4,930m)', description: 'Trek across glacial valleys and rocky terrain to arrive at Lobuche. Take in the surrounding summits and gear up for the Everest Base Camp adventure ahead.', duration: '~6 hours' },
      { day: 'Day 9', location: 'Lobuche to Gorak Shep and Everest Base Camp (5,288m)', description: 'Navigate rugged pathways to Gorak Shep, then proceed to the legendary Everest Base Camp, the pinnacle of this mountain expedition. Behold stunning vistas of the Khumbu Glacier and towering peaks.', duration: '~7–8 hours' },
      { day: 'Day 10', location: 'Kala Patthar (5,545m) and Return to Pheriche (4,360m)', description: 'Rise early for an ascent to Kala Patthar to witness the most stunning sunrise panorama of Mount Everest. Descend to Pheriche, savoring the high-altitude mountain landscape.', duration: '~8–9 hours' },
      { day: 'Day 11', location: 'Pheriche to Namche Bazaar (3,440m)', description: 'Trek downward through elevated valleys, stopping at mountain communities along the way. Return to Namche Bazaar for relaxation and local shopping.', duration: '~9–10 hours' },
      { day: 'Day 12', location: 'Namche Bazaar to Lukla (2,800m)', description: 'Final trekking stretch through woodlands, hanging bridges, and Sherpa communities. Reach Lukla and celebrate your remarkable Everest Base Camp accomplishment.', duration: '~7 hours' },
      { day: 'Day 13', location: 'Lukla to Kathmandu (1,350m)', description: 'Take a scenic flight back to Kathmandu. Reflect on your extraordinary mountain adventure and cherished experiences in Nepal\'s legendary Himalayas.', duration: '~40 minutes' },
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
    image: '/assets/langtang-trek/langtang.webp',
    difficulty: 'Easy to Moderate',
    duration: '8 Days',
    altitude: '4,984m',
    distance: '50 km',
    bestSeason: 'March & October',
    price: '$799',
    rating: 4.6,
    reviews: 412,
    
    overview: 'Venture into the breathtaking Langtang Valley, a secluded mountain sanctuary. Navigate through verdant woodlands, welcoming communities, and untamed mountain terrain. Ideal for adventurers with limited schedules seeking complete mountain immersion without sacrificing natural beauty.',
    
    highlights: [
      'Journey through lush woodlands and high-altitude grasslands',
      'Experience life in genuine Tamang mountain villages',
      'Marvel at Langtang Glacier from close proximity',
      'Excellent option for time-conscious mountain enthusiasts',
      'Abundant wildlife and panoramic mountain vistas',
      'Spectacular alpine valley views',
      'Relaxing natural thermal springs',
    ],
    
    itinerary: [
      { day: 'Day 1', location: 'Kathmandu to Syabrubesi (1,460m)', description: 'Embark on an inspiring vehicle journey (~7 hours) from Kathmandu to Syabrubesi, your entry point to the Langtang adventure. Absorb the magnificent views of waterways, elevated terrain, and cultivated hillsides while approaching the Langtang region.', duration: '~7 hours' },
      { day: 'Day 2', location: 'Syabrubesi to Lama Hotel (2,470m)', description: 'Begin your mountain expedition through thick woodland areas, crossing hanging footbridges and passing quaint communities. Lama Hotel, situated in a peaceful setting, provides warmth and introduces you to authentic Himalayan hospitality.', duration: '~6 hours' },
      { day: 'Day 3', location: 'Lama Hotel to Langtang Valley (3,550m)', description: 'The pathway climbs progressively through high-altitude grasslands, flowing streams, and coniferous woodlands. Delight in magnificent perspectives of Langtang Lirung and neighboring Himalayan summits during this scenic portion of your adventure.', duration: '~6 hours' },
      { day: 'Day 4', location: 'Langtang Valley to Kyanjin Gompa (3,800m)', description: 'Approach the valley\'s spiritual and cultural epicenter, Kyanjin Gompa. Tour the sacred site, see traditional yak dairy workshops, and immerse yourself in the surrounding elevated landscapes.', duration: '~4 hours' },
      { day: 'Day 5', location: 'Excursion to Kyanjin Ri / Tsergo Ri (4,984m)', description: 'Take on an exhilarating climb to Kyanjin Ri or Tsergo Ri, rewarded with expansive 360° vistas of the Langtang mountain range and distant peaks including Ganesh Himal. This expedition represents the pinnacle of your Himalayan mountain trekking experience.', duration: '~4–5 hours' },
      { day: 'Day 6', location: 'Kyanjin Gompa to Lama Hotel (2,470m)', description: 'Retrace your footsteps along the identical beautiful pathway back to Lama Hotel, relishing perspectives of waterways, dense woodlands, and towering summits.', duration: '~6 hours' },
      { day: 'Day 7', location: 'Lama Hotel to Syabrubesi Hot Springs (1,460m)', description: 'Continue your descent toward Syabrubesi, ending this segment at nature\'s thermal springs. Indulge in a refreshing soak in the warm mineral waters, an ideal method to ease sore muscles following your mountain adventure.', duration: '~5 hours' },
      { day: 'Day 8', location: 'Syabrubesi to Kathmandu (1,350m)', description: 'Complete your Langtang Valley adventure with a road journey back to Kathmandu (~7 hours). Contemplate your remarkable mountain adventure, serene communities, and unforgettable panoramic mountain vistas.', duration: '~7 hours' },
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
    image: '/assets/narphu-valley/narphu_valley.webp',
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
      'Untouched wilderness experience',
      'Encounter yak caravans and nomadic communities',
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
    image: '/assets/mardi-himal/mardi.webp',
    difficulty: 'Moderate',
    duration: '5 Days',
    altitude: '2,910m',
    distance: '28 km',
    bestSeason: 'October & April',
    price: '$549',
    rating: 4.7,
    reviews: 298,
    
    overview: 'Begin your Annapurna adventure with a breathtaking journey into the foothills. This trek combines scenic mountain landscapes with authentic local experiences, leading you through charming villages and ancient forests to the base of Mardi Himal.',
    
    highlights: [
      'Sunrise views over the Himalayan range from Mardi Himal Base',
      'Trek through pristine rhododendron and pine forests',
      'Experience rural village life and local hospitality',
      'Panoramic views of Machhapuchhre and Annapurna peaks',
      'Perfect balance of adventure and accessibility',
      'Explore hidden villages and local culture',
      'Ideal trek for beginners and experienced trekkers alike',
    ],
    
    itinerary: [
      {
        day: 'Day 1',
        location: 'Kathmandu to Pokhara',
        description: 'Start with a scenic drive from Kathmandu to Pokhara. Watch as the landscape transforms from bustling city to verdant hills with terraced fields. Stop for lunch and explore Lakeside before settling into your accommodation.',
        duration: '~7 hours drive',
      },
      {
        day: 'Day 2',
        location: 'Pokhara to Lovely Hill',
        description: 'Begin trekking early from Pokhara through lush forests and charming traditional villages. The peaceful hamlet of Lovely Hill awaits, offering a glimpse into the slower pace of mountain life and the first hints of Himalayan vistas.',
        duration: '~4 hours trek',
      },
      {
        day: 'Day 3',
        location: 'Lovely Hill to Low Camp',
        description: 'Ascend steadily through beautiful rhododendron and pine forests. As you gain altitude, views of Machhapuchhre and Annapurna South emerge, perfect for photography. Low Camp sits at a tranquil spot ideal for acclimatization and reflection.',
        duration: '~6 hours trek',
      },
      {
        day: 'Day 4',
        location: 'Low Camp to High Camp',
        description: 'Continue your ascent on alpine trails with increasingly dramatic mountain panoramas. High Camp sits above the treeline, surrounded by sweeping Himalayan vistas. Prepare yourself for tomorrow\'s adventure as you acclimatize to the thinner air.',
        duration: '~5 hours trek',
      },
      {
        day: 'Day 5',
        location: 'High Camp to Mardi Himal Base & Badal Danda',
        description: 'The highlight of your trek awaits. Reach Mardi Himal Base Camp, surrounded by snow-capped peaks piercing the sky. After soaking in the breathtaking views and celebrating your achievement, descend through forests to Badal Danda for your final night.',
        duration: '~7 hours trek',
      },
      {
        day: 'Day 6',
        location: 'Badal Danda to Siding to Pokhara',
        description: 'Begin your descent through forests and villages, retracing your path toward Siding. From here, drive back to Pokhara, reflecting on the serene landscapes and mountain memories you\'ve created. Relax by the lakeside in the evening.',
        duration: '~5-6 hours trek/drive',
      },
      {
        day: 'Day 7',
        location: 'Pokhara to Kathmandu',
        description: 'Complete your Annapurna adventure with the return journey to Kathmandu. Enjoy the scenic drive one final time, passing through rivers, hills, and terraced farmland. Arrive in Kathmandu with unforgettable memories of the mountains.',
        duration: '~7 hours drive',
      },
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
    image: '/assets/annapurna-base-camp/annapurna_base_camp.webp',
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
      'Trek through pristine forests and rhododendron groves',
      'Tranquil alpine meadows and mountain streams',
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
    image: '/assets/gosaikunda/gosaikunda.webp',
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
      'Stunning mountain vistas from alpine heights',
      'Encounters with local trekkers and pilgrims',
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
    image: '/assets/annapurna-circuit/annapurna_circuit.webp',
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
      'Trek through rhododendron forests and terraced fields',
      'Experience multiple ethnic communities and traditions',
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
    image: '/assets/manaslu-circuit/manaslu.webp',
    difficulty: 'Challenging',
    duration: '12 Days',
    altitude: '4,460m',
    distance: '177 km',
    bestSeason: 'September & May',
    price: '$1,399',
    rating: 4.9,
    reviews: 189,
    
    overview: 'Circumnavigate the eighth-tallest mountain on Earth through this secluded and less-traversed circuit. This remote expedition delivers untouched landscapes, genuine Buddhist heritage sites, and magnificent mountain vistas.',
    
    highlights: [
      'Circle Mount Manaslu (8,163m)',
      'Summit Larkya La Pass at 4,460m',
      'Immerse in genuine Buddhist spiritual sites',
      'Navigate through isolated mountain communities',
      'Witness diverse Himalayan vegetation and wildlife',
      'Experience pristine high-altitude wilderness',
      'Encounter breathtaking alpine scenery',
    ],
    
    itinerary: [
      { day: 'Day 1', location: 'Kathmandu to Machha Khola (930m)', description: 'Commence your Manaslu Circuit expedition with a scenic drive from Kathmandu, traveling alongside waterways, elevated agricultural areas, and countryside communities. This extended yet gratifying journey acquaints you with Nepal\'s rural landscape and prepares you mentally for the adventure ahead.', duration: '8–9 hours' },
      { day: 'Day 2', location: 'Machha Khola to Jagat (1,340m)', description: 'Your mountain expedition commences today, navigating across hanging footbridges, cascading waterfalls, and quaint Gurung settlements. Jagat, an inviting community, marks your entrance into the Manaslu Conservation Area.', duration: '6 hours' },
      { day: 'Day 3', location: 'Jagat to Deng (1,804m)', description: 'The pathway climbs progressively through forest terrain and rocky ground. As you gain elevation, mountain panoramas emerge more prominently, and you venture deeper into the isolated Manaslu region.', duration: '~6 hours' },
      { day: 'Day 4', location: 'Deng to Namrung (2,630m)', description: 'Elevation gain transforms the surroundings into coniferous forests and traditional Himalayan-style settlements. Namrung offers breathtaking perspectives of Mt. Manaslu and neighboring alpine summits.', duration: '~6 hours' },
      { day: 'Day 5', location: 'Namrung to Lho (2,957m)', description: 'This reduced-distance trekking day supports improved high-altitude adjustment. Lho village is recognized for the ancient Ribung Monastery and impressive Manaslu Himal vistas.', duration: '~4 hours' },
      { day: 'Day 6', location: 'Lho to Samagaun (3,530m)', description: 'A beautiful expedition through yak grazing areas and glaciated valleys transports you to Samagaun, a premier village along the Manaslu Circuit Trek.', duration: '~6 hours' },
      { day: 'Day 7', location: 'Acclimatization Day in Samagaun (3,530m)', description: 'A vital acclimatization day to adapt to extreme altitude. Optional excursions to Birendra Lake or Manaslu Base Camp deliver spectacular panoramas and aid in preventing altitude illness.' },
      { day: 'Day 8', location: 'Samagaun to Samdo (3,865m)', description: 'A gentle ascending trek carries you nearer the Tibetan frontier. Samdo, an isolated high-altitude settlement, is enclosed by breathtaking Himalayan terrain.', duration: '~3 hours' },
      { day: 'Day 9', location: 'Samdo to Dharamshala (4,460m)', description: 'This essential preparation phase precedes Larkya La Pass crossing. The trail ascends steadily through elevated terrain reaching Dharamshala (Larkya Phedi).', duration: '~4 hours' },
      { day: 'Day 10', location: 'Cross Larkya La Pass (4,460m) to Bimthang (3,590m)', description: 'The trek\'s crowning achievement! Ascending Larkya La Pass, the supreme elevation of the Manaslu Circuit, grants you expansive panoramas of Himlung Himal, Cheo Himal, and Annapurna II. An extended descent proceeds to Bimthang.', duration: '10–11 hours' },
      { day: 'Day 11', location: 'Bimthang to Dharapani (970m)', description: 'Descending via woodlands and river canyons, you reconnect with the Annapurna Circuit pathway at Dharapani, marking your concluding trekking day.', duration: '~7 hours' },
      { day: 'Day 12', location: 'Dharapani to Kathmandu (1,350m)', description: 'Following breakfast, experience a picturesque vehicle journey returning to Kathmandu, concluding your extraordinary Manaslu Circuit Trek experience.', duration: '~7 hours' },
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
