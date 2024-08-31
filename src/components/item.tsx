export interface PackingListItemProps {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
}

export interface ItemProps extends PackingListItemProps {
  onRemoveItem: (id: number) => void;
}

export default function Item({
  description,
  packed,
  quantity,
  id,
  onRemoveItem,
}: ItemProps) {
  return (
    <li>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} - {description}
        <button onClick={() => onRemoveItem(id)}>❌</button>
      </span>
    </li>
  );
}
