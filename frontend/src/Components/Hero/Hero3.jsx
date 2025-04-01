import { Parallax } from "react-parallax";
import edu4 from "../../assets/hero12.jpg";

function Hero3() {
  return (
    <section className="relative w-full">
      <Parallax
        bgImage={edu4}
        strength={500} // Adjust strength for stronger/weaker effect
        bgImageStyle={{ objectFit: "cover", width: "100%", height: "100vh" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-50"></div>

        {/* Main Content */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 py-16 md:py-24 lg:py-32">
          <h1 className="text-teal-700 text-4xl md:text-5xl font-bold tracking-wide pb-6">
            About Arcite
          </h1>

          {/* Newspaper-style text container */}
          <div className="w-full max-w-[800px] text-justify space-y-6">
            <p className="text-lg md:text-xl text-black leading-relaxed">
              Arcite Technical Education Solutions Pvt Ltd stands as a beacon of innovation and excellence in the field of education, 
              encompassing a diverse portfolio of institutions aimed at nurturing talent and fostering career growth. Established 
              in 2015 by four enthusiastic youngsters driven by a passion for engineering, Arcite has become a trusted name in the 
              educational landscape.
            </p>
            <p className="text-lg md:text-xl text-black leading-relaxed">
              As an ISO-certified technical hub, we are dedicated to providing affordable education while maintaining uncompromising 
              standards of quality and excellence. Under the Arcite umbrella, institutions such as Arcite School of Technical Education, 
              Arcite School of Media, Arcite School of Data Science, Arcite K12, and more strive to transform candidates into industry 
              professionals.
            </p>
          </div>
        </div>
      </Parallax>
    </section>
  );
}

export default Hero3;
