import React, { useEffect, useState } from 'react'

function Popular() {

  const [popular, setPopular] = useState([]);

  //RUN GETPOPULAR WHEN REFRESH
  useEffect(() => {
    getPopular();
  },[]);

  //GETTING JSON DATA RANDOMLY FROM API
  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json();
    
    //SETTING DATA TO POPULAR
    setPopular(data.recipes);
  }



  return (
    <div>
      {/* GETTING ALL THE RECIPE */}
      {popular.map((recipe) => {
        return(
          //GETTING THE ID OF EVERY ARRAY RECIPE
          <div key={recipe.id}>  
            
            <p>{recipe.title}</p> {/* OUTPUT EVERY TITLE OF RECIPE */}
          </div>
        );
      })}
    </div>
  )
}

export default Popular