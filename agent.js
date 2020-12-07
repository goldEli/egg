module.exports = (agent) => {
  agent.messenger.on("egg-ready", () => {
    const data = { info: "this is agent" };
    agent.messenger.sendToApp("agentAction", data);
  });
};
