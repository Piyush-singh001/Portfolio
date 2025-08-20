function HeroImage() {
  return (
    <div className="md:flex w-2/5 md:p-12 flex flex-col items-center justify-center">
      <div className=" w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-xl">
        <img
          src="/images/heroImage.png"
          className="md:grayscale rounded-xl hover:grayscale-0 transition duration-500"
          alt="Black and white image"
        />
      </div>
    </div>
  );
}

export default HeroImage;
