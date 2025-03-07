import { useEffect, useState } from "react";
import { apiUrl } from "../../hooks/useApiUrl";
import axios from "axios";
import VisaCard from "./VisaCard";
const AllVisa = () => {
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
      <div className="bg-[url('/img/all-visa.jpg')] w-full aspect-bread bg-cover bg-center all-visa flex items-center justify-center relative">
        <h1 className="sec-title text-white">Visas</h1>
      </div>
      <div className="container mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visas.map((visa) => (
            <VisaCard key={visa._id} visa={visa} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllVisa;
