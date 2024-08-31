import { useState, ChangeEvent } from 'react';
import Item, { PackingListItemProps } from './item';

interface PackingListProps {
  items: PackingListItemProps[];
  onRemoveItem: (id: number) => void;
  onTogglePacked: (id: number) => void;
}

export default function PackingList({
  items,
  onRemoveItem,
  onTogglePacked,
}: PackingListProps) {
  const [sortBy, setSortBy] = useState('input');

  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    setSortBy(event.target.value);
  }

  let sortedItems;

  if (sortBy === 'description') {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (sortBy === 'packed') {
    sortedItems = [...items].sort((a, b) => +a.packed - +b.packed);
  } else {
    sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            {...item}
            onRemoveItem={onRemoveItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleSortChange}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}
