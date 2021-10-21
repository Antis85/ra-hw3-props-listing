import './App.css';
import etsy from './data/etsy';
import Listing from './components/Listing';

export default function App() {
  const items = etsy.slice();
  return <Listing items={items} />;
}
