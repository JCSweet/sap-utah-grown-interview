import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="footer" style={{ borderTop: "3px solid #103c00" }}>
      <div className="container mx-auto max-w-screen-lg flex flex-row gap-x-10 lg:items-end lg:justify-start items-center justify-center px-5 lg:px-0 py-5">
        <div className="w-6/12 lg:w-3/12">
          <Image
            src="/UtahGrownLogo-Green@2x.png"
            width={256}
            height={114}
            alt="Utah Grown"
            sizes="20vw"
          />
        </div>
        <div className="w-6/12 lg:w-5/12">
          <p className="footerGreenCopy">Utah&apos;s Cannabis Community</p>
        </div>
      </div>
      <div style={{ backgroundColor: "#225A2D", height: "120px" }}>
        <div className="footerWhiteCopy container mx-auto max-w-screen-lg flex flex-col sm:flex-row items-start justify-center lg:justify-end gap-x-10 px-5 py-2">
          <p>©2023 All Rights Reserved</p>
          <p>
            <Link href="#">Terms and Conditions</Link>
          </p>
          <p>
            <Link href="#">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
