import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  WrapItem,
  Box,
  Input
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import Footer from "../components/Landing/Footer";
import ProductCard from "../components/ProductCard";

export const Products = () => {
  const [cat, setCat] = React.useState("Easter");
  const [data, setData] = useState([]);
  const [count,setCount]=useState(0);
  
  const [val,setVal]=useState("");



  const getData = () => {
    fetch(`https://flowers18.onrender.com/flowers?category=${cat}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  React.useEffect(() => {
    getData();
  }, [cat]);


  const hightolow= () => {
    setCount(count + 1);
    let highdata = data.sort((a, b) => {
      return +b.price - +a.price;
    });

    setData(highdata);
   
  };

  const lowtohigh = () => {
    setCount(count + 1);
    let lowdata = data.sort((a, b) => {
      return +a.price - +b.price;
    });

    setData(lowdata);
  };

  const handleInputChange = (event) => {
    const val= event.target.value.toLowerCase();
    setVal(val);
    const filteredData = data.filter((item) =>
      item.title.includes(val)
    );
    setData(filteredData);
  };


  return (
    <>
  
      <Box display={"flex"} gap={"20px"} color={"white"} mt={"30px"}>
        <Button
          backgroundColor={"#65388B"}
          ml={["18%", "25%", "35%", "42%"]}
          onClick={() => lowtohigh()}
          _hover={{
            backgroundColor: "#65388B",
          }}
        >
          Low to High
        </Button>
        <Button
          backgroundColor={"#65388B"}
          onClick={() => hightolow()}
          _hover={{
            backgroundColor: "#65388B",
          }}
        >
          High to Low
        </Button>

        <Input w={"30%"} border={"1px solid grey"}
              type="text"
              value={val}
              onChange={handleInputChange}
              placeholder="Search......"
            />
      </Box>
      <br />
      
      <div style={{ width: "auto", display: "flex" ,height:"auto"}}>
        {/* <Navbar/> */}

        <div style={{ display: "flex", gap: "25px", width: "30%" }}>
          <div
            style={{
              // border: "1px solid teal",
              width: "100%",
            }}
          >
            <div
              style={{
                marginLeft: "10px",
                //   border: "1px solid red",
                height: "290px",
                width: "90%",
                backgroundColor: "#734f96",
                marginTop: "10px",
                borderRadius: "8px",
                paddingLeft: "20px",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              <h3 style={{ color: "white", paddingTop: "15px" }}>
                <Text as="b">FIND AVAILABLE PRODUCTS!</Text>
              </h3>
              <p
                style={{
                  marginLeft: "15px",
                  fontSize: "11px",
                  color: "white",
                  padding: "15px",
                  textAlign: "center",
                }}
              >
                ENTER DELIVERY ZIP CODE OR ADDRESS*
              </p>
              <input
                style={{
                  height: "45px",
                  width: "215px",
                  borderRadius: "4px",
                  // margin: "-15px",
                  textAlign: "center",

                  marginTop: "-10px",
                }}
                type="text"
                placeholder="Enter a location"
              />
              <p
                style={{
                  marginLeft: "15px",
                  fontSize: "11px",
                  color: "white",
                  padding: "15px",
                  textAlign: "center",
                }}
              >
                LOCATION TYPE:
              </p>
              <Menu>
                <MenuButton
                  style={{
                    height: "45px",
                    width: "220px",
                    textAlign: "center",
                    marginTop: "-10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Residence
                </MenuButton>
                <MenuList>
                  <MenuItem>Residence</MenuItem>
                  <MenuItem>Business</MenuItem>
                  <MenuItem>Funeral home</MenuItem>
                  <MenuItem>Hospital</MenuItem>
                  <MenuItem>Apartment</MenuItem>
                  <MenuItem>School</MenuItem>
                  <MenuItem>Church</MenuItem>
                </MenuList>
              </Menu>
              <WrapItem>
                <Button
                  style={{
                    height: "45px",
                    width: "221px",
                    marginLeft: "120px",
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                  colorScheme="whatsapp"
                >
                  GO
                </Button>
              </WrapItem>
            </div>

            <div
              style={{
                textAlign: "left",
                paddingTop: "20px",
                border: "3px solid #636363",
                fontSize: "25px",
                height: "360px",
                width: "90%",
                marginTop: "10px",
                cursor: "pointer",
                marginLeft:"14px",
              }}
            >
              <div style={{ marginLeft: "30px" }}>
                <Text as="b">SHOP ROSES BY COLOR</Text>

                <u>
                  <p
                    style={cat === "Easter" ? { color: "blue" } : null}
                    onClick={() => setCat("Easter")}
                  >
                    Easter Color Rose
                  </p>
                </u>

                <u>
                  <p
                    style={cat === "Red Rose" ? { color: "red" } : null}
                    onClick={() => setCat("Red Rose")}
                  >
                    Red Color Rose
                  </p>
                </u>
                <u>
                  <p
                    style={cat === "pink Rose" ? { color: "green" } : null}
                    onClick={() => setCat("Pink Rose")}
                  >
                    Pink Color Rose
                  </p>
                </u>
                <u>
                  <p
                    style={cat === "Orange Rose" ? { color: "orange" } : null}
                    onClick={() => setCat("Orange Rose")}
                  >
                    Orange Color Rose
                  </p>
                </u>
                <u>
                  <p
                    style={cat === "White Rose" ? { color: "white" } : null}
                    onClick={() => setCat("White Rose")}
                  >
                    White Color Rose
                  </p>
                </u>
                <u>
                  <p
                    style={cat === "Purple Rose" ? { color: "purple" } : null}
                    onClick={() => setCat("Purple Rose")}
                  >
                    Purple Color Rose
                  </p>
                </u>

                <u>
                  <p
                    style={cat === "Yellow Rose" ? { color: "yellow" } : null}
                    onClick={() => setCat("Yellow Rose")}
                  >
                    Yellow Color Rose
                  </p>
                </u>
              </div>
            </div>
            <div
              style={{
                border: "3px solid  #636363",
                marginLeft: "12px",
                height: "550px",
                width: "90%",
                marginTop: "20px",
                fontSize: "25px",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  marginLeft: "15px",
                  textAlign: "left",
                  marginTop: "15px",
                }}
              >
                <Text as="b">SHOP EASTER COLLECTIONS</Text>
                <u>
                  <p>Flower Delivery Same-Day</p>
                </u>

                <u>
                  <p>Spring Flower Delivery</p>
                </u>
                <u>
                  <p>Bulb Delivery </p>
                </u>
                <u>
                  <p>Easter Gift Basket Delivery</p>
                </u>
                <u>
                  <p>Easter Centerpieces & Decorations</p>
                </u>
                <u>
                  <p>Easter Lilies & Easter Plants</p>
                </u>
                <u>
                  <p>Easter Baskets for Kids</p>
                </u>
                <u>
                  <p>Easter Fruit Arrangements</p>
                </u>
                <u>
                  <p>Unique Easter Gifts & Keepsakes</p>
                </u>
                <u>
                  <p> Easter Gifts & Keepsakes</p>
                </u>
                <u>
                  <p>Easter Gifts & birthday</p>
                </u>
                <u>
                  <p>Easter fruit Arrangemet</p>
                </u>
              </div>
            </div>
            <div
              style={{
                border: "3px solid  #636363",
                marginLeft: "12px",
                height: "550px",
                width: "90%",
                marginTop: "20px",
                fontSize: "25px",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  marginLeft: "15px",
                  textAlign: "left",
                  marginTop: "15px",
                }}
              >
                <Text as="b">POPULAR EASTER FLOWERS 2023</Text>
                <u>
                  <p>Easter Lilies</p>
                </u>

                <u>
                  <p>Tulips</p>
                </u>
                <u>
                  <p>Bulbs </p>
                </u>
                <u>
                  <p>Roses</p>
                </u>
                <u>
                  <p>Hydrangeas</p>
                </u>
                <u>
                  <p>Sunflowers</p>
                </u>
                <u>
                  <p>Daisies</p>
                </u>
                <u>
                  <p>All Lilies</p>
                </u>
                <u>
                  <p>Gardenias</p>
                </u>
                <u>
                  <p> Carnations</p>
                </u>
                <u>
                  <p>Gerbera Daisies</p>
                </u>
                <u>
                  <p>Easter fruit Arrangemet</p>
                </u>
              </div>
            </div>
          </div>

          
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "50px",
            columnGap: "20px",
            textAlign: "center",
            rowGap: "80px",
            width: "85%",
            height: "10%",
          }}
        >
        
          {data.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      
      <Footer/>
    </>
   
  );
};
