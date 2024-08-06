import { useDebugValue } from "react";
import {
  planIcon,
  walletIcon,
  usersIcon,
  bookingIcon,
  handIcon,
  heartIcon,
  clipboardIcon,
  tourImg1,
  tourImg2,
  tourImg3,
  tourImg4,
  tourImg5,
  tourImg6,
  listingImg1,
  listingImg2,
  listingImg3,
  listingImg4,
  listingImg5,
  listingImg6,
  listingImg7,
  listingImg8,
  flagIcon,
  calendarIcon,
  locationIcon,
  ticketIcon,
  balloonIcon,
  medalIcon,
  diamondIcon,
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg5,
  sliderImg6,
  sliderImg7,
  sliderImg8,
  articleImg1,
  articleImg2,
  articleImg3,
  articleImg4,
  articleImg5,
  articleImg6,
  articleImg7,
  articleImg8,
  articleImg9,
  facebookIcon,
  instagramIcon,
  twitterIcon,
  linkedinIcon,
  listedImg1,
  listedImg2,
  listedImg3,
  listedImg4,
  listedImg5,
  listedImg6,
  mensIcon,
  genderIcon,
  clockIcon,
  languageIcon,
  priceTagIcon,
  bedIcon,
  operatorIcon,
  foodIcon,
  amenitiesIcon,
} from "../assets/media";

export const dashboardCard = [
  {
    id: 4,
    tagline: "Total Revenue",
    number: "$10000",
    count: "$500",
    icon: walletIcon,
  },
  {
    id: 1,
    tagline: "Total Tours",
    number: 1500,
    count: "30+",
    icon: planIcon,
  },
  {
    id: 2,
    tagline: "Total Users",
    number: 800,
    count: "40+",
    icon: usersIcon,
  },
  {
    id: 3,
    tagline: "Total Bookings",
    number: 5000,
    count: "70+",
    icon: bookingIcon,
  },
];
export const DashboardHeadingCardData = [
  {
    id: 1,
    title: "Discover Your Next Adventure",
    content:
      "Dive into a world filled with unique and unforgettable experiences. Discover destinations that stand out with their exceptional beauty, culture, and charm.",
    icon: handIcon,
  },
  {
    id: 2,
    title: "Travel Your Dreams",
    content:
      "Turn your travel fantasies into reality. Whether it’s a luxurious getaway or a budget-friendly adventure, we help you plan and embark on the trip you’ve always dreamed of.",
    icon: heartIcon,
  },
  {
    id: 3,
    title: "Journey Beyond Expectation",
    content:
      "Go beyond the usual travel destinations and uncover places that exceed your wildest dreams. Experience travel that surpasses all your expectations with unparalleled service and unforgettable experiences.",
    icon: clipboardIcon,
  },
];
export const recentActivitesContent = [
  {
    id: 1,
    content: "John Doe made a new booking for a luxurious getaway to Forest.",
    date: "10/02/2024",
    icon: planIcon,
  },
  {
    id: 2,
    content: "Dollie Horton left a review on House on the Northridge.",
    date: "10/03/2024",
    icon: clipboardIcon,
  },
  {
    id: 3,
    content: "Someone favorites your Triple Story House for Rent listing.",
    date: "10/04/2024",
    icon: heartIcon,
  },
  {
    id: 4,
    content: "Dollie Horton left a review on House on the Northridge.",
    date: "10/04/2024",
    icon: clipboardIcon,
  },
];

