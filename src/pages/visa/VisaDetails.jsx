import React, { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import { FaXmark } from "react-icons/fa6";
import { apiUrl } from "../../hooks/useApiUrl";
import axios from "axios";
import { toast } from "sonner";

const VisaDetails = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const visa = useLoaderData();
  const navigate = useNavigate();
  const handleApply = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const date = startDate;
    const fee = visa?.fee;
    const applyVisa = {
      visaId: visa?._id,
      firstName,
      lastName,
      processingTime: visa?.processingTime,
      email: user?.email,
      appliedVisa: visa?.visaType,
      appliedCountry: visa?.countryName,
      date,
      fee,
      validity: visa?.validity,
    };
    try {
      const res = await axios.post(`${apiUrl}/visas/apply`, applyVisa);
      if (res.data?.message) {
        toast.error(res.data.message);
      } else {
        toast.success(
          `Mr./Mrs. ${firstName} you applied ${visa?.visaType} in ${visa?.countryName}`
        );
      }
      console.log(applyVisa);
      setOpen(false);
      navigate("/applied-visa");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div>
      <div className="bg-[url(/img/all-visa.jpg)] w-full aspect-bread bg-center bg-cover all-visa relative">
        <div className="w-full h-full flex justify-center items-center sec-title text-white">
          {visa.countryName} Visa
        </div>
      </div>
      <div className="container mt-10">
        <div className="flex gap-6">
          <div className="w-full md:w-1/2">
            <img src={visa.countryImg} alt="" />
          </div>
          <div className="w-full md:w-1/2 space-y-3">
            <h1 className="sec-title">Visa Type: {visa.visaType}</h1>
            <h4 className="title">Country: {visa.countryName}</h4>
            <p>Description: {visa?.description}</p>
            <div className="bg-primary/20 p-5">
              <h4 className="title mb-3">Requirement Document</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3">
                {visa.requirementDoc.map((item, idx) => (
                  <p className="flex items-center gap-2" key={idx}>
                    <IoDocumentTextOutline className="text-primary" /> {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <p>
                Processing Time:{" "}
                <span className="font-bold">{visa?.processingTime}</span>
              </p>
              <p>Requirement Age: {visa?.ageRestriction}</p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <p>
                Validity:{" "}
                <span className="font-bold">
                  {new Date(visa?.validity).toDateString()}
                </span>
              </p>
              <p>
                Processing fee
                <span className="title text-primary"> ${visa?.fee}</span>
              </p>
            </div>
            <div>
              <p>
                Apply process:{" "}
                <span className="font-medium">{visa?.applicationMethod}</span>
              </p>
              <span>Or</span>{" "}
              <button onClick={() => setOpen(true)} className="btn">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <div className={`apply-modal ${open ? "flex" : "hidden"}`}>
          <div className="w-full md:w-8/12 bg-white rounded-2xl p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-5 hover:bg-secondary duration-300 cursor-pointer -right-5 bg-primary p-5 rounded-full text-white text-2xl"
            >
              <FaXmark />
            </button>
            <h3 className="title text-center text-primary">
              Applied form for {visa?.visaType} in {visa?.countryName}
            </h3>
            <form onSubmit={handleApply}>
              <div className="frm-grp-col">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="first Name"
                  className="frm-ctr"
                />
              </div>
              <div className="frm-grp-col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="frm-ctr"
                />
              </div>
              <div className="flex gap-5 flex-col md:flex-row">
                <div className="frm-grp-col w-full">
                  <label htmlFor="appliedDate">Apply Date</label>
                  <DatePicker
                    disabled
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="frm-ctr"
                  />
                </div>
                <div className="frm-grp-col w-full">
                  <label htmlFor="fee">Processing fee</label>
                  <input
                    type="number"
                    name=""
                    disabled
                    defaultValue={visa?.fee}
                    className="frm-ctr"
                  />
                </div>
              </div>
              <button type="submit" className="btn mx-auto mt-10">
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
