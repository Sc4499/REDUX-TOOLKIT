import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cardslice';
const Products = () => {
  const dispatch = useDispatch();
    const [product,setPrduct]=useState([]);
    useEffect(()=>{
        const fetdata= async()=>{
            const res =  await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setPrduct(data);
        }
        fetdata()
    },[]

    )
    const clickhandler = (product)=>{
      dispatch(add(product));
    }

  return <>
  { product.map(item=>{
    return(
            <div className='col-md-3' key={item.id}>
            <div class="card text-center mb-4" style={{width: "14rem",height:"40vh"}}>
        <img src={item.image} class="card-img-top mt-2" style={{width:"40px",marginLeft:"90px"}} alt="..."/>
        <div class="card-body">
          <h6 class="card-title" style={{textOverflow:"---", whiteSpace: "nowrap",
        overflow:"hidden"}}>{item.title}</h6>
          <p>{item.category}</p>
          
        </div>
        <a onClick={()=>clickhandler(item)} class="btn btn-success m-auto mb-2 rounded-0">Add to cart</a>
      </div>
          </div>)
        })
    }
  </>
  
  
}

export default Products
