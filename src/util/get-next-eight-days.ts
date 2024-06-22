export default function GetNextEightDays(options : {}) {
  const today = new Date();
  const days = [];

  for (let i = 0; i < 8; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    let date = nextDay.toLocaleDateString('en-US', options);
    const dateFormatted = `${date.slice(0, 3)} ${date.slice(4, date.length)}`;
    days.push(dateFormatted);
  }
  return days;
}