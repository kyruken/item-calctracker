import { useState } from 'react';

import Item from './components/item';
function App() {
  
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemCost, setItemCost] = useState('');
  const [totalCost, setTotalCost] = useState();

  function clickHandler(event) {
    event.preventDefault();
    setItems(prevItems => [...prevItems, {name: itemName, cost: itemCost}])
  }
  
  function submitItems() {
    let total = 0;
    for (let x = 0; x < items.length; x++) {
        total += parseInt(items[x].cost);
    }
    total += total * .925;
    setTotalCost(total);
  }
  
  function onChangeNameHandler(event) {
    setItemName(event.target.value);
  }

  function onChangeCostHandler(event) {
    setItemCost(event.target.value);
  }

  const itemElements = items.map(item => {
    return <Item 
        name={item.name}
        cost={item.cost}
    />
  })


  return (
    <div className="App">
      <h1>Item Calctracker</h1>
      <form>
        <input type='text' placeholder='Name of item' name='name' onChange={(e) => onChangeNameHandler(e)}></input>
        <input type='text' placeholder='cost' name='cost' onChange={(e) => onChangeCostHandler(e)}></input>
        <button onClick={(event) => clickHandler(event)}>Add Item</button>
      </form>
      {totalCost && 
      <button>Reset</button>
      }
      <button onClick={submitItems}>Create receipt</button>
      {itemElements}
      {totalCost && 
      <div> 
        <p>Item tax: 9.25%</p>
        <h2>Total cost is ${totalCost}</h2>
      </div>
      }
    </div>
  )
}

export default App
