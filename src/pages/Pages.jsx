import React from 'react'
import Home from "./Home"
import Cuisine from "./Cuisine"
import { Route, Routes} from 'react-router-dom'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>  {/* IF THE PATH MATCHES / (BASICALLY HOME PAGE), THEN RENDER HOME */}
      <Route path="/cuisine/:type" element={<Cuisine />}/>
    </Routes>
  )
}

export default Pages