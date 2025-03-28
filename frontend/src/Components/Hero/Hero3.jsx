import { Parallax } from "react-parallax";
import edu4 from "../../assets/hero12.jpg";

function Hero3() {
  return (
    <section className="relative bg-white">
      <div className="relative w-full sm:min-h-[400px] md:h-[600px]">
        <Parallax
          bgImage={edu4}
          strength={700}
          className="w-full h-full"
          bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }} 
        >
          {/* Main Content Container */}
          <div className="container mx-auto px-6 py-16 md:px-12 lg:px-16 relative z-10 w-full">
            {/* Centered Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-10 md:px-20">
              <h1 className="font-custom text-black text-4xl md:text-5xl font-bold tracking-wide pb-6">
                About Arcite
              </h1>
              <p className="font-custom text-lg md:text-xl text-black leading-relaxed mt-2">
                ARCITE Educational Solutions Pvt Ltd stands as a beacon of innovation and excellence in the field of education, encompassing a diverse portfolio of institutions aimed at nurturing talent and fostering career growth. Established in 2015 by four enthusiastic youngsters driven by a passion for engineering, ARCITE has become a trusted name in the educational landscape.
              </p>
              <p className="font-custom text-lg md:text-xl text-black leading-relaxed mt-4">
                As an ISO-certified technical hub, we are dedicated to providing affordable education while maintaining uncompromising standards of quality and excellence. Under the ARCITE umbrella, institutions such as ARCITE School of Technical Education, ARCITE School of Media, ARCITE School of Data Science, ARCITE K12, and more strive to transform candidates into industry professionals.
              </p>
            </div>
          </div>
        </Parallax>

        {/* Full-width faded overlay that covers the entire section */}
        <div className="absolute inset-0 bg-gray-100 bg-opacity-20"></div>
      </div>
    </section>
  );
}

export default Hero3;
