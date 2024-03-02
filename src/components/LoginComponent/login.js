import './login.css'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { tokenDetails } from '../../Redux/tokenSlice'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
// import {}
import { SiFlipkart } from "react-icons/si";


export default function Login(){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const d = useSelector(state=>state.signD.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let handleLogin = (e) =>{
        e.preventDefault()
        if(email===d.email && pass===d.pass){
            let token = new Date().getTime()
            console.log(token)
            localStorage.setItem('token', token)
            dispatch(tokenDetails(token))
            navigate('/')
        }
        // console.log(true)
    }   

    return (<div className="container-fliud signUp">
        <div className="row">
            <div className="col-lg-12 img">
            <img src="./public/images/thumbnails/img-17.png"/>
            {/* <span><SiFlipkart/></span> */}
            </div>
        </div>
            {/* <img src="./images/thumbnails/img-17.png"/> */}
            {/* <h1>Create an account</h1> */}
            <div className="row innerBox">
            <div className='col-lg-12 logo'>
                    <img src='./images/thumbnails/logo.svg'/>
                    {/* <h6>Create an account</h6> */}
                </div>
            <div className='col-lg-12'>
                <h6 className='text-center'>Don't have an account yet?<Link to='/signUp' style={{textDecoration:'none', color:'black'}}> Sign Up</Link></h6>
                </div>    
            <form className='form' onSubmit={(e)=>handleLogin(e)}>
                <div className="col-lg-12">
                    <label><b>*Email</b></label><br/>
                    <input type="email" placeholder="demo@gmail.com" className='form-control' onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <br/>
                <div className="col-lg-12">
                <label><b>*Password</b></label><br/>
                    <input type="password" placeholder="****" className='form-control' onChange={(e)=>setPass(e.target.value)} required/>
                </div>
                <br/>
                <div className="col-lg-12 text-center button">
                    <button className='form-control'>Sign Up</button>
                    </div>
            </form>
            </div>
    </div>)
}