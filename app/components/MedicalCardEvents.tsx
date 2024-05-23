import React from "react";
import "./MedicalCardEvents.css";

const MedicalCardEvents = () => {
  return (
    <>
      <div className="eventCard container mx-auto max-w-screen-lg h-auto flex flex-row justify-between items-center gap-x-16 px-10 py-5">
        <div className="text-center">
          <h3>Downtown SLC</h3>
        </div>
        <div className="w-1/2">
          <h2>
            Tuesday, October 3<sup>rd</sup> 2023
          </h2>
          <h3>9:00 am - 2:00 pm</h3>
          <h3>New Patients and Revewals</h3>
        </div>
        <div>
          <button className="text-xl">Book Time</button>
        </div>
      </div>
    </>
  );
};

export default MedicalCardEvents;
