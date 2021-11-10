import React from 'react';
import "./Stock.css";

const Stock = () => {
    return (
        <div className="test2">
        <div className="test">
            <div className="line" style={{margin: "10px 20px"}} >
                <h5 className="fw-light text-primary" >AAPL</h5>
                <p className="fw-bold text-dark" >148.96</p>
                <p className="fw-bold text-danger">-0.84 (-0.56%) </p>
            </div>
            {/* <div>
                <div style={{borderLeft:"1px solid gray", height:"50px", 
                        position:"absolute", left:"20%", marginLeft:"-4px",top:"150px"}} />
            </div>
            */}

            <div>
                <h5 className="fw-light text-primary" >S&P 500</h5>
                <p className="fw-bold text-dark">4,613.67</p>
                <p className="fw-bold text-success">+8.29(+0.18%)</p>
            </div>
            {/* <div>
                <div style={{borderLeft:"1px solid gray", height:"50px", 
                        position:"absolute", left:"50%", marginLeft:"-4px",top:"150px"}} />
            </div> */}
            <div>
                <h5 className="fw-light text-primary">Dow 30</h5>
                <p className="fw-bold text-dark">35,913.84</p>
                <p className="fw-bold text-success">+94.28(+0.26%)</p>
            </div>
            <div>
                <h5 className="fw-light text-primary">Nasdaq</h5>
                <p className="fw-bold text-dark">15,595.92</p>
                <p className="fw-bold text-success">+97.53(+0.63%)</p>
            </div>
            <div>
                <h5 className="fw-light text-primary">Russell 2000</h5>
                <p className="fw-bold text-dark">2,358.12</p>
                <p className="fw-bold text-success">+60.93(+2.65%)</p>
            </div>
            <div>
                <h5 className="fw-light text-primary">Crude Oil</h5>
                <p className="fw-bold text-dark">83.90</p>
                <p className="fw-bold text-success">+0.33(+0.39%)</p>
            </div>
            <div>
                <h5 className="fw-light text-primary">Gold</h5>
                <p className="fw-bold text-dark">1,794.50</p>
                <p className="fw-bold text-success">+10.60(+0.59%)</p>
            </div>
            <div>
                <h5 className="fw-light text-primary">Silver</h5>
                <p className="fw-bold text-dark">24.12</p>
                <p className="fw-bold text-success">+0.17(+0.71%)</p>
            </div>
            <div>
                <h5 className="fw-light text-primary">name 9</h5>
                <p className="fw-bold text-dark">amount</p>
                <p className="fw-bold text-success">amount change in %</p>
            </div>
            <div>
                <h5 className="fw-light text-primary">name 10</h5>
                <p className="fw-bold text-dark">amount</p>
                <p className="fw-bold text-success">amount change in %</p>
            </div>
            <div>
                <h5 className="fw-light text-primary">name 11</h5>
                <p className="fw-bold text-success">amount</p>
                <p className="fw-bold text-success">amount change in %</p>
            </div>
            <div>
                <h5 className="fw-light text-primary">name 12</h5>
                <p>amount</p>
                <p className="fw-bold text-danger">amount change in %</p>
            </div>
            <div>
                <h5 className="fw-light text-primary">name 13</h5>
                <p>amount</p>
                <p>amount change in %</p>
            </div>
            <div>
                <h5>name 14</h5>
                <p>amount</p>
                <p>amount change in %</p>
            </div>
            <div>
                <h4>name 15</h4>
                <p>amount</p>
                <p>amount change in %</p>
            </div>
            <div>
                <h4>name 16</h4>
                <p>amount</p>
                <p>amount change in %</p>
            </div>
            <div>
                <h4>name 17</h4>
                <p>amount</p>
                <p>amount change in %</p>
            </div>
            
        </div>
    </div>
    );
};

export default Stock;