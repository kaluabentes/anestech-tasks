import padZero from "./padZero";

export default function formatDate(dateString) {
  const date = new Date(dateString);
  return `${padZero(date.getUTCDate())}/${padZero(
    date.getUTCMonth() + 1
  )}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`;
}
