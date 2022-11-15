import React from 'react'
import clusterednft from '../assets/bottomclustered.png'
import '../styles/nfts.css'

const Nfts = () => {
  return (
    <div id="nfts">
      <div className="row align-items-center px-5 py-5">
        <div className="col-sm-6">
          <h2 className="metabnb fs-1">Metabnb NFTs</h2>
          <p className="bnbtxt text-white">
            Discover our NFT gift cards collection. Loyal <br /> customers gets
            amazing gift cards which are <br /> traded as NFTs. These NFTs gives
            our customer <br /> access to loads of our exclusive services.
          </p>
        </div>
        <div className="col-sm-6 m-auto">
          <img
            src={clusterednft}
            alt="clustered nfts"
            className="img-fluid"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Nfts