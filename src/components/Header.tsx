import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingCart, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import MyButton from './Button/MyButton';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { AiFillProfile, AiOutlineAccountBook, AiOutlineLogout } from 'react-icons/ai';
import { FaFaceFlushed, FaPerson, FaRegFaceLaughWink } from 'react-icons/fa6';
import { logout } from '../store/slices/authSlice';
import { refresh } from '../store/slices/orderSlice';
import OrdersButton from './Button/OrdersButton';
export default function Header() {

  const dispactch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(state => state.auth.status);
  const user: any = useAppSelector(state => state.auth.userData);
 
  const navElements = [
    "Home",
    "About",
    "Contact",
    "Location",
  ];


  return (
    <Head>
      <div className='border-b shadow-sm inline-flex py-2 px-12 w-full items-center justify-between bg-white
'>
        <Link to='/home'><div className='w-32 m-2'>
          <img className='' src="/images/logo.png" alt="" />
        </div></Link>
        <div className="navel">
          <ul>
            {navElements.map((navElement, index) => {
              return <li key={index}><NavLink to={navElement}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-400 `
                }
              >{navElement}</NavLink></li>
            })}
          </ul>
        </div>
        <div className="flex gap-5">
<OrdersButton />
          {isLoggedIn ? <div className='flex gap-2 items-center '>
            <div onClick={() => { }} className="  shadow-custom flex items-center justify-center px-2 h-10 rounded-full bg-customBlue">
              <p className="text-lg font-semibold text-white flex items-center"><FaRegFaceLaughWink />{user.name}</p>

            </div>
            <MyButton onClick={() => {
              dispactch(refresh());
              dispactch(logout());

            }} btnColor='white' className='border-2  border-red-500 flex content-center items-center font-bold rounded-full p-0 ml-5'><AiOutlineLogout size={20} color='red'></AiOutlineLogout></MyButton>
          </div>
            : <MyButton onClick={() => navigate('/login')} ><FontAwesomeIcon icon={faSignInAlt} />Sign In</MyButton>}
        </div>

      </div>

    </Head>
  );
}



const Head = styled.div`


ul{
    display: inline-flex;
height: 34.035px;
transform: rotate(0.169deg);
justify-content: center;
align-items: center;
gap: 38.097px;
flex-shrink: 0;
}

li{
    color: var(--myOrange, #FF8A00);
    
/* text */
list-style: none;

font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
.sign-in{
   
    padding-inline: 20px;
    padding-block:7px;
color: white;
border-radius: 28.573px;
background: var(--blue, #5949A7);
box-shadow: 0px 3.81px 3.81px 0px rgba(0, 0, 0, 0.25);

}
.sign-in:hover
{
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);


}

`;


