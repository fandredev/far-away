import Item from './item';

export default function PackingList({ items }) {
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
