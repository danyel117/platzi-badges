import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import Badge from '../components/Badge'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'
import api from '../api'
import Modal from '../components/Modal'

const BadgeDetailsContainer = (props) => {

    const [state,setState] = useState({loading:true,error:null,data:undefined})


    const fetchData = async ()=>{
        setState({...state,loading:true,error:null})

        try{
            const data = await api.badges.read(props.match.params.badgeId)
            console.log("datos",data)
            setState({...state,loading:false,data:data})
        }
        catch (error){
            setState({...state,loading:false,error:error})
        }
    }

    const DeleteBadge = async()=>{
        setState({...state,loading:true,error:null})
        try{
            await api.badges.remove(props.match.params.badgeId)
            props.history.push('/badges')
            setState({...state,loading:false})
        }
        catch (error){
            setState({...state,loading:false,error:error})
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return ( 
        <div>
            {state.loading && <PageLoading/>}
            {state.error && <PageError/>}
            {!state.loading && !state.error &&
                <BadgeDetails state={state} DeleteBadge={DeleteBadge}/>
            }
        </div>
     );
}
 
export default BadgeDetailsContainer;


const BadgeDetails = ({state,DeleteBadge})=>{
    const [openModal,setOpenModal] = useState(false)
    return(
        <React.Fragment>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{state.data.first_name} {state.data.last_name}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                        first_name={state.data.first_name} 
                        last_name={state.data.last_name} 
                        twitter={state.data.twitter} 
                        job_title={state.data.job_title} 
                        email={state.data.email} /> 
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <Link className="btn btn-primary mb-4" to={`/badges/${state.data.id}/edit`}>
                                Edit
                            </Link>
                        </div>
                        <div>
                            <button className="btn btn-danger" onClick={()=>setOpenModal(true)}>
                                Delete
                            </button>
                            <DeleteBadgeModal openModal={openModal} setOpenModal={setOpenModal} DeleteBadge={DeleteBadge}/>                            
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
}


const DeleteBadgeModal = ({openModal,setOpenModal,DeleteBadge})=>{
    
    return(
        <Modal isOpen={openModal} onClose={()=>setOpenModal(false)}>
            <div className="DeleteBadgeModal">
                <h1>Are you sure?</h1>  
                <p>You are about to delete this badge.</p>
                <div>
                    <button onClick={DeleteBadge} className="btn btn-danger mr-4">Delete</button>
                    <button onClick={()=>setOpenModal(false)} className="btn btn-primary">Cancel</button>
                </div>
            </div>                
        </Modal>
    )
}