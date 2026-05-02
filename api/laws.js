export default async function handler(req, res) {
  const lawsData = [
    {
      number: "01",
      title: "Isolation by Default",
      desc: "Every agent instance runs in a dedicated sandbox. Memory, filesystem, and process namespaces are never shared between agents or the host system.",
      tag: "SECURITY"
    },
    {
      number: "02",
      title: "Full Observability",
      desc: "Every action an agent takes — tool calls, I/O, API requests — is logged immutably. Nothing happens in the dark.",
      tag: "AUDIT"
    },
    {
      number: "03",
      title: "Least-Privilege Execution",
      desc: "Agents receive only the permissions they explicitly need for a given task. No implicit elevation. Ever.",
      tag: "ACCESS"
    },
    {
      number: "04",
      title: "Deterministic Lifecycle",
      desc: "Agents can be paused, checkpointed, restored, and terminated with full state fidelity. No zombie processes. No runaway threads.",
      tag: "LIFECYCLE"
    },
    {
      number: "05",
      title: "Resource Governance",
      desc: "Hard limits on CPU, RAM, disk, and network I/O are enforced at the substrate level — not the application layer where agents can bypass them.",
      tag: "RESOURCES"
    },
    {
      number: "06",
      title: "Constitutional Compliance",
      desc: "Behavioral constraints are encoded at the substrate. Agents cannot override the laws that govern them — not through prompting, not through code.",
      tag: "COMPLIANCE"
    }
  ];

  res.status(200).json(lawsData);
}