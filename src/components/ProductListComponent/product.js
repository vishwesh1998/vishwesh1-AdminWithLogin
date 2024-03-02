import './product.css'
import {useSelector, useDispatch} from 'react-redux'
import {delProducts} from '../../Redux/slice'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function Product(props){
    // const [data, setData] = useState([])
    const dispatch = useDispatch()
    const d = useSelector(state=>state.productList.value)
    // console.log(data)

    return (<div className="container-fliud productMain">
        <div className="container productInner">
        <h1 className="text-center">Product List</h1>
            <div className="row">
                <div className="col-lg-6"><input type="text" placeholder="Search.." className="form-control"/></div>
                <div className="col-lg-6"><button className="form-control"><Link to='/addProduct' style={{textDecoration:'none', color:'white'}}>Add Product</Link></button></div>
            </div>
            <table className="table table-responsive-sm">
                <thead className='text-center'>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {d?d.map(p=>(p && p.variation[0]?<tr>
                        <td>{p.id}</td>
                        {/* <td><img src={p.variation?p.variation[0].productImage:''} width={40}/> {p.productName}</td> */}
                        <td>{<img src={p.variation[0].productImage} width={40}/>} {p.productName}</td>
                        <td>{p.category}</td>
                        {/* <td>${p.variation?p.variation[0].price:""}</td> */}
                        <td>${p.variation[0].price}</td>
                        <td>{p.variation[0].stock}</td>
                        <td>{p.status}</td>
                        <td><button className='btn-sm' style={{background:'lightslategrey', color:'white',  borderRadius:'5px'}} onClick={()=>props.updateObj(p)}><Link to='/updateProduct' style={{textDecoration:'none', color:'white'}}>Update</Link></button> &nbsp; <button className='btn-sm' style={{background:'lightslategrey', color:'white', borderRadius:'5px'}} onClick={()=>dispatch(delProducts(p.id))}>Delete</button></td>
                    </tr>:"")):''}
                </tbody>
            </table>
        </div>
    </div>)
}