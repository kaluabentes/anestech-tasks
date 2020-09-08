import getDateComponents from "./getDateComponents";

export default function formatDateTimeInput(dateString) {
  const [year, month, day, hours, minutes] = getDateComponents(dateString);

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
