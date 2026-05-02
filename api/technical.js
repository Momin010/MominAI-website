export default async function handler(req, res) {
  const technicalData = {
    architecture: {
      layers: [
        {
          name: "Sandbox Layer",
          description: "OS-level isolation via overlayfs and chroot",
          details: "Each agent receives a dedicated sandbox at creation time. overlayfs provides copy-on-write isolation on top of a read-only base. chroot restricts process filesystem visibility to the sandbox root."
        },
        {
          name: "agentd Daemon",
          description: "Local Rust runtime managing sandboxes and exposing Unix socket API",
          details: "Creates sandboxes and containers, enforces tool execution inside isolated environments, exposes Unix-domain socket API, provides tool registry spanning filesystem operations, shell execution, Git, HTTP, memory/secrets."
        },
        {
          name: "Orchestrator Layer",
          description: "5-layer coordination: Context Gatherer, Architect, Sandbox Owners, Sandbox Managers, Workers",
          details: "Decomposes work, provisions sandboxes, runs workers, merges results, and synthesizes final delivery through layered orchestration."
        }
      ]
    },
    implementation: {
      language: "Rust",
      deployment: "Single binary",
      toolRegistry: 75,
      socketApi: "/tmp/agentd.sock",
      llmIntegration: "Vertex AI Gemini"
    },
    features: [
      "OS-level isolated execution (overlayfs + chroot)",
      "Multi-agent orchestration in single deployable binary",
      "Patch-based merge with LLM-assisted conflict repair",
      "Interactive session mode with persistence",
      "Live coordinator briefing for evolving projects"
    ],
    metrics: {
      coldStartTarget: "<512ms",
      auditLatency: "<1ms overhead",
      constitutionLaws: 6
    },
    problemSolved: {
      primary: "Agent conflict in parallel execution",
      issues: [
        "Concurrent writes to same paths",
        "Deleting or mutating shared resources",
        "Observing inconsistent intermediate states",
        "Faulty agent corrupting shared runtime state"
      ],
      solution: "OS-level filesystem isolation and local tool execution through stable runtime"
    }
  };

  res.status(200).json(technicalData);
}