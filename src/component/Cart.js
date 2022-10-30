import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { remove } from '../store/cardslice';

const Cart = () => {
  const productlist = useSelector((state)=>state.cart)
  const removeitem = useDispatch()
 function handleremove(itemid){
removeitem(remove(itemid))
  }
  return (
    <div>
      <h1>Totla cart items:</h1>
      { productlist.map((item)=>{
        return(
          <div class="card mb-3" key={item.id} style={{Width: "100%"}}>
          <div class="row g-0">
            <div class="col-md-4 d-flex justify-content-conter p-2">
              <img src={item.image} class="img-fluid" style={{width:"40px",marginLeft:"90px"}} alt="..."/>
            </div>
            <div class="col-md-8 d-flex justify-content-evenly align-items-center">
              
                <p style={{textOverflow:"---", whiteSpace: "nowrap",
        overflow:"hidden",width:"28%"}}>{item.title}</p>
                <p>{item.category}</p>
                <p><small class="text-muted">{item.price}</small></p>
              
              <div>
              <a className='btn btn-success'>-</a><span className='align-middle'>{1}</span><a className='btn btn-success'>+</a>
              </div>
             
             <a onClick={()=>handleremove(item.id)}><DeleteIcon></DeleteIcon></a>
              </div>
            </div>
          </div>
        
        )
 
      })
        
      }
   
    </div>
  )
}

export default Cart
