export default async function handler(req, res) {
  const foundersData = [
    {
      id: 1,
      name: "Momin Aldahdooh",
      role: "Founder & CEO",
      isTechnical: true,
      bio: "Young entrepreneur who secured internships at the Finnish Parliament and Mayor's Office through strategic outreach. Founded a registered company at 14, achieving 4-figure revenue and government funding.",
      location: "Tampere, Finland",
      links: {
        linkedin: "https://www.linkedin.com/in/momin-aldahdouh-49ab87380/",
        github: "https://github.com/Momin010",
        website: "https://momin-website.vercel.app/"
      },
      accomplishments: [
        "Founded registered company at 14 with government funding",
        "Intern at Finnish Parliament & Mayor's Office",
        "Built EventConnect, MominOS, CustomHydration",
        "4x academic stipend recipient"
      ],
      projects: [
        { name: "EventConnect", url: "https://childevent-official.vercel.app", desc: "Full-stack social app for kids" },
        { name: "MominOS", url: "https://github.com/Momin010/MominOS", desc: "Experimental OS kernel" },
        { name: "CustomHydration", url: "https://customhydration.netlify.app/", desc: "E-commerce platform" }
      ]
    },
    {
      id: 2,
      name: "Abdul Wasay Muhammad",
      role: "Co-Founder & COO",
      isTechnical: false,
      bio: "AI entrepreneur and co-founder of MowisAI, working across AI, content, and marketing. Currently training as a software developer in school, expanding into product and technical development. Experienced in startup marketing, content strategy, and execution for AI-focused brands.",
      location: "Tampere, Finland",
      links: {
        linkedin: "https://www.linkedin.com/in/abdulwasaymuhammad/",
        github: "https://github.com/AWM909",
        website: null
      },
      accomplishments: [
        "E-commerce stores and paid ads",
        "Worked across social media, design, and video for digital brands",
        "Content & Marketing Lead at Since AI",
        "Internship at Boost Turku",
        "Co-founder of AI startups including MowisAI"
      ],
      projects: [
        { name: "Content & Marketing Lead", desc: "AI-focused projects" },
        { name: "Startup Co-Founder", desc: "MowisAI and other AI ventures" },
        { name: "Hackathon Host", desc: "Community building events" },
        { name: "Marketing Strategist", desc: "AI-focused projects" }
      ]
    }
  ];

  res.status(200).json(foundersData);
}