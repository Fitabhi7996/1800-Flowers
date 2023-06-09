import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProductCard = ({image,title,price,category,id}) => {

  const nav=useNavigate();
  return (

<div onClick={()=>nav(`/productdetails/${id}`)} >
      <img src={image} alt="one"  style={{width:"100%",height:"98%"}}/>
      <img  style={{width:"70%",paddingLeft:"150px"}} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg" alt="" />
      <h1 style={{fontWeight:"bold"}}>{title}</h1>
      <h3 style={{fontWeight:"bold"}}>${price}</h3>
    
    </div>
  )
}

export default ProductCard