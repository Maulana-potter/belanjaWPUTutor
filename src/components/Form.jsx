import { useState } from "react";

export default function Form({ onAddItem }) {
  const [nama, setNama] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!nama) {
      alert("Nama barang tidak boleh kosong");
      return;
    }

    const newItem = {
      id: Date.now(),
      name: nama,
      quantity: quantity,
      checked: false,
    };
    onAddItem(newItem);
    console.log(newItem);

    setNama("");
    setQuantity(1);
  }

  const quantityNum = [...Array(20)].map((_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          name="quantity"
          onChange={(e) => setQuantity(Number(e.target.value))}
          value={quantity}
        >
          {quantityNum}
        </select>
        <input
          type="text"
          name="item"
          placeholder="nama barang..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <button type="submit">Tambah</button>
    </form>
  );
}
