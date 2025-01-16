export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>
          Heyyyyy hurry up ...start adding some items to your packing list
          pleaseeee
        </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `you got everything you need for your trip ✈️🐬✈️`
          : `🛒you have ${numItems} items on your list and you already packed ${" "}  ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
