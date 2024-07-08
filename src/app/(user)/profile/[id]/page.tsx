import React from 'react'

function page({params}:any) {
  return (
    <div>{params.id}</div>
  )
}

export default page