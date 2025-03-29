import { Parallax } from "react-parallax";
import edu4 from "../../assets/hero12.jpg";

function WelcomeHero3() {
  return (
    <section className="relative w-full">
      <Parallax
        bgImage={edu4}
        strength={500} // Adjust strength for more/less effect
        bgClassName="object-cover"
      >
        {/* Main Content */}
        <div className="h-[600px] flex flex-col items-center justify-center text-center px-6 relative z-10">
          <p className="text-white text-lg pb-4">Unlock Your Potential with Quality Education</p>
          <h1 className="text-3xl text-white leading-snug max-w-2xl">
            Access top-tier learning resources, expert-led courses, and interactive experiences.
          </h1>
        </div>
      </Parallax>
    </section>
  );
}

export default WelcomeHero3;
