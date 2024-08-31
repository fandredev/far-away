import Item, { PackingListItemProps } from './item';

interface PackingListProps {
  items: PackingListItemProps[];
  onRemoveItem: (id: number) => void;
}

export default function PackingList({ items, onRemoveItem }: PackingListProps) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} {...item} onRemoveItem={onRemoveItem} />
        ))}
      </ul>
    </div>
  );
}
