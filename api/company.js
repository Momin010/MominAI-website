export default async function handler(req, res) {
  const companyData = {
    name: "MowisAI",
    tagline: "The Agent-Native Execution Substrate",
    description: "Safety, isolation, and governance for the next generation of autonomous AI. Treating agents as first-class computational entities.",
    location: "Tampere, Finland",
    founded: 2024,
    founders: ["Momin Aldahdooh", "Wasay Muhammad"],
    focus: "AI agent execution engine with OS-level isolation",
    website: "https://mowis.ai",
    version: "0.1",
    status: "Production-ready core execution layer"
  };

  res.status(200).json(companyData);
}