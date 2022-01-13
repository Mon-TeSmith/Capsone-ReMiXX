import React, {useState} from "react";

const CommentDisplay = (props) =>{

    const [comment, setComment] = useState("")


    const changeHandler = (event) =>{
        setComment(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.postComment(comment)
    }

    return(
        <form> 
            <input type ="search" id="form1" ClassName="form-controle" onChange = {changeHandler} value={comment} />
            <label ClassName ="form-label" htmlFor="form1"></label> 
            <button type= "submit" onClick= {submitHandler}> Submit</button> 
        </form>
        
    )
}  


export default CommentDisplay;