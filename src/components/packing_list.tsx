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
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            {...item}
            onRemoveItem={onRemoveItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
    </div>
  );
}