export const approvedToursData = [
  {
    id: "#485",
    image: tourImg1,
    description:
      "Experience the thrill of the Colosseum as you embark on a luxurious getaway.",
    startDate: "10/02/2024",
    endDate: "10/12/2024",
    details: "5 People",
    price: "$460",
    status: "Approved",
  },
  {
    id: "#486",
    image: tourImg2,
    description: "Zipline 18 Platform and ATV Adventure Tour.",
    startDate: "10/01/2024",
    endDate: "10/10/2024",
    details: "3 People",
    price: "$450",
    status: "Approved",
  },
  {
    id: "#487",
    image: tourImg3,
    description:
      "Experience the thrill of the Colosseum as you embark on a luxurious getaway.",
    startDate: "10/01/2024",
    endDate: "10/10/2024",
    details: "3 People",
    price: "$450",
    status: "Approved",
  },
];
export const pendingToursData = [
  {
    id: "#485",
    image: tourImg4,
    description:
      "Experience the thrill of the Colosseum as you embark on a luxurious getaway.",
    startDate: "10/02/2024",
    endDate: "10/12/2024",
    details: "5 People",
    price: "$460",
    status: "Pending",
  },
  {
    id: "#486",
    image: tourImg5,
    description: "Zipline 18 Platform and ATV Adventure Tour.",
    startDate: "10/01/2024",
    endDate: "10/10/2024",
    details: "3 People",
    price: "$450",
    status: "Pending",
  },
];
export const cancelledToursData = [
  {
    id: "#485",
    image: tourImg6,
    description:
      "Experience the thrill of the Colosseum as you embark on a luxurious getaway.",
    startDate: "10/02/2024",
    endDate: "10/12/2024",
    details: "5 People",
    price: "$460",
    status: "Cencelled",
  },
];

export const listingCardData = [
  {
    id: 1,
    image: listingImg1,
    location: "Paris, France",
    title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
    rating: "5.0 (243)",
    startingPrice: "$189.25",
    endingPrice: "$1189.25",
    days: "4 days",
  },
  {
    id: 2,
    image: listingImg2,
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: "5.0 (343)",
    startingPrice: "$225",
    endingPrice: "$1225",
    days: "8 days",
  },
  {
    id: 3,
    image: listingImg3,
    location: "London, UK",
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    rating: "5.0 (247)",
    startingPrice: "$943",
    endingPrice: "$1943",
    days: "7 days",
  },
  {
    id: 4,
    image: listingImg4,
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "5.0 (241)",
    startingPrice: "$771",
    endingPrice: " $1771",
    days: "1 days",
  },
  {
    id: 5,
    image: listingImg5,
    location: "Paris, France",
    title: "Space Center Houston Admission Ticket",
    rating: "5.0 (246)",
    startingPrice: "$189.25",
    endingPrice: " $1189.25",
    days: "5 days",
  },
  {
    id: 6,
    image: listingImg6,
    location: "New York, USA",
    title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
    rating: "5.0 (244)",
    startingPrice: "$225",
    endingPrice: "$1225",
    days: "3 days",
  },
];

export const favoriteCardsData = [
  {
    id: 1,
    image: listingImg1,
    location: "London, UK",
    title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
    rating: "5.0 (247)",
    startingPrice: "$943",
    endingPrice: "$1943",
    days: "7 days",
  },
  {
    id: 2,
    image: listingImg2,
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "5.0 (241)",
    startingPrice: "$451",
    endingPrice: " $4571",
    days: "4 days",
  },
  {
    id: 3,
    image: listingImg3,
    location: "Paris, France",
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    rating: "5.0 (241)",
    startingPrice: "$234",
    endingPrice: " $2340",
    days: "7 days",
  },
  {
    id: 4,
    image: listingImg4,
    location: "London, UK",
    title: "History and Hauntings of Salem Guided Walking Tour",
    rating: "5.0 (241)",
    startingPrice: "$177",
    endingPrice: " $1774",
    days: "5 days",
  },
  {
    id: 7,
    image: listingImg7,
    location: "New York, USA",
    title: "Space Center Houston Admission Ticket",
    rating: "5.0 (544)",
    startingPrice: "$457",
    endingPrice: " $4573",
    days: "4 days",
  },
  {
    id: 8,
    image: listingImg8,
    location: "Paris, France",
    title: "Mauna Kea Summit Sunset and Stars Free Astro Photos",
    rating: "5.0 (244)",
    startingPrice: "$123",
    endingPrice: " $1232",
    days: "5 days",
  },
  {
    id: 5,
    image: listingImg5,
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: "5.0 (241)",
    startingPrice: "$231",
    endingPrice: " $2314",
    days: "4 days",
  },
  {
    id: 6,
    image: listingImg6,
    location: "Paris, France",
    title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
    rating: "5.0 (241)",
    startingPrice: "$333",
    endingPrice: " $3334",
    days: "3 days",
  },
];

export const messagesData = [
  {
    name: "Mario",
    avatarImage: "https://i.pravatar.cc/150?img=13",
    msgLine: "Head of Development",
    time: "35 mins",
    Badge: true,
  },
  {
    name: "Yoshi",
    avatarImage: "https://i.pravatar.cc/150?img=3",
    msgLine: "Head of Finance",
    time: "20 mins",
    Badge: false,
  },
  {
    name: "Peach",
    avatarImage: "https://i.pravatar.cc/150?img=4",
    msgLine: "Head of Operations",
    time: "15 mins",
    Badge: false,
  },
  {
    name: "Ken",
    avatarImage: "https://i.pravatar.cc/150?img=5",
    msgLine: "Head of Sales",
    time: "10 mins",
    Badge: true,
  },
  {
    name: "Wario",
    avatarImage: "https://i.pravatar.cc/150?img=7",
    msgLine: "Head of Human Resources",
    time: "30 mins",
    Badge: false,
  },
  {
    name: "Daisy",
    avatarImage: "https://i.pravatar.cc/150?img=9",
    msgLine: "Head of Legal",
    time: "40 mins",
    Badge: true,
  },
  {
    name: "Rosalina",
    avatarImage: "https://i.pravatar.cc/150?img=10",
    msgLine: "Head of Public Relations",
    time: "25 mins",
    Badge: false,
  },
  {
    name: "Birdo",
    avatarImage: "https://i.pravatar.cc/150?img=11",
    msgLine: "Head of IT",
    time: "10 mins",
    Badge: true,
  },
  {
    name: "Toadette",
    avatarImage: "https://i.pravatar.cc/150?img=12",
    msgLine: "Head of Finance",
    time: "50 mins",
    Badge: false,
  },
];

export const searchItemData = [
  {
    icon: locationIcon,
    title: "Where",
    description: "Search Destinations",
  },
  {
    icon: calendarIcon,
    title: "When",
    description: "July 05 ~ August 14",
  },
  {
    icon: flagIcon,
    title: "Tour Type",
    description: "All Tour",
  },
];

export const chooseTourCardData = [
  {
    id: 1,
    icon: ticketIcon,
    title: "Ultimate flexibility",
    description:
      "You're in control, with free cancellation and payment options to satisfy any plan or budget.",
  },
  {
    id: 2,
    icon: balloonIcon,
    title: "Memorable experiences",
    description:
      "Browse and book tours and activities so incredible, you'll want to tell your friends.",
  },
  {
    id: 3,
    icon: diamondIcon,
    title: "Quality at our core",
    description:
      "High-quality standards. Millions of reviews. A tourz company.",
  },
  {
    id: 4,
    icon: medalIcon,
    title: "Award-winning support",
    description: "New price? New plan? No problem. We're here to help, 24/7.",
  },
];

export const destinationsData = [
  {
    id: 1,
    image: sliderImg1,
    name: "Paris",
    tagLine: "100+ Tour",
  },
  {
    id: 2,
    image: sliderImg2,
    name: "Singapore",
    tagLine: "300+ Tour",
  },
  {
    id: 3,
    image: sliderImg3,
    name: "Roma",
    tagLine: "200+ Tour",
  },
  {
    id: 4,
    image: sliderImg4,
    name: "Bangkok",
    tagLine: "170+ Tour",
  },
  {
    id: 5,
    image: sliderImg5,
    name: "Bali",
    tagLine: "150+ Tour",
  },
  {
    id: 6,
    image: sliderImg6,
    name: "Phuket",
    tagLine: "100+ Tour",
  },
  {
    id: 7,
    image: sliderImg7,
    name: "Tokyo",
    tagLine: "120+ Tour",
  },
  {
    id: 8,
    image: sliderImg8,
    name: "Cappadocia",
    tagLine: "200+ Tour",
  },
];

