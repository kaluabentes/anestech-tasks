import padZero from "./padZero";

export default function formatDateTimeInput(datestring) {
  const date = new Date(datestring);
  const year = date.getFullYear();
  const month = padZero(date.getUTCMonth() + 1);
  const day = padZero(date.getUTCDate());

  return `${year}-${month}-${day}T${date.getHours()}:${date.getMinutes()}`;
}
