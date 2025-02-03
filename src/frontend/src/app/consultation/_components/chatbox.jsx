import React, { Fragment } from "react";
// import { Navbar } from "../landing/_components/navbar";
// import { Banner } from "./_components/banner";
// import { Footer } from "../landing/_components/footer";

export const ChatBox = () => {
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
      <main className="bg-black flex flex-col items-center font-sans w-full">
        <div className="w-full h-full flex flex-row gap-4 justify-center px-24 pt-24" style={{
                backgroundImage: "url(/images/bg-konsul.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
        }}>
          <img src="/images/lawine-konsul.png" alt="bg-konsul" />
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
    </Fragment>
  );
};

// export const ChatBox = () => {
//   return (
//     <div className="absolute top-[300px] lg:left-[750px]">
//       <div className="mb-4 text-xl text-white">Livy ur path</div>
//       <div className="relative z-20 w-[650px] rounded-lg bg-[#eeeeee] p-6 text-xl leading-loose">
//         Hello, welcome to the consultation! Here, you will get personal guidance
//         from AI to help you find and achieve your life goals. Enjoy a 100-day
//         journey with daily challenges, reflection and support designed
//         specifically for your development. Let's start your journey{" "}
//       </div>

//       <div className="relative bottom-[73px] -left-[50px] z-10">
//         <svg
//           width="93"
//           height="79"
//           viewBox="0 0 93 79"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M3.98975 78.6817C1.52196 78.8299 -0.0558351 76.0971 1.30642 74.0341L48.6815 2.28686C49.9103 0.42586 52.668 0.5086 53.7831 2.43992L92.2304 69.0327C93.3455 70.964 92.0383 73.3936 89.8122 73.5273L3.98975 78.6817Z"
//             fill="#EEEEEE"
//           />
//         </svg>
//       </div>

//       <div className="relative">
//         <button className="absolute top-[-70px] right-0 mt-6 mb-2 flex justify-center gap-2 rounded-lg bg-[#1E4272] px-6 py-3 align-middle text-white hover:cursor-pointer hover:bg-[#275591] active:scale-95">
//           Balas
//         </button>
//       </div>
//     </div>
//   );
// };
