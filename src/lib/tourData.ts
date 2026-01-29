export interface TourPackage {
  id: string
  title: string
  image: string
  rating: number
  reviews: number
  duration: string
  description: string
  highlights: string[]
  itinerary: {
    day: number
    title: string
    description: string
    activities: string[]
  }[]
  inclusions: string[]
  exclusions: string[]
  bestTime: string
  difficulty: string
}

export const tourPackages: TourPackage[] = [
  {
    id: "shimla-kufri-tour",
    title: "Shimla Kufri Tour",
    image: "/shimla.jpg",
    rating: 4.8,
    reviews: 312,
    duration: "3 Days / 2 Nights",
    description: "Experience the queen of hills with scenic beauty and adventure activities. Shimla, the capital of Himachal Pradesh, offers colonial architecture, pleasant weather, and breathtaking mountain views.",
    highlights: [
      "Shimla Mall Road shopping and sightseeing",
      "Kufri Adventure Park activities",
      "Jakhu Temple - highest point in Shimla",
      "Ridge & Scandal Point exploration",
      "Toy train experience (optional)",
      "Local Himachali cuisine tasting"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla",
        description: "Welcome to the Queen of Hills! Check-in to your hotel and relax.",
        activities: [
          "Pick up from Chandigarh/Kalka",
          "Scenic drive to Shimla (3-4 hours)",
          "Hotel check-in and freshen up",
          "Evening walk at Mall Road",
          "Visit Ridge and Christ Church",
          "Dinner and overnight stay"
        ]
      },
      {
        day: 2,
        title: "Kufri Excursion",
        description: "Full day adventure at Kufri with stunning mountain views and activities.",
        activities: [
          "Early breakfast at hotel",
          "Drive to Kufri (30 minutes)",
          "Visit Himalayan Nature Park",
          "Horse riding and yak rides",
          "Adventure activities at Fun World",
          "Panoramic valley views",
          "Return to Shimla for shopping",
          "Overnight stay in Shimla"
        ]
      },
      {
        day: 3,
        title: "Jakhu Temple & Departure",
        description: "Visit the famous Jakhu Temple before heading back with beautiful memories.",
        activities: [
          "Breakfast and check-out",
          "Visit Jakhu Temple (Lord Hanuman)",
          "Enjoy panoramic city views",
          "Visit Scandal Point",
          "Last minute shopping",
          "Drop at Chandigarh/Kalka"
        ]
      }
    ],
    inclusions: [
      "Comfortable AC vehicle for all transfers",
      "2 nights accommodation in 3-star hotel",
      "Daily breakfast",
      "All toll taxes and parking charges",
      "Experienced driver cum guide",
      "All sightseeing as per itinerary"
    ],
    exclusions: [
      "Lunch and dinner",
      "Entry fees to monuments and parks",
      "Adventure activity charges",
      "Personal expenses and tips",
      "Anything not mentioned in inclusions"
    ],
    bestTime: "March to June, September to December",
    difficulty: "Easy"
  },
  {
    id: "manali-special",
    title: "Manali Special",
    image: "/c5.webp",
    rating: 4.9,
    reviews: 285,
    duration: "4 Days / 3 Nights",
    description: "Explore the valley of gods with stunning landscapes, ancient temples, and adventure activities. Manali offers the perfect blend of natural beauty and thrilling experiences.",
    highlights: [
      "Hadimba Temple - ancient cave temple",
      "Vashisht Hot Springs natural bath",
      "Atal Tunnel - world's longest highway tunnel",
      "Sissu & Koksar Valley exploration",
      "Solang Valley adventure activities",
      "Old Manali cafe hopping"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        description: "Arrive in the beautiful valley of Manali and acclimatize to the mountain air.",
        activities: [
          "Pick up from Chandigarh/Delhi",
          "Scenic drive through mountains",
          "Check-in to hotel in Manali",
          "Evening at leisure",
          "Walk around Mall Road",
          "Dinner and overnight stay"
        ]
      },
      {
        day: 2,
        title: "Manali Local Sightseeing",
        description: "Explore the cultural and natural attractions of Manali.",
        activities: [
          "Visit Hadimba Devi Temple",
          "Explore Manu Temple",
          "Vashisht Hot Water Springs bath",
          "Visit Tibetan Monastery",
          "Club House activities",
          "Old Manali exploration",
          "Overnight in Manali"
        ]
      },
      {
        day: 3,
        title: "Atal Tunnel & Sissu Valley",
        description: "Experience the engineering marvel and pristine Lahaul Valley.",
        activities: [
          "Early morning departure",
          "Drive through Atal Tunnel (9.02 km)",
          "Visit Sissu Waterfall",
          "Explore Koksar village",
          "Enjoy snow activities (seasonal)",
          "Photography at scenic spots",
          "Return to Manali",
          "Overnight stay"
        ]
      },
      {
        day: 4,
        title: "Solang Valley & Departure",
        description: "Adventure activities at Solang before bidding farewell to Manali.",
        activities: [
          "Breakfast and check-out",
          "Visit Solang Valley",
          "Optional: Paragliding, zorbing, ropeway",
          "Enjoy mountain views",
          "Departure for Chandigarh/Delhi"
        ]
      }
    ],
    inclusions: [
      "AC vehicle for all transfers and sightseeing",
      "3 nights accommodation in 3-star hotel",
      "Daily breakfast",
      "All toll taxes, parking, and driver allowance",
      "Experienced driver",
      "Fuel charges"
    ],
    exclusions: [
      "Lunch and dinner",
      "Entry fees and permits",
      "Adventure activity charges at Solang",
      "Personal expenses",
      "GST (5%)"
    ],
    bestTime: "March to June, September to November",
    difficulty: "Moderate"
  },
  {
    id: "kashmir-complete",
    title: "Kashmir Complete",
    image: "/dal.webp",
    rating: 4.9,
    reviews: 328,
    duration: "6 Days / 5 Nights",
    description: "Experience paradise on earth with valleys, lakes, and snow-capped mountains. Kashmir offers unparalleled natural beauty, houseboats, and warm hospitality.",
    highlights: [
      "Gulmarg Gondola - Asia's highest cable car",
      "Sonmarg Glacier trekking experience",
      "Pahalgam Valley - Bollywood's favorite",
      "Doodhpathri Meadows exploration",
      "Shikara ride on Dal Lake",
      "Mughal Gardens visit"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Welcome to Paradise on Earth! Experience the famous Dal Lake.",
        activities: [
          "Airport pick up",
          "Transfer to houseboat/hotel",
          "Shikara ride on Dal Lake",
          "Visit floating gardens",
          "Explore local markets",
          "Overnight in Srinagar"
        ]
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg",
        description: "Visit the meadow of flowers and enjoy the Gondola ride.",
        activities: [
          "Drive to Gulmarg (2 hours)",
          "Gondola ride to Apharwat Peak",
          "Snow activities (seasonal)",
          "Horse riding in meadows",
          "Photography at scenic spots",
          "Return to Srinagar",
          "Overnight stay"
        ]
      },
      {
        day: 3,
        title: "Srinagar Local Sightseeing",
        description: "Explore the Mughal heritage and beautiful gardens.",
        activities: [
          "Visit Mughal Gardens - Nishat, Shalimar",
          "Chashme Shahi Garden",
          "Shankaracharya Temple",
          "Hazratbal Shrine",
          "Shopping at Lal Chowk",
          "Overnight in Srinagar"
        ]
      },
      {
        day: 4,
        title: "Srinagar to Pahalgam",
        description: "Journey to the valley of shepherds with stunning landscapes.",
        activities: [
          "Drive to Pahalgam via Saffron fields",
          "Visit Awantipora Ruins",
          "Explore Betaab Valley",
          "Aru Valley visit",
          "Lidder River side walk",
          "Check-in to hotel",
          "Overnight in Pahalgam"
        ]
      },
      {
        day: 5,
        title: "Pahalgam to Sonmarg",
        description: "Visit the meadow of gold with glacier views.",
        activities: [
          "Early departure to Sonmarg",
          "Thajiwas Glacier trek/pony ride",
          "Enjoy snow activities",
          "Sindh River photography",
          "Return to Srinagar",
          "Overnight stay"
        ]
      },
      {
        day: 6,
        title: "Departure",
        description: "Last minute shopping and departure with beautiful memories.",
        activities: [
          "Breakfast and check-out",
          "Visit local handicraft shops",
          "Buy Kashmiri souvenirs",
          "Airport drop",
          "Departure with sweet memories"
        ]
      }
    ],
    inclusions: [
      "AC vehicle for all transfers",
      "5 nights accommodation (hotels/houseboat)",
      "Daily breakfast and dinner",
      "Shikara ride on Dal Lake",
      "All sightseeing as per itinerary",
      "Driver allowance and fuel"
    ],
    exclusions: [
      "Airfare",
      "Gondola tickets at Gulmarg",
      "Pony rides and adventure activities",
      "Lunch",
      "Personal expenses",
      "GST"
    ],
    bestTime: "April to October",
    difficulty: "Moderate"
  },
  {
    id: "delhi-agra-heritage",
    title: "Delhi Agra Heritage",
    image: "/delhi.jpg",
    rating: 4.7,
    reviews: 245,
    duration: "3 Days / 2 Nights",
    description: "Discover India's rich heritage with iconic monuments and spiritual sites. Experience the Golden Triangle's most famous cities.",
    highlights: [
      "Taj Mahal sunrise visit",
      "Red Fort Delhi exploration",
      "Qutub Minar - UNESCO World Heritage",
      "India Gate and Rashtrapati Bhavan",
      "Agra Fort visit",
      "Lotus Temple and Akshardham"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Sightseeing",
        description: "Explore the capital's historical and modern attractions.",
        activities: [
          "Pick up from hotel/airport",
          "Visit Red Fort",
          "Jama Masjid exploration",
          "Chandni Chowk rickshaw ride",
          "India Gate photo stop",
          "Qutub Minar visit",
          "Lotus Temple",
          "Overnight in Delhi"
        ]
      },
      {
        day: 2,
        title: "Delhi to Agra",
        description: "Journey to the city of Taj Mahal via Yamuna Expressway.",
        activities: [
          "Drive to Agra (3-4 hours)",
          "Visit Agra Fort",
          "Explore Itmad-ud-Daulah (Baby Taj)",
          "Mehtab Bagh sunset view of Taj",
          "Shopping at Sadar Bazaar",
          "Overnight in Agra"
        ]
      },
      {
        day: 3,
        title: "Taj Mahal & Departure",
        description: "Witness the magnificent Taj Mahal at sunrise.",
        activities: [
          "Early morning Taj Mahal visit",
          "Explore the monument of love",
          "Photography session",
          "Breakfast at hotel",
          "Optional: Fatehpur Sikri visit",
          "Return to Delhi",
          "Drop at airport/hotel"
        ]
      }
    ],
    inclusions: [
      "AC vehicle for all transfers",
      "2 nights accommodation",
      "Daily breakfast",
      "Monument entry fees",
      "Professional guide",
      "All taxes and parking"
    ],
    exclusions: [
      "Lunch and dinner",
      "Camera fees at monuments",
      "Personal expenses",
      "Tips and gratuities"
    ],
    bestTime: "October to March",
    difficulty: "Easy"
  },
  {
    id: "golden-temple-amritsar",
    title: "Golden Temple Amritsar",
    image: "/gt.jpg",
    rating: 4.9,
    reviews: 456,
    duration: "2 Days / 1 Night",
    description: "Experience spiritual bliss and patriotic fervor in the holy city of Amritsar. Visit the iconic Golden Temple and witness the Wagah Border ceremony.",
    highlights: [
      "Golden Temple Darshan and Langar",
      "Wagah Border Retreat Ceremony",
      "Jallianwala Bagh memorial",
      "Durgiana Temple visit",
      "Partition Museum",
      "Amritsari kulcha tasting"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Golden Temple",
        description: "Experience the spiritual aura of the Golden Temple.",
        activities: [
          "Pick up from Amritsar airport/station",
          "Hotel check-in",
          "Visit Golden Temple (Harmandir Sahib)",
          "Participate in Langar (community kitchen)",
          "Visit Akal Takht",
          "Evening Palki Sahib ceremony",
          "Explore local markets",
          "Overnight in Amritsar"
        ]
      },
      {
        day: 2,
        title: "Wagah Border & Departure",
        description: "Witness the patriotic border ceremony and explore historical sites.",
        activities: [
          "Breakfast at hotel",
          "Visit Jallianwala Bagh",
          "Partition Museum tour",
          "Durgiana Temple visit",
          "Lunch - Amritsari kulcha",
          "Afternoon drive to Wagah Border",
          "Watch Beating Retreat Ceremony",
          "Drop at airport/station"
        ]
      }
    ],
    inclusions: [
      "AC vehicle for all transfers",
      "1 night accommodation",
      "Daily breakfast",
      "Wagah Border seating arrangement",
      "All sightseeing",
      "Driver allowance"
    ],
    exclusions: [
      "Lunch and dinner",
      "Personal expenses",
      "Tips",
      "Anything not mentioned"
    ],
    bestTime: "October to March",
    difficulty: "Easy"
  },
  {
    id: "dharamshala-retreat",
    title: "Dharamshala Retreat",
    image: "/dharam.jpg",
    rating: 4.8,
    reviews: 198,
    duration: "3 Days / 2 Nights",
    description: "Find peace in the Himalayan foothills with Tibetan culture and cricket heritage. Dharamshala offers spiritual retreats, trekking, and stunning mountain views.",
    highlights: [
      "Triund Trek - stunning Dhauladhar views",
      "Bhagsu Waterfall and temple",
      "Dalai Lama Temple Complex",
      "HPCA Cricket Stadium visit",
      "Tibetan culture experience",
      "McLeod Ganj cafes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dharamshala",
        description: "Arrive in the peaceful town and explore McLeod Ganj.",
        activities: [
          "Pick up from Pathankot/Kangra",
          "Drive to Dharamshala",
          "Check-in to hotel in McLeod Ganj",
          "Visit Dalai Lama Temple",
          "Explore Tibetan markets",
          "Evening at leisure",
          "Overnight stay"
        ]
      },
      {
        day: 2,
        title: "Triund Trek",
        description: "Trek to the beautiful Triund hilltop with panoramic views.",
        activities: [
          "Early breakfast",
          "Start trek to Triund (9 km)",
          "Enjoy Dhauladhar mountain views",
          "Packed lunch at top",
          "Photography and relaxation",
          "Descend back to McLeod Ganj",
          "Evening rest",
          "Overnight in hotel"
        ]
      },
      {
        day: 3,
        title: "Local Sightseeing & Departure",
        description: "Explore remaining attractions before departure.",
        activities: [
          "Visit Bhagsu Waterfall",
          "Bhagsunath Temple darshan",
          "HPCA Cricket Stadium",
          "Norbulingka Institute",
          "Tea gardens visit",
          "Shopping for souvenirs",
          "Departure for Pathankot/Kangra"
        ]
      }
    ],
    inclusions: [
      "AC vehicle for transfers",
      "2 nights accommodation",
      "Daily breakfast",
      "All sightseeing",
      "Driver charges",
      "Parking and tolls"
    ],
    exclusions: [
      "Lunch and dinner",
      "Trek guide charges",
      "Personal expenses",
      "Entry fees",
      "Tips"
    ],
    bestTime: "March to June, September to November",
    difficulty: "Moderate to Challenging"
  },
  {
    id: "amarnath-yatra",
    title: "Amarnath Yatra",
    image: "/amarnath.jpg",
    rating: 4.9,
    reviews: 567,
    duration: "5 Days / 4 Nights",
    description: "Embark on a sacred pilgrimage to the holy Amarnath Cave. Experience divine blessings at one of Hinduism's most revered shrines with the naturally formed ice Shiva Lingam.",
    highlights: [
      "Holy Amarnath Cave Darshan",
      "Baltal or Pahalgam route options",
      "Scenic helicopter services available",
      "Spiritual atmosphere and devotion",
      "Beautiful mountain landscapes",
      "Well-organized yatra arrangements"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Arrive in Srinagar and prepare for the sacred journey.",
        activities: [
          "Airport pick up",
          "Transfer to hotel in Srinagar",
          "Medical check-up and registration",
          "Yatra briefing and preparations",
          "Visit local market for essentials",
          "Early dinner and rest"
        ]
      },
      {
        day: 2,
        title: "Srinagar to Baltal/Pahalgam",
        description: "Journey to the base camp for Amarnath Yatra.",
        activities: [
          "Early morning departure",
          "Drive to Baltal or Pahalgam base camp",
          "Registration and security check",
          "Check-in to camp accommodation",
          "Acclimatization and rest",
          "Evening prayers",
          "Overnight at base camp"
        ]
      },
      {
        day: 3,
        title: "Amarnath Cave Darshan",
        description: "The sacred day of pilgrimage to Amarnath Cave.",
        activities: [
          "Very early morning start (2-3 AM)",
          "Trek/pony ride to Amarnath Cave",
          "Holy Darshan of ice Shiva Lingam",
          "Prayers and offerings",
          "Return trek to base camp",
          "Rest and recuperation",
          "Overnight at base camp"
        ]
      },
      {
        day: 4,
        title: "Return to Srinagar",
        description: "Journey back to Srinagar after completing the yatra.",
        activities: [
          "Breakfast at base camp",
          "Drive back to Srinagar",
          "Check-in to hotel",
          "Rest and relaxation",
          "Optional: Shikara ride on Dal Lake",
          "Overnight in Srinagar"
        ]
      },
      {
        day: 5,
        title: "Departure",
        description: "Depart with divine blessings and memories.",
        activities: [
          "Breakfast at hotel",
          "Last minute shopping",
          "Visit Shankaracharya Temple (optional)",
          "Airport drop",
          "Departure with blessings"
        ]
      }
    ],
    inclusions: [
      "AC vehicle for all transfers",
      "4 nights accommodation (hotel + camps)",
      "Daily breakfast and dinner",
      "Yatra registration assistance",
      "Medical support at base camp",
      "All permits and entry fees"
    ],
    exclusions: [
      "Helicopter charges (if opted)",
      "Pony/porter charges",
      "Personal medical expenses",
      "Travel insurance",
      "Lunch and snacks",
      "Tips and donations"
    ],
    bestTime: "July to August (Yatra season only)",
    difficulty: "Challenging"
  },
  {
    id: "vaishno-devi-yatra",
    title: "Mata Vaishno Devi Yatra",
    image: "/devii.jpg",
    rating: 4.9,
    reviews: 892,
    duration: "3 Days / 2 Nights",
    description: "Seek blessings at the sacred shrine of Mata Vaishno Devi. Experience divine spirituality at one of India's most visited pilgrimage sites nestled in the Trikuta Mountains.",
    highlights: [
      "Holy Darshan at Vaishno Devi Temple",
      "Bhairon Temple visit",
      "Ardhkuwari Cave temple",
      "Ropeway and helicopter options",
      "24/7 yatra facilities",
      "Spiritual and peaceful atmosphere"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Katra",
        description: "Arrive at the base town and prepare for the pilgrimage.",
        activities: [
          "Pick up from Jammu airport/station",
          "Drive to Katra (2 hours)",
          "Check-in to hotel",
          "Yatra slip collection",
          "Visit Katra market",
          "Evening aarti at local temple",
          "Early dinner and rest"
        ]
      },
      {
        day: 2,
        title: "Vaishno Devi Darshan",
        description: "The sacred day of pilgrimage to Mata's shrine.",
        activities: [
          "Early morning start (2-3 AM recommended)",
          "Trek/pony ride to Bhawan (13 km)",
          "Holy Darshan at main shrine",
          "Prayers and offerings",
          "Visit Bhairon Temple (optional)",
          "Return trek to Katra",
          "Rest at hotel",
          "Overnight in Katra"
        ]
      },
      {
        day: 3,
        title: "Departure",
        description: "Depart with Mata's blessings.",
        activities: [
          "Breakfast at hotel",
          "Check-out",
          "Optional: Visit Ardhkuwari Temple",
          "Shopping for prasad",
          "Drop at Jammu airport/station",
          "Departure"
        ]
      }
    ],
    inclusions: [
      "AC vehicle for Jammu-Katra transfers",
      "2 nights accommodation in Katra",
      "Daily breakfast",
      "Yatra registration assistance",
      "All toll taxes and parking"
    ],
    exclusions: [
      "Helicopter/ropeway charges",
      "Pony/palanquin charges",
      "Lunch and dinner",
      "Offerings and donations",
      "Personal expenses",
      "Battery car charges"
    ],
    bestTime: "September to June (avoid monsoon)",
    difficulty: "Moderate"
  },
  {
    id: "rajasthan-royal-tour",
    title: "Rajasthan Royal Tour",
    image: "/delhi.jpg",
    rating: 4.8,
    reviews: 445,
    duration: "7 Days / 6 Nights",
    description: "Explore the royal heritage of Rajasthan covering Jaipur, Jodhpur, and Jaisalmer. Experience magnificent forts, palaces, desert safaris, and rich cultural traditions.",
    highlights: [
      "Jaipur - Pink City exploration",
      "Jodhpur - Blue City and Mehrangarh Fort",
      "Jaisalmer - Golden City and desert safari",
      "Camel safari in Thar Desert",
      "Royal palaces and forts",
      "Traditional Rajasthani culture"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        description: "Welcome to the Pink City of India.",
        activities: [
          "Airport/station pick up",
          "Check-in to hotel",
          "Visit Birla Temple",
          "Evening at Chokhi Dhani (optional)",
          "Traditional Rajasthani dinner",
          "Overnight in Jaipur"
        ]
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        description: "Explore the magnificent monuments of Jaipur.",
        activities: [
          "Visit Amber Fort with elephant ride",
          "Jal Mahal photo stop",
          "City Palace and museum",
          "Jantar Mantar observatory",
          "Hawa Mahal (Palace of Winds)",
          "Shopping at Johari Bazaar",
          "Overnight in Jaipur"
        ]
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur",
        description: "Journey to the Blue City.",
        activities: [
          "Breakfast and check-out",
          "Drive to Jodhpur (5-6 hours)",
          "Check-in to hotel",
          "Visit Jaswant Thada",
          "Evening at Clock Tower market",
          "Overnight in Jodhpur"
        ]
      },
      {
        day: 4,
        title: "Jodhpur Sightseeing",
        description: "Explore the majestic Mehrangarh Fort.",
        activities: [
          "Visit Mehrangarh Fort",
          "Museum and palace tour",
          "Umaid Bhawan Palace (exterior)",
          "Mandore Gardens",
          "Blue city walking tour",
          "Local handicraft shopping",
          "Overnight in Jodhpur"
        ]
      },
      {
        day: 5,
        title: "Jodhpur to Jaisalmer",
        description: "Travel to the Golden City of the desert.",
        activities: [
          "Drive to Jaisalmer (5-6 hours)",
          "Check-in to hotel",
          "Visit Gadisar Lake",
          "Evening walk in old city",
          "Sunset at fort ramparts",
          "Overnight in Jaisalmer"
        ]
      },
      {
        day: 6,
        title: "Jaisalmer Fort & Desert Safari",
        description: "Experience the golden fort and desert adventure.",
        activities: [
          "Jaisalmer Fort exploration",
          "Patwon Ki Haveli visit",
          "Salim Singh Ki Haveli",
          "Afternoon drive to Sam Sand Dunes",
          "Camel safari in desert",
          "Cultural program and dinner",
          "Overnight at desert camp"
        ]
      },
      {
        day: 7,
        title: "Departure",
        description: "Farewell to the royal land of Rajasthan.",
        activities: [
          "Sunrise at sand dunes",
          "Breakfast at camp",
          "Return to Jaisalmer",
          "Last minute shopping",
          "Drop at airport/station",
          "Departure"
        ]
      }
    ],
    inclusions: [
      "AC vehicle for all transfers and sightseeing",
      "6 nights accommodation (hotels + desert camp)",
      "Daily breakfast",
      "Desert safari with cultural program",
      "All monument entry fees",
      "Professional guide services"
    ],
    exclusions: [
      "Lunch and dinner (except desert camp)",
      "Elephant ride at Amber Fort",
      "Camera fees at monuments",
      "Personal expenses",
      "Tips and gratuities"
    ],
    bestTime: "October to March",
    difficulty: "Easy"
  },
  {
    id: "nainital-retreat",
    title: "Nainital Lake Paradise",
    image: "/nanital.jpg",
    rating: 4.7,
    reviews: 334,
    duration: "4 Days / 3 Nights",
    description: "Escape to the beautiful lake town of Nainital nestled in the Kumaon hills. Enjoy boating, scenic viewpoints, and pleasant weather in this charming hill station.",
    highlights: [
      "Naini Lake boating experience",
      "Mall Road shopping and cafes",
      "Naina Devi Temple visit",
      "Snow View Point cable car",
      "Tiffin Top and Land's End",
      "Scenic mountain views"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nainital",
        description: "Welcome to the Lake District of India.",
        activities: [
          "Pick up from Kathgodam station/Pantnagar airport",
          "Scenic drive to Nainital",
          "Check-in to hotel",
          "Evening walk at Mall Road",
          "Boating at Naini Lake",
          "Overnight in Nainital"
        ]
      },
      {
        day: 2,
        title: "Nainital Local Sightseeing",
        description: "Explore the beautiful attractions of Nainital.",
        activities: [
          "Visit Naina Devi Temple",
          "Cable car to Snow View Point",
          "Enjoy panoramic Himalayan views",
          "Visit Governor's House",
          "Explore Tibetan Market",
          "Evening at Mall Road",
          "Overnight in Nainital"
        ]
      },
      {
        day: 3,
        title: "Nainital Excursion",
        description: "Visit nearby scenic spots and viewpoints.",
        activities: [
          "Visit Tiffin Top (Dorothy's Seat)",
          "Land's End viewpoint",
          "Lover's Point",
          "Eco Cave Gardens",
          "Hanuman Garhi temple",
          "Shopping for local handicrafts",
          "Overnight in Nainital"
        ]
      },
      {
        day: 4,
        title: "Departure",
        description: "Farewell to the beautiful lake town.",
        activities: [
          "Breakfast at hotel",
          "Last minute boating (optional)",
          "Check-out",
          "Shopping for candles and souvenirs",
          "Drop at Kathgodam/Pantnagar",
          "Departure"
        ]
      }
    ],
    inclusions: [
      "AC vehicle for all transfers",
      "3 nights accommodation",
      "Daily breakfast",
      "Boating at Naini Lake",
      "All sightseeing as per itinerary",
      "Driver allowance and fuel"
    ],
    exclusions: [
      "Lunch and dinner",
      "Cable car charges",
      "Entry fees to attractions",
      "Personal expenses",
      "Tips"
    ],
    bestTime: "March to June, September to November",
    difficulty: "Easy"
  },
  {
    id: "char-dham-yatra",
    title: "Char Dham Yatra",
    image: "/dham.jpg",
    rating: 4.9,
    reviews: 678,
    duration: "7 Days / 6 Nights",
    description: "Embark on the sacred Char Dham pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Experience divine spirituality in the lap of the Himalayas.",
    highlights: [
      "Yamunotri - Source of Yamuna River",
      "Gangotri - Origin of Holy Ganga",
      "Kedarnath - One of 12 Jyotirlingas",
      "Badrinath - Abode of Lord Vishnu",
      "Scenic Himalayan landscapes",
      "Spiritual and divine experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Barkot",
        description: "Begin your sacred journey towards Yamunotri.",
        activities: [
          "Pick up from Haridwar/Dehradun",
          "Drive to Barkot via Mussoorie",
          "Scenic mountain roads",
          "Check-in to hotel in Barkot",
          "Evening prayers and briefing",
          "Overnight in Barkot"
        ]
      },
      {
        day: 2,
        title: "Yamunotri Darshan & Drive to Uttarkashi",
        description: "Visit Yamunotri and proceed to Uttarkashi.",
        activities: [
          "Drive to Janki Chatti",
          "Trek/pony ride to Yamunotri (6 km)",
          "Darshan at Yamunotri Temple",
          "Holy dip in Surya Kund",
          "Return and drive to Uttarkashi",
          "Check-in to hotel",
          "Overnight in Uttarkashi"
        ]
      },
      {
        day: 3,
        title: "Gangotri Darshan & Return",
        description: "Visit the origin of Holy Ganga.",
        activities: [
          "Drive to Gangotri",
          "Darshan at Gangotri Temple",
          "Visit Bhagirathi Shila",
          "Holy dip in Ganga",
          "Return to Uttarkashi",
          "Evening aarti",
          "Overnight in Uttarkashi"
        ]
      },
      {
        day: 4,
        title: "Uttarkashi to Guptkashi via Kedarnath",
        description: "Journey to Kedarnath for darshan.",
        activities: [
          "Drive to Gaurikund/Sonprayag",
          "Trek/helicopter to Kedarnath",
          "Darshan at Kedarnath Temple",
          "Prayers at Jyotirlinga",
          "Return to base",
          "Drive to Guptkashi",
          "Overnight in Guptkashi"
        ]
      },
      {
        day: 5,
        title: "Guptkashi to Badrinath",
        description: "Journey to the final dham.",
        activities: [
          "Drive to Badrinath",
          "En route visit Joshimath",
          "Check-in to hotel",
          "Evening darshan at temple",
          "Attend evening aarti",
          "Overnight in Badrinath"
        ]
      },
      {
        day: 6,
        title: "Badrinath Sightseeing",
        description: "Explore Badrinath and nearby attractions.",
        activities: [
          "Early morning darshan",
          "Visit Tapt Kund hot springs",
          "Brahma Kapal rituals",
          "Visit Mana Village",
          "Vyas Gufa and Ganesh Gufa",
          "Bhim Pul",
          "Overnight in Badrinath"
        ]
      },
      {
        day: 7,
        title: "Badrinath to Haridwar",
        description: "Complete the sacred yatra and return.",
        activities: [
          "Early morning final darshan",
          "Drive back to Haridwar",
          "En route visit Devprayag",
          "Arrive Haridwar",
          "Drop at station/airport",
          "Departure with blessings"
        ]
      }
    ],
    inclusions: [
      "AC vehicle for all transfers",
      "6 nights accommodation",
      "Daily breakfast and dinner",
      "All sightseeing as per itinerary",
      "Driver allowance and fuel",
      "All toll taxes and parking"
    ],
    exclusions: [
      "Helicopter charges for Kedarnath",
      "Pony/porter charges",
      "Lunch and snacks",
      "Personal expenses",
      "Travel insurance",
      "Offerings and donations"
    ],
    bestTime: "May to June, September to October",
    difficulty: "Challenging"
  },
  {
    id: "ladakh-adventure",
    title: "Ladakh Adventure",
    image: "/ladakh.jpg",
    rating: 4.9,
    reviews: 523,
    duration: "7 Days / 6 Nights",
    description: "Experience the breathtaking beauty of Ladakh with high-altitude passes, pristine lakes, and ancient monasteries. Adventure through the land of high passes with stunning landscapes.",
    highlights: [
      "Pangong Lake - famous blue water lake",
      "Nubra Valley - sand dunes and camels",
      "Khardung La - world's highest motorable pass",
      "Magnetic Hill phenomenon",
      "Ancient Buddhist monasteries",
      "Leh Palace and local markets"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh",
        description: "Arrive in the land of high passes and acclimatize.",
        activities: [
          "Airport pick up",
          "Transfer to hotel in Leh",
          "Complete rest for acclimatization",
          "Light walk around hotel area",
          "Avoid heavy activities",
          "Early dinner and sleep",
          "Overnight in Leh"
        ]
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        description: "Explore the cultural attractions of Leh.",
        activities: [
          "Visit Shanti Stupa",
          "Leh Palace exploration",
          "Hall of Fame museum",
          "Magnetic Hill experience",
          "Gurudwara Pathar Sahib",
          "Sangam (confluence of Indus & Zanskar)",
          "Evening at Leh market",
          "Overnight in Leh"
        ]
      },
      {
        day: 3,
        title: "Leh to Nubra Valley",
        description: "Cross Khardung La to reach the valley of flowers.",
        activities: [
          "Early morning departure",
          "Drive via Khardung La Pass (18,380 ft)",
          "Photo stop at pass",
          "Descend to Nubra Valley",
          "Check-in to camp/hotel in Hunder",
          "Visit sand dunes",
          "Double-humped camel ride",
          "Overnight in Nubra"
        ]
      },
      {
        day: 4,
        title: "Nubra Valley Exploration",
        description: "Explore the beautiful Nubra Valley.",
        activities: [
          "Visit Diskit Monastery",
          "See giant Buddha statue",
          "Explore Hunder village",
          "Visit Sumur village (optional)",
          "Enjoy valley views",
          "Photography at scenic spots",
          "Overnight in Nubra"
        ]
      },
      {
        day: 5,
        title: "Nubra to Pangong Lake",
        description: "Journey to the famous blue water lake.",
        activities: [
          "Drive to Pangong via Shyok route",
          "Scenic mountain roads",
          "Arrive at Pangong Lake",
          "Check-in to camp",
          "Enjoy lake views",
          "Photography session",
          "Witness color-changing lake",
          "Overnight at Pangong"
        ]
      },
      {
        day: 6,
        title: "Pangong to Leh",
        description: "Return to Leh via Chang La pass.",
        activities: [
          "Sunrise at Pangong Lake",
          "Breakfast with lake view",
          "Drive back to Leh via Chang La",
          "Visit Changla Pass (17,590 ft)",
          "Stop at Thiksey Monastery",
          "Visit Shey Palace",
          "Return to Leh",
          "Overnight in Leh"
        ]
      },
      {
        day: 7,
        title: "Departure from Leh",
        description: "Farewell to the magical land of Ladakh.",
        activities: [
          "Breakfast at hotel",
          "Last minute shopping at Leh market",
          "Buy local handicrafts and souvenirs",
          "Airport drop",
          "Departure with memories"
        ]
      }
    ],
    inclusions: [
      "AC vehicle for all transfers (Innova/Xylo)",
      "6 nights accommodation (hotels + camps)",
      "Daily breakfast and dinner",
      "Inner line permits",
      "All sightseeing as per itinerary",
      "Driver allowance and fuel"
    ],
    exclusions: [
      "Airfare to/from Leh",
      "Lunch and snacks",
      "Camel ride charges",
      "Entry fees to monasteries",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities"
    ],
    bestTime: "May to September",
    difficulty: "Moderate to Challenging"
  }
]

export function getTourById(id: string): TourPackage | undefined {
  return tourPackages.find(tour => tour.id === id)
}

export function getAllTourIds(): string[] {
  return tourPackages.map(tour => tour.id)
}
