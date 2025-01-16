function daysUntilBirthday(birthDateString) {
  const [year, month, day] = birthDateString.split('-').map(Number);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const milSecToDays = (milSecs) => milSecs / (1000 * 60 * 60 * 24);

  const rightNow = new Date();
  const bd = new Date(year, month - 1, day);

  const currentYear = rightNow.getFullYear();
  const currMonth = rightNow.getMonth();
  const currDay = rightNow.getDate();

  const bdMonth = bd.getMonth();
  const bdDay = bd.getDate();
  const ifBdNextMonth = currMonth <= bdMonth;
  const ifBdFutureDay = currDay < bdDay;
  const ifBdThisYear = ifBdNextMonth && ifBdFutureDay;
  console.log(ifBdThisYear);

  let diff = null;
  if (currMonth === bdMonth && currDay === bdDay) {
    diff = 0;
  } else if (ifBdThisYear) {
    diff =
    Date.parse(`${bdDay} ${months[currMonth]} ${currentYear}`) -
      Date.parse(`${currDay} ${months[currMonth]} ${currentYear}`)
  } else {
    diff =
      Date.parse(`${bdDay} ${months[currMonth]} ${currentYear + 1}`) -
      Date.parse(`${currDay} ${months[currMonth]} ${currentYear}`);
  }
  return milSecToDays(diff);
}

export default daysUntilBirthday;
