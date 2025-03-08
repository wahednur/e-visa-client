import { useEffect, useState } from "react";
import { apiUrl } from "../../hooks/useApiUrl";
import axios from "axios";
import VisaCard from "./VisaCard";
import { Helmet } from "react-helmet-async";
const AllVisa = () => {
  const [visas, setVisas] = useState([]);
  const [visaType, setVisaType] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${apiUrl}/visas`);

      setVisas(data);
    };
    getData();
  }, []);
  // Filter visas based on selected visa type
  const filteredVisas = visaType
    ? visas.filter((visa) => visa.visaType === visaType)
    : visas;
  return (
    <>
      <Helmet>
        <title>Visas</title>
      </Helmet>
      <div className="bg-[url('/img/all-visa.jpg')] w-full aspect-bread bg-cover bg-center all-visa flex items-center justify-center relative">
        <h1 className="sec-title text-white">Visas</h1>
      </div>
      <div className="container mt-10">
        <div className="my-10 bg-white p-4">
          <div className="text-right">
            <span className="mr-4"> Filter by</span>
            <select
              onChange={(e) => setVisaType(e.target.value)}
              value={visaType}
              className="border p-2"
            >
              <option value="">All Visa Types</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Family Visa">Family Visa</option>
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Business Visa">Business Visa</option>
              <option value="Working Visa">Working Visa</option>
              <option value="Residence Visa">Residence Visa</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVisas.map((visa) => (
            <VisaCard key={visa._id} visa={visa} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllVisa;
