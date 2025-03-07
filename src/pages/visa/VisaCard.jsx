import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const VisaCard = ({ visa }) => {
  return (
    <div className="bg-white p-5 rounded-2xl drop-shadow-md space-y-4">
      <div className="relative">
        <img
          className="w-full aspect-card object-cover rounded-tl-xl rounded-tr-xl"
          src={visa?.countryImg}
        />
        <h4 className="title absolute bottom-2 px-6 py-2 left-0 bg-secondary/80 hover:bg-primary duration-300 transition-all text-white rounded-tr-md rounded-br-md">
          {visa?.visaType}
        </h4>
      </div>
      <div className="flex items-center justify-between">
        <p>
          Country: <span className="font-bold">{visa?.countryName}</span>
        </p>{" "}
        <p>
          Fee:{" "}
          <span className="font-bold">$ {visa?.fee ? visa?.fee : "free"}</span>{" "}
        </p>
      </div>
      <p>
        Processing Time:{" "}
        <span className="font-bold">{visa.processingTime}</span>
      </p>
      <div className="inline-flex">
        <Link to={`/visas/${visa._id}`} className="btn">
          See Details
        </Link>
      </div>
    </div>
  );
};

VisaCard.propTypes = {
  visa: PropTypes.object,
};

export default VisaCard;
