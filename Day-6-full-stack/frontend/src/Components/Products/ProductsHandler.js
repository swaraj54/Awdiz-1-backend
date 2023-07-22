import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/User.context'
import axios from 'axios';

const ProductsHandler = () => {
    const { state } = useContext(AuthContext);

    const [user, setUser] = useState({});
    const [userAddedProduct, setUserAddedProduct] = useState([]);
    console.log(userAddedProduct, "userAddedProduct from backend")

    useEffect(() => {
        if (state.user) {
            setUser(state?.user)
        } else {
            setUser({});
            setUserAddedProduct([])
        }
    }, [state])


    useEffect(() => {
        async function getSellProduct() {
            const { data } = await axios.post("http://localhost:8000/get-sell-products", { userId: user?._id });
            setUserAddedProduct(data)
        }
        if (user?._id) {
            getSellProduct();
        }
    }, [user])


    return (
        <div>
            <h1>Here is Your selling products</h1>
            <div style={{ display: 'flex', justifyContent: "space-around", flexWrap: 'wrap' }}>
                {userAddedProduct && userAddedProduct.map((pro) => (
                    <div style={{ width: "20%", height: "400px", border: "2px solid black", paddingBottom: "30px" }}>
                        <img style={{ width: "100%", height: "75%" }} src={pro.image} />
                        <label>Image</label>
                        <input value={pro.image} /><br />
                        <label>Name </label>
                        <input value={pro.name} /><br />
                        <label>Price </label>
                        <input value={pro.price} /><br />
                        <button>Update</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsHandler