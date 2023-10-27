const ServicesSection = () => {
  return (
    <div className="flex flex-col">
      <section className="border w-full max-w-[1800px] flex flex-col md:flex-row gap-12 self-center mt-10 h-[50vh] p-10">
        <div className="border border-blue-500 h-full w-full md:w-[50%]"></div>
        <div className="border border-blue-500 h-full w-full md:w-[50%]"></div>
      </section>

      <section className="border w-full max-w-[1800px] flex flex-col md:flex-row gap-12 self-center mt-10 h-[40vh] p-10">
        <div className="border border-blue-500 h-full w-full md:w-[50%]"></div>
        <div className="border border-blue-500 h-full w-full md:w-[50%]"></div>
      </section>
    </div>
  );
};

export default ServicesSection;
