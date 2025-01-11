export default function Ingredients({mealData}){
  if(!mealData){
    return <div>No meal data found.</div>
  }
  const {strMeal,strInstruction,strIngredients,strMeasure}=mealData;

  const ingredientsList=[]
  for(let i=0;i<=20;i++){
    const ingredients=mealData[`strIngredients${i}`]
    const measure = mealData[`strMeasure${i}`]
    if(ingredients){
      ingredientsList.push(`${ingredients} ${measure}`)
    }
  }
  return(
    <div>
      <h2>{strMeal}</h2>
      <h4>Instructions:</h4>
      <p>{strInstruction}</p>
      <h4>Ingredients:</h4>
      <ul>
        {ingredientsList.map((ingredients,index)=>{
          <li key={index}>{ingredients}</li>
        })}
      </ul>
    </div>
  )
}