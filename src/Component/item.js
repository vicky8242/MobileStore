import React, { useState } from 'react'
import data from './product'
import Itemcomp from './itemcomp'

const Item = () => {
  const [name, setName] = useState(data);
  const [cartList, setItemINCart] = useState([])
  const [checkCartList, setCheckCartList] = useState([])
  // const [quantity, setQuantity] = useState([])
  // const [count,setCount] = useState()
  // const [counter,setCounter] = useState()

  const [total, setTotal] = useState(0);
  // const [edit,setEdit] = useState();
  // console.log(quantity,"ghghghgh");
  // console.log(cartList,"ssssss");
  const addItemHanler = (item) => {
    // console.log(item.quantity, item.price,"sdfggsgsgdgfd");
    //  const total=(quantity*price)
    // console.log(item.quantity,"hhhhhhhhhh")
// setCounter(item.setCounter)


    // console.log(quantity,"hello")
    setItemINCart([...cartList, item])
    setTotal(prev => prev + item.quantity * item.price);
  }

  const checkList = () => {
    console.log(checkCartList, "ll");
    setCheckCartList(cartList);
  }
  
  return (
    <div className="home-container">
      <header>
        .....continue booking
      </header>
      <hr />
      <div className="items-tag">
        <h1>MOBILE SHOP</h1>
        <p> you have <span> some </span> mobile</p>
      </div>
      <section className="section">
        <div className="flex-containers">
          <div >
            <button onClick={checkList}className="checkList" >CHECK LIST</button>
            {
              checkCartList.map((item) => {

                return <li>{item.title}<p> quantity:{item.quantity}</p><hr /></li>
              })
            }
          </div>


          <div className="items-container">
            {name.map((currItem) => {
              return <Itemcomp key={currItem.id}{...currItem}
                addItemHanler={addItemHanler} />
            })
            }

          </div>

        </div>
        <div className="total-div" > <p className="total">TOTAL(in rupees):</p><p>{total}</p> </div>





      </section>
    </div>
  )
}

export default Item;
