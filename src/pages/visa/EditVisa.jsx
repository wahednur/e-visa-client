import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "sonner";
import { apiUrl } from "../../hooks/useApiUrl";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

const visaRequirements = {
  "Student Visa": [
    "Valid passport",
    "University Acceptance Letter",
    "Proof of Enrollment",
    "Academic Certificates",
    "Proof of Financial Support",
    "Health Insurance",
  ],
  "Family Visa": [
    "Valid passport",
    "Proof of Family Relationship",
    "Invitation Letter from Family Member",
    "Financial Support Documents",
    "Health Insurance",
  ],
  "Tourist Visa": [
    "Valid passport",
    "Travel Itinerary",
    "Hotel Reservation",
    "Round-Trip Flight Ticket",
    "Proof of Sufficient Funds",
  ],
  "Business Visa": [
    "Valid passport",
    "Invitation Letter from Business Partner",
    "Company Registration Certificate",
    "Business Travel Itinerary",
    "Proof of Financial Stability",
  ],
  "Working Visa": [
    "Valid passport",
    "Job Offer Letter",
    "Employment Contract",
    "Company Sponsorship Documents",
    "Medical Test Reports",
  ],
  "Residence Visa": [
    "Valid passport",
    "Proof of Investment or Property Ownership",
    "Work Permit (if applicable)",
    "Proof of Financial Stability",
    "Police Clearance Certificate",
    "Medical Test Reports",
  ],
};
const EditVisa = () => {
  const { user } = useAuth();
  const [selectedVisa, setSelectedVisa] = useState("");
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const getVisaData = useLoaderData();
  const navigate = useNavigate();
  const handleVisaChange = (e) => {
    setSelectedVisa(e.target.value);
    setSelectedDocuments([]); // Reset selected documents
  };
  console.log(getVisaData);
  const handleDocumentChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDocuments([...selectedDocuments, value]);
    } else {
      setSelectedDocuments(selectedDocuments.filter((doc) => doc !== value));
    }
  };
  const handleEditVisa = async (e) => {
    e.preventDefault();
    const form = e.target;
    const countryName = form.countryName.value;
    const countryImg = form.countryImg.value;
    const visaType = selectedVisa;
    const requirementDoc = selectedDocuments;
    const processingTime = form.processingTime.value;
    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = startDate;
    const applicationMethod = form.applicationMethod.value;
    const addVisa = {
      countryName,
      countryImg,
      visaType,
      requirementDoc,
      processingTime,
      description,
      ageRestriction,
      validity,
      applicationMethod,
      fee,
      user: {
        email: user?.email,
        name: user?.displayName,
      },
    };

    try {
      await fetch(`${apiUrl}/vias/update/${getVisaData?._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addVisa),
      });
      toast.success(`${visaType} Update successfully`);
      form.reset();
      navigate("/visa-list");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mt-10">
      <div className="bg-white w-full md:w-3/4 mx-auto rounded-xl p-10">
        <h1 className="sec-title text-center">Add visa</h1>
        <form onSubmit={handleEditVisa} className="mt-10">
          <div className="frm-grp-col">
            <label htmlFor="countryName">Country Name</label>
            <input
              type="text"
              name="countryName"
              className="frm-ctr"
              defaultValue={getVisaData.countryName}
            />
          </div>
          <div className="frm-grp-col">
            <label htmlFor="countryImg">Country Image</label>
            <input
              type="text"
              name="countryImg"
              className="frm-ctr"
              defaultValue={getVisaData.countryImg}
            />
          </div>
          <div className="frm-grp-col">
            <label htmlFor="countryImg">Visa Type</label>
            <select
              name="visaType"
              className="frm-ctr"
              value={selectedVisa}
              onChange={handleVisaChange}
            >
              <option value={getVisaData.visaType}>
                {getVisaData.visaType}
              </option>

              {Object.keys(visaRequirements).map((visa) => (
                <option key={visa} value={visa}>
                  {visa}
                </option>
              ))}
            </select>
          </div>
          <div className="frm-grp-col">
            <label htmlFor="processingTime">Processing Time</label>
            <input
              type="text"
              name="processingTime"
              className="frm-ctr"
              defaultValue={getVisaData.processingTime}
            />
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="flex items-center gap-3 w-full">
              {selectedVisa && (
                <div className="mt-4 p-5 border border-primary rounded-xl w-full">
                  <h3 className="text-lg font-medium inline bg-white relative -top-9 px-5 ">
                    Required Documents:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {visaRequirements[selectedVisa].map((doc, index) => (
                      <label key={index} className="flex gap-1 items-center">
                        <input
                          type="checkbox"
                          value={doc}
                          checked={selectedDocuments.includes(doc)}
                          onChange={handleDocumentChange}
                        />
                        {doc}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="frm-grp-col mt-5">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              className="frm-ctr"
              rows={5}
              defaultValue={getVisaData.description}
            ></textarea>
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="frm-grp-col w-full md:w-1/3">
              <label htmlFor="ageRestriction">Age Requirement</label>
              <input
                type="text"
                name="ageRestriction"
                className="frm-ctr"
                defaultValue={getVisaData.ageRestriction}
              />
            </div>
            <div className="frm-grp-col w-full md:w-1/3">
              <label htmlFor="fee">Fee</label>
              <input
                type="number"
                name="fee"
                className="frm-ctr"
                defaultValue={getVisaData?.fee}
              />
            </div>
            <div className="frm-grp-col w-full md:w-1/3">
              <label htmlFor="validity">Validity Date</label>
              <DatePicker
                selected={getVisaData?.validity}
                onChange={(date) => setStartDate(date)}
                className="frm-ctr"
              />
            </div>
          </div>
          <div className="frm-grp-col mt-5">
            <label htmlFor="applicationMethod">Application Method</label>
            <textarea
              name="applicationMethod"
              className="frm-ctr"
              rows={5}
              defaultValue={getVisaData?.applicationMethod}
            ></textarea>
          </div>
          <button className="btn w-full">Add Visa</button>
        </form>
      </div>
    </div>
  );
};

export default EditVisa;
