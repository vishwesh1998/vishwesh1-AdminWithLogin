// import './sign.css'
import '../LoginComponent/login.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signDetails } from '../../Redux/signSlice'
import {Link} from 'react-router-dom'

export default function SignUp(){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [rePass, setRePass] = useState('')
    const naviagte = useNavigate()
    const dispatch = useDispatch()

    let signUp = (e) =>{
        e.preventDefault()
        let obj = {
            email : email,
            pass : pass
        }
        if(pass===rePass){
            localStorage.setItem('data',JSON.stringify(obj))
            e.target.reset()
            alert("Your account is created, we are redirecting you to our login page !")
            setTimeout(()=>{
                naviagte('/login')
            },3000)
            dispatch(signDetails(obj))
        }
        
    }


    return (<div className="container-fliud signUp">
        <div className="row">
            <div className="col-lg-12 img">
            <img src="./images/thumbnails/img-17.png"/>
            </div>
        </div>
            <div className="row innerBox">
            <div className='col-lg-12 logo'>
                    <img src='./images/thumbnails/Logo.svg'/>
                </div>
            <div className='col-lg-12'>
                <h6 className='text-center'>Create an account</h6>
                </div>    
            <form className='form' onSubmit={(e)=>signUp(e)}>
                <div className="col-lg-12">
                    <label><b>*Email</b></label><br/>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="demo@gmail.com" className='form-control' required/>
                </div>
                <br/>
                <div className="col-lg-12">
                <label><b>*Password</b></label><br/>
                    <input type="password" placeholder="****" className='form-control' required onChange={(e)=>setPass(e.target.value)}/>
                </div>
                <br/>
                <div className="col-lg-12">
                    <label><b>*Confirm Password</b></label><br/>
                    <input type="password" placeholder="****" className='form-control' onChange={(e)=>setRePass(e.target.value)} required/>
                    </div>
                    <br/>
                <div className="col-lg-12 text-center button">
                    <button className='form-control'>Sign Up</button>
                    <b><Link to='/login' style={{textDecoration:'none'}}>Already have Account</Link></b>
                </div>
            </form>
            </div>
    </div>)
}