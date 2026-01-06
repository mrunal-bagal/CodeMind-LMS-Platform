import React from "react";

const Footer = () => {
  return (
    <div className="bg-richblack-800 mx-7 rounded-3xl mb-4 py-5 text-center text-richblack-400 w-11/12 max-w-maxContent mx-auto">
      <span>© {new Date().getFullYear()} CodeMind. All rights reserved.</span>
    </div>
  );
};

export default Footer;