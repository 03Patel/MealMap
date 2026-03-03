import React, { useState } from 'react';
import { useCart, useDispatch } from './Contextreducer';

function Card(props) {
    let dispatch = useDispatch();
    let data = useCart();
    let options = props.options;
    let priceOptions = Object.keys(options);
    let foodItem = props.foodItem;

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(priceOptions[0]);

    let finalPrice = qty * parseInt(options[size]);

    const handleAddToCart = async () => {
       let existingItem = data.find(item => item.id === foodItem._id && item.size === size);

        if (existingItem) {
            await dispatch({
                type: "UPDATE",
                id: foodItem._id,
                size: size,
                price: finalPrice,
                qty: qty
            });
        } else {
            await dispatch({
                type: "ADD",
                id: foodItem._id,
                name: foodItem.name,
                price: finalPrice,
                qty: qty,
                size: size
            });
        }
    };

    return (
        <div>
            <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src={foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" ,filter: "brightness(40%)"}} />
                <div className="card-body">
                    <h5 className="card-title">{foodItem.name}</h5>
                    <div className='container w-100 '>
                        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((data) => (
                                <option key={data} value={data}>{data}</option>
                            ))}
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
