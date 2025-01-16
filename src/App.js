import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },

  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "charger", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems(items => [...items, item]);
  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🈯🈯 Far away 🛒</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);




  function handleSubmit(e) {
    e.preventDefault();


    if (!description) return;


    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);


    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> what do you need for tripp? bitchhh</h3>

      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter item baby"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }
        }
      />
      <button>Add item</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <li>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </li>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌&times</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🛒you have X items on your list and you already packed X (x%)</em>
    </footer>
  );
}
