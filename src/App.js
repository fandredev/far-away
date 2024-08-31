import Stats from './components/stats';
import Logo from './components/logo';
import PackingList from './components/packing_list';
import Form from './components/form';
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
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
