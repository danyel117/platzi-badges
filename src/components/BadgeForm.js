import React from 'react';

const BadgeForm = (props) => {

    const handleClick = (e)=>{
        console.log("button pressed");
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(props.formData)
    }

    return (
        <div>
            <h1>New Attendant</h1>
            <form onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label>First Name</label>
                    <input value={props.formData.first_name} onChange={props.handleChange} className="form-control" type="text" name="first_name"></input>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input value={props.formData.last_name} onChange={props.handleChange} className="form-control" type="text" name="last_name"></input>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input value={props.formData.email} onChange={props.handleChange} className="form-control" type="email" name="email"></input>
                </div>

                <div className="form-group">
                    <label>Job Title</label>
                    <input value={props.formData.job_title} onChange={props.handleChange} className="form-control" type="text" name="job_title"></input>
                </div>

                <div className="form-group">
                    <label>Twitter</label>
                    <input value={props.formData.tiwtter} onChange={props.handleChange} className="form-control" type="text" name="twitter"></input>
                </div>


                <button  onClick={handleClick} className="btn btn-primary">Save</button>
            </form>
        </div>
     );
}
 
export default BadgeForm;