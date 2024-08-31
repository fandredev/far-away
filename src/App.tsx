import { useState } from 'react';

import { ItemProps } from './components/item';
import Logo from './components/logo';
import Form from './components/form';
import PackingList from './components/packing_list';
import Stats from './components/stats';

export default function App() {
  const [items, setItems] = useState<ItemProps[]>([]);

  function handleAddItems(newItem: ItemProps) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}
