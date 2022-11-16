import React from 'react'
import { Icon } from '@iconify/react';
import walletconnect from '../assets/walletconnect.png'
import mtmask from "../assets/metamask.png";

function Modal() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Connect wallet
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body pt-3">
            Choose your preferred Wallet
            <div className="d-flex justify-content-between border my-3 p-3 rounded align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  <img
                    src={mtmask}
                    className="img-fluid w-100"
                    alt="wallet connect logo"
                  ></img>
                </div>
                <div>
                  <h5 className="ps-2">Metamask</h5>
                </div>
              </div>
              <div>
                <Icon className="fs-2" icon="ic:round-keyboard-arrow-right" />
              </div>
            </div>
            <div className="d-flex justify-content-between border my-3 p-3 rounded align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  <img
                    src={walletconnect}
                    className="img-fluid w-100"
                    alt="wallet connect logo"
                  ></img>
                </div>
                <div>
                  <h5 className="ps-2">WalletConnect</h5>
                </div>
              </div>
              <div>
                <Icon className="fs-2" icon="ic:round-keyboard-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal