import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './map.css';

const OrderTracking = () => {
  // Initialize state for the current step
  const [currentStep, setCurrentStep] = useState(0);

  // Define the steps array
  const steps = [
    'Confirmed Order',
    'Processing Order',
    'Quality Check',
    'Product Dispatched',
    'Product Delivered',
  ];

  // Function to automatically progress to the next step
  const progressToNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : 0));
  };

  // Use useEffect to set up a timer to progress every minute
  useEffect(() => {
    const timerId = setTimeout(progressToNextStep, 60000); // 60000 milliseconds = 1 minute

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timerId);
  }, [currentStep]); // Trigger the effect when currentStep changes

  return (
    <>
      {/* Your existing JSX code for the order tracking component */}
      <div className="main_container">
        <h1>Grocery</h1>
        <div className="container padding-bottom-3x mb-1">
          <div className="card mb-3">
            <div className="p-4 text-center text-white text-lg bg-dark rounded-top">
              <span className="text-uppercase">Tracking Order No - </span>
              <span className="text-medium">001698653lp</span>
            </div>
            <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
              <div className="w-100 text-center py-1 px-2">
                <span className="text-medium">Shipped Via:</span> UPS Ground
              </div>
              <div className="w-100 text-center py-1 px-2">
                <span className="text-medium">Status:</span> Checking Quality
              </div>
              <div className="w-100 text-center py-1 px-2">
                <span className="text-medium">Expected Date:</span> APR 27, 2021
              </div>
            </div>
            <div className="card-body">
              <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                {steps.map((step, index) => (
                  <div key={index} className={`step ${index <= currentStep ? 'completed' : ''}`}>
                    <div className="step-icon-wrap">
                      <div className="step-icon">
                        <i className={index <= currentStep ? 'pe-7s-check' : 'pe-7s-angle-right'}></i>
                      </div>
                    </div>
                    <h4 className="step-title">{step}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
            <div className="text-left text-sm-right">
              <p><strong>Note:</strong> Once your order it will be  not cancel</p>
              <a className="btn btn-outline-primary btn-rounded btn-sm" href="/cart">
                View Order Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTracking;
