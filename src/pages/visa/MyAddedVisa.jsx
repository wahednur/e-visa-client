import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../../hooks/useApiUrl";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const MyAddedVisa = () => {
  const [visas, setVisas] = useState([]);

  const handleDelete = async (id) => {
    await axios.delete(`${apiUrl}/visa/delete/${id}`);
    toast.success("Visa successfully deleted");
    getData();
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const { data } = await axios.get(`${apiUrl}/visas`);
    setVisas(data);
  };
  return (
    <>
      <div className="overflow-x-auto">
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
                Fee
              </th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {visas.map((visa) => (
              <tr key={visa._id}>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  {visa.visaType}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {visa.countryName}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  {visa?.processingTime}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  ${visa?.fee}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <div className="flex gap-2 items-center">
                    <Link to={`/visas/${visa._id}`} className="btn">
                      <FaRegEye />
                    </Link>
                    <Link
                      to={`/edit-visa/${visa._id}`}
                      className="bg-green-500 px-5 py-3 rounded-md text-white hover:bg-secondary duration-300"
                    >
                      <FaRegEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(visa._id)}
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
      </div>
    </>
  );
};

export default MyAddedVisa;
