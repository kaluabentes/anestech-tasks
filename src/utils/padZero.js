export default function padZero(number) {
  return number < 10 ? `0${number}` : number;
}
