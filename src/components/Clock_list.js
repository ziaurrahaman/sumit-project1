import Clock from "./Clock";

function ClockList({ quantities }) {
  console.log(quantities);
  return (
    <div>
      {quantities.map(() => (
        <Clock key={Math.random()} />
      ))}
    </div>
  );
}
export default ClockList;
