import React, { useState, useEffect } from 'react';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import {Link} from 'react-router-dom'
import api from "../api"
import './styles/Badges.css'
import ConfLogo from '../images/badge-header.svg'

const Badges = () => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)


    const fetchData = async ()=>{
        setLoading(true)
        setError(null)
        try{
            const datos = await api.badges.list()
            setData(datos)
            setLoading(false)
            setError(null)
        }
        catch (error){
            setLoading(false)
            setError(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return ( 
        <React.Fragment>
            {loading?<PageLoading/>:<>
            {error? <PageError error={error}/> :<>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges__conf-logo" src={ConfLogo} alt="Conf Logo"/>
                    </div>
                </div>
            </div>
            <div className="Badge__container">
                <div className="Badges__buttons">
                    <Link to="/badges/new" className="btn btn-primary">New Badge</Link>  
                </div>
                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={data}/>
                    </div>
                </div>
            </div></>}</>}
        </React.Fragment>
     );
}
 
export default Badges;