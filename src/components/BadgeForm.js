import React from 'react';

const BadgeForm = () => {

    const handleChange = (e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
    }

    const handleClick = (e)=>{
        console.log("button pressed");
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return ( 
        <div>
            <h1>New Attendant</h1>
            <form onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={handleChange} className="form-control" type="text" name="first_name"></input>
                </div>
                <button  onClick={handleClick} className="btn btn-primary">Save</button>
            </form>
        </div>
     );
}
 
export default BadgeForm;