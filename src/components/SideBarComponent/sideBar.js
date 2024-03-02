import './sideBar.css'
import {Link} from 'react-router-dom'

export default function SideBar(){
    return (<div className='sideBar'><ul>
        <li><h4><Link to='/' style={{textDecoration:'none', color:'black'}}>🔰 Product List</Link></h4></li>
        <li><h4><Link to='/addProduct' style={{textDecoration:'none', color:'black'}}>🔰 Add Product</Link></h4></li>
        </ul></div>)
}