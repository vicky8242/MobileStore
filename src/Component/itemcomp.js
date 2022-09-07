import React, { useState } from 'react'

function Itemcomp({ id, title, price, description, img, addItemHanler }) {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    else { alert("plz add items") }
  }
  const add = () => {
    // const total=(counter*price)
    //  console.log(total);
    // totalHandler(total);
    const obj = { id, title, price, description, img, quantity: counter, setCounter: setCounter }
    addItemHanler(obj);
    setCounter(0)

  }
  //  console.log(subtotal);



  return (

    <div className="items-flex">
      <div className="mobile-pic">
        <img src={img} alt="mobile pic" className="image-card" />
      </div>
      <div className="mobile-pic">
        <div className="title">
          <p> {title}</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="mobile-pic">{price}</div>
      <div className="mobile-pic">
        <div className="counter">
          <button  className="button-size" onClick={decrement}>-</button>
          <span className="button-size">{counter}</span>
          <button  className="button-size" onClick={increment}>+</button>
        </div >
      </div>
      <div className="mobile-pic" >
        <button className="add-button" onClick={add}>ADD</button>
      </div>
    </div>

  )
}

export default Itemcomp;