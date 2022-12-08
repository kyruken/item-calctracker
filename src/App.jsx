import { useState } from 'react';
function App() {
  
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemCost, setItemCost] = useState();
  
  function clickHandler(event) {
    event.preventDefault();
    items.push({name: itemName, cost: itemCost})
  }

  function onChangeNameHandler(event) {
    setItemName(event.target.value);
  }

  function onChangeCostHandler(event) {
    setItemCost(event.target.value);
  }


  return (
    <div className="App">
      <h1>Item Calctracker</h1>
      <form>
        <input type='text' placeholder='Name of item' name='name' onChange={(e) => onChangeNameHandler(e)}></input>
        <input type='text' placeholder='cost' name='cost' onChange={(e) => onChangeCostHandler(e)}></input>
        <button onClick={(event) => clickHandler(event)}>Submit</button>
      </form>
    </div>
  )
}

export default App
