import React from "react";
import Link from "next/link";

function PagesCard({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}) {
  return (
    <section
      className="bg-cover bg-center bg-[#F5F5F5] max-w-full md:max-w-[1200px] mx-auto flex flex-col items-center text-center p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col justify-center flex-grow mt-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#263741] font-bold mb-4">
          {title}
        </h1>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-[#263741] ">
          {description}
        </p>
      </div>

      <div className="mt-12">
        <Link href={buttonLink} passHref>
          <button className="bg-[#f8941c] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#e87a1d] transition duration-300">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
}

export default PagesCard;
