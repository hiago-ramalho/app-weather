import './App.css';
import Header from '../Header';
import ListCards from '../ListCards';
import InputSearch from '../InputSearch';

function App() {
  return (
    <div className="App">
      <Header />

      <InputSearch />

      <ListCards />
    </div>
  );
}

export default App;
