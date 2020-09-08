import padZero from "./padZero";

export default function getDateComponents(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = padZero(date.getUTCMonth() + 1);
  const day = padZero(date.getUTCDate());
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return [year, month, day, hours, minutes];
}
