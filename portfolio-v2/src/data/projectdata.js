//Project images
import communityCalendar from "../img/community-calendar.png";
import animeArchive from "../img/anime-archive.png";

export const projectData = [
  {
    id: 1,
    img: communityCalendar,
    name: "Our Community Calendar",
    appDesc:
      "Residents experience increasing isolation and are frequently unaware of neighborhood and community gatherings in their local area. Municipalities, community organizations, and businesses struggle to reach local residents through noisy social networks and siloed email distribution lists.",
    techStack: "React | AWS | Apollo Client | Apollo Server | GraphQL | Prisma",
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
    id: 2,
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
];
