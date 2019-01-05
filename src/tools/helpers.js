export const convertToArray = data => {
  if (!data) return [];
  const keys = Object.keys(data);
  return keys.map(key => data[key]);
};
