import { Star } from "@mui/icons-material";
import React from 'react'

const ProductRating = (props) => {
    const startNumber =props.avgRating;
    const ratingNumber = props.ratings;
  return (
    <div className="flex">
        {Array.from({length: startNumber},(_,i)=>(
            <Star key={i} className="stroke-[#f1b61f] h-[20px]"/>  ))}

{Array.from({length: 5-startNumber},(_,i)=>(
            <Star key={i} className="stroke-[#f1b61f] h-[20px]"/>  ))}

            <span className="ml-3 text-blue-500">{ratingNumber} ratings</span>
      
    </div>
  )
}

export default ProductRating
