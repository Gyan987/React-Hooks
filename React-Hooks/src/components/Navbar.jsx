import React,{useEffect} from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
    alert("Colour was changed")
  }, [color])
  return (
    <div>
      I am a Navbar{color} color hehe...
    </div>
  )
}

export default Navbar
