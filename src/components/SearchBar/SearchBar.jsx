import React, {useState} from'react';
import './Searchbar.css';

const SearchBar = (props) =>{
    const [searchTerm, setSearchTerm] = useState("")
    const changeHandler = (event) =>{
        setSearchTerm(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        props.value(searchTerm)
    }
    return(
        <form> <input type ="search" id="form1" ClassName="form-controle" onChange = {changeHandler} />
            <label ClassName ="form-label" htmlFor="form1"></label> 
            <button type= "submit" onClick= {submitHandler}> Search</button> 
        </form>
        
    )
}

export default SearchBar;
