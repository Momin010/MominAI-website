const companyInfo = {
  name: "MowisAI",
  tagline: "The Agent-Native Execution Substrate",
  description: "Safety, isolation, and governance for the next generation of autonomous AI. Treating agents as first-class computational entities.",
  location: "Tampere, Finland",
  founded: 2024,
  founders: ["Momin Aldahdooh", "Wasay Muhammad"],
  focus: "AI agent execution engine with OS-level isolation",
  website: "https://mowis.ai"
};

const foundersInfo = [
  {
    name: "Momin Aldahdooh",
    role: "Founder & CEO",
    bio: "Young entrepreneur who secured internships at the Finnish Parliament and Mayor's Office through strategic outreach. Founded a registered company at 14, achieving 4-figure revenue and government funding.",
    links: { linkedin: "https://www.linkedin.com/in/momin-aldahdouh-49ab87380/", github: "https://github.com/Momin010" }
  },
  {
    name: "Abdul Wasay Muhammad",
    role: "Co-Founder & COO",
    bio: "AI entrepreneur and co-founder of MowisAI, working across AI, content, and marketing.",
    links: { linkedin: "https://www.linkedin.com/in/abdulwasaymuhammad/", github: "https://github.com/AWM909" }
  }
];

const principlesInfo = [
  { title: "Agent-Native Architecture", desc: "Built from scratch for agents, not retrofitted from process models or containers designed for humans." },
  { title: "Security as a Substrate", desc: "Isolation and governance live at the execution layer — not in middleware or application code that agents can bypass." },
  { title: "Transparent by Design", desc: "Every computation is traceable. Every agent action produces a signed, immutable audit entry." },
  { title: "Composable Trust", desc: "Agents can delegate capability to child agents with scoped, revocable permissions — full trust hierarchies." }
];

const lawsInfo = [
  { number: "01", title: "Isolation by Default", desc: "Every agent instance runs in a dedicated sandbox. Memory, filesystem, and process namespaces are never shared between agents or the host system." },
  { number: "02", title: "Full Observability", desc: "Every action an agent takes — tool calls, I/O, API requests — is logged immutably. Nothing happens in the dark." },
  { number: "03", title: "Least-Privilege Execution", desc: "Agents receive only the permissions they explicitly need for a given task. No implicit elevation. Ever." },
  { number: "04", title: "Deterministic Lifecycle", desc: "Agents can be paused, checkpointed, restored, and terminated with full state fidelity. No zombie processes. No runaway threads." },
  { number: "05", title: "Resource Governance", desc: "Hard limits on CPU, RAM, disk, and network I/O are enforced at the substrate level." },
  { number: "06", title: "Constitutional Compliance", desc: "Behavioral constraints are encoded at the substrate. Agents cannot override the laws that govern them." }
];

const technicalInfo = {
  language: "Rust",
  deployment: "Single binary",
  toolRegistry: 75,
  architecture: ["Sandbox Layer (overlayfs + chroot)", "agentd Daemon", "Orchestrator Layer (5-layer)"],
  features: ["OS-level isolation", "Multi-agent orchestration", "Patch-based merge", "Interactive sessions"]
};

const tools = [
  { name: "get_company_info", description: "Get general information about MowisAI", inputSchema: { type: "object", properties: {} } },
  { name: "get_founders", description: "Get information about the founders", inputSchema: { type: "object", properties: {} } },
  { name: "get_principles", description: "Get the core principles of MowisAI", inputSchema: { type: "object", properties: {} } },
  { name: "get_laws", description: "Get the 6 constitutional laws for agents", inputSchema: { type: "object", properties: {} } },
  { name: "get_technical", description: "Get technical specifications and architecture", inputSchema: { type: "object", properties: {} } }
];

export default async function handler(req, res) {
  const contentType = req.headers['content-type'] || '';
  
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  
  try {
    const body = req.method === 'POST' && contentType.includes('json') 
      ? await req.json().catch(() => ({})) 
      : {};
    
    if (body.method === 'initialize') {
      return res.status(200).json({
        jsonrpc: "2.0",
        id: body.id,
        result: {
          protocolVersion: "2024-11-05",
          capabilities: { tools: {} },
          serverInfo: { name: "mowisai-mcp", version: "1.0.0" }
        }
      });
    }
    
    if (body.method === 'tools/list') {
      return res.status(200).json({
        jsonrpc: "2.0",
        id: body.id,
        result: { tools }
      });
    }
    
    if (body.method === 'tools/call') {
      const { name } = body.params || {};
      let result;
      
      switch (name) {
        case "get_company_info": result = companyInfo; break;
        case "get_founders": result = foundersInfo; break;
        case "get_principles": result = principlesInfo; break;
        case "get_laws": result = lawsInfo; break;
        case "get_technical": result = technicalInfo; break;
        default: throw new Error(`Unknown tool: ${name}`);
      }
      
      return res.status(200).json({
        jsonrpc: "2.0",
        id: body.id,
        result: { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] }
      });
    }
    
    return req.method === 'GET' 
      ? res.status(200).json({ name: "mowisai-mcp", version: "1.0.0", tools: tools.map(t => ({ name: t.name, description: t.description })) })
      : res.status(400).json({ jsonrpc: "2.0", id: body.id, error: { code: -32601, message: "Method not found" } });
    
  } catch (error) {
    return res.status(500).json({ jsonrpc: "2.0", id: null, error: { code: -32603, message: error.message } });
  }
}