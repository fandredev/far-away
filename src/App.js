import Stats from './components/stats';
import Logo from './components/logo';
import PackingList from './components/packing_list';
import Form from './components/form';

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
