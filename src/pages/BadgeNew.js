import React, {useState} from 'react';
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import './styles/BadgeNew.css'
const BadgeNew = () => {

    const [formData,setFormData] = useState({})

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    return ( 
        <div>
            <Navbar/>
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt=""></img>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge first_name={"Daniel"} last_name={"Saldarriaga"} twitter={"@Daniel_Code"} job_title={"Frontend Engineer"} avatar_url={"https://s.gravatar.com/avatar/cf13f80b8c3936bb96a999b9fc9c48e6?s=80"} /> 
                    </div>
                    <div className="col-6">
                        <BadgeForm onChange={handleChange} formData={formData}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BadgeNew;