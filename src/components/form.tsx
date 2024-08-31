import { useState, FormEvent } from 'react';
import { PackingListItemProps } from './item';

interface FormProps {
  onAddItems: (newItem: PackingListItemProps) => void;
}

export default function Form({ onAddItems }: FormProps) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);
    clearForm();
  }

  function clearForm() {
    setDescription('');
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Item..."
      />
      <button disabled={!description}>Add</button>
    </form>
  );
}
