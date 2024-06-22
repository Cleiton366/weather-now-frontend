export default function TimestampUnixToString(timestamp: number) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('en-US', {'hour' : '2-digit'});
}