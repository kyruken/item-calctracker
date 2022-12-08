import { useState } from 'react';

import Item from './components/item';

function App() {
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState();

  function resetAll() {
    setItems([]);
    setTotalCost();

    const nameInput = document.getElementById('name');
    const costInput = document.getElementById('cost');
    nameInput.value = '';
    costInput.value = '';

  }

  function clickHandler(event) {
    const nameInput = document.getElementById('name');
    const costInput = document.getElementById('cost');

    event.preventDefault();
    setItems(prevItems => [...prevItems, {name: nameInput.value, cost: costInput.value}])
  }
  
  function submitItems() {
    let total = 0;
    for (let x = 0; x < items.length; x++) {
        total += parseInt(items[x].cost);
    }
    total += total * .925;
    setTotalCost(total);
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
        <input type='text' placeholder='Name of item' name='name' id='name'></input>
        <input type='text' placeholder='cost' name='cost' id='cost'></input>
        <button onClick={(event) => clickHandler(event)}>Add Item</button>
      </form>
      {totalCost && 
      <button onClick={resetAll}>Reset</button>
      }
      <button onClick={submitItems}>Create receipt</button>
      {itemElements}
      {totalCost && 
      <div> 
        <p>California tax: 9.25%</p>
        <h2>Total cost is ${totalCost}</h2>
      </div>
      }
    </div>
  )
}

export default App
