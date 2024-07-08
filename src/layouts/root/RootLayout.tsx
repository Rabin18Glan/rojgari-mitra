
import Footer from '@/layouts/footer/Footer';
import Link from 'next/link';
import React, { ReactNode } from 'react';

import Navbar from '@/layouts/header/Navbar';

const Root = ({children}:{children:ReactNode}) => {
  return (
  <div className=''>
    <Navbar />
<div>
  {children}
</div>
<Footer />

  </div>
  );
};

export default Root;
