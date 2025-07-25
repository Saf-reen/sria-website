import React, { useState, useEffect } from "react";

interface Country {
  name: string;
  code: string;
  dialCode: string;
}

interface FormData {
  inquiryType: string;
  message: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  country: string;
  phoneCountryCode: string;
  phoneNumber: string;
  agreeToPolicy: boolean;
}

const ContactForm: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [formData, setFormData] = useState<FormData>({
    inquiryType: "",
    message: "",
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    country: "",
    phoneCountryCode: "",
    phoneNumber: "",
    agreeToPolicy: false,
  });

  // Fetch countries from REST Countries API
  useEffect(() => {
    const fetchCountries = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2,idd"
        );
        const data = await response.json();

        const formattedCountries: Country[] = data
          .map((country: any) => ({
            name: country.name.common,
            code: country.cca2,
            dialCode: country.idd?.root
              ? `${country.idd.root}${country.idd.suffixes?.[0] || ""}`
              : "",
          }))
          .filter((country: Country) => country.dialCode)
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name));

        setCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
        // Fallback countries if API fails
        setCountries([
          { name: "United States", code: "US", dialCode: "+1" },
          { name: "United Kingdom", code: "GB", dialCode: "+44" },
          { name: "India", code: "IN", dialCode: "+91" },
          { name: "Canada", code: "CA", dialCode: "+1" },
          { name: "Australia", code: "AU", dialCode: "+61" },
        ]);
      }
    };

    fetchCountries();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async () => {
    if (!formData.agreeToPolicy) {
      alert("Please agree to the Privacy Policy and Terms of Service");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      alert(data.message);
    } catch (error) {
      alert("Failed to send message.");
    }
  };

  const inquiryOptions: string[] = [
    "General Inquiry",
    "Product Information",
    "Technical Support",
    "Partnership Opportunities",
    "Pricing Information",
    "Demo Request",
    "Other",
  ];

  return (
    <div className="bg-white  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Left Side - Contact Info (30%) */}
          <div className="lg:col-span-3 bg-white p-8  ">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Us Today
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are just a message away! Reach out to us for any inquiries,
              support, or collaboration opportunities. Our team is ready to
              assist you and provide the information you need.
            </p>
          </div>

          {/* Right Side - Form (70%) */}
          <div className="lg:col-span-7 bg-white p-8 ">
            <div className="space-y-6">
              {/* Inquiry Type Dropdown */}
              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  I am inquiring about *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  required
                >
                  <option value="">Select an option</option>
                  {inquiryOptions.map((option: string, index: number) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  placeholder="Please describe your inquiry..."
                  required
                />
              </div>

              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    required
                  />
                </div>
              </div>

              {/* Company and Business Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Business Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    required
                  />
                </div>
              </div>

              {/* Country and Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    required
                  >
                    <option value="">Select a country</option>
                    {countries.map((country: Country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <div className="flex">
                    <select
                      name="phoneCountryCode"
                      value={formData.phoneCountryCode}
                      onChange={handleInputChange}
                      className="px-3 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white border-r-0"
                      required
                    >
                      <option value="">Code</option>
                      {countries.map((country: Country) => (
                        <option
                          key={`phone-${country.code}`}
                          value={country.dialCode}
                        >
                          {country.dialCode} ({country.code})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToPolicy"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="agreeToPolicy"
                  className="ml-3 text-sm text-gray-600"
                >
                  By clicking submit, I agree to the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Terms of Service
                  </a>
                  . *
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
