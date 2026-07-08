export function getWeekDay(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
  });
}

export function getMonthDay(dateString) {
  return new Date(dateString).getDate();
}

export function getYear(dateString) {
  return new Date(dateString).getFullYear();
}
