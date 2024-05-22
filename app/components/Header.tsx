import React from "react";
import bg from "../../public/Updated Assets/TopHeaderImage@2x.png";
import Image from "next/image";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div
      className="flex flex-col justify-between items-center w-full"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        height: "678px",
        maxHeight: "678px",
        backgroundSize: "cover",
        borderBottom: "50px solid #225A2D",
      }}
    >
      <NavBar />

      <Image
        className="px-10"
        src="/Updated Assets/UtahGrownLogoWhiteBorder@2x_cropped.png"
        width={685}
        height={328}
        alt="Utah Grown"
        sizes="40vw"
        style={{
          marginBottom: "-40px",
        }}
      />
    </div>
  );
};

export default Header;
