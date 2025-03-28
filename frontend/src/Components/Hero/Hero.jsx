import { useRef, useEffect } from "react";
import hero from "../../assets/hero.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        // Fixes unwanted scrolling on mobile
        document.documentElement.style.overflowX = "hidden";
        document.body.style.overflowX = "hidden";
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Background Image Zoom-in effect
        tl.from(bgRef.current, {
            scale: 1.3,
            duration: 2,
            ease: "power2.out",
        });

        // Fade in the Hero Section
        tl.from(heroRef.current, {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: "power2.out",
        }, "-=1.5");

        // Staggered text animation
        tl.from(textRef.current.children, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,
        }, "-=1");
    });

    return (
        <section ref={heroRef} className="relative w-screen min-h-screen flex items-center justify-center bg-black overflow-hidden">
            {/* Background Image */}
            <div 
                ref={bgRef}
                className="absolute inset-0 w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${hero})` }}
            >
                <span className="absolute inset-0 bg-black opacity-60"></span>
            </div>

            {/* Text Content */}
            <div className="relative w-full max-w-6xl text-center px-6">
                <div ref={textRef} className="text-white">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl pt-40">
                        ARCITE CONVOCATION CEREMONY 2025   
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 pt-5">
                        HONOURING BATCHES OF THE YEAR 2024-2025
                    </p>
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
