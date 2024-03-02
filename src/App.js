import SignUp from './components/SignUpComponent/sign'
import Login from './components/LoginComponent/login'
import Header from './components/HeaderComponent/header'
import Product from './components/ProductListComponent/product'
import './App.css'
import {useEffect, useState} from 'react'
import { allProducts } from './Redux/slice'
import {useDispatch} from 'react-redux'
import Footer from './components/FooterComponent/footer'
import {Routes, Route} from 'react-router-dom'
import AddProduct from './components/AddProductComponent/addProduct'
import UpdateProduct from './components/UpdateComponent/update'
import SideBar from './components/SideBarComponent/sideBar'
import {useSelector} from 'react-redux'

export default function App(){
  const dispatch = useDispatch() 
  const [div, setDiv] = useState('')
  const [upObj, setUpObj] = useState({})
  const token = useSelector(state=>state.tok.value)
  // let divValue = undefined
  let updateObj = (d) =>{
    setUpObj(d)
    console.log(d)
    // setTimeout(()=>{
    //   console.log(upObj)
      
    // },5000)
    
  }

  let getDivValue = (v) =>{
    // divValue = v;
    setDiv(v)
    // console.log(divValue)
  }

  let fetchApi = async () =>{
    const res = await (await fetch('https://raw.githubusercontent.com/BitcotDev/React-Coding-Challenge-Experience/main/sample.json')).json()
    // console.log(res)
    dispatch(allProducts(res))
  }

  useEffect(()=>{
    fetchApi()
  },[])

  return (<>
  {token?<>
    <Header getDivValue={getDivValue}/>
  <div className='d-flex'>
    {div?<SideBar/>:''}
  <Routes>
    <Route path='/' element={<Product updateObj={updateObj}/>}/>
    <Route path='/addProduct' element={<AddProduct/>}/>
    <Route path='/updateProduct' element={<UpdateProduct upObj={upObj}/>}/>
  </Routes>
  </div>
  <Footer/></>:<>
  <Routes>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='*' element={<Login/>}/>
  </Routes>
  </>}
  {/* <Routes>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes> */}
  {/* <SignUp/> */}
  {/* <Login/> */}
    {/* {divValue?<div><SideBar/></div>:''} */}
  {/* {divValue===true?<>hwll</>:''} */}
  {/* //  <Header getDivValue={getDivValue}/>
  // <div className='d-flex'>
  //   {div?<SideBar/>:''}
  // <Routes>
  //   <Route path='/' element={<Product updateObj={updateObj}/>}/>
  //   <Route path='/addProduct' element={<AddProduct/>}/>
  //   <Route path='/updateProduct' element={<UpdateProduct upObj={upObj}/>}/>
  // </Routes>
  // </div>
  // <Footer/>  */}
  {/* <Product/> */}
  </>)
}