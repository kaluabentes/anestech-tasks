export default function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`;
}
