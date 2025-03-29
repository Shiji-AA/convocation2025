import { useEffect, useRef } from "react";
import architect from "../../assets/image1.jpg";
import hr from "../../assets/image2.jpg";
import edu from "../../assets/image3.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero1() {
  const imgRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    imgRefs.forEach((imgRef) => {
      gsap.fromTo(
        imgRef.current,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );

      gsap.fromTo(
        imgRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative bg-white py-16 ">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-black drop-shadow-lg">
          ARCITE Convocation Ceremonies
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl px-6 mx-auto grid md:grid-cols-3 gap-8 border border-teal-500 py-10">
        {/* Convocation Cards */}
        {[  
          {
            img: architect,
            ref: imgRefs[0],
            link: "https://drive.google.com/drive/folders/1W4EdRYrQTVnWF6SwstPvBBJDFlf_gEvw",
            title: "Convocation Ceremony 2021-22",
          },
          {
            img: hr,
            ref: imgRefs[1],
            link: "https://drive.google.com/drive/folders/1GR5Q-suFqACMzTH8gtBmcamStr_rfk3V",
            title: "Convocation Ceremony 2022-23",
          },
          {
            img: edu,
            ref: imgRefs[2],
            link: "https://drive.google.com/drive/folders/1W4EdRYrQTVnWF6SwstPvBBJDFlf_gEvw",
            title: "Convocation Ceremony 2023-24",
          },
        ].map(({ img, ref, link, title }, index) => (
          <div
            key={index}
            className="group relative text-center bg-white rounded-2xl shadow-lg p-5 overflow-hidden transform transition-all duration-500 hover:scale-105"
          >
            <div className="bg-white rounded-lg shadow-md p-3 border border-gray-300">
              <a href={link} className="block">
                <img
                  ref={ref}
                  className="w-full h-56 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt={title}
                />
              </a>
            </div>
            <div className="mt-4">
              <a href={link}>
                <h3 className="text-lg font-semibold text-black group-hover:text-gray-500 transition-colors">
                  {title}
                </h3>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero1;
