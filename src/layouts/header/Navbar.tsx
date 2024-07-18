import SignUpButton from '@/components/Button/SignUpButton';
import MainLogo from '@/components/MainLogo';
import React from 'react';
import SearchBar from './components/SearchBox';
import Navigations from './components/Navigations';
import Drawer from './components/Drawer/Drawer';
import UserName from './components/UserName';

const Navbar = () => {
  return (
    <nav className="bg-white h-[10vh] p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
       <Drawer />
    <MainLogo  imageStyle='hidden' textStyle='text-xl'/>
      </div>
     <div className="hidden lg:block"> <Navigations /></div>
      <div className="flex items-center space-x-4">
      <SearchBar />
      <UserName />
<SignUpButton />
      </div>
    </nav>
  );
};

export default Navbar;
