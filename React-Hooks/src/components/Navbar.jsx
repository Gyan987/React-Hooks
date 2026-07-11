import React,{useEffect} from 'react'

const Navbar = ({color}) => {
  //1. Run on every render
  useEffect(()=>{
    alert("I will on every render")
  })

  //2. Run only on the first render
  useEffect(()=>{
    alert("Hey welcome tyo my page .This is the first render")
  }, [])

  // 3.Run on The certain values change
  useEffect(()=>{
    alert("Hey I am running because color was changed ")
  }, [color])

  return (
    <div>
      I am a Navbar{color} color hehe...
    </div>
  )
}

export default Navbar
