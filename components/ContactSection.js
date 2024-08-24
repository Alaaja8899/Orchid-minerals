import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      {/* Contact Header */}
      <div className="relative bg-mainColor text-4xl font-bold p-6">
        <div className="absolute inset-0 bg-mainColor transform skew-x-12" />
        <h2 className="relative z-10">Contact</h2>
      </div>

      {/* Office Locations */}
      <div className="mt-8">
        <h3 className="text-3xl font-bold mb-6">Our Offices:</h3>
        <div className="flex justify-between">
          {/* Vancouver Office */}
          <div className="space-y-2">
            <h4 className="text-2xl font-semibold">Vancouver</h4>
            <p>606-999 Canada Place<br />Vancouver, BC<br />Canada V6C3E1</p>
            <p>Phone: +1-604-688-6630</p>
            <p>Fax: +1-604-682-2060</p>
            <div className="h-1 bg-mainColor w-16 mt-2"></div>
          </div>
          {/* South Africa Office */}
          <div className="space-y-2">
            <h4 className="text-2xl font-semibold">South Africa</h4>
            <p>82 Maude Street,<br />Second Floor Sandton,<br />South Africa, 2146</p>
            <p>Phone: +27-11-088-4300</p>
            <p>Fax: +27-86-675-1836</p>
            <div className="h-1 bg-mainColor w-16 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
