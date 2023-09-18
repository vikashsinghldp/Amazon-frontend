import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {callApi} from "../utils/CallApi"
import ProductDetail from './ProductDetail'

const ProductPage = () => {
    const {id} =useParams();
    const [product,setProduct]=useState(null)
    const getProduct =()=>{
        callApi(`data/products.json`)
        .then((productResult)=>{
          setProduct(productResult[id])
        })
    }

    useEffect(()=>{
      getProduct();
    },[])
    if(!product?.title) return <h1>Loding...</h1>;
  return (
    product &&
    <div className='h-screen bg-amazonclone-background'>
     <div className='min-w-[1000px] max-w-[1500px] m-auto bg-orange-400'>
      <div className='grid grid-cols-10'>
        <div className='col-span-3 bg-white rounded'>
          <img src={`${product.image}`} alt="" />
        </div>
        <div className='col-span-3 p-4 divide-y divide-gray-400 rounded bg-white'>
          <div className='m-3'>
          <ProductDetail product={product} rating={false}/>
          </div>
        </div>
        <div></div>
      </div>
     </div>
    </div>
  )
}

export default ProductPage
