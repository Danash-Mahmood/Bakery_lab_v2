import { useState } from "react";

const CakeForm = ({cakes,setCakes}) => {

    //props {cakes:[],setCakes ;functionBody}

    const [cakeName,setCakeName] = useState("");
    const [ingredients,setIngredients] = useState([]);
    const [rating, setRating] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCake = {cakeName,ingredients,rating}
        setCakes([newCake, ...cakes])
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="name">Cake Name:</label>
            <input type="text" id="name" placeholder="Cake Name" value = {cakeName} onChange={(event) => setCakeName(event.target.value)} />
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea cols="30" rows="1" id="ingredients" placeholder = "ingredients" value = {ingredients} onChange = {(event) => setIngredients(event.target.value.split(","))} ></textarea>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" placeholder="rating" value = {rating} onChange = {(event) => setRating(event.target.value) }min={1} max={5}/>
            <input type="submit"/>
        </form>
    )

}

export default CakeForm;