import React from 'react';

const PriceTag = () => {
    return (
        <div style={{  backgroundColor: "#D8D8F6" , padding:"30px",
            }} >
            <div className="bg-dark w-25 p-2 rounded-pill">
                <h3 className="text-white" >GOLD</h3>
            </div>
            <div className="d-flex mt-3">
                <h3 className="fw-bold " >$30</h3>
                <h3 className="fw-lighter" >/mo</h3>
            </div>
            <div style={{backgroundColor: "#214E34", margin: "20px", height:"120px", paddingTop:"20px"}}>
                <ul className="text-start text-white " >
                    <li>varius lectus porta vestibulum</li>
                    <li>varius lectus porta vestibulum</li>
                    <li>varius lectus porta vestibulum</li>
                </ul>
            </div>
        </div>
    );
};

export default PriceTag;