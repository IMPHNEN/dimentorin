import React from "react";

export const Banner = () => {
    return (
        <section
            className="flex flex-col items-center justify-center min-h-[40vh] bg-black text-white w-full px-6 py-12"
            style={{
                backgroundImage: "url(/assets/images/article-list-bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100%",
            }}
        >
            <h1 className="text-6xl capitalize text-3xl lg:text-5xl font-bold font-baim">
                article
            </h1>
            <p className="mt-8 text-center text-xl lg:text-2xl max-w-3xl font-sans text-[#cfcfcf]">
                This article is designed to help maximize your potential within 100 days. Through daily consultations, you’ll receive guidance tailored to your journey.
            </p>
        </section>
    );
};
