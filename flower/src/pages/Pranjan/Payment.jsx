import "./Address.css";
import { CheckCircleIcon, TriangleDownIcon, DeleteIcon } from '@chakra-ui/icons';



function Payment(){
    return(
        <div className="main3">
        <div className="left3">
        <div className="address2">
                <h1>Delivery Information</h1>
                <div className="info2">
              

                </div>
                <div className="card2">
            {/* <h1>Shopping Cart</h1> */}
            
                </div>
            </div>
        </div>

        <div className="right3">
        <div className="gpay">
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
export default Payment;