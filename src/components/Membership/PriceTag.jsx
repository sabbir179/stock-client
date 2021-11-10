import Button from '@restart/ui/esm/Button';
import React from 'react';

const PriceTag = () => {
    return (
        <div className="showed" style={{  backgroundColor: "#fff" , padding:"30px", borderRadius:"5px"
            }} >
            <div className="bg-dark w-25 p-2 rounded-pill">
                <h3 className="text-white" >GOLD</h3>
            </div>
            <div className="d-flex mt-3">
                <h3 className="fw-bold " >$30</h3>
                <h3 className="fw-lighter" >/mo</h3>
            </div>
            <div style={{backgroundColor: "#C2DFE3", margin: "70px 0px",  height:"220px", paddingTop:"50px "}}>
                <ul className="text-start text-dark " >
                    <li>varius lectus porta vestibulum</li>
                    <li>varius lectus porta vestibulum</li>
                    <li>varius lectus porta vestibulum</li>
                </ul>
                <Button className="btn btn-warning showed" > Get Started</Button>
            </div>
            
        </div>
    );
};

export default PriceTag;