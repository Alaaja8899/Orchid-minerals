import React from "react";

const DocumentLibrary = () => {
  return (
    <div className="relative bg-[#1B2A3A] py-12 px-8">
      <div className="absolute inset-0 bg-[#1B2A3A] h-full clip-path-custom"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-6">Document Library</h2>
        <p className="text-white text-lg leading-relaxed">
          We are dedicated to upholding our values and ethical principles, which serve as the foundation for corporate integrity. 
          We strive to ensure that all our stakeholders, from employees and suppliers to the host communities that we work with, 
          are treated with respect and dignity. Our commitment to corporate governance is an integral part of creating a culture 
          of trust and collaboration that enables us to achieve success together and conduct our business with greater purpose.
        </p>
      </div>
    </div>
  );
};

export default DocumentLibrary;
