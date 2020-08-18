import React, {useState, useEffect} from 'react';
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from "../api"
import header from '../images/platziconf-logo.svg'
import './styles/BadgeEdit.css'
const BadgeEdit = (props) => {

    const [formData,setFormData] = useState({})
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }


    const fetchData = async ()=>{
        setLoading(true)
        setError(null)
        try{
            const data = await api.badges.read(props.match.params.badgeId)
            setFormData(data)
            setLoading(false)
        }
        catch (error){
            setLoading(false)
            setError(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    const handleSubmit = async (e)=>{
        setError(null)
        setLoading(true)
        e.preventDefault()
        try{
            await api.badges.update(props.match.params.badgeId,formData)
            setLoading(false)
            props.history.push('/badges')
        }
        catch(error){
            setLoading(false)
            setError(error)
        }
    }

    return ( 
        <div>
            {loading && <PageLoading/>}
            {error && <PageError error={error}/>}
            {!loading && !error && <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt=""></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            first_name={formData.first_name || 'FIRST_NAME'} 
                            last_name={formData.last_name || 'LAST_NAME'} 
                            twitter={formData.twitter || '@twitter'} 
                            job_title={formData.job_title || 'JOB_TITLE'} 
                            email={formData.email || 'EMAIL'} /> 
                        </div>
                        <div className="col-6">
                            <BadgeForm handleChange={handleChange} onSubmit={handleSubmit} formData={formData} new={false}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>}
        </div>
     );
}
 
export default BadgeEdit;