import React, { Fragment } from "react";
import { Navbar } from "../landing/_components/navbar";
import { Footer } from "../landing/_components/footer";
import { ChatBox } from "./_components/chatbox";

export const ConsultationPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="z-0 h-[85dvh] bg-[#212121]">
        <img
          src="/images/bg-consultation.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <img
          src="/images/consultation-char-girl.png"
          alt=""
          className="absolute bottom-0 left-[160px]"
        />
      </div>
      <main>
        <ChatBox />
      </main>
      <Footer />
    </Fragment>
  );
};
