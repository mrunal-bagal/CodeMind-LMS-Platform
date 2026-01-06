import { useEffect } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Img from './../../common/Img';

function Template({ title, description1, description2, image, formType }) {

  useEffect(() => {
    if (formType === "login") {
      document.body.style.overflowY = "hidden";  // Remove vertical scrollbar
    } else {
      document.body.style.overflowY = "auto";  // Restore vertical scrolling
    }

    if (formType === "signup") {
      document.body.style.overflowX = "hidden";  // Remove horizontal scrollbar
    } 
    // else {
    //   document.body.style.overflowX = "auto";  // Restore horizontal scrolling
    // }

    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "auto";  // Reset styles on unmount
    };
  }, [formType]);

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center w-full overflow-hidden">
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
        
        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
            {title}
          </h1>
          <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
            <span className="text-richblack-100">{description1}</span>{" "}
            <span className="font-edu-sa font-bold italic text-blue-100">
              {description2}
            </span>
          </p>
          {formType === "signup" ? <SignupForm /> : <LoginForm />}
        </div>

        <div className="relative max-w-[500px] h-auto flex justify-center items-center">
          <Img
            src={image}
            alt={formType}
            className="w-full max-w-[90%] md:max-w-[100%] h-auto"
          />
        </div>

      </div>
    </div>
  );
}

export default Template;
