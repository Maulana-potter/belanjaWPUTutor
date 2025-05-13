import Header from "./components/Header";
import Form from "./components/Form";
import Grocery from "./components/Grocery";
import Footer from "./components/Footer";
import { useState } from "react";
import initialItems from "./data/items.json";
export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  function handleCheckItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />

      <Grocery
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleCheckItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}
