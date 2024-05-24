import axios from "axios";
import React, { useState } from "react";

const Hiring = () => {
  const [hiringData, setHiringData] = useState({
    userName: "",
    userEmail: "",
    userContact: "",
    expectedSalary: "",
    location: "",
    jobTitle: "",
    skills: "",
    resumeFile: "",
  });
  const handleChange = (e) => {
    setHiringData({ ...hiringData, [e.target.name]: e.target.value });
  };
  // const handleUpload = (e) => {
  //   const file = e.target.file[0];
  //   setHiringData({ ...hiringData, resumeFile: file });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resume = await handleResumeSelect(hiringData.resumeFile);
    try {
      const data = await axios.post(
        "https://eazy-code-snippets-server.vercel.app/api/career/add-career",
        {
          userName: hiringData.userName,
          userEmail: hiringData.userEmail,
          userContact: hiringData.userContact,
          expectedSalary: hiringData.expectedSalary,
          location: hiringData.location,
          CvFile: hiringData.CvFile,
          jobTitle: hiringData.jobTitle,
          skills: hiringData.skills,
          resumeFile: resume,
        }
      );
      console.log("data===Hiring>>", data);
    } catch (error) {
      console.log("Hiringerror", error);
    }
  };
  const cloudName = "da6yuh11g";
  const uploadPreset = "g6k9owtj";
  const handleResumeSelect = async (filename) => {
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
      alert("Please Choose file size less than 10MB");
      return "";
    }
  };
  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fileSizeInBytes = file.size;
    const fileSizeInKilobytes = fileSizeInBytes / 1024; // Convert bytes to KB
    const fileSizeInMegabytes = fileSizeInKilobytes / 1024; // Convert KB to MB
    console.log("File size:", fileSizeInMegabytes.toFixed(2), "MB");
    if (fileSizeInMegabytes < 6) {
      setHiringData({ ...hiringData, projectFile: file });
    } else {
      alert("Please select file less than 6 MB");
      e.target.value = null;
    }
    // setFormData({ ...formData, projectFile: file });
  };
  return (
    <>
      <div class="bg-gray-700">
        <div class="dark:bg-transparent">
          <div class="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div class="w-auto sm:w-auto lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 class="text-2xl mt-24 lg:mt-12 md:text-xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
                Let's get connect{" "}
                <span class="text-violet-800 dark:text-violet-500">
                  Explore{" "}
                </span>
                our Products.
              </h1>
              <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-lg sm:text-md">
                Find Our Latest Products.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-auto flex items-center justify-center mt-20 lg:m-12 flex-col p-8 rounded-3xl dark:border bg-[#24282d66] dark:border-[#000] dark:bg-[#E7E8EA]"
        id="apply"
      >
        <h5 className="text-white text-center py-4 dark:text-black text-2xl sm:text-[40px]">
          Apply Now
        </h5>
        <form className="mt-4 w-full" onSubmit={handleSubmit}>
          <div className="w-full flex items-center justify-center flex-wrap md:flex-nowrap gap-0 md:gap-8 text-center mt-3">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <p className="paragraf3 text-primary-50 mb-2 dark:text-black text-left">
                Full name
              </p>
              <input
                id="firstName"
                placeholder="Enter your full name"
                autoComplete="given-name"
                className="bg-primary-900 block w-full px-4 py-3 rounded-[10px] shadow-sm placeholder-primary-220 text-primary-220 border-[2px] border-black bg-[#272727] dark:bg-[#fff] border-none"
                type="text"
                name="userName"
                value={hiringData.userName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="paragraf3 text-primary-50 mb-2 dark:text-black text-left">
                E-mail
              </p>
              <input
                placeholder="Email Address"
                aria-invalid="false"
                className="bg-primary-900 block w-full px-4 py-3 rounded-[10px] shadow-sm placeholder-primary-220 text-primary-220 border-[2px] border-black bg-[#272727] dark:bg-[#fff] border-none"
                aria-describedby="phone-optional"
                name="userEmail"
                value={hiringData.userEmail}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <div className="w-full flex items-center justify-center flex-wrap md:flex-nowrap gap-0 md:gap-8 text-center mt-3">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <p className="paragraf3 text-primary-50 mb-2 dark:text-black text-left">
                Linkedin Profile *
              </p>
              <input
                id="linkedinProfile"
                placeholder="https://www.linkedin.com/in/yourname"
                autoComplete="given-name"
                className="bg-primary-900 block w-full px-4 py-3 rounded-[10px] shadow-sm placeholder-primary-220 text-primary-220 border-[2px] border-black bg-[#272727] dark:bg-[#fff] border-none"
                type="text"
                name="linkedinProfile"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="paragraf3 text-primary-50 mb-2 dark:text-black text-left">
                Phone *
              </p>
              <div className="react-tel-input" style={{ maxWidth: "100%" }}>
                <input
                  className="form-control"
                  placeholder="1 (702) 123-4567"
                  type="tel"
                  name="userContact"
                  value={hiringData.userContact}
                  onChange={handleChange}
                  style={{
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px 16px 20px 4rem",
                    fontSize: "18px",
                    width: "100%",
                    minHeight: "50.2px",
                    borderRadius: "10px",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                />
                <div
                  className="flag-dropdown"
                  style={{
                    position: "absolute",
                    fontSize: "1rem",
                    top: "0px",
                    left: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "100px",
                    width: "50px",
                    height: "50px",
                    border: "2px solid transparent",
                    borderRadius: "50px",
                    backgroundColor: "transparent",
                    zIndex: "100",
                    transition: "background-color 0.3s ease 0s",
                  }}
                >
                  <div
                    className="selected-flag"
                    title="Pakistan: + 92"
                    tabIndex="0"
                    role="button"
                    aria-haspopup="listbox"
                  >
                    <div className="flag pk">
                      <div className="arrow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="w-full flex items-center justify-center flex-wrap md:flex-nowrap gap-0 md:gap-8 text-center mt-3">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <p className="paragraf3 text-primary-50 mb-2 dark:text-black text-left">
                Expected Salary In PKR
              </p>
              <input
                id="salaryRange"
                placeholder="Ex 1234"
                autoComplete="given-name"
                className="bg-primary-900 block w-full px-4 py-3 rounded-[10px] shadow-sm placeholder-primary-220 text-primary-220 border-[2px] border-black bg-[#272727] dark:bg-[#fff] border-none"
                type="text"
                onChange={handleChange}
                value={hiringData.expectedSalary}
                name="expectedSalary"
              />
            </div>
            {/* <div className="w-full md:w-1/2">
              <p className="paragraf3 text-primary-50 mb-2 dark:text-black text-left">
                Experience
              </p>
              <select
                name="experience"
                className="bg-primary-900 block w-full px-4 py-3 rounded-[10px] shadow-sm placeholder-primary-220 text-primary-220 border-[2px] border-black bg-[#272727] dark:bg-[#fff] border-none"
                aria-describedby="exp-optional"
              >
                <option value="1 Year Experience" selected>
                  1 Year Experience
                </option>
                <option value="2 Year Experience">2 Year Experience</option>
                <option value="3 Year Experience">3 Year Experience</option>
                <option value="4 Year Experience">4 Year Experience</option>
                <option value="5 Year Experience">others</option>
              </select>
            </div> */}
          </div>
          <div className="py-4">
            <p className="paragraf3 text-primary-50 mb-2 dark:text-black text-left">
              Your Location * (Must be Willing to Relocate to Faisalabad)
            </p>
            <div className="hover:cursor-pointer bg-[#272727] dark:bg-white text-lg text-left w-full rounded-[10px] shadow-sm placeholder-white text-white dark:text-black font-medium">
              <input
                id="location"
                placeholder="Enter Your City name"
                autoComplete="given-name"
                className="bg-primary-900 block w-full px-4 py-3 rounded-[10px] shadow-sm placeholder-primary-220 text-primary-220 border-[2px] border-black bg-[#272727] dark:bg-[#fff] border-none"
                name="location"
                value={hiringData.location}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="py-4">
            <p className="paragraf3 text-primary-50 mb-2 dark:text-black text-left">
              Select a Job *
            </p>
            <select
              name="jobTitle"
              value={hiringData.jobTitle}
              onChange={handleChange}
              // onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="hover:cursor-pointer py-2.5 bg-[#272727] dark:bg-white text-lg text-left w-full rounded-[10px] shadow-sm placeholder-white text-white dark:text-black font-medium"
            >
              <option value="Select a job title">Select a job title</option>
              <option value="Job 1">Front end</option>
              <option value="Job 2">Backend</option>
              <option value="Job 3">Full Stack</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="w-full flex items-center justify-center flex-wrap md:flex-nowrap gap-0 md:gap-8 text-center mt-3">
            <div className="w-full mb-4 md:mb-0">
              <p className="paragraf3 text-primary-50 mb-2 dark:text-black text-left">
                Highlight Your Skills
              </p>
              <textarea
                name="skills"
                id="skills"
                value={hiringData.skills}
                onChange={handleChange}
                placeholder="i.e node.js, react.js etc."
                autoComplete="given-name"
                className="bg-primary-900 block w-full px-4 py-3 rounded-[10px] shadow-sm placeholder-primary-220 text-primary-220 border-[2px] border-black bg-[#272727] dark:bg-[#fff] border-none"
              ></textarea>

              <div className="py-4">
                <p className="paragraf3 text-primary-50 mb-2 dark:text-black text-left">
                  Place your Cv *
                </p>
                <div className="flex justify-center bg-[#272727] dark:bg-[#fff] w-full pb-5 px-4 transition bg-primary-900 rounded-md appearance-none border-dashed border-2 focus:outline-none border-transparent">
                  <span className="flex items-center justify-center flex-col mt-10">
                    <span className="text-primary-50 mb-2 dark:text-black text-left font-commissioner font-medium text-xl">
                      Click to upload files, or drag &amp; drop files here
                      <label
                        htmlFor="resumeFile"
                        className="text-blue-500 pl-2 cursor-pointer"
                      >
                        browse
                      </label>
                    </span>
                    <div className="pb-3 pt-4 text-primary-50 mb-2 dark:text-black text-left font-commissioner font-medium lg flex justify-center w-min">
                      <input
                        className="w-60 hidden"
                        accept=".png , .jpg , .doc, .pdf, .doc, .docx,"
                        id="resumeFile"
                        type="file"
                        name="resumeFile"
                        onChange={uploadFile}
                      />
                      <div className="w-full"></div>
                    </div>
                    <div className="pt-3">
                      <span className="text-white text-lg">
                        (CV, Maximum file size is 4 mb)
                      </span>
                    </div>
                  </span>
                </div>
              </div>
              <div className="text-left">{hiringData.resume}</div>
              <div>
                <div className="flex justify-center flex-col items-center lg:justify-start mt-8">
                  <button className="w-[300px] bg-gradient-to-r from-blue-400 to-purple-400 p-3 rounded-full justify-center flex gap-2 text-white disabled:bg-gray-600">
                    <h6>Submit</h6>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="hidden text-primary-50"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z"
                      ></path>
                    </svg>
                  </button>
                  <p className="text-white dark:text-gray-500 mt-6">
                    By clicking this button you agree to share your data with
                    NetixSol. Information will be used for communication
                    purposes only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Hiring;
