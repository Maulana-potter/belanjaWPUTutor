import { useState } from "react";

export default function Grocery({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.checked) - Number(b.checked));
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => onToggleItem(item.id)}
              />
              <span
                style={item.checked ? { textDecoration: "line-through" } : {}}
              >
                {item.name} {item.quantity}
              </span>
              <button onClick={() => onDeleteItem(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
