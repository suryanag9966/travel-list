
export function Item({ item, onDeleteItem, onTogglePacked }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onTogglePacked(item.id)} />
      <span
        style={item.packed ? { textDecoration: "line-through" } : {}}
        onClick={() => onTogglePacked(item.id)}
      >
        {item.quantity} {item.description}
      </span>
      <button style={{ cursor: "pointer" }} onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
