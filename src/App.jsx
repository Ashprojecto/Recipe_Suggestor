import { useState } from "react";
import Form from "./Form";
import "./App.css"
import Footer from "./Footer"

function App() {
  const[dish,setDish]=useState("")
const[mealData,setMealData]=useState("")
  
  const updateDish=async (newDish)=>{
    setDish(newDish);
    if(newDish.trim==""){
      setMealData(null);
      return;
    }
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${newDish}`
    try{
      const response=await fetch(URL)

      if(!response.ok){
        throw new Error(`Error:${response.statusText}`)
      }

      const data = await response.json();

      
      if(data.meals && data.meals.length >0){
        setMealData(data.meals[0]);
      } else{
        setMealData(null)
      }

    } catch(err){
      console.log("Error fetching meal data",err)
      setMealData(null);
    }
  }
  return (
    <>
      <h1 className="item-title">Recipe Suggestor</h1>
      <Form updateDish={updateDish}/>
      {mealData ? (
        <div className="recipeDetails">
          <h2 className="items">{mealData.strMeal}</h2>
          <img src={mealData.strMealThumb} alt={mealData.strMeal} className="mealImg" />
          <p className="mealDetails">{mealData.strInstructions}</p>

          <h4 className="items">Ingredients:</h4>
          <ul className="items item-space">
            {mealData.strIngredient1 && <li>{mealData.strIngredient1}</li>}
            {mealData.strIngredient2 && <li>{mealData.strIngredient2}</li>}
            {mealData.strIngredient3 && <li>{mealData.strIngredient3}</li>}
            {mealData.strIngredient4 && <li>{mealData.strIngredient4}</li>}
            {mealData.strIngredient5 && <li>{mealData.strIngredient5}</li>}
            {mealData.strIngredient6 && <li>{mealData.strIngredient6}</li>}
            {mealData.strIngredient7 && <li>{mealData.strIngredient7}</li>}
            {mealData.strIngredient8 && <li>{mealData.strIngredient8}</li>}
            {mealData.strIngredient9 && <li>{mealData.strIngredient9}</li>}
            {mealData.strIngredient10 && <li>{mealData.strIngredient10}</li>}
          </ul>
        </div>
      ) : (
        <p className="msg">No meal data available. Try searching for a dish.</p>
      )}
      <Footer/>
    </>
  );
}

export default App;
