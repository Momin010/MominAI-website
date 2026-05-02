export default async function handler(req, res) {
  const mcpData = {
    name: "MowisAI MCP Server",
    version: "1.0.0",
    description: "MCP server providing access to MowisAI company information",
    capabilities: {
      resources: {
        "company://info": "General company information",
        "company://founders": "Founders and team information",
        "company://principles": "Core principles and values",
        "company://laws": "Constitutional laws for agents",
        "company://technical": "Technical specifications and architecture"
      },
      tools: [
        {
          name: "get_company_info",
          description: "Retrieve general company information about MowisAI"
        },
        {
          name: "get_founders",
          description: "Retrieve information about the founders and team"
        },
        {
          name: "get_principles",
          description: "Retrieve core principles that MowisAI is built on"
        },
        {
          name: "get_laws",
          description: "Retrieve the six constitutional laws every agent must obey"
        },
        {
          name: "get_technical",
          description: "Retrieve technical specifications and architecture details"
        }
      ]
    },
    endpoints: {
      company: "/api/company",
      founders: "/api/founders",
      principles: "/api/principles",
      laws: "/api/laws",
      technical: "/api/technical"
    }
  };

  res.status(200).json(mcpData);
}