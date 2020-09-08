import getDateComponents from "./getDateComponents";

export default function formatDate(dateString) {
  const [year, month, day, hours, minutes] = getDateComponents(dateString);

  return `${day}/${month}/${year} às ${hours}:${minutes}`;
}
