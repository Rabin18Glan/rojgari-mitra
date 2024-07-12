import React from 'react'

function MyButton({className="",btnColor='customBlue',textColor='white',onClick,children,...props}:any,){

  const tC = "text-"+textColor;
  const bC = "bg-"+btnColor;
  return (
    <>
  <button onClick={onClick } className={`border px-5 py-2 bg-blue-600 ${tC} rounded-3xl ${bC} shadow-custom ${className} text-black`} {...props}>{children}</button>
    </>
  );
}

export default MyButton

{/* <FontAwesomeIcon icon={faShoppingCart}/> */}