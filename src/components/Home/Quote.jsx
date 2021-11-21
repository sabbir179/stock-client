import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Qoute = () => {
  return (
    <section className=" ">
      <div className="container py-5 ">
        <div className="row d-flex justify-content-start align-items-start h-100">
          <div className="col-md-12 col-xl-5 mx-auto">
            <div
              className="card text-white "
              style={{ backgroundColor: "#1C75BA", borderRadius: "15px" }}
            >
              <div className="card-body p-5 text-start">
                <i className="fa-2x mb-4 t">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </i>

                <p className="lead">
                  Genius is one percent inspiration and ninety-nine percent
                  perspiration.
                </p>

                <hr />

                <div className="d-flex justify-content-between">
                  <p className="mb-0">Thomas Edison</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qoute;
