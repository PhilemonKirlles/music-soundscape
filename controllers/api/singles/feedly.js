// node-fetch and exports

export const feedly = async (name) => 
await (await fetch(`https://cloud.feedly.com/v3/search/feeds?query=:${name}`)).json();
