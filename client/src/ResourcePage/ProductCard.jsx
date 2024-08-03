import React, { useState, useRef, useEffect } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

const ProductCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card p-3 bg-white rounded">
      <div className="about-product text-center mt-2">
        <img src={props.imgsrc} width="200" alt="Arduino" />
        <div className='mt-2 mb-2'>
          <h5>
            {props.name}
            <button onClick={toggleExpand} className="btn btn-link">
              <i className={`bi bi-chevron-${isExpanded ? 'up' : 'down'}`}></i>
            </button>
          </h5>
          
        </div>
      </div>
      <div
        className="expandable-content"
        style={{
          maxHeight: `${contentHeight}px`,
          opacity: isExpanded ? 1 : 0,
        }}
        ref={contentRef}
      >
        <p className="mt-0 alert alert-primary ">
          Specification :{props.specification}
        </p>
        <p className="mt-2 text-primary ">
        <i class="bi bi-geo-alt-fill"></i> : {props.location}
        </p>
        <div className="stats mt-2">
          <div className="d-flex justify-content-between p-price">
            <span>Quantity</span>
            <span>{props.quantity}</span>
          </div>
          <div className="d-flex justify-content-between p-price">
            <span>Category</span>
            <span>{props.category}</span>
          </div>
          <div className="d-flex justify-content-between p-price">
            <span>Part Number</span>
            <span>{props.part_number}</span>
          </div>
          <div className="d-flex justify-content-between p-price">
            <span>Box Number</span>
            <span>{props.box_number}</span>
          </div>
          <div className="d-flex justify-content-between p-price">
            <span >Condition</span>
            <span >Not Specified</span>
          </div>
        </div>
        <div className="d-flex justify-content-between total font-weight-bold mt-4">
          <span><button type="button" class="btn btn-primary btn-sm"> <i class="bi bi-cart"></i> Add to Cart</button></span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
