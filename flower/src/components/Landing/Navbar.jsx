import React from "react";
import style from "./Navbar.module.css";
import logo from "./images/logo.png";
import signIn from "./images/sign-in.svg";
import truck from "./images/truck.svg";
import cartIcon from "./images/cartIcon.svg";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import Search from "../../pages/Search";


const Navbar = () => {
  const nav = useNavigate();
  const nav1 = useNavigate();

  const handleLogin = () => {
    nav("/login");
  };

  const handleHome = () => {
    nav1("/");
  };
  const handlecart = () => {
    nav("/cart");
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <div className={style.first}>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt13b0f02cd71877df/5f08974a8b0e59084c9f7570/hd-logo-v3.svg?height=32&width=78"
            alt="harry"
          />
        </div>

        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltac334446d6f9e89c/5f96fc4f2425cd7a8af6845e/pmall_svg-logo-v2.svg?height=32&width=78"
            alt="Mall"
          />
        </div>

        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltf0b1021465476e4f/5f08974b0d1d2008538ce15a/SharisLogo_r.svg?height=32&width=78"
            alt="Berries"
          />
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/bltc699f5c4977942f7/blt329c48c98c46443f/64111cfcaa6c3f7f594be64c/1800Baskets_Logo_compact.svg?height=32&width=78"
            alt="Basket"
          />
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt71adcb0696952e83/5f08974baa5d1801639286b4/sch-logo-v2.svg?height=32&width=78"
            alt="chocolate"
          />
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltef2e14ec247ab827/5f08974a2cd8e87f92bdd257/fb-logo-v2.svg?height=32&width=78"
            alt="fruit"
          />
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blte1e2eb25cfd09fb6/5f08974a91afb901b86d5251/cco-logo-v2.svg?height=32&width=78"
            alt="cookies"
          />
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/bltf9903ccf2408c217/5f0897552cd8e87f92bdd25b/tpf-logo-v2.svg?height=32&width=78"
            alt="popcorn"
          />
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blt7ef824d3f9f5074d/5f0897558b0e59084c9f7574/wlf-logo-v2.svg?height=32&width=78"
            alt="bakery"
          />
        </div>
        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt95e0138311135214/blta2ba2ac7606f6c15/5f08974bceebbf7e87c30215/sy-logo-v2.svg?height=32&width=78"
            alt="stock"
          />
        </div>

        <div>
          <img
            src="https://images.contentstack.io/v3/assets/blt0281495b20b504a0/blta4f709f645453ff0/61b4eeeea000c90ecc6e15bd/VC_Logo_w_tag.svg?height=32&width=78"
            alt="vitalchoice"
          />
        </div>
      </div>
      {/* // ===================================logo & search bar from here======================> */}
      <div className={style.second}>
        {/* onClick = {handleHome} */}
        <div className={style.logo} onClick={handleHome}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.search}>
          
        </div>
        <Search/>
        
        

        <div className={style.signIn} onClick={handleLogin}>
          <div>
            <img src={signIn} alt="signIn" />
          </div>
          <div>
            <p>Sign In</p>
          </div>
        </div>
        <div className={style.myOrder}>
          <div>
            <img src={truck} alt="myOrder" />
          </div>
          <div>
            <p>My Orders</p>
          </div>
        </div>
        <div className={style.cart} onClick={handlecart}>
          <div>
            <img src={cartIcon} alt="myOrder" />
          </div>
          <div>
            <p>(0) Cart</p>
          </div>
        </div>
      </div>

      {/* ====================================DropDown=============================================== */}
      <div className={style.dropdown}>
        <Dropdown />
      </div>
    </div>
  );
};

export default Navbar;
