//Project images
import {
  communityCalendar,
  animeArchive,
  silentAuction,
  weightLiftingJournal,
} from "../media/img/index.js";

export const projectData = [
  {
    id: 4,
    img: communityCalendar,
    name: "Our Community Calendar",
    appDesc:
      "Residents experience increasing isolation and are frequently unaware of neighborhood and community gatherings in their local area. Municipalities, community organizations, and businesses struggle to reach local residents through noisy social networks and siloed email distribution lists.",
    techStack:
      "React | JavaScript | HTML | AWS | Apollo Client | Apollo Server | GraphQL | Prisma",
    responsibility: [
      "Delivered functoning Web and iOS products built to the stakeholders’ specificatons",
      "Implemented Google Analytics to track user flow and behavior",
      "Conducted productive user research with meaningful results",
      "Developed front-end snapshot and unit tests",
      "Merged home and search page to improve overall functionality while maintaining the apps integrity",
      "Collaborated on a remote team of 5 Web Developers and 3 iOS engineers to create a cohesive experience between web and mobile",
    ],
    liveSite: "https://www.northendcalendar.com/",
    githubRepoToLive:
      "https://github.com/Lambda-School-Labs/community-calendar-fe",
  },
  {
    id: 3,
    img: animeArchive,
    name: "Anime Archive",
    appDesc:
      "A mobile, web-based, online database of information related to anime. Users can discover new anime or level up their love and fandom for their already favorite anime.",
    techStack: "React | JavaScript | HTML | CSS | GraphQL | Netlify",
    responsibility: [
      "Collaborated closely with another Web Developer to design, develop, and integrate a mobile user-friendly interface",
      "Prioritized reusability and readability of components throughout application to minimize code maintenance",
      "Implemented custom query string building function to return query string relative to user search and filter settings",
      "Distributed external API data throughout react application",
    ],
    liveSite: "https://animearchive.netlify.app/",
    githubRepoToLive: "https://github.com/Anime-Archive/anime-archive-fe",
  },
  {
    id: 2,
    img: silentAuction,
    name: "Silent Auction",
    appDesc:
      "Web app allows users to own items at a desired price while supporting charity organizations; grants unprecedented access to remote auctions",
    techStack: "React | Redux | JavaScript | HTML | CSS | Netlify",
    responsibility: [
      "Built Redux store, action creators, reducers, and maintained all state data across the web application",
      "Implemented CRUD (Create, Read, Update, Delete) operations in the seller dashboard",
      "Led/Collaborated with 3 Engineers to develop marketing page and seller dashboard under a week",
    ],
    liveSite: "https://silentauction-app.netlify.app/",
    githubRepoToLive: "https://github.com/Web26-Silent-Auction-1/FE",
  },
  {
    id: 1,
    img: weightLiftingJournal,
    name: "Weightlifting Journal",
    appDesc:
      "Convenient app that tracks your progress in order to help individuals achieve and preserve a way of life and a mindset unique to the roots of muscle build and weight loss",
    techStack: "HTML | CSS | LESS | Netlify",
    responsibility: [
      "Lead designer on the marketing web page aimed to brief users of our features",
      "Deployed landing page using Netlify to serve independently from the Front End",
      "Responsive for Mobile and Desktop",
    ],
    liveSite: "https://weight-lifting-journal-12.netlify.app/index.html",
    githubRepoToLive:
      "https://github.com/BW-FT-Weight-Lifting-Journal-12/ui-marketing-page",
  },
];
