import { useState } from 'react';

import { PackingListItemProps } from './components/item';
import Logo from './components/logo';
import Form from './components/form';
import PackingList from './components/packing_list';
import Stats from './components/stats';

const initialItems: PackingListItemProps[] = [
  { id: 1, description: 'Passport', quantity: 1, packed: false },
  { id: 2, description: 'Phone Charger', quantity: 1, packed: false },
  { id: 3, description: 'Toothbrush', quantity: 1, packed: false },
  { id: 4, description: 'Toothpaste', quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState<PackingListItemProps[]>(initialItems);

  function handleAddItems(newItem: PackingListItemProps) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleRemoveItem(id: number) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleTogglePacked(id: number) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onTogglePacked={handleTogglePacked}
        onRemoveItem={handleRemoveItem}
        items={items}
      />
      <Stats />
    </div>
  );
}
