export default function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p>Water would boil</p>;
  }
  return <p>Water would not boil</p>;
}
