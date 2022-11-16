import React from 'react'
import one from '../assets/frameone.png'
import two from "../assets/frametwo.png";
import three from "../assets/framethree.png";
import four from "../assets/framefour.png";
import five from "../assets/framefive.png";
import six from "../assets/framesix.png";
import seven from "../assets/frameseven.png";
import eight from "../assets/frameeight.png";
import star from '../assets/star-rating.svg'
import '../styles/card.css'

function Community() {
  return (
    <>
      <div className="container-fluid py-5">
        <h2 className="community-text text-center">Inspiration for your next adventure</h2>
        <div className="row row-cols-8">
          <div className="col-lg-3 col-md-6 p-4">
            <span className=" card crd">
              <img src={one} className="card-img-top" alt="hello"></img>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="crdt">Desert king</p>
                  <p className="crdp">1MB per night</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="stat">2345km away</p>
                  <p className="stat">available for 2weeks stay</p>
                </div>
                <div>
                  <img src={star} alt="star"></img>
                </div>
              </div>
            </span>
          </div>

          <div className="col-lg-3 col-md-6 p-4">
            <span className=" card crd">
              <img src={two} className="card-img-top" alt="hello"></img>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="crdt">Desert king</p>
                  <p className="crdp">1MB per night</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="stat">2345km away</p>
                  <p className="stat">available for 2weeks stay</p>
                </div>
                <div>
                  <img src={star} alt="star"></img>
                </div>
              </div>
            </span>
          </div>

          <div className="col-lg-3 col-md-6 p-4">
            <span className=" card crd">
              <img src={three} className="card-img-top" alt="hello"></img>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="crdt">Desert king</p>
                  <p className="crdp">1MB per night</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="stat">2345km away</p>
                  <p className="stat">available for 2weeks stay</p>
                </div>
                <div>
                  <img src={star} alt="star"></img>
                </div>
              </div>
            </span>
          </div>

          <div className="col-lg-3 col-md-6 p-4">
            <span className=" card crd">
              <img src={four} className="card-img-top" alt="hello"></img>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="crdt">Desert king</p>
                  <p className="crdp">1MB per night</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="stat">2345km away</p>
                  <p className="stat">available for 2weeks stay</p>
                </div>
                <div>
                  <img src={star} alt="star"></img>
                </div>
              </div>
            </span>
          </div>

          <div className="col-lg-3 col-md-6 p-4">
            <span className=" card crd">
              <img src={five} className="card-img-top" alt="hello"></img>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="crdt">Desert king</p>
                  <p className="crdp">1MB per night</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="stat">2345km away</p>
                  <p className="stat">available for 2weeks stay</p>
                </div>
                <div>
                  <img src={star} alt="star"></img>
                </div>
              </div>
            </span>
          </div>

          <div className="col-lg-3 col-md-6 p-4">
            <span className=" card crd">
              <img src={six} className="card-img-top" alt="hello"></img>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="crdt">Desert king</p>
                  <p className="crdp">1MB per night</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="stat">2345km away</p>
                  <p className="stat">available for 2weeks stay</p>
                </div>
                <div>
                  <img src={star} alt="star"></img>
                </div>
              </div>
            </span>
          </div>

          <div className="col-lg-3 col-md-6 p-4">
            <span className=" card crd">
              <img src={seven} className="card-img-top" alt="hello"></img>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="crdt">Desert king</p>
                  <p className="crdp">1MB per night</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="stat">2345km away</p>
                  <p className="stat">available for 2weeks stay</p>
                </div>
                <div>
                  <img src={star} alt="star"></img>
                </div>
              </div>
            </span>
          </div>

          <div className="col-lg-3 col-md-6 p-4">
            <span className=" card crd">
              <img src={eight} className="card-img-top" alt="hello"></img>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="crdt">Desert king</p>
                  <p className="crdp">1MB per night</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="stat">2345km away</p>
                  <p className="stat">available for 2weeks stay</p>
                </div>
                <div>
                  <img src={star} alt="star"></img>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community