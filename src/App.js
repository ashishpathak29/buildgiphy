import 'antd/dist/antd.css';
import './App.css';
import { getTrendingItem, searchItems} from "./api";
import Searchbar from './components/SearchBar'
import ItemsList from './components/ItemsList'
import {useCallback, useEffect, useState} from "react";


function App() {
    const [items ,setItems] = useState([])

    useEffect(() => {
        getTrendingItem().then(setItems)
    }, [])


    const handleSubmit = useCallback((query) => searchItems({query}).then(setItems), [])

  return (
    <div className="App">
      <header className="App-header">
          <Searchbar onSubmit={handleSubmit}/>
          <ItemsList items={items}/>
      </header>
    </div>
  );
}

export default App;
