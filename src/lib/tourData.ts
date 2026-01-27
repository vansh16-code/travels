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
    image: "/gulmarg.jpg",
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
  }
]

export function getTourById(id: string): TourPackage | undefined {
  return tourPackages.find(tour => tour.id === id)
}

export function getAllTourIds(): string[] {
  return tourPackages.map(tour => tour.id)
}
