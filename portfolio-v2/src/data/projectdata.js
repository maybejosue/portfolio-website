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
      "Completed Front-end unit tests to ensure code quality; increased test-coverage score by over 50%",
      "Provided creative solution to stakeholder’s desire to create a contextual calendar view by merging the home and search page, which ultimately saved time by utilizing our existing features",
      "Resolved event-card UI bug by enforcing image upload on event creation form",
      "Implemented Google Analytics API to track and understand user flow and behavior",
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
      "Assisted with design, development, and integration of a mobile, user-friendly interface",
      "Prioritized reusability and readability of components throughout application to minimize code maintenance",
      "Integrated AniList GraphQL API as our primary source of content for anime entries",
      "Established search and filter behavior to work interchangeably",
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
      "Administered redux store, action creators, reducers, and maintained all state data across the web app",
      "Developed CRUD (Create, Read, Update, Delete) operations in the seller dashboard",
      "Led a group of 3 engineers to develop a functional marketing page and seller dashboard in under a week",
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
      "Deployed landing page using Netlify to serve independently from the front-end",
      "Tailored responsiveness to mobile and web",
    ],
    liveSite: "https://weight-lifting-journal-12.netlify.app/index.html",
    githubRepoToLive:
      "https://github.com/BW-FT-Weight-Lifting-Journal-12/ui-marketing-page",
  },
];
