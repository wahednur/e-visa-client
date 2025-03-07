import Slider from "../../components/slider/Slider";
import { PiAirplaneTilt } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsAirplane, BsPassport } from "react-icons/bs";
import { useEffect, useState } from "react";
import { apiUrl } from "../../hooks/useApiUrl";
import axios from "axios";
import VisaCard from "../visa/VisaCard";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
const HomePage = () => {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${apiUrl}/visas`);
      setVisas(data);
    };
    getData();
  }, []);
  return (
    <>
      <div>
        <Slider />
        <div className="container relative z-20 md:-mt-10">
          <div className="flex flex-col gap-6 md:flex-row justify-between">
            <div className="bg-white drop-shadow-2xl overflow-hidden">
              <div className="flex inner-box gap-6 items-center p-6">
                <div className="icon text-4xl text-primary p-4 border border-dashed rounded-full border-primary bg-white">
                  <PiAirplaneTilt />
                </div>
                <div className="hover:text-white">
                  <h4 className="text-2xl font-bold mb-4 ">
                    Immigration & Visa Process
                  </h4>
                  <p>We strongly support best practice sharing across</p>
                </div>
              </div>
            </div>
            <div className="bg-white drop-shadow-2xl overflow-hidden">
              <div className="flex inner-box gap-6 items-center p-6">
                <div className="icon text-4xl text-primary p-4 border border-dashed rounded-full border-primary bg-white">
                  <BsPassport />
                </div>
                <div className="hover:text-white">
                  <h4 className="text-2xl font-bold mb-4 ">
                    Quick & Easy Visa Application
                  </h4>
                  <p>We strongly support best practice sharing across</p>
                </div>
              </div>
            </div>
            <div className="bg-white drop-shadow-2xl overflow-hidden">
              <div className="flex inner-box gap-6 items-center p-6">
                <div className="icon text-4xl text-primary p-4 border border-dashed rounded-full border-primary bg-white">
                  <IoDocumentTextOutline />
                </div>
                <div className="hover:text-white">
                  <h4 className="text-2xl font-bold  mb-4">
                    Expert & Experince Consultants
                  </h4>
                  <p>We strongly support best practice sharing across</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/img/visa-bg.jpg)] w-full bg-cover visa relative mt-12 lg:mt-20">
        <div className="container py-10 lg:py-20">
          <h1 className="sec-title text-center text-white w-full md:w-2/3 mx-auto leading-tight">
            Latest visa
          </h1>
          <h4 className="title text-white text-center">
            Outstanding Immigration Visa Services
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {visas.slice(0, 6).map((visa) => (
              <VisaCard key={visa._id} visa={visa} />
            ))}
          </div>
        </div>
      </div>
      <div className="container my-10 md:my-16 lg:my-20">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-5/12">
            <img src="/img/about1-1h.jpg" alt="" />
          </div>
          <div className="w-full md:w-7/12">
            <div className="inline-flex relative">
              <MdOutlineDoubleArrow className="absolute left-1/2 -translate-x-1/2 text-3xl -top-4 text-primary" />
              <span className="py-3 px-6 border border-primary font-black text-xl uppercase">
                Who we are
              </span>
            </div>
            <h4 className="sec-title leading-tight my-4">
              Best Immigration & Visa Consultation.
            </h4>
            <p className="text-text">
              There are many variations of passages of but the majority have in
              some form, by injected humou or words which don't look even
              slightly believable of but the majority have suffered majority
              have in some variations of passages
            </p>
            <div className="flex items-center gap-6 mt-10">
              <div className="flex items-center gap-4 w-1/2">
                <div className="border-2 p-3 rounded-full border-dashed border-primary text-primary">
                  <BsAirplane className="text-6xl" />
                </div>
                <p className="text-xl font-bold w-7/12">
                  Expertise visa Processing
                </p>
              </div>
              <div className="flex items-center gap-4 w-1/2">
                <div className="border-2 p-3 rounded-full border-dashed border-primary text-primary">
                  <BsPassport className="text-6xl" />
                </div>
                <p className="text-xl font-bold w-7/12">
                  Fastest Working Process
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <p className="flex items-center gap-2 font-bold text-lg">
                <FaArrowCircleRight className="text-primary text-2xl" />
                <span>We strongly support best practice</span>
              </p>
              <p className="flex items-center gap-2 font-bold text-lg">
                <FaArrowCircleRight className="text-primary text-2xl" />
                <span>Our operations around the world and across</span>
              </p>
              <div className="mt-10">
                <button className="btn">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
