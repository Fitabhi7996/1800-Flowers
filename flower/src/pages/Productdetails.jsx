import "./Productdetails.css";
import { Radio, RadioGroup } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, CalendarIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Landing/Footer";
import axios from "axios";
function Productdetail(){
const [shift,setShift]=useState("false");
const [data,setData]=useState({})

const {id}=useParams();
console.log(id);  
   
function Addtocart()

{
    alert("Product added to the cart");
    const obj={
        category:data.category,
        image:data.image,
        price:data.price,
        title:data.title
    }
    axios.post(`https://flowers18.onrender.com/carts`,obj).then((res)=>console.log(res)).catch((err)=>console.log(err));
}


function Changeimage(e){
console.log(e.target.value);

setShift(e.target.value);

}

const getData = (id) => {
    fetch(`https://flowers18.onrender.com/flowers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };


useEffect(()=>{
    
     getData(id);
},[id]);



    return(<>
        <div className="product">
            <div className="imgages">
                <div>
                    <img src={data.image} alt="flower" width="90%" />
                    <img src={data.image1} alt="flow" width="90%" />
                </div>
            </div>
            <div className="photo">
                {
                    shift=="false"?<img src={data.image} alt="photos" width="100%" />:<img src={data.image1} alt="photos" width="100%" />
                }
                {/* <img src="https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/192269cbx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}" alt="photos" width="100%" /> */}
            </div>
            <div className="info">
                <h2>{data.title}</h2>
                <div className="offer">
                    <p> 2,203 Purchased to Celebrate a Birthday!</p>
                    <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/5811/b13340954906e556f00013f5e0138a4e_96_96.png" alt="symb"  className="symbol"/>
                    </div>
               
                    <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?quality=85&auto=webp&optimize={medium}" alt="pass" className="pass" width="190px" />
                  <div className="table">
                    <div className="head">
                        <p><b>1. Pick Your Item</b></p>
                    </div>
                    <div className="type">
                        <div className="large">
                    <input type="radio" className="radio" name="choice" value="false" onChange={Changeimage} />
                    <p>Extra Small</p>
                    </div>
                    <p>${data.price}</p>
                    </div>
                    <div className="type">
                        <div className="large">
                    <input type="radio" className="radio" name="choice"  value="true" onChange={Changeimage} />
                    <p>Extra Large</p>
                    </div>
                    <p>${data.price1}</p>
                    </div>
                    <div className="klara">
                        <button className="klarna"> <b>klarna</b> </button>
                        <p>4 interest-free payments of $18.49.</p>
   
                    </div>
                    
                    
                  </div>
                  <div className="last" > 
                  <input type="checkbox" className="check" />
                    <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt199dfd765a419907/61e09d4f14ef402247cebaac/PP_UpsellIcon.svg" alt="fe" width="100px" />
                    <p>Free Shipping/No Service Charge for One Full Year for Only $19.99/Year.</p>
                    <button className="ibutton">i</button>
                    </div>
                    <div className="address">
                    <div className="head2">
                        <p><b>2. Enter Delivery Destination</b></p>
                        <p  style={{color:"indigo"}}> <b>Sign in to access your address book</b> </p>
                    </div>
                    <div className="code10">
                        <div className="left10">
                            <input type="text" className="zip" placeholder="Delivery Zip 
                            Code"/>
                        </div>
                        <div className="right10"> 
                            <p>Location Type</p>
                            <select name="type" className="type1">
                                <option value="Business">Business</option>
                                <option value="Apartments">Apartments</option>
                                <option value="Temple">Temple</option>
                                <option value="School">School</option>
                            </select>
                        </div>
                    </div>
                    <button className="cart" onClick={Addtocart} ><p>Add to cart</p><CalendarIcon/></button>
                    </div>

               
            </div>
            
        </div>
        <Footer/>
        </>
    )
}

export default Productdetail;