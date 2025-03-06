import Slider from "../../components/slider/Slider";
import { PiAirplaneTilt } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsPassport } from "react-icons/bs";
import { useEffect, useState } from "react";
import { apiUrl } from "../../hooks/useApiUrl";
import axios from "axios";
import VisaCard from "../visa/VisaCard";
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
    </>
  );
};

export default HomePage;
