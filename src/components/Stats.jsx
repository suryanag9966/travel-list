export function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything ready to go!"
          : `You have ${totalItems} items on your list, and you’ve already packed ${packedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
