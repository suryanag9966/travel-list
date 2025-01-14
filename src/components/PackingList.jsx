import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onTogglePacked, onClearItems }) {

  const [sortBy, setSortby] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));


  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked} />
        ))}
      </ul>
      <div className="actions" value={sortBy} onChange={(e) => setSortby(e.target.value)}>
        <select>
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packde status</option>
        </select>
      </div>
      <button onClick={onClearItems}>Clear Items</button>
    </div>
  );
}
