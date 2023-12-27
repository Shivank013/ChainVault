import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { IoCloseSharp } from "react-icons/io5";
import { RxCopy } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

const Share = () => {
  const { showLink, setShowshare,result } = useContext(AppContext);
  const [isCopied, setIsCopied] = useState(false);

  const close = async () => {
    setShowshare(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(showLink);
      setIsCopied(true);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const shareOnFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(showLink)}`;
    window.open(facebookShareUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(showLink)}`;
    window.open(twitterShareUrl, "_blank");
  };

  const shareOnLinkedIn = () => {
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(showLink)}`;
    window.open(linkedInShareUrl, "_blank");
  };

  const shareOnGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${result.email}&su=My%20Certificate&body=Certificate%20Link%0D${encodeURIComponent(showLink)}`;
    window.open(gmailUrl, '_blank');
  };

  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="flex flex-col bg-white w-2/5 border-slate-200 rounded-xl border-2 text-xl z-10 relative">
        <div className=" flex w-full flex-row-reverse">
          <button onClick={close} className="text-white text-2xl border-2 border-red-500 m-2">
            {<IoCloseSharp className=" text-red-500" />}
          </button>
        </div>
        <div className=" p-2 mx-6 my-4 flex justify-between bg-slate-200 relative">
          <span>{showLink && showLink.length > 40 ? `${showLink.slice(0, 40)}...` : showLink}</span>
          <button className="text-2xl px-2 relative" onClick={copyToClipboard}>
            {<RxCopy />}
            {isCopied && (
              <div className="absolute top-[-30px] left-[-50%] transform translate-x-[-50%] bg-green-500 text-white p-1 rounded">
                Copied!
              </div>
            )}
          </button>
        </div>
        <div className=" flex justify-between mx-6 my-4">
          <button
            className="flex font-robo border-2 border-slate-300 rounded-l w-[40%] py-1 justify-center items-center"
            onClick={shareOnFacebook}
          >
            {<FaFacebookF className=" text-[#316FF6] mr-2" />} Facebook
          </button>
          <button
            className="flex font-robo border-2 border-slate-300 rounded-l w-[40%] py-1 justify-center items-center"
            onClick={shareOnTwitter}
          >
            {<FaTwitter className=" text-[#1DA1F2] mr-2" />} Twitter
          </button>
        </div>
        <div className=" flex justify-between mx-6 my-4">
          <button
            className="flex font-robo border-2 border-slate-300 rounded-l w-[40%] py-1 justify-center items-center"
            onClick={shareOnLinkedIn}
          >
            {<FaLinkedinIn className=" text-[#0077b5] mr-2" />} LinkedIn
          </button>
          <button
            className="flex font-robo border-2 border-slate-300 rounded-l w-[40%] py-1 justify-center items-center"
            onClick={shareOnGmail}
          >
          {<MdOutlineAttachEmail className=" text-[#bb001b] mr-2" />} Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