export const articleData = [
  {
    id: 1,
    image: articleImg1,
    date: "July 29 2024",
    author: "By Lavish Meton",
    title: "Kenya vs Tanzania Safari: The Better African Safari Experience",
  },
  {
    id: 2,
    image: articleImg2,
    date: "July 29 2024",
    author: "By Samon Juicy",
    title: "Exploring the Serengeti: A Wildlife Adventure",
  },
  {
    id: 3,
    image: articleImg3,
    date: "July 29 2024",
    author: "By Saim Jauo",
    title: "Into the Wild: An Unforgettable Safari Journey",
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: facebookIcon,
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: instagramIcon,
    link: "https://www.instagram.com/",
  },
  {
    id: 3,
    icon: twitterIcon,
    link: "https://www.twitter.com/",
  },
  {
    id: 4,
    icon: linkedinIcon,
    link: "https://www.linkedin.com/",
  },
];

export const fotterLinks = [
  {
    id: 2,
    title: "Company",
    links: [
      { id: 1, link: "About Us" },
      { id: 2, link: "Tourz Reviews" },
      { id: 3, link: "Contact Us" },
      { id: 4, link: "Travel Guides" },
      { id: 5, link: "Data Policy" },
      { id: 6, link: "Cookie Policy" },
      { id: 7, link: "Legal" },
      { id: 8, link: "Sitemap" },
    ],
  },
  {
    id: 1,
    title: "Help & Support",
    links: [
      { id: 1, link: "FAQs" },
      { id: 2, link: "Customer Support" },
      { id: 3, link: "Return Policy" },
    ],
  },
];

export const reviews = [
  {
    id: 1,
    image: "https://i.pravatar.cc/150?img=5",
    name: "Ken Smith",
    role: "Traveler",
    review:
      "I had an amazing experience with this company. The service was top-notch, and the staff was incredibly friendly. I highly recommend them!",
    title: "Excellent Service!",
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/150?img=9",
    name: "Alice Johnson",
    role: "Explorer",
    review:
      "The best travel company I've ever used. Their tours are fantastic, and the guides are very knowledgeable. I can't wait to go on another adventure with them.",
    title: "Awesome Experience!",
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/150?img=12",
    name: "David Williams",
    role: "Adventurer",
    review:
      "The tours in this website are great. I had been really enjoying with my family! The team is very professional and takes care of the customers. Will surely recommend it to my friends.",
    title: "Great Adventures!!",
  },
  {
    id: 4,
    image: "https://i.pravatar.cc/150?img=14",
    name: "David Williams",
    role: "Adventurer",
    review:
      "The tours in this website are great. I had been really enjoying with my family! The team is very professional and takes care of the customers. Will surely recommend it to my friends.",
    title: "Wonderfull Adventures!!",
  },
  {
    id: 5,
    image: "https://i.pravatar.cc/150?img=16",
    name: "Jhon Williams",
    role: "Adventurer",
    review:
      "The tours in this website are great. I had been really enjoying with my family! The team is very professional and takes care of the customers. Will surely recommend it to my friends.",
    title: "Amazing Tour!!",
  },
];

