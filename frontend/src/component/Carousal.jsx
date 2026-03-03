import React from 'react'

function Carousal() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://foodish-api.com/images/dessert/dessert6.jpg" className="d-block w-100 h-50" style={{ filter: "brightness(30%)", maxHeight: "800px" }} alt="Food" />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="carousel-caption d-none d-md-block">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://foodish-api.com/images/pizza/pizza30.jpg" className="d-block w-100  " style={{ filter: "brightness(30%)", maxHeight: "800px" }} alt="Pizza" />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="carousel-caption d-none d-md-block">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success text-white" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://foodish-api.com/images/burger/burger24.jpg" className="d-block w-100 h-50" style={{ filter: "brightness(30%)", maxHeight: "800px" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block ">
                            <div className="carousel-caption d-none d-md-block">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousal