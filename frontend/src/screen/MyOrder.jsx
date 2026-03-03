import React, { useEffect, useState } from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/myOrders", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: localStorage.getItem('userEmail') })
      });
    
      // const response = await res.json();
      // console.log("Fetched order data:", response);
     const text = await res.json();
     if(!text){
      console.warn("Empty response body")
      return ;
     }
     

 
      const formatted = text.map(order => ({
        date: order.order_date,
        items: order.order_data || []
      }));

      setOrderData(formatted);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchMyOrder();
   
  }, []);

  return (
    <div>
      <NavBar />
      <div className='container'>
        {orderData.length > 0 ? (
          orderData.map((order, idx) => (
            <div key={idx}>
              <h5 className="mt-3">Order Date: {order.date}</h5>
              <div className='row'>
                {order.items.map((item, index) => (
                  <div key={index} className='col-12 col-md-6 col-lg-3'>
                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                      <img
                        src={item.img}
                        className="card-img-top"
                        alt={item.name}
                        style={{ height: "120px", objectFit: "fill" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className='container w-100 p-0' style={{ height: "38px" }}>
                          <span className='m-1'>Qty: {item.qty}</span>
                          <span className='m-1'>Size: {item.size}</span>
                          <div className='d-inline ms-2 h-100 w-20 fs-5'>
                            ₹{item.price}/-
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <hr />
            </div>
          ))
        ) : (
          <div>No orders found.</div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MyOrder;
