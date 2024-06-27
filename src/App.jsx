import NavBar from "./Components/NavBar";
import Title from "./Components/Title";
import RecipeList from "./Components/RecipeList";
import Search from "./Components/Search";
import CakeForm from "./Components/CakeForm";
import { useState } from "react";

// app is acting as the container here 
//components are <CakeForm etc> and the prop is what is on the LHS of = and the data is on the RHS
//containers like app.jsx can send props (state/funcionality) down to components but components can't do it the other way
// app.jsx is the container here 


function App() {

  const [cakes,setCakes] = useState([
    {
        cakeName: "Lemon Drizzle",
        ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
        rating: 5
    },
    {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3
    },
    {
        cakeName: "Brownie",
        ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
        rating: 4
    },
    {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        rating: 5
    }
]

)

const [cakesStatic,setCakesStatic] = useState([ {
  cakeName: "Lemon Drizzle",
  ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
  rating: 5
},
{
  cakeName: "Tea Loaf",
  ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
  rating: 3
},
{
  cakeName: "Brownie",
  ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
  rating: 4
},
{
  cakeName: "Carrot Cake",
  ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
  rating: 5
}
]
)





  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <RecipeList cakes = {cakes}/> 
        {/* The above is to allow the components to have the props we want it to. The lhs light blue is the name of the prop and the rhs dark blue is the data associated with the prop */}
        <Search cakes = {cakes} setCakes = {setCakes} cakesStatic = {cakesStatic}/>
        <CakeForm cakes = {cakes} setCakes = {setCakes}/>
      </main>
    </>
  );
}

export default App;
