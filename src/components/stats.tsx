import { PackingListItemProps } from './item';

interface StatsProps {
  items: PackingListItemProps[];
}

export default function Stats({ items }: StatsProps) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const lengthItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / lengthItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? '🎉 You got everthing! Ready to go💼'
          : `You have ${lengthItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
