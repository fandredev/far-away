import Item, { ItemProps } from './item';

interface PackingListProps {
  items: ItemProps[];
}

export default function PackingList({ items }: PackingListProps) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
