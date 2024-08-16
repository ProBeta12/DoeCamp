import React from 'react';

function IntroducaoPag({ title, description }) {
    return (
        <section className="bg-[#F5F5F5] py-10 px-4 text-center md:max-w-[1200px] mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-[#263741] mb-4">{title}</h1>
            <p className="text-md md:text-xl text-[#263741]">
                {description}
            </p>
        </section>
    );
}

export default IntroducaoPag;
