const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function shortMonthYear(dateParam){ // returns: Nov 2020
  if(!dateParam){return};
  const date = new Date(dateParam);
  return `${shortMonths[date.getMonth()]} ${date.getFullYear()}`;
}

module.exports = {
  shortMonthYear
}