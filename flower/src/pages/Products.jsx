import React, { useState } from "react";

import ProductCard from "../components/ProductCard";

export const Products = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://wild-blue-lemur-sari.cyclic.app/flowers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {/* <Navbar/> */}

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "50px",
          columnGap:"20px",
          textAlign: "center",
          rowGap:"80px"
        }}
      >
        {data.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}{" "}
      </div>
      
    </div>
  );
};
