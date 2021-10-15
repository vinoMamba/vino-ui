export default {
  firstDayOfMonth(date: Date) {
    const { year, month } = getYearMonthDate(date);
    console.log(year, month);
    return new Date(year, month, 1);
  },
  lastDayOfMonth(date: Date) {
    const { year, month } = getYearMonthDate(date);
    return new Date(year, month + 1, 0);
  },
  getYearMonthDate,
};

function getYearMonthDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return { year, day, month };
}