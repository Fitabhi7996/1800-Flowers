import "./Productdetails.css";
import { Radio, RadioGroup } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, CalendarIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react";
function Productdetail(){
const [shift,setShift]=useState("false");


function Changeimage(e){
console.log(e.target.value);

setShift(e.target.value);


}

// useEffect(()=>{
     
// },[shift]);



    return(
        <div className="product">
            <div className="imgages">
                <div>
                    <img src="https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/192269x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}" alt="flower" width="90%" />
                    <img src="https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/192269cbx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}" alt="flow" width="90%" />
                </div>
            </div>
            <div className="photo">
                {
                    shift=="false"?<img src="https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/192269x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}" alt="photos" width="100%" />:<img src="https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/192269cbx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}" alt="photos" width="100%" />
                }
                {/* <img src="https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/192269cbx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}" alt="photos" width="100%" /> */}
            </div>
            <div className="info">
                <h2>Birthday Wishes Flower Cake® Vibrant</h2>
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
                    <p>Extra Large</p>
                    </div>
                    <p>$25.55</p>
                    </div>
                    <div className="type">
                        <div className="large">
                    <input type="radio" className="radio" name="choice"  value="true" onChange={Changeimage} />
                    <p>Extra Small</p>
                    </div>
                    <p>$15.55</p>
                    </div>
                    <div className="klara">
                        <button className="klarna"> <b>klarna</b> </button>
                        <p>4 interest-free payments of $18.49.</p>
   
                    </div>
                    
                    
                  </div>
                  <div className="last" > 
                  <input type="checkbox" className="check" />
                    <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt199dfd765a419907/61e09d4f14ef402247cebaac/PP_UpsellIcon.svg" alt="fe" height="20px" />
                    <p>Free Shipping/No Service Charge for One Full Year for Only $19.99/Year.</p>
                    <button className="ibutton">i</button>
                    </div>
                    <div className="address">
                    <div className="head2">
                        <p><b>2. Enter Delivery Destination</b></p>
                        <p  style={{color:"indigo"}}> <b>Sign in to access your address book</b> </p>
                    </div>
                    <div className="code">
                        <div className="left">
                            <input type="text" className="zip" placeholder="Delivery Zip 
                            Code"/>
                        </div>
                        <div className="right"> 
                            <p>Location Type</p>
                            <select name="type" className="type1">
                                <option value="Business">Business</option>
                                <option value="Apartments">Apartments</option>
                                <option value="Temple">Temple</option>
                                <option value="School">School</option>
                            </select>
                        </div>
                    </div>
                    <button className="cart"><p>Add to cart</p><CalendarIcon/></button>
                    </div>

               
            </div>
            
        </div>
    )
}

export default Productdetail;