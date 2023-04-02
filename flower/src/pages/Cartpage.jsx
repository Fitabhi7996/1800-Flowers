import "./Cartpage.css";
import { CheckCircleIcon, TriangleDownIcon, DeleteIcon } from '@chakra-ui/icons';
import { Select } from '@chakra-ui/react';
import {useState,useEffect} from "react"





function Cartpage(){
const [data,setData]=useState([]);

    const getData = () => {
        fetch(`http://localhost:3004/carts`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setData(data);
          });
      };

useEffect(()=>{
getData()
},[])

    return(
        <div className="cart1">
            <div className="cartdata">
            <div className="card1">
            <h1>Shopping Cart</h1>
            {
            data.map((item,index)=>{
                return(
                    <div className="cartcard" key={item.id}>
                        <p style={{height:"20px",margin:"0px"}}> <b> Item {index+1} of {data.length}</b></p>
                        <hr style={{color:"#696969"}} />
                        <div className="content">
                        <div className="Photu">
                        <img src={item.image} alt={item.title} width="100%" />
                        </div>

                        <div className="det">
                        <div className="title">
                        <p><b>{item.title}</b></p>
                        <DeleteIcon w={22} h={22} color="#5f3c86"/>
                        </div>
                        <p>Itemclass # : {item.category}</p>
                        <p>Sold by: 1800 Flowers</p>
                        <p>Price: <label htmlFor="" style={{color:"red"}}>${item.price}</label></p>
                        <div className="qty">
                            <p>Qty :</p>
                            <select size='md' className="size"  >
  <option value={1}> 1</option>
  <option value={2}> 2</option>
  <option value={3}> 3</option>
  <option value={4}> 4</option>
  <option value={5}> 5</option>
  <option value={6}> 6</option>
  <option value={7}> 7</option>
  <option value={8}> 8</option>
  <option value={9}> 9</option>
  <option value={10}> 10</option>
  <option value={11}> 11</option>
  <option value={12}> 12</option>
</select>
                        </div>
                        <p>Subtotal: $467.94</p>
                        <div className="duplicate">
                            <p><u style={{color:"indigo"}}>Duplicate Items</u></p>
                            <div>
                            <button className="ibutton1">i</button>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                )
            })    
            }
            <div className="checkout1">
                <p style={{height:"14px"}}> <b>Cart Items: <span style={{color:"indigo"}}>3 Items</span></b>  </p>
                <button className="gopro"> <b> PROCEED TO CHECKOUT</b></button>
            </div>
            </div>
            
            </div>

            <div className="paytm">
                <div className="gpay">
                <button className="gopro"> <b> PROCEED TO CHECKOUT</b></button>
                <div className="summary">
                <p><b>Order Summary</b></p>
                <div className="payment1">
                <p>3 Items</p>
                <TriangleDownIcon/>
                </div>
                <div className="payment1">
                <p>Merchandise:</p>
                <p>$987.83</p>
                </div>
                <div className="payment1">
                <p>Passport Shipping:</p>
                <p>$0.00</p>
                </div>
                <div className="payment1">
                <p>Total before tax:</p>
                <p>$987.83</p>
                </div>
                <div className="payment1">
                <p>Taxes:</p>
                <p>$7.18</p>
                </div>
                <hr />
                <div className="payment2">
                <p> <b>Order Total</b> </p>
                <p> <b> $1,029.83</b></p>
                </div>
                <div className="payment3">
                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc723326dc66beda5/image-20220307-142252.png" alt="abc" height="30px" />
                <CheckCircleIcon w={70} h={24} color="#00C876"/>
                </div>
                <p style={{fontSize:"14px"}}>
                Has been added to your cart for $19.99 for your first year. Automatically renews, you can cancel any time. Enjoy FREE SHIPPING/NO SERVICE CHARGE* benefits and perks for a year.
                </p>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cartpage;