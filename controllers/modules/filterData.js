export const filterAllData = (data) => data.map(filterSingleData);

const filterSingleData = ({
  source, author, title, url, urlToImage, publishedAt, content,
}) => ({
  source: source.name,
  author,
  title,
  url,
  urlToImage,
  publishedAt: new Date(publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
  content,
  logo: `/images/${source.name}.png`,
});
