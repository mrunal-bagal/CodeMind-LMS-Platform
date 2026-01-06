import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CountryCode from "../../../../data/countrycode.json";
import { apiConnector } from "../../../services/apiConnector";
import { contactusEndpoint } from "../../../services/apis";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    setLoading(true);

    try {
      const res = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      console.log("Email Response:", res);

      if (res.data.success) {
        toast.success("Message sent! Check your email for confirmation.");
        reset();
      } else {
        toast.error("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("ERROR WHILE CONTACTING US:", error.message);
      toast.error("An error occurred while sending the message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <form className="flex flex-col gap-7" onSubmit={handleSubmit(submitContactForm)}>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="firstname" className="lable-style">First Name</label>
            <input type="text" id="firstname" placeholder="Enter first name" className="form-style"
              {...register("firstname", { required: true })} />
            {errors.firstname && <span className="text-xs text-yellow-100">Please enter your name.</span>}
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="lastname" className="lable-style">Last Name</label>
            <input type="text" id="lastname" placeholder="Enter last name" className="form-style"
              {...register("lastname")} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="lable-style">Email Address</label>
          <input type="email" id="email" placeholder="Enter email address" className="form-style"
            {...register("email", { required: true })} />
          {errors.email && <span className="text-xs text-yellow-100">Please enter your email.</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phonenumber" className="lable-style">Phone Number</label>
          <div className="flex gap-5">
            <select className="form-style w-[81px]" {...register("countrycode", { required: true })}>
              {CountryCode.map((ele, i) => (
                <option key={i} value={ele.code}>{ele.code} - {ele.country}</option>
              ))}
            </select>
            <input type="number" id="phonenumber" placeholder="12345 67890" className="form-style w-[calc(100%-90px)]"
              {...register("phoneNo", {
                required: "Please enter your phone number.",
                maxLength: { value: 12, message: "Invalid Phone Number" },
                minLength: { value: 10, message: "Invalid Phone Number" },
              })} />
          </div>
          {errors.phoneNo && <span className="text-xs text-yellow-100">{errors.phoneNo.message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="lable-style">Message</label>
          <textarea id="message" placeholder="Enter your message here" className="form-style" rows="7"
            {...register("message", { required: true })} />
          {errors.message && <span className="text-xs text-yellow-100">Please enter your message.</span>}
        </div>

        <button disabled={loading} type="submit"
          className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black 
          shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] transition-all duration-200 
          hover:scale-95 hover:shadow-none disabled:bg-richblack-500 sm:text-[16px]`}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactUsForm;
