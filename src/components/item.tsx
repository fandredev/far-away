export interface PackingListItemProps {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
}

export interface ItemProps extends PackingListItemProps {
  onRemoveItem: (id: number) => void;
  onTogglePacked: (id: number) => void;
}

export default function Item({
  description,
  packed,
  quantity,
  id,
  onRemoveItem,
  onTogglePacked,
}: ItemProps) {
  return (
    <li data-testid="item">
      <input
        type="checkbox"
        checked={packed}
        onChange={() => onTogglePacked(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} - {description}
        <button onClick={() => onRemoveItem(id)}>❌</button>
      </span>
    </li>
  );
}
