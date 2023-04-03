import "./Address.css";
import { CheckCircleIcon, TriangleDownIcon, DeleteIcon } from '@chakra-ui/icons';
import "./Payment.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Landing/Footer";

function Payment(){
const [method,setMethod]=useState(false);
const [digit,setDigit]=useState("");
const navigate=useNavigate();

function Handlecode(e){
    console.log(e.target.value);
    setDigit(e.target.value);
}

function Setmethod(val){
    setMethod(val);
}

function Handlepayment(){
alert("Order Will be delivered soon");
navigate("/");

}

    return(<>
        <div className="main3">
        <div className="left3">
        <div className="address2">
                <h1>Payment Information</h1>
                <div className="info3">
              <h3>Payment Method:</h3>
                <div className="method">
                    <div style={{border:method==true?"2px solid indigo":"none"}}>
                    <img src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt55a4652be9c043dd/632087e72975ce72ea2faf4f/card-logo.png" alt="abc" width="62%" onClick={()=>{Setmethod(true)}}  /></div>
                    <div style={{border:method==false?"2px solid indigo":"none"}}>
                    <img src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt18ea45241bb20e3a/632076f927d06f32eeaf01ff/paypal-logo-2.png" alt="abc" width="62%" onClick={()=>{Setmethod(false)}} /></div>
                </div>
           {
            method==true?     <div className="forcard">
            <div className="cred">
                <p><b>Credit or Debit Card:</b></p>
                <div>
                    <img src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/2018/mobile/visa-icon.png" alt="opti" width="40px"/>
                    <img src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/2018/mobile/amex-logo.png" alt="opti" width="40px"/>
                    <img src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/2018/mobile/discover-logo.png" alt="opti" width="40px"/>
                    <img src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/2018/mobile/mastercard-logo.png" alt="opti" width="40px" />
                </div>
            </div>
            <input type="text" className="ad13" placeholder="NAME ON CARD"/>
            <input type="text" className="ad13" placeholder="CARD NUMBER"/>
            <div className="trio2">
            <select  className="tigada" placeholder="MONTH" >
<option value={1}  disabled selected hidden> MONTH</option>
<option value={2}>1</option>
<option value={2}>2</option>
<option value={3}>3</option>
<option value={4}> 4</option>
<option value={5}> 5</option>
<option value={2}>6</option>
<option value={2}>7</option>
<option value={3}>8</option>
<option value={4}> 9</option>
<option value={5}> 10</option>
<option value={5}> 11</option>
<option value={5}> 12</option>
</select>
<select  className="tigada" placeholder="YEAR" >
<option value={1}  disabled selected hidden> YEAR</option>
<option value={2}>2024</option>
<option value={2}>2025</option>
<option value={3}>2026</option>
<option value={4}> 2027</option>
<option value={5}> 2028</option>
<option value={2}>2029</option>
<option value={2}>2030</option>
<option value={3}>2031</option>
<option value={4}> 2032</option>
<option value={5}> 2033</option>
<option value={5}> 2034</option>
<option value={5}> 2035</option>
</select>
<input type="text" className="tigada" placeholder="STATE" />
</div>
<div className="check4">
<input type="checkbox" />
<p>Save this card for future payment</p>
</div>
<button className="gopro1"> <b>PROCEED FOR PAYMENT</b></button>
            </div>:<div>
                <p>Proceed to review order where you can complete your purchase with <br /> <b> PayPal.</b></p>
                <hr style={{color:"#696969"}} />
                <p><b>Contact Info:</b></p>
                <input type="text" className="ad13" placeholder="YOUR PHONE NUMBER"/>
               <span style={{color:"#696969"}}>Phone is required in case we need to contact you about an order.</span>
               <div className="opt23">
               <div className="check5">
<input type="checkbox" />
<p>Send me order status updates via text message</p>
</div>
<div className="check5">
<input type="checkbox" />
<p>Get exclusive offers via text message</p>
</div>
<div className="check5">
<input type="checkbox" />
<p>Email me promotions and special offers</p>
</div>

               </div>
               <button className="gopro1" onClick={Handlepayment}> <b> PROCEED FOR PAYMENT</b></button>
            </div>
           }
                </div>
                <div className="card2">
            {/* <h1>Shopping Cart</h1> */}
            
                </div>
            </div>
            
        </div>

        <div className="right3">
        <div className="gpay2">
           <p style={{margin:"auto",textAlign:"center"}}><u style={{color:"indigo"}}>Sign In</u> for easier and faster checkout!</p>
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
            {/* <CheckCircleIcon w={10} h={24} color="#00C876"/> */}
            </div>
            <p style={{fontSize:"14px"}}>
            Has been added to your cart for $19.99 for your first year. Automatically renews, you can cancel any time. Enjoy FREE SHIPPING/NO SERVICE CHARGE* benefits and perks for a year.
            </p>
            </div>
            <div className="summary">
            <div className="payment1">
            <p><b>Apply a Promotion Code </b> </p>
            <TriangleDownIcon/>
            </div>
            <input type="text" className="ad13" placeholder="PROMO CODE" onChange={Handlecode}/>
            <input type="text" className="ad13" placeholder="MEMBERSHIP NUMBER"/>
            <button className="gopro1" style={{backgroundColor:digit.length<5?"gray":"#00C876"}} > <b>APPLY</b></button>
            </div>
            </div>
        </div>
    </div>
    {/* <Footer/> */}
    </>
    )
}
export default Payment;