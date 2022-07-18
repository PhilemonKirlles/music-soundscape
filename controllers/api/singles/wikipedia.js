// node-fetch and exports;

export const wikipedia = async (name) =>
  await (
    await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`)
  ).json();
