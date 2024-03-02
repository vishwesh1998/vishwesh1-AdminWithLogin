import './header.css'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { deleteToken } from '../../Redux/tokenSlice'
import {useNavigate} from 'react-router-dom'
// import { defaultMethod } from ' react-router-dom/dist/dom'

export default function Header(props){
            const [sideDiv, setSideDiv] = useState(false)
            const dispatch = useDispatch()
            const navigate = useNavigate()

            let handleSideBar = () =>{
                setSideDiv(!sideDiv)
                props.getDivValue(sideDiv)
            }

            let handleLogout = () =>{
                dispatch(deleteToken())
                navigate('/login')
                localStorage.removeItem('token')
            }

    return (<div className="container-fliud header">
        <div className="row">
            <div className="col-lg-3 headerIcons">
                <img src="./images/thumbnails/logo.svg"/>
                <img src='./images/icons/icon-menu.svg' className='IconImg' onClick={()=>handleSideBar()}/>    
            </div>
            <div className="col-lg-6 headerInput">
                <input type='text' placeholder='Search' className='form-control'/>
                <img src='./images/icons/notification.png'/>
                <img src='./images/icons/icon-globe.png'/>
                <img src='./images/icons/setting.png'/>
            </div>
            <div className="col-lg-3 headerDetails">
                <span><img src='./images/thumbnails/profile-img.png'/></span>
                <h6>Charlie Howard <br/><span className='profile'>Frontend Developer</span></h6>
                <b onClick={()=>handleLogout()}>Logut</b>
            </div>
        </div>
    </div>)
}