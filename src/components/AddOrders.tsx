import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Link, useNavigate } from 'react-router-dom';
import MyButton from './Button/MyButton';

import axios from 'axios';

function AddOrders() {
    
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(state=>state.auth.status);
  const currentUser= useAppSelector(state=>state.auth.userData);
  const token = useAppSelector(state=>state.auth.token);
  const [itemCount,setItemCount] = useState(1);
    const dispatch = useAppDispatch()
    const currentSelected = useAppSelector(state=>state.products.selectedProduct);
    const isAdded = useAppSelector(state=>state.order.cart).some(item=>item.product_id==currentSelected?.product_id);
   

    const handleCart=async()=>{
       const product =  {
        user_id:currentUser.user_id,
        product_id:currentSelected?.product_id,
        count:itemCount
       };

   try{
    await axios.post('http://127.0.0.1:8000/api/cart/store-cart',product,{
      headers:{
        'Authorization':`Bearer ${token}`,
        'Accept':'application/json',

      }
     })
   }
   catch(e)
   {
    console.log(e)
   }
       
      }
      
  return (<>
  <div className='flex gap-3 items-center'>
    <button className='border h-6 w-6 flex justify-center items-center border-gray-500' disabled={itemCount==1} onClick={()=>setItemCount(prev=>prev>1?prev-1:prev)}>-</button>{itemCount}<button className='border h-6 w-6 flex justify-center items-center border-gray-500' onClick={()=>setItemCount(prev=>prev+1)}>+</button></div>
  <h1 className='text-lg font-semibold text-green-500'>Price:{currentSelected?.price}</h1>
    {isLoggedIn?  <div className='flex gap-5'>
    <MyButton onClick={()=>{
     navigate('/buy')
    }} className={"bg-orange-500 rounded-lg"}>Buy</MyButton>
    {isAdded?<MyButton className={'rounded-lg line-through'}>
        Added</MyButton>
    :<MyButton onClick={handleCart}  className={'rounded-lg'}>
        Add</MyButton>
    }
    </div>
    :<Link to={'/login'} className='text-blue-800 underline'>Sign in to buy</Link>}
  </>);
}

export default AddOrders