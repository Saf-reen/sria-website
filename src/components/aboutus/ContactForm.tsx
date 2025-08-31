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

interface FormErrors {
  inquiryType?: string;
  message?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  country?: string;
  phoneCountryCode?: string;
  phoneNumber?: string;
  agreeToPolicy?: string;
}

const ContactForm: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string>("");
  const [submitSuccess, setSubmitSuccess] = useState<string>("");
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

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess("");
      }, 5000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

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

    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone number validation function
  const isValidPhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-\+\(\)]{7,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  // Validation function
  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    // Required field validations
    if (!formData.inquiryType.trim()) {
      errors.inquiryType = "This field is required";
    }

    if (!formData.message.trim()) {
      errors.message = "This field is required";
    }

    if (!formData.firstName.trim()) {
      errors.firstName = "This field is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "This field is required";
    }

    if (!formData.company.trim()) {
      errors.company = "This field is required";
    }

    if (!formData.email.trim()) {
      errors.email = "This field is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.country.trim()) {
      errors.country = "This field is required";
    }

    if (!formData.phoneCountryCode.trim()) {
      errors.phoneCountryCode = "This field is required";
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "This field is required";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formData.agreeToPolicy) {
      errors.agreeToPolicy =
        "You must agree to the Privacy Policy and Terms of Service";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
  // Validate form before submission
  const isValid = validateForm();
  if (!isValid) {
    console.log("Form is invalid. Errors:", formErrors);
    return; // Don't proceed if not valid
  }
  setLoading(true);
  try {
    // Comment out the actual fetch call since there's no backend
    /*
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      setSubmitSuccess("Message sent successfully!");
      alert("Message sent successfully!");
      // Reset form on success
      setFormData({
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
      setFormErrors({});
    } else {
      setSubmitError(data.message || "Failed to send message.");
    }
    */
    // Simulate a successful submission
    setSubmitSuccess("Message sent successfully!");
    alert("Message sent successfully!");
    // Reset form on success
    setFormData({
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
    setFormErrors({});
  } catch (error) {
    setSubmitError("Failed to send message. Please try again.");
  } finally {
    setLoading(false);
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

  // Helper function to get input class names with error styling
  const getInputClassName = (fieldName: keyof FormErrors): string => {
    const baseClass =
      "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white";
    const errorClass = "border-red-500";
    const normalClass = "border-gray-300";

    return `${baseClass} ${formErrors[fieldName] ? errorClass : normalClass}`;
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Left Side - Contact Info (30%) */}
          <div className="lg:col-span-3 bg-white p-8">
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
          <div className="lg:col-span-7 bg-white p-8">
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
                  className={getInputClassName("inquiryType")}
                  required
                >
                  <option value="">Select an option</option>
                  {inquiryOptions.map((option: string, index: number) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formErrors.inquiryType && (
                  <p className="mt-1 text-sm text-red-600">
                    {formErrors.inquiryType}
                  </p>
                )}
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
                  className={getInputClassName("message")}
                  placeholder="Please describe your inquiry..."
                  required
                />
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {formErrors.message}
                  </p>
                )}
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
                    className={getInputClassName("firstName")}
                    required
                  />
                  {formErrors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.firstName}
                    </p>
                  )}
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
                    className={getInputClassName("lastName")}
                    required
                  />
                  {formErrors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.lastName}
                    </p>
                  )}
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
                    className={getInputClassName("company")}
                    required
                  />
                  {formErrors.company && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.company}
                    </p>
                  )}
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
                    className={getInputClassName("email")}
                    required
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.email}
                    </p>
                  )}
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
                    className={getInputClassName("country")}
                    required
                  >
                    <option value="">Select a country</option>
                    {countries.map((country: Country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  {formErrors.country && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.country}
                    </p>
                  )}
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
                      className={`px-3 py-3 border rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white border-r-0 ${
                        formErrors.phoneCountryCode
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
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
                      className={`flex-1 px-4 py-3 border rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white ${
                        formErrors.phoneNumber
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  {(formErrors.phoneCountryCode || formErrors.phoneNumber) && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.phoneCountryCode || formErrors.phoneNumber}
                    </p>
                  )}
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
                  className={`mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                    formErrors.agreeToPolicy ? "border-red-500" : ""
                  }`}
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
              {formErrors.agreeToPolicy && (
                <p className="text-sm text-red-600">
                  {formErrors.agreeToPolicy}
                </p>
              )}
              {submitError && (
                <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                  {submitError}
                </div>
              )}
              {submitSuccess && (
                <div className="p-4 mb-4 text-sm text-green-700 rounded-lg" role="alert">
                  {submitSuccess}
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`w-full py-2 px-2 rounded-lg font-semibold text-lg transition duration-200 ${
                    loading
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  }`}
                >
                  {loading ? "Submitting..." : "Submit"}
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
