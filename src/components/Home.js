import React from "react";
import {Products} from './Products'
export const Home = () => {
  return (
    <div classNameName="hero">
      <div className="card text-bg-dark text-white border-0">
        <img src="/assets/bg.jpg" className="card-img" alt="Background" height="850px" />
        <div className="card-img-overlay d-flex flex-column ">
            <div classNameName="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
            CHECH OUT ALL THE TRENDS
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};
