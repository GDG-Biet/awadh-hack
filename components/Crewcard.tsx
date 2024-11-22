import React from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function Crewcard() {
  return (
<<<<<<< HEAD
    //*https://drive.google.com/file/d/1jB4cDFvrRAdI2pZBbbxp9PQSpTqZIV3l/view?usp=drive_link
    //https://drive.google.com/file/d/1hgpJ2O7KKqr8cTLV3gs_Oc8_ooBeqb4R/view?usp=drive_link*//
    <div className="flex justify-center py-4">
=======
    <div className="flex justify-center px-4 py-4">
>>>>>>> 104fa4dfb909c3cf267944ab9d736277dff38fa6
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-screen-lg ">
        {/* Kaif*/}
        <div className="w-full bg-gray-200 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          {/* Profile Image */}
          <div className="w-auto h-auto rounded-lg overflow-hidden mb-4 border-4 border-gray-200">
            <Image
              src="https://drive.google.com/uc?export=view&id=1jB4cDFvrRAdI2pZBbbxp9PQSpTqZIV3l"
              width={260}
              height={240}
              alt="Profile"
              className=""
            />
          </div>

          {/* Name and Role */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Kaif</h2>
            <h3 className="text-gray-500">Lead-Organizer</h3>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-3xl hover:scale-105 transition-transform duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="text-blue-500 text-3xl hover:scale-105 transition-transform duration-200" />
            </a>
          </div>
        </div>


        <div className="h-auto bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          {/* Profile Image */}
          <div className="w-auto h-auto rounded-lg overflow-hidden mb-4 border-4 border-gray-200">
            <Image
              src="https://drive.google.com/uc?export=view&id=1x4BD57h0kODOQOcqd9voNvE2cLe4wyvO"
              width={180}
              height={180}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

        
          {/* Amardeep and Outreach */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Amardeep Rao</h2>
            <h3 className="text-gray-500">Organizer</h3>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-3xl hover:scale-105 transition-transform duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="text-blue-500 text-3xl hover:scale-105 transition-transform duration-200" />
            </a>
          </div>
        </div>



        <div className="w-[320px] bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          {/* Profile Image */}
          <div className="w-auto h-auto rounded-lg overflow-hidden mb-4 border-4 border-gray-200">
            <Image
              src="https://drive.google.com/uc?export=view&id=10g9febhj4uLO0giRrM0PUztfxO7vyrDF"
              width={180}
              height={180}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name and Role */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Humaira Hashmi</h2>
            <h3 className="text-gray-500">Organizer</h3>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-3xl hover:scale-105 transition-transform duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="text-blue-500 text-3xl hover:scale-105 transition-transform duration-200" />
            </a>
          </div>
        </div>


        <div className="w-[320px] bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          {/* Profile Image */}
          <div className="w-auto h-auto rounded-lg overflow-hidden mb-4 border-4 border-gray-200">
            <Image
              src="https://drive.google.com/uc?export=view&id=1hgpJ2O7KKqr8cTLV3gs_Oc8_ooBeqb4R"
              width={180}
              height={180}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name and Role */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Shivansh Saxena</h2>
            <h3 className="text-gray-500">Organizer</h3>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-3xl hover:scale-105 transition-transform duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="text-blue-500 text-3xl hover:scale-105 transition-transform duration-200" />
            </a>
          </div>
        </div>


        <div className="w-[320px] bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          {/* Profile Image */}
          <div className="w-auto h-auto rounded-lg overflow-hidden mb-4 border-4 border-gray-200">
            <Image
              src="https://drive.google.com/uc?export=view&id=1hgpJ2O7KKqr8cTLV3gs_Oc8_ooBeqb4R"
              width={180}
              height={180}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name and Role */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Vikasdeep Sharma</h2>
            <h3 className="text-gray-500">Organizer</h3>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-3xl hover:scale-105 transition-transform duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="text-blue-500 text-3xl hover:scale-105 transition-transform duration-200" />
            </a>
          </div>
        </div>


        <div className="w-[320px] bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          {/* Profile Image */}
          <div className="w-auto h-auto rounded-lg overflow-hidden mb-4 border-4 border-gray-200">
            <Image
              src="https://drive.google.com/uc?export=view&id=1Uer0wni390L3LFVQ-YglXx9HRS1C-Z6p"
              width={180}
              height={180}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name and Role */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Nitish Singh</h2>
            <h3 className="text-gray-500">Organizer</h3>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-3xl hover:scale-105 transition-transform duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/kaif9999" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="text-blue-500 text-3xl hover:scale-105 transition-transform duration-200" />
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
}
