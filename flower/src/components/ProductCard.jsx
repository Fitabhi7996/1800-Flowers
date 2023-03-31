import React from 'react'

const ProductCard = ({image,title,price,category,id}) => {

  return (

<div >
      <img src={image} alt=""  style={{width:"100%",height:"100%"}}/>
      <img  style={{width:"50%",textAlign:"center"}} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg" alt="" />
      <h1>{title}</h1>
      <h3 style={{textShadow:"initial"}}>{price}</h3>
      <h3>{category}</h3>

      
    </div>
  )
}

export default ProductCard
