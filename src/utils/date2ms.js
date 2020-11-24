export const date2ms = (d) => {
  let date = new Date(Math.round((d - 25569) * 864e5));
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return { month, day, year };
};