export const tourListedData = [
  {
    id: 1,
    image: listedImg1,
    location: "Paris, France",
    title: "Eiffel Tower Guided Tour with Summit Access",
    description:
      "Enjoy a guided tour of the Eiffel Tower with access to the summit.",
    oldPrice: "1500",
    price: "1799",
    rating: 4.9,
    reviews: 2500,
    offer: true,
    duration: "2 Days 1 Night",
  },
  {
    id: 2,
    image: listedImg2,
    location: "Rome, Italy",
    title: "Colosseum, Roman Forum, and Palatine Hill Tour",
    description:
      "Discover the ancient wonders of Rome with a guided tour of the Colosseum, Roman Forum, and Palatine Hill.",
    oldPrice: "200",
    price: "180",
    rating: 4.7,
    reviews: 3400,
    offer: true,
    duration: "3 Days 2 Nights",
  },
  {
    id: 3,
    image: listedImg3,
    location: "Kyoto, Japan",
    title: "Kyoto Full-Day Private Tour with Local Guide",
    description:
      "Explore the cultural and historical highlights of Kyoto with a private local guide.",
    oldPrice: "2999",
    price: "3999",
    rating: 4.8,
    reviews: 1200,
    duration: "1 Day",
    offer: false,
  },
  {
    id: 4,
    image: listedImg4,
    location: "New York, USA",
    title: "Statue of Liberty and Ellis Island Guided Tour",
    description: "Visit two iconic landmarks of New York with an expert guide.",
    oldPrice: "1999",
    price: "2899",
    rating: 4.6,
    reviews: 2200,
    duration: "4 Days 3 Nights",
    offer: true,
  },
  {
    id: 5,
    image: listedImg5,
    location: "Sydney, Australia",
    title: "Sydney Opera House Guided Walking Tour For Enterprise",
    description:
      "Get an insider's look at the Sydney Opera House with a guided walking tour.",
    oldPrice: "1040",
    price: "1500",
    rating: 4.7,
    reviews: 1300,
    duration: "5 Hours",
    offer: false,
  },
  {
    id: 6,
    image: listedImg6,
    location: "Cape Town, South Africa",
    title: "Full-Day Cape Peninsula Wonderful Fun Loving journey",
    description:
      "Explore the stunning scenery of the Cape Peninsula with a full-day tour.",
    oldPrice: "1200",
    price: "1300",
    rating: 4.9,
    reviews: 900,
    duration: "6 Days 5 Nights",
    offer: false,
  },
];

export const filterLabels = [
  {
    id: 1,
    title: "Tour Type",
    labels: [
      {
        id: 1,
        label: "Nature Tours",
      },
      {
        id: 2,
        label: "Adventure Tours",
      },
      {
        id: 3,
        label: "Cultural Tours",
      },
      {
        id: 4,
        label: "Food Tours",
      },
      {
        id: 5,
        label: "City Tours",
      },
      {
        id: 6,
        label: "Cruises Tours",
      },
    ],
  },
];
export const durationFilterLabels = [
  {
    id: 1,
    title: "Duration",
    labels: [
      {
        id: 1,
        label: "0-3 hours",
      },
      {
        id: 2,
        label: "3-5 hours",
      },
      {
        id: 3,
        label: "5-7 hours",
      },
      {
        id: 4,
        label: "Full day (7+ hours)",
      },
      {
        id: 5,
        label: "Multi-day",
      },
    ],
  },
];
export const languageFilterLabels = [
  {
    id: 1,
    title: "Language",
    labels: [
      {
        id: 1,
        label: "English",
      },
      {
        id: 2,
        label: "Dutch",
      },
      {
        id: 3,
        label: "German",
      },
      {
        id: 4,
        label: "French",
      },
      {
        id: 5,
        label: "Italian",
      },
    ],
  },
];
export const spcialFilterLabels = [
  {
    id: 1,
    title: "Spcials",
    labels: [
      {
        id: 1,
        label: "Private Tour",
      },
      {
        id: 2,
        label: "Skip-The-Line",
      },
      {
        id: 3,
        label: "Likely to Sell Out",
      },
      {
        id: 4,
        label: "Free Cancellation",
      },
      {
        id: 5,
        label: "Deals & Discounts",
      },
    ],
  },
];
export const sortLabels = [
  {
    id: 1,
    label: " Featured",
  },
  {
    id: 2,
    label: "Steady",
  },
  {
    id: 3,
    label: "Speedy",
  },
  {
    id: 4,
    label: "Furious",
  },
  {
    id: 5,
    label: "Grind",
  },
];

