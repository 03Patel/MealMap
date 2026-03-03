import React, { useEffect, useState } from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import foodData from '../component/MagicPin-db.data.json'
import foodCate from '../component/MagicPin-db.collection.json'
import Carousal from '../component/Carousal'

function Home() {
  const [search, setsearch] = useState("")
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([])
  const safeSearch = typeof search === "string" ? search.toLowerCase() : "";
  const fetchData = async () => {
    // let response = await fetch('http://localhost:5000/api/foodData',
    //   { method: "POST", headers: { 'Content-Type': 'application/json' } });
    // response = await response.json();
    setFoodItem(foodData)
    setFoodCat(foodCate)
    // console.log(response[0], response[1])
  }
  useEffect(() => {
     async function loadData() {
      await fetchData();
     }
     loadData();
     }, [])
  return (
    <div>
      <div><NavBar />
      </div>
      <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://foodish-api.com/images/dessert/dessert6.jpg" className="d-block w-100 h-50" style={{ filter: "brightness(20%)", maxHeight: "630px" }} alt="Food" />
              <div className="carousel-caption d-none d-md-block">
                <div className="carousel-caption d-none d-md-block">
                  <div className="d-flex justify-content-center">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setsearch(e.target.value) }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://tse1.mm.bing.net/th/id/OIP.OZny5F6g0QAQPLsU_4HnEAHaE8?pid=Api&P=0&h=180" className="d-block w-100 " style={{ filter: "brightness(20%)", maxHeight: "630px" }} alt="Pizza" />
              <div className="carousel-caption d-none d-md-block">
                <div className="carousel-caption d-none d-md-block">
                  <div className="d-flex justify-content-center">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setsearch(e.target.value) }} />
                    <button className="btn btn-outline-success text-white" type="submit">Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://tse1.mm.bing.net/th/id/OIP.yQWKrcsv4B0EUukVirfHIAHaEK?pid=Api&P=0&h=180" className="d-block w-100 h-50" style={{ filter: "brightness(20%)", maxHeight: "630px" }} alt="..." />
              <div className="carousel-caption d-none d-md-block ">
                <div className="carousel-caption d-none d-md-block">
                  <div className="d-flex justify-content-center">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setsearch(e.target.value)} />
                  </div> </div> </div> </div> </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span> 
             <span className="visually-hidden">Previous</span> 
             </button> 
             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"> 
              <span className="carousel-control-next-icon" aria-hidden="true"></span> 
              <span className="visually-hidden">Next</span> 
              </button> </div> </div> 
              <div className='container ' > {foodCat != [] ? foodCat.map((data) => { return (<div className='row mb-3'>
                 <div key={data._id} className='fs-3 m-3'> {data.CategoryName}
                   </div> 
                   <hr /> {foodItem != [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(safeSearch))).map(filterItem => 
                   { 
                   return (
                   <div key={filterItem} className='col-12 col-md-6 col-lg-3'> 
                   <Card style={{ filter: "brightness(30%)" }} foodItem={filterItem} options={filterItem.options[0]} >
                   </Card > 
                   </div>
                   ) }) : 
                   <div>No data found</div>} </div>) }) : ''} </div> <div><Footer /></div> </div>)
} export default Home