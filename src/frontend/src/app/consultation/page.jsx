import React, { Fragment } from "react";
import { Navbar } from "../landing/_components/navbar";
import { Banner } from "./_components/banner";
import { Footer } from "../landing/_components/footer";

export const ConsultationPage = () => {
  const [message, setMessage] = React.useState("Hello, welcome to the consultation! Here, you will get personal guidance from AI to help you find and achieve your life goals. Enjoy a 100-day journey with daily challenges, reflection and support designed specifically for your development. Let's start your journey");
  const [state, setState] = React.useState(false);
  const [consultation, setConsultation] = React.useState(false);

  const handleReply = () => {
    setMessage("Enjoy a 100-day journey with daily challenges, reflection and support designed specifically for your development. Let's start your");
    setState(true);
  };

  const handleSetConsult = () => {
    setMessage("Token Not Enough... But i'm very happy to consult with you, have a nice day okay");
    setConsultation(true);
  }

  return (
    <Fragment>
      <Navbar />
      <main className="bg-black flex flex-col items-center font-sans w-full">
        <div className="w-full h-full flex flex-row gap-4 justify-center px-24 pt-24" style={{
                backgroundImage: "url(/images/bg-consultation.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
        }}>
          <img src="/images/consultation-char-girl.png" alt="bg-konsul" />
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-4xl font-bold">
              Livy Ur Path
            </h1>
            <div className="bg-white rounded-xl p-4 relative">
              <div className="absolute bottom-2 -left-1 w-4 h-4 bg-white rotate-45"></div>
              <p className="text-sm leading-relaxed">
                {message}
              </p>
              {state && !consultation && (
                <div className="flex flex-row gap-2 mt-4">
                <a
                  href="/articles/create"
                  className="bg-[#355580] text-black px-4 py-2 text-white text-sm font-semibold rounded-md"
                >
                  Create Article
                </a>
                <button 
                  className="bg-[#355580] text-black px-4 py-2 text-white text-sm font-semibold rounded-md"
                  onClick={handleSetConsult}
                >
                  Consultation Again
                </button>
                <a
                  href="/"
                  className="bg-[#888888] text-black px-4 py-2 text-white text-sm font-semibold rounded-md"
                >
                  Back To Home
                </a>
                </div>
              )}
              {state && consultation && (
                <div className="flex flex-row gap-2 mt-4">
                <button
                  className="bg-[#355580] text-black px-4 py-2 text-white text-sm font-semibold rounded-md"
                >
                  Buy Token
                </button>
                <a
                  href="/"
                  className="bg-[#888888] text-black px-4 py-2 text-white text-sm font-semibold rounded-md"
                >
                  Back To Home
                </a>
                </div>
              )}
            </div>
            {!state && (
              <div className="flex flex-row rounded-md overflow-hidden">
                <input type="text" className="bg-[#2F2F2F] text-white px-4 py-2 placeholder:text-white/25 w-full" placeholder="Tuliskan keluh kesah dirimu disini" />
                <button 
                  className="bg-[#355580] text-black px-4 py-2 text-white text-sm font-semibold"
                  onClick={handleReply}
                >
                  Balas
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </Fragment>
  );
};