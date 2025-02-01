import React from "react";

export const Consultation = () => {
  return (
    <>
      <section id="consultation" className="w-full max-w-8xl px-6 my-12">
        <div className="text-white items-start lg:items-center flex flex-col lg:flex-row gap-x-16 gap-y-6 mb-8">
          <h2 className="text-4xl lg:text-5xl font-semibold font-baim">
            Consultation
          </h2>
          <div className="text-lg lg:text-xl leading-loose">
            AI consultations to clarify and achieve your life goals with
            personalized guidance and actionable insights for growth.
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/konsultasi 2.png"
            alt="Preview Konsultasi"
            className="rounded-xl size-full"
            width="1060"
            height="531"
          />
        </div>
      </section>
    </>
  );
};
