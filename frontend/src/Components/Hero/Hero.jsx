import { useRef, useEffect, useState } from "react";
import hero from "../../assets/hero1.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faUserGraduate, faBookOpen } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [startCount, setStartCount] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(80); // Start at 80

  const heroRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  // Start count when section is in viewport
  useEffect(() => {
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top 80%",
      onEnter: () => setStartCount(true),
    });
  }, []);

  // Counting Effect for Numbers
  useEffect(() => {
    if (startCount) {
      const yearsInterval = setInterval(() => {
        setYearsCount((prev) => (prev < 10 ? prev + 1 : prev));
      }, 100);

      const studentsInterval = setInterval(() => {
        setStudentsCount((prev) => (prev < 10 ? prev + 1 : prev));
      }, 100);

      const coursesInterval = setInterval(() => {
        setCoursesCount((prev) => (prev < 100 ? prev + 1 : prev));
      }, 50);

      return () => {
        clearInterval(yearsInterval);
        clearInterval(studentsInterval);
        clearInterval(coursesInterval);
      };
    }
  }, [startCount]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(bgRef.current, { scale: 1.3, duration: 2, ease: "power2.out" });
    tl.from(heroRef.current, { opacity: 0, y: 100, duration: 1.5, ease: "power2.out" }, "-=1.5");
    tl.from(textRef.current.children, { opacity: 0, y: 50, duration: 1, ease: "power2.out", stagger: 0.3 }, "-=1");
  });

  return (
    <section ref={heroRef} className="relative w-screen min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${hero})` }}>
        <span className="absolute inset-0 bg-black opacity-45"></span>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-6xl text-center px-6">
        <div ref={textRef} className="text-white">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl pt-20">ARCITE CONVOCATION CEREMONY 2025</h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 pt-5">HONOURING BATCHES OF THE YEAR 2024-2025</p>

          {/* Features Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 lg:space-x-8 pt-8 pb-6 space-y-6 sm:space-y-0">
            {[{ icon: faAward, count: yearsCount, label: "Years of Excellence" },
              { icon: faUserGraduate, count: studentsCount, label: "Students Trained", suffix: "k+" },
              { icon: faBookOpen, count: coursesCount, label: "Industrial Courses" }].map((item, index) => (
              <div key={index} data-aos="fade-up" className="flex items-center text-left space-x-4">
                <FontAwesomeIcon icon={item.icon} size="2x" color="white" />
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {item.count}{item.suffix || "+"}
                  </div>
                  <p className="text-white font-body text-sm md:text-base font-medium mt-1">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="https://forms.gle/jUqeQh2dYrk5aq5u9">
            <button className="mt-6 px-6 py-3 bg-teal-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-white hover:text-black transition">
              Register Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

