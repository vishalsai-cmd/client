import React from 'react'

function Togglebutton({setOpen}) {
  return (
    <button className='sidebutton' onClick={()=> setOpen((prev) => !prev)}>button</button>
  )
}

export default Togglebutton
