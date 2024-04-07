import type { SparcsEvent } from "../../models/SparcsEvent.astro";

export interface TechTixEventData {
  eventSource: "TechTix";
  eventId: string;
  name: string;
  bannerUrl: string;
  startDate: string | Date;
  endDate: string | Date;
  description: string | null;
}

const TECHTIX_API = import.meta.env.TECHTIX_API + "/events";
export const fetchEvents = async () => {
  try {
    const response = await fetch(TECHTIX_API);

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const getEventList = async () => {
  const events = await fetchEvents();
  const techTixEvents: TechTixEventData[] = events.map(
    (event: TechTixEventData) => ({
      eventSource: "TechTix",
      eventId: event.eventId,
      title: event.name,
      bannerUrl: event.bannerUrl,
      startDate: event.startDate,
      endDate: event.endDate,
      description: event.description,
    })
  );

  const previousEvents: SparcsEvent[] = [
    {
      eventId: "1",
      title: "Bugkos 2022",
      bannerUrl: "./img/Bugkos.png",
      startDate: "October 8, 2022",
      endDate: "October 9, 2022",
      description:
        "The Bugkos 2022, a highly anticipated event, served as a vibrant for both past and present members of the Bachelor of Science in Computer Science (BSCS) community in UPMin. With the primary objective of fostering connections and celebrating the shared passion for technology, the reunion was an unforgettable occasion filled with games, camaraderie, and meaningful interactions.Attendees engaged in a myriad of activities designed to ignite their competitive spirits while strengthening bonds. Friendly competitions showcased the talents and skills of the participants, ranging from coding challenges and hackathons to gaming tournaments and quizzes. These activities not only encouraged healthy competition but also fostered a collaborative environment, where experienced alumni shared their knowledge and mentored the current students.",
    },
    {
      eventId: "2",
      title: "Career Talks",
      bannerUrl: "./img/Career.png",
      startDate: "October 28, 2022",
      endDate: "October 28, 2022",
      description:
        "Career Talks 2022, organized by the UP Mindanao Society of Programmers and Refined Computer Scientists (SPARCS), was a highly anticipated virtual event that took place on October 28, 2022. This transformative webinar aimed to demystify the world of tech careers and provide UP Mindanao students with invaluable insights from industry experts. By bringing together awe-inspiring speakers who excel in their respective tech fields, Career Talks facilitated an engaging and enlightening experience for participants. The lineup of speakers included Bryl Lim, the co-founder and CEO of PocketDevs, Kyle Nathan Naranjo, a part-time Junior Software Engineer at Ingenuity and a participant in the GCash Jumpstart Internship Program, and Beatrice Totanes, a computer science major at UP Mindanao and a SPARCS member. They discussed various topics related to tech careers, such as career prospects, internship programs, and dispelling common myths. The event offered a valuable and enlightening experience for the participants, helping them gain insights and guidance for their future professional endeavors.",
    },
    {
      eventId: "3",
      title: "Google Developer Group Davao DevFest 2022",
      bannerUrl: "./img/DevFest2022.PNG",
      startDate: "November 26, 2022",
      endDate: "November 26, 2022",
      description:
        "Google Developer Group (GDG) Davao DevFest 2022 marked the inaugural tech conference in Davao City, dedicated to bringing together exceptional students, professionals, and experts. This highly anticipated event fostered a dynamic environment for learning, sharing, and engaging discussions revolving around the latest trends in Google technologies. Furthermore, it delved into the transformative journeys of individuals in Tech Career Development, a vital aspect in empowering the Filipino youth through technology and leadership. DevFest 2022, organized by GDG Davao in collaboration with the Society of Programmers and Refined Computer Scientists (SPARCS), offered an invaluable platform for attendees to expand their knowledge, forge meaningful connections, and explore opportunities for personal and professional growth in the ever-evolving tech landscape.",
    },
    {
      eventId: "4",
      title: "The Hitchhiker's Guide to the Startup World",
      bannerUrl: "./img/Startup.png",
      startDate: "February 18, 2023",
      endDate: "February 18, 2023",
      description:
        "The Hitchhiker’s Guide to the StartUp World was a dynamic online event held on February 18, 2023. Organized by SPARCS and partnered organizations, this 3-hour webinar aimed to expand students' knowledge and awareness of technology-based startups. The event featured engaging presentations from industry leaders, including Richard Day from UPGRADE, Dr. Angeli V. Guadalupe and Mark Abrasaldo from SUREPLUS, Genevieve Cane from Health and Wellness Solutions (HAWS), and Peng Sumarago from Mugna Tech. Attendees gained valuable insights into building startups, promoting environmental health, virtual healthcare solutions, and software engineering. This event was a great opportunity for students to explore the exciting world of startups and learn from experienced professionals in the field.",
    },
    {
      eventId: "5",
      title: "Google Developer Group Davao International Women’s Day 2023",
      bannerUrl: "./img/IWM2023.PNG",
      startDate: "March 25, 2023",
      endDate: "March 25, 2023",
      description:
        "The Google Developer Group (GDG) Davao International Women's Day 2023 Celebration was a special event organized by GDG Davao, a group of dedicated developers, IT professionals, academics, and tech enthusiasts based in the Davao region. This celebration took place on International Women's Day as part of the Women Techmakers' global campaign. The GDG Davao event aimed to commemorate this day by hosting various activities and discussions centered around women in technology. It provided a platform to showcase the accomplishments of women in the tech industry, promote gender equality, and inspire more women to pursue careers in technology. Through engaging sessions, networking opportunities, and knowledge-sharing, the celebration fostered a supportive and inclusive community that empowers women in their tech journeys.",
    },
    {
      eventId: "6",
      title: "SPARCS Membership Application Process 2023",
      bannerUrl: "./img/SparcsApplication.JPG",
      startDate: "April, 2023",
      endDate: "May, 2023",
      description:
        "The SPARCS Membership Application Process 2023 was a significant event for the Society of Programmers and Refined Computers (SPARCS). This annual process offered ongoing UP Mindanao students pursuing a degree in BS Computer Science the opportunity to join a community of career-driven individuals. SPARCS, a recognized organization within the university, aims to guide Computer Science students and provide a platform for skill development, networking, and exploring tech industry opportunities. Through strategic partnerships with tech organizations and IT-related university groups, SPARCS empowers and educates the surrounding communities in computer, information, and communications technology. The Membership Application Process 2023 served as a comprehensive and rigorous recruitment mechanism, introducing new members, fostering relationships, evaluating potential, and igniting interest in Computer Science while supporting skill development and career growth.",
    },
  ];

  return [...previousEvents, ...techTixEvents];
};
