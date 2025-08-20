import SocalMedia from "./socal-media";
import MyName from "./myName";
import HeroImage from "./heroimage";

function Hero() {
  return (
    <div
      id="home"
      className="hero md:pt-40 pt-20 flex md:flex-row flex-col-reverse items-center justify-center  "
    >
      <SocalMedia />
      <MyName />
      <HeroImage />
    </div>
  );
}
export default Hero;
