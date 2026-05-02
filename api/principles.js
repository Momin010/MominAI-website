export default async function handler(req, res) {
  const principlesData = [
    {
      title: "Agent-Native Architecture",
      desc: "Built from scratch for agents, not retrofitted from process models or containers designed for humans."
    },
    {
      title: "Security as a Substrate",
      desc: "Isolation and governance live at the execution layer — not in middleware or application code that agents can bypass."
    },
    {
      title: "Transparent by Design",
      desc: "Every computation is traceable. Every agent action produces a signed, immutable audit entry."
    },
    {
      title: "Composable Trust",
      desc: "Agents can delegate capability to child agents with scoped, revocable permissions — full trust hierarchies."
    }
  ];

  res.status(200).json(principlesData);
}