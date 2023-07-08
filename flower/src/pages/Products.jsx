import React, { useState } from "react";
import {
  Grid,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  WrapItem,
  Box,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Footer from "../components/Landing/Footer";
import ProductCard from "../components/ProductCard";
import FetchSearchData from "./FetchSearchData";

export const Products = () => {
  const [cat, setCat] = useState("Easter");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  const getData = () => {
    fetch(`https://flowers180.onrender.com/flowers?category=${cat}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  React.useEffect(() => {
    getData();
  }, [cat]);

  const hightolow = () => {
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

  const menuButtonSize = useBreakpointValue({ base: "sm", md: "md" });
  const inputWidth = useBreakpointValue({ base: "100%", md: "215px" });
  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
  });

  return (
    <>
      <Box display="flex" gap={2} color="white" mt={3} justifyContent="center">
        <Button
          backgroundColor="#65388B"
          ml={["18%", "25%", "35%", "42%"]}
          onClick={lowtohigh}
          _hover={{
            backgroundColor: "#65388B",
          }}
        >
          Low to High
        </Button>
        <Button
          backgroundColor="#65388B"
          onClick={hightolow}
          _hover={{
            backgroundColor: "#65388B",
          }}
        >
          High to Low
        </Button>
      </Box>
      <br />

      <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
        <Box
          width={{ base: "100%", md: "30%" }}
          marginBottom={{ base: "20px", md: "0" }}
        >
          <Box
            marginLeft="10px"
            height="290px"
            backgroundColor="#734f96"
            borderRadius="8px"
            padding="20px"
            textAlign="center"
            alignContent="center"
          >
            <Text as="h3" color="white" paddingTop="15px" fontWeight="bold">
              FIND AVAILABLE PRODUCTS!
            </Text>
            <Text
              fontSize="11px"
              color="white"
              padding="15px"
              textAlign="center"
            >
              ENTER DELIVERY ZIP CODE OR ADDRESS*
            </Text>
            <Input
              type="text"
              placeholder="Enter a location"
              borderRadius="4px"
              textAlign="center"
              marginTop="-10px"
              width={inputWidth}
            />
            <Text
              fontSize="11px"
              color="white"
              padding="15px"
              textAlign="center"
            >
              LOCATION TYPE:
            </Text>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                height="45px"
                width="220px"
                textAlign="center"
                marginTop="-10px"
                size={menuButtonSize}
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
                colorScheme="whatsapp"
                height="45px"
                width="221px"
                marginLeft="35px"
                marginTop="10px"
                textAlign="center"
              >
                GO
              </Button>
            </WrapItem>
          </Box>

          <Box
            textAlign="left"
            paddingTop="20px"
            border="3px solid #636363"
            fontSize="20px"
            height="270px"
            marginTop="10px"
            cursor="pointer"
            marginLeft="10px"
          >
            <Box marginLeft="30px">
              <Text as="b">SHOP ROSES BY COLOR</Text>
              <u>
                <Text
                  variant="body1"
                  style={cat === "Easter" ? { color: "blue" } : null}
                  onClick={() => setCat("Easter")}
                >
                  Easter Color Rose
                </Text>
              </u>
              <u>
                <Text
                  variant="body1"
                  style={cat === "Red Rose" ? { color: "red" } : null}
                  onClick={() => setCat("Red Rose")}
                >
                  Red Color Rose
                </Text>
              </u>
              <u>
                <Text
                  variant="body1"
                  style={cat === "pink Rose" ? { color: "green" } : null}
                  onClick={() => setCat("Pink Rose")}
                >
                  Pink Color Rose
                </Text>
              </u>
              <u>
                <Text
                  variant="body1"
                  style={cat === "Orange Rose" ? { color: "orange" } : null}
                  onClick={() => setCat("Orange Rose")}
                >
                  Orange Color Rose
                </Text>
              </u>
              <u>
                <Text
                  variant="body1"
                  style={cat === "White Rose" ? { color: "white" } : null}
                  onClick={() => setCat("White Rose")}
                >
                  White Color Rose
                </Text>
              </u>
              <u>
                <Text
                  variant="body1"
                  style={cat === "Purple Rose" ? { color: "purple" } : null}
                  onClick={() => setCat("Purple Rose")}
                >
                  Purple Color Rose
                </Text>
              </u>
              <u>
                <Text
                  variant="body1"
                  style={cat === "Yellow Rose" ? { color: "yellow" } : null}
                  onClick={() => setCat("Yellow Rose")}
                >
                  Yellow Color Rose
                </Text>
              </u>
            </Box>
          </Box>

          <Box
            border="3px solid  #636363"
            marginLeft="12px"
            height="400px"
            marginTop="20px"
            fontSize="20px"
          >
            <Box cursor="pointer" marginLeft="15px" textAlign="left" marginTop="15px">
              <Text as="b">SHOP EASTER COLLECTIONS</Text>
              <u>
                <Text variant="body1">Flower Delivery Same-Day</Text>
              </u>
              <u>
                <Text variant="body1">Spring Flower Delivery</Text>
              </u>
              <u>
                <Text variant="body1">Bulb Delivery</Text>
              </u>
              <u>
                <Text variant="body1">Easter Gift Basket Delivery</Text>
              </u>
              <u>
                <Text variant="body1">Easter Centerpieces & Decorations</Text>
              </u>
              <u>
                <Text variant="body1">Easter Lilies & Easter Plants</Text>
              </u>
              <u>
                <Text variant="body1">Easter Baskets for Kids</Text>
              </u>
              <u>
                <Text variant="body1">Easter Fruit Arrangements</Text>
              </u>
              <u>
                <Text variant="body1">Unique Easter Gifts & Keepsakes</Text>
              </u>
              <u>
                <Text variant="body1">Easter Gifts & Keepsakes</Text>
              </u>
              <u>
                <Text variant="body1">Easter Gifts & birthday</Text>
              </u>
              <u>
                <Text variant="body1">Easter fruit Arrangemet</Text>
              </u>
            </Box>
          </Box>

          <Box
            border="3px solid  #636363"
            marginLeft="12px"
            height="450px"
            marginTop="20px"
            fontSize="20px"
          >
            <Box cursor="pointer" marginLeft="15px" textAlign="left" marginTop="15px">
              <Text as="b">POPULAR EASTER FLOWERS 2023</Text>
              <u>
                <Text variant="body1">Easter Lilies</Text>
              </u>
              <u>
                <Text variant="body1">Tulips</Text>
              </u>
              <u>
                <Text variant="body1">Bulbs</Text>
              </u>
              <u>
                <Text variant="body1">Roses</Text>
              </u>
              <u>
                <Text variant="body1">Hydrangeas</Text>
              </u>
              <u>
                <Text variant="body1">Sunflowers</Text>
              </u>
              <u>
                <Text variant="body1">Daisies</Text>
              </u>
              <u>
                <Text variant="body1">All Lilies</Text>
              </u>
              <u>
                <Text variant="body1">Gardenias</Text>
              </u>
              <u>
                <Text variant="body1">Carnations</Text>
              </u>
              <u>
                <Text variant="body1">Gerbera Daisies</Text>
              </u>
              <u>
                <Text variant="body1">Easter fruit Arrangemet</Text>
              </u>
            </Box>
          </Box>
        </Box>

        <Grid
        templateColumns={gridTemplateColumns}
        gap={6}
        justifyContent="center"
        marginBottom={6}
      >
          {data.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </Grid>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <hr />

      <Footer />
    </>
  );
};









