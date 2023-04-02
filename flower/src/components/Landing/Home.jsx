import React from 'react'
import style from "./Home.module.css"
import firstSnap from "./images/First.png"
import secondSnap from "./images/Second.png"
import thirdSnap from "./images/Third.png"
import fourthSnap from "./images/Fourth.png"
import fifthSnap from "./images/Fifth.png"






const cardData = [{ img: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191309lz.jpg?quality=85&auto=webp&optimize={medium}", name: "Spring Sensation™", price: "Starting From $99.99" },
{ img: "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191254xlz.jpg?quality=85&auto=webp&optimize={medium}", name: "Fields Of Europe® ...", price: "Starting From $49.99" },
{ img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/140157mpuv5wc2z.jpg?quality=85&auto=webp&optimize={medium}", name: "Kaleidoscope Roses..", price: "Starting From $59.99" },
{ img: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/91158mclsv1z.jpg?quality=85&auto=webp&optimize={medium}", name: "Sweet Spring Lily...", price: "Starting From $34.99" },
{ img: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/158024lg1z.jpg?quality=85&auto=webp&optimize={medium}", name: "Delightful Daffodil...", price: "Starting From $24.99" },
{ img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/90786stv4ch29z.jpg?quality=85&auto=webp&optimize={medium}", name: "Fanciful Spring Tulip...", price: "Starting From $39.99" },
{ img: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191310lz.jpg?quality=85&auto=webp&optimize={medium}", name: "Spring Sentiment™...", price: "Starting From $49.99" },
{ img: "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191308lz.jpg?quality=85&auto=webp&optimize={medium}", name: "Pastel Posy™ Bouq...", price: "Starting From $49.99" }]
// import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"



const Home = () => {
  return (
    <div style={{ marginBottom: "15px" }}>
      
      {/* ======================================First Snap================================== */}
      <div className="firstsnap">
        <img src={firstSnap} style={{ width: "100%" }} alt="snap"></img>
      </div>

      {/* ========================================Zoom Images====================================== */}
      <div className={style.zoomImages}>
        <h3 className={style.zoomHeading}>Send Flowers & Exclusive Gifts</h3>
        {/* <Heading className={style.zoomHeading} >Send Flowers & Exclusive Gifts</Heading> */}
        <div className={style.zoomwrapper}>
          <div >
            <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt3595a4f11ad56e50/63d92b2699f0c910e171a33c/flower-delivery-same-day-silo-191167xl-260x284.jpg?quality=85&auto=webp&optimize={medium}' alt="flower" ></img>
            <p>Same-Day Flower Delivery</p>
          </div>
          <div >
            <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blta2748b9a4b476529/63d304315ba46f75ddba03cf/sympathy-flowers-silo-191166XL-260x284.jpg?quality=85&auto=webp&optimize={medium}' alt="flower"></img>
            <p>Sympathy</p>
          </div>
          <div>
            <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt867d5477b7adc192/627be2023debbf3afdd2ea1e/get-well-flowers-146761-silo-260x284.jpg?quality=85&auto=webp&optimize={medium}' alt="flower"></img>
            <p>Get Well</p>
          </div>
          <div>
            <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt26149ee749ecd0f3/62b5c27fa7c4490fd2ef03ef/magnificent-preserved-roses-silo-156623-260x284.jpeg?quality=85&auto=webp&optimize={medium}' alt="flower"></img>
            <p>Love & Romance</p>
          </div>
          <div>
            <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt117a124edd0bed9a/625d7667e4b2fd4fda37bffa/spring-chocolate-covered-strawberries-delivery-silo-192918m-260x284.jpg?quality=85&auto=webp&optimize={medium}' alt="flower"></img>
            <p>Chocolate Covered Strawberries</p>
          </div>
          <div>
            <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt78bec1b71e74fbe5/6216889d9e46fb3ab4284975/get-well-flowers-silo-179053-260x284.jpg?quality=85&auto=webp&optimize={medium}' alt="flower"></img>
            <p>Just Because</p>
          </div>
        </div>
      </div>

      {/* ====================================smiling kid================================ */}
      <div className={style.smiling}>
        <div className={style.smileFirst}>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbc0c1e6918b19b6a/6413f172fbf0f5117d73671a/easter-flowers-delivery-zone-10-banner-fy23.jpg?quality=70&auto=webp&optimize={medium}" alt="flower"></img>
        </div>
        <div className={style.smileSecond} >
          <img src={secondSnap} alt="flower"></img>
        </div>
        <div className={style.smileSecond} >
          <img src={thirdSnap} alt="flower"></img>
        </div>
      </div>

      {/* ======================================Zoom Images Again================================= */}
      <div className={style.zoomImages}>
        <h3 className={style.zoomHeading}>Explore Our Self-Care Essentials</h3>
        {/* <Heading className={style.zoomHeading} >Send Flowers & Exclusive Gifts</Heading> */}
        <div className={style.zoomwrapper}>
          <div >
            <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt83c25a21462cccea/63a61e2e9233961262fbbcfe/spa-gift-basket-silo-mk012144-260x284.jpg?quality=85&auto=webp&optimize={medium}' alt="flower" ></img>
            <p>Spa Gifts</p>
          </div>
          <div >
            <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8ccd8ba5f57bb6c5/63a61e6a66600623830ad5b8/candle-gifts-lanterns-silo-mk021324-260x284.jpg?quality=85&auto=webp&optimize={medium}' alt="flower"></img>
            <p>Candles & Lanterns</p>
          </div>
          <div>
            <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt204357e08752a3bc/63a61ea27760ab1f00affbb1/gifts-under-25-silo-mk018491-260x284.jpg?quality=85&auto=webp&optimize={medium}' alt="flower"></img>
            <p>Gift Under $25</p>
          </div>
          <div>
            <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0c60554654188a74/63a61ee81d30ec7c2c531c79/zen-gifts-for-relaxation-silo-mkq016474-260x284.jpg?quality=85&auto=webp&optimize={medium}' alt="flower"></img>
            <p>Zen & Relaxation</p>
          </div>
          <div>
            <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt9f97ed604bf1a128/63a61f39609d40109bf54fe8/lavender-flowers-gifts-silo-155227-260x284.jpg?quality=85&auto=webp&optimize={medium}' alt="flower"></img>
            <p>Lavender Gifts</p>
          </div>
          <div>
            <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt590656ac79c533bf/63a630b99233961262fbbd0a/cozy-comfort-gifts-silo-mk005330-260x284.jpg?quality=85&auto=webp&optimize={medium}' alt="flower"></img>
            <p>Cozy Comfort</p>
          </div>
        </div>
        <div className={style.smileFourth}>
          <img src={fourthSnap} alt="flower"></img>
        </div>
      </div>

      {/* ===================================flower card========================================= */}
      <div>
        <h3 className={style.zoomHeading}>Trending Flowers & Gifts</h3>
        <div className={style.flowerCard}>
          {cardData?.map((el) => (
            <div style={{ cursor: "pointer" }}>
              <img src={el.img} alt="flower"></img>
              <p className={style.name}>{el.name}</p>
              <p className={style.price}>{el.price}</p>
            </div>
          ))}
        </div>
        <div>
          <img src={fifthSnap} alt="flower"></img>
        </div>
      </div>

       {/* ===========================================Made me Smile========================================== */}
      <div>

        <div>
            <div>
                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbcf30ced0a418919/63fcd5c452820c02597c04e3/ugc-image-fields-of-europe-spring.jpg?quality=85&auto=webp&optimize={medium}" alt="social"></img>
            </div>
            <div>
                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt9536a0b1f715fd80/63fcd60582b5176dad0999c4/ugc-image-assorted-tulip-bouquet.jpg?quality=85&auto=webp&optimize={medium}" alt="social"></img>
            </div>
            <div>
                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf96a2f03a42e1c17/63fcd62d16515710b8ed4694/ugc-image-sorbet-roses.jpg?quality=85&auto=webp&optimize={medium}" alt="social"></img>
            </div>
            <div>
                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt205c41fe8e8ce8f6/63fcd65eff1d0646c816f367/ugc-image-marble-queen-pothos-plant.jpg?quality=85&auto=webp&optimize={medium}" alt="social"></img>
            </div>
            
        </div>
      </div>

    </div>


  )
}

export default Home;