export const tourDetailDataForCustomer = [
  {
    icon: clockIcon,
    title: "Duration",
    description: "3 days",
  },
  {
    icon: mensIcon,
    title: "Group Size",
    description: "10 People",
  },
  {
    icon: genderIcon,
    title: "Ages",
    description: "18 ~ 99 years",
  },
  {
    icon: languageIcon,
    title: "Language",
    description: "English, Japanese",
  },
];

export const planDays = [
  {
    id: "day1",
    title: "Day 1: Airport Pick Up",
    details:
      "On your arrival, we will meet you at the airport and transfer you directly to your hotel. After check-in, you have the rest of the day to relax and explore the local area at your own pace. Get acquainted with your surroundings and enjoy some free time.",
  },
  {
    id: "day2",
    title: "Day 2: Temples & River Cruise",
    details:
      "Start your day with a visit to the famous temples of the city, where you’ll explore ancient architecture and learn about local traditions. In the afternoon, enjoy a relaxing river cruise that offers beautiful views and a chance to see the city from a different perspective.",
  },
  {
    id: "day3",
    title: "Day 3: Massage & Overnight Train",
    details:
      "Indulge in a rejuvenating Thai massage to help you unwind and prepare for your overnight journey. Later, board an overnight train that will take you through scenic landscapes while you rest in comfortable sleeping arrangements.",
  },
  {
    id: "day4",
    title: "Day 4: Khao Sok National Park",
    details:
      "Explore the stunning Khao Sok National Park, known for its lush rainforests, limestone cliffs, and serene lakes. Enjoy activities such as a guided jungle trek or a boat ride on Cheow Lan Lake, immersing yourself in the natural beauty of the area.",
  },
  {
    id: "day5",
    title: "Day 5: Travel to Koh Phangan",
    details:
      "Today, travel to the beautiful island of Koh Phangan. After arriving, you can spend the day relaxing on the sandy beaches, exploring local markets, or enjoying water activities like snorkeling or kayaking.",
  },
  {
    id: "day6",
    title: "Day 6: Morning Chill & Muay Thai Lesson",
    details:
      "Start your day with a leisurely breakfast and some downtime. In the afternoon, participate in a Muay Thai lesson, where you’ll learn the basics of this traditional martial art from experienced trainers, providing both a cultural experience and physical activity.",
  },
  {
    id: "day7",
    title: "Day 7: Island Boat Trip",
    details:
      "Embark on a boat trip around the nearby islands, where you’ll have opportunities for swimming, snorkeling, and sunbathing. Discover hidden coves, crystal-clear waters, and enjoy a picturesque day on the sea before returning to your hotel.",
  },
];

export const faqs = [
  {
    id: "faq1",
    question: "What should I expect on the first day of the tour?",
    answer:
      "On the first day, we provide airport pick-up and take you directly to your hotel. It’s a check-in day where you can explore the city and get settled in at your own pace.",
  },
  {
    id: "faq2",
    question: "What activities are included on the second day?",
    answer:
      "The second day includes visits to temples and a river cruise. You’ll get to experience the cultural and historical landmarks as well as a relaxing cruise along the river.",
  },
  {
    id: "faq3",
    question: "How is the overnight train experience on the third day?",
    answer:
      "On the third day, after enjoying a relaxing massage, you will board an overnight train. It’s a unique travel experience with comfortable sleeping arrangements, allowing you to rest while traveling to the next destination.",
  },
  {
    id: "faq4",
    question:
      "What can I expect during the island boat trip on the seventh day?",
    answer:
      "The seventh day features an exciting island boat trip. You’ll visit various islands, enjoy beautiful beaches, and partake in activities like snorkeling and swimming in crystal-clear waters.",
  },
];

export const customerExcellentRating = [
  {
    id: 1,
    ratingTitle: "Location",
    icon: locationIcon,
  },
  {
    id: 2,
    ratingTitle: "Amenities",
    icon: amenitiesIcon,
  },
  {
    id: 3,
    ratingTitle: "Food",
    icon: foodIcon,
  },
  {
    id: 4,
    ratingTitle: "Price",
    icon: priceTagIcon,
  },
  {
    id: 5,
    ratingTitle: "Rooms",
    icon: bedIcon,
  },
  {
    id: 6,
    ratingTitle: "Tour Operator",
    icon: operatorIcon,
  },
];

export const touriestFeedback = [
  {
    id: 1,
    avatarImage: "https://i.pravatar.cc/150?img=7",
    name: "John Doe",
    feedbackText:
      "The tour was incredibly well-organized and executed, making it a memorable experience. I highly recommend it to anyone looking for a relaxing and unforgettable day trip.",
    rating: "5.0",
    date: "April 2024",
    img1: listedImg1,
    img2: listedImg2,
    img3: listedImg3,
  },
  {
    id: 2,
    avatarImage: "https://i.pravatar.cc/150?img=5",
    name: "Ken Hopper",
    feedbackText:
      "Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the stamps as a souvenir. Must see for a Harry Potter fan.",
    rating: "5.0",
    date: "July 2024",
    img1: listedImg4,
    img2: listedImg5,
    img3: listedImg6,
  },
];

export const blogsData = [
  {
    id: 1,
    image: articleImg1,
    date: "July 29 2024",
    author: "By Lavish Meton",
    title: "Kenya vs Tanzania Safari: The Better African Safari Experience",
    tabId: "Africa",
  },
  {
    id: 2,
    image: articleImg2,
    date: "July 29 2024",
    author: "By Samon Juicy",
    title: "Exploring the Serengeti: A Wildlife Adventure",
    tabId: "Africa",
  },
  {
    id: 3,
    image: articleImg3,
    date: "July 29 2024",
    author: "By Saim Jauo",
    title: "Into the Wild: An Unforgettable Safari Journey",
    tabId: "Asia",
  },
  {
    id: 4,
    image: articleImg4,
    date: "August 02 2024",
    author: "By Anita Johnson",
    title: "Discovering the Big Five: A Safari Adventure in Kenya",
    tabId: "Africa",
  },
  {
    id: 5,
    image: articleImg5,
    date: "August 05 2024",
    author: "By Michael Lee",
    title: "The Great Migration: Witnessing Nature's Spectacle",
    tabId: "Europe",
  },
  {
    id: 6,
    image: articleImg6,
    date: "August 10 2024",
    author: "By Jennifer Clark",
    title: "A Photographer's Guide to the Best Safari Spots",
    tabId: "North America Guide",
  },
  {
    id: 7,
    image: articleImg7,
    date: "August 15 2024",
    author: "By David Smith",
    title: "Uncharted Territories: Off-the-Beaten-Path Safaris",
    tabId: "North America Guide",
  },
  {
    id: 8,
    image: articleImg8,
    date: "August 20 2024",
    author: "By Emma Williams",
    title: "Safari Essentials: What to Pack for Your Adventure",
    tabId: "South America Guide",
  },
  {
    id: 9,
    image: articleImg9,
    date: "August 25 2024",
    author: "By Richard Harris",
    title: "Cultural Encounters: Meeting Indigenous Tribes on Safari",
    tabId: "South America Guide",
  },
];

export const blogTabs = [
  {
    id: 1,
    label: "All Guide",
  },
  {
    id: 2,
    label: "Africa",
  },
  {
    id: 3,
    label: "Asia",
  },
  {
    id: 4,
    label: "Europe",
  },
  {
    id: 5,
    label: "North America Guide",
  },
  {
    id: 6,
    label: "South America Guide",
  },
];
