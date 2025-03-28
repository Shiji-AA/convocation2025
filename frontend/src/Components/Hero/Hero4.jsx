import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Hero4() {
  return (
    <section className="w-full h-[300px] flex items-center justify-center bg-gray-700 bg-cover bg-center relative">
      <div className="text-center bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl">
        <p className="text-xl font-medium text-white leading-relaxed">
          Join the excitement of graduation. Share your day and celebrate your success with family and friends on social media.
        </p>
        <div className="mt-6">
          <ul className="flex justify-center gap-6">
            {[
              { href: "https://www.facebook.com/arciteschooloftechnicaleducation/", icon: faFacebookF, label: "Facebook" },
              { href: "https://www.instagram.com/arcite.in/", icon: faInstagram, label: "Instagram" },
              { href: "https://x.com/arcite_in", icon: faXTwitter, label: "Twitter" },
              { href: "https://www.linkedin.com/company/arc-institute-of-technical-education/", icon: faLinkedin, label: "LinkedIn" },
              { href: "https://www.youtube.com/@arciteschooloftechnicaledu6571", icon: faYoutube, label: "YouTube" },
            ].map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-white hover:text-teal-300 transition-all"
                >
                  <FontAwesomeIcon icon={icon} size="xs" className="p-2 bg-white text-amber-950 rounded-full hover:bg-teal-300 hover:text-white transition-colors" />
                  <span className="text-sm">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero4;
