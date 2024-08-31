export interface ItemProps {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
}

export default function Item({ description, packed, quantity }: ItemProps) {
  return (
    <li>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} - {description}
        <button>❌</button>
      </span>
    </li>
  );
}
