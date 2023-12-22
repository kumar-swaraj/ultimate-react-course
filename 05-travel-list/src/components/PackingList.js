import { useState } from 'react';
import Item from './Item';

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItemsList;

  if (sortBy === 'input') sortedItemsList = [...items];

  if (sortBy === 'description')
    sortedItemsList = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sortBy === 'packed')
    sortedItemsList = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );

  return (
    <div className="list">
      <ul>
        {sortedItemsList.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>

        <button onClick={onClearItems}>clear list</button>
      </div>
    </div>
  );
}
