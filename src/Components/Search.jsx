import { useState } from "react";

const Search = ({cakes,setCakes,cakesStatic}) => {

    // const [cakeName,setCakeName] = useState("");
    //state is just a value managd by react and a function that updates the value. It helps react know what has been changed in the virtual DOM and what is the difference between the actual DOM and the virtual one for what react needs to re rendered 

    const [searchTerm,setSearchTerm] = useState("");

    


    const filterCakes = (searchTerm) => {
        const cakeList = cakes.filter(cakes => (cakes["cakeName"].toLowerCase()).includes(searchTerm.toLowerCase()));
        return cakeList;

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(searchTerm === "" ){
            
       
            setCakes(cakesStatic);
        }
        
        else{
        
        const filteredCakeList = filterCakes(searchTerm);
        setCakes(filteredCakeList);
        }

    
}

    return(
        <form onSubmit = {handleSubmit}>
            <label htmlFor="search-field">Search for a cake:</label>
            <input type="text" id="search-field" placeholder="Cake Name" onChange = {(event) => setSearchTerm(event.target.value)}/>

        {/* // on change is when something is typed into a text input or select something from a dropdown  */}
            <input type="submit" />
        </form>
    )

}

export default Search;