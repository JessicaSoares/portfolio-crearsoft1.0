import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4A87CE]" />
          <div className="w-1 sm:h-80 h-40 gradient bg-[#4A87CE]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Somos a <span className="text-[#4A87CE]">CrearSoft   </span><ComputersCanvas/>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desenvolvemos soluções em tecnologia para seu negócio<br className="sm:block hidden" />
            de aplicação Web até Inteligência artificial.
          </p>
        </div>
      </div>
      

   
    
    </section>
  );
};

export default Hero;
