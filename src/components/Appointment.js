import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Appointment = () => {
  const {productId}=useParams();
  // const [selectedService, setSelectedService] = useState("");
  // const [additionalField, setAdditionalField] = useState("");
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userContact: "",
    estimatedBudget: "",
    completionDate: null,
    otherInfo: "",
    applicationType: "",
    referenceLink: "",
    projectStatus: "",
    projectFile: "",
  });
  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fileSizeInBytes = file.size;
    const fileSizeInKilobytes = fileSizeInBytes / 1024; // Convert bytes to KB
    const fileSizeInMegabytes = fileSizeInKilobytes / 1024; // Convert KB to MB
    console.log("File size:", fileSizeInMegabytes.toFixed(2), "MB");
    if(fileSizeInMegabytes < 6){
      setFormData({...formData,"projectFile":file})
    }else{
      alert("Please select file less than 6 MB")
      e.target.value = null;
    }
    // setFormData({ ...formData, projectFile: file });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const compressedFile1 = await imageCompression(
    //   formData.projectFile,
    //   options
    // );
    console.log("ahmad====>");
    const image = await handleImageSelect(formData.projectFile);
    try {
      const data = await axios.post(
        "https://eazy-code-snippets-server.vercel.app/api/appointment/add-appointment",
        {
          userName: formData.userName,
          userEmail: formData.userEmail,
          userContact: formData.userContact,
          estimatedBudget: formData.estimatedBudget,
          completionDate: formData.completionDate,
          otherInfo: formData.otherInfo,
          applicationType: formData.applicationType,
          referenceLink: formData.referenceLink,
          projectStatus: formData.projectStatus,
          projectFile: image,
          productId:productId,
        }
      );

      console.log("dsds", data);
    } catch (error) {}
  };
  //image compressor
  // const options = {
  //   maxSizeMB: 1,
  //   maxWidthOrHeight: 1920,
  //   useWebWorker: true,
  // };
  const cloudName = "da6yuh11g";
  const uploadPreset = "g6k9owtj";

  const handleImageSelect = async (filename) => {
    const file = filename;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", "appointment");
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        formData
      ); // Changed the URL endpoint for image uploads

      return response.data.secure_url;
    } catch (error) {

      console.error("Error uploading image:", error);
alert("Please Choose file size less than 10MB")
      return "";
    }
  };
  return (
    <>
      <div class="dark:bg-gray-900">
        <div class="dark:bg-transparent">
          <div class="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div class="w-auto sm:w-auto lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 class="text-2xl mt-24 lg:mt-12 md:text-xl lg:text-3xl xl:text-5xl text-center text-gray-800 dark:text-white font-black leading-10">
                Book Your Appointment{" "}
                <span class="text-violet-800 dark:text-violet-500">
                  Now for Expert{" "}
                </span>
                Consultation and Solutions.
              </h1>
              <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-lg sm:text-md">
                Be the first to hunt.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-12 p-10 flex flex-col md:flex-row justify-between">
        <aside className="md:w-1/3">
          <div className="bg-gray-100 p-8 rounded">
            <h2 className="font-bold text-2xl">Instructions</h2>
            <ul className="list-disc mt-4 list-inside">
              <li>
                All users must provide a valid email address and password to
                create an account.
              </li>
              <li>
                Users must not use offensive, vulgar, or otherwise inappropriate
                language in their username or profile information.
              </li>
              <li>
                Users must not create multiple accounts for the same person.
              </li>
            </ul>
          </div>
        </aside>
        <form
          className="md:w-2/3 border-1 bg-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center  font-bold uppercase">
            Book an Appointment
          </div>

          <div className="flex grid-cols-1 justify-center mt-3 md:grid-cols-2 gap-8">
            <div className="py-4 px-6">
              <div className="flex justify-between gap-2">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    Email<span className="text-red-600">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="userEmail"
                    value={formData.userEmail}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    name="userContact"
                    value={formData.userContact}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="url"
                  >
                    Reference URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="url"
                    type="url"
                    name="referenceLink"
                    value={formData.referenceLink}
                    onChange={handleChange}
                    placeholder="https://xyz.com"
                  />
                </div>
                {/* <div className="mb-5">
                  <label
                    htmlFor="url"
                    className="mb-3 block text-base font-bold text-[#07074D]"
                  >
                    Reference Url
                  </label>
                  <input
                    type="url"
                    name="url"
                    id="url"
                    placeholder="https://abc@.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-sm text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div> */}
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-bold text-[#07074D]"
                    >
                      Completion Date<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      name="completionDate"
                      value={formData.completionDate}
                      onChange={handleChange}
                      id="date"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="price"
                      className="flex mb-3 block text-base font-bold text-[#07074D]"
                    >
                      Estimated Budget $
                    </label>
                    {/* <span className="flex">$</span> */}
                    <input
                      type="price"
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleChange}
                      id="price"
                      placeholder="$"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="service"
                >
                  Application Type<span className="text-red-600">*</span>
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="service"
                  name="applicationType"
                  value={formData.applicationType}
                  onChange={handleChange}
                >
                  <option value="">Select an application</option>
                  <option value="Web">Web</option>
                  <option value="Mobile">Mobile</option>
                </select>
              </div>
              {/* Additional dynamic field for Web or Mobile service */}
              {/* {formData.applicationType === "Web" || formData.applicationType === "Mobile" ? ( */}
              {/* <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="technology"
                  > */}
              {/* {formData.applicationType === "Web"
                      ? "Select Web Technology"
                      : "Select Mobile Technology"} */}
              {/* </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="technology"
                    name="technology"
                    value={additionalField}
                    onChange={(e) => setAdditionalField(e.target.value)}
                  >
                    <option value="">Select technology</option>
                    <option value="Web">Web</option>
                  <option value="Mobile">Mobile</option> */}
              {/* {formData.applicationType === "Web" && (
                      <>
                        <option value="React">React</option>
                        <option value="PHP">PHP</option>
                       
                    )}
                      </> */}
              {/* {formData.applicationType === "Mobile" && (
                      <>
                        <option value="Flutter">Flutter</option>
                        <option value="Flutter Flow">Flutter Flow</option>
                       
                    )}
                      </> \*/}
              {/* </select>
                </div> */}
              {/* ) : null} */}
              <div className="mb-5">
                <label
                  htmlFor="price"
                  className="flex mb-3 block text-base font-bold text-[#07074D]"
                >
                  Demo Project file
                </label>
                {/* <span className="flex">$</span> */}
                <input
                  type="file"
                  name="projectFile"
                  id="projectFile"
                  required
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.ppt,.pptx"
                  onChange={uploadFile}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />{" "}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="message"
                >
                  Additional Info
                </label>

                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="otherInfo"
                  value={formData.otherInfo}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Enter any additional information"
                ></textarea>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button
                  className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Appointment;
