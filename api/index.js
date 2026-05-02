export default async function handler(req, res) {
  const rootData = {
    message: "MowisAI API",
    version: "1.0.0",
    endpoints: {
      company: "/api/company",
      founders: "/api/founders", 
      principles: "/api/principles",
      laws: "/api/laws",
      technical: "/api/technical",
      mcp: "/api/mcp"
    },
    description: "API endpoints for MowisAI company data. Can be used as MCP server for Claude integration."
  };

  res.status(200).json(rootData);
}