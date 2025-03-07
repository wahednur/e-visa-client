import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../../hooks/useApiUrl";
import useAuth from "../../hooks/useAuth";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const MyAppliedVisa = () => {
  const { user } = useAuth();
  const [visas, setVisas] = useState([]);

  const handleDelete = async (id) => {
    await axios.delete(`${apiUrl}/applied-visa/${id}`);
    toast.success("Applied visa deleted");
    getData();
  };

  useEffect(() => {
    getData();
  }, [user?.email]);
  const getData = async () => {
    const { data } = await axios.get(
      `${apiUrl}/visa/applied-visa/${user?.email}`
    );
    setVisas(data);
  };

  return (
    <div>
      <div className="bg-[url(/img/visabg.jpg)] w-full aspect-bread bg-center bg-cover all-visa relative">
        <div className="w-full h-full flex justify-center items-center sec-title text-white">
          My Applied Visa
        </div>
      </div>
      <div className="container">
        {visas.length <= 0 ? (
          <div className="w-full mt-20 justify-center items-center flex flex-col">
            <h1 className="title">No applied</h1>
            <img src="/img/visa_passport.svg" className="w-[300px]" alt="" />
            <Link className="btn mt-10" to="/all-visa">
              Applied now
            </Link>
          </div>
        ) : (
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Visa Type
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Country Name
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Process time
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Applied date
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Validity date
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Fee
                </th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {visas.map((visa) => (
                <tr key={visa._id}>
                  <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                    {visa.appliedVisa}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {visa.appliedCountry}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {visa?.processingTime}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {new Date(visa?.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    {new Date(visa?.validity).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                    ${visa?.fee}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => handleDelete(visa?._id)}
                        className="bg-red-500 px-5 py-3 rounded-md text-white hover:bg-secondary duration-300"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyAppliedVisa;
