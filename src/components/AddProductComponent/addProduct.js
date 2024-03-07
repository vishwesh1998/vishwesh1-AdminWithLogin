import './addProduct.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Redux/slice'

export default function AddProduct() {
    const [pname, setPname] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [cat, setCat] = useState('')
    const [stock, setStock] = useState('')
    const [status, setStatus] = useState('')
    const [msg, setMsg] = useState('')

    const dispatch = useDispatch()

    let handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            productName: pname,
            description: desc,
            variation: [{ price: price, stock: stock }],
            category: cat,
            status: status
        }
        dispatch(addProduct(obj))
        e.target.reset()
        setMsg("Product is added sucessfully !")
        setTimeout(()=>{
            setMsg('')
        },2000)
    }

    return (<div className="container-fliud addProduct">
        <div className="container addProductInner">
            <h1 className="text-center">Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-12 input">
                        <label>*Product Name</label>
                        <input type="text" className="form-control" onChange={(e) => setPname(e.target.value)} required />
                    </div>
                    <div className="col-lg-12 textarea">
                        <label>*Description</label>
                        <textarea className="form-control" onChange={(e) => setDesc(e.target.value)} required></textarea>
                    </div>
                    <div className="col-lg-12 input">
                        <label>*Price</label>
                        <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div className="col-lg-12 input">
                        <label>*Stock</label>
                        <input type="number" className="form-control" onChange={(e) => setStock(e.target.value)} required />
                    </div>
                    <div className="col-lg-6 select">
                        <label>*Category</label>
                        <br />
                        <select className="form-control" onChange={(e) => setCat(e.target.value)} required>
                            <option value=''>Select</option>
                            <option>Cloths</option>
                            <option>Bags</option>
                            <option>Shoes</option>
                            <option>Watches</option>
                            <option>Devices</option>
                        </select>
                    </div>
                    <div className="col-lg-6 select">
                        <label>*Status</label>
                        <br />
                        <select className="form-control" onChange={(e) => setStatus(e.target.value)} required>
                            <option vlaue=''>Select</option>
                            <option>In stock</option>
                            <option>Limited stock</option>
                            <option>No stock</option>
                        </select>
                    </div>
                    <div className="col-lg-7 button text-center">
            {msg?<b className='text-center'>{msg}</b>:''}
                        <br/>
                        <button>Save</button></div>
                </div>
            </form>
        </div>
    </div>
    )
}