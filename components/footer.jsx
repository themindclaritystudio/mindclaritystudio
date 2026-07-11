import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer 
      className="py-16 md:py-20 border-t antialiased selection:bg-[#0D9488] selection:text-white" 
      style={{ 
        backgroundColor: '#F8FAFC', 
        borderColor: '#E2E8F0' 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/images/logo.png"
                alt="The Mind Clarity Studio"
                width={240}
                height={90}
                priority
                className="h-11 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="font-sans text-xs md:text-sm font-light mt-2 max-w-xs leading-relaxed" style={{ color: '#0B0F19', opacity: 0.65 }}>
              Empowering deeper self-understanding, emotional resilience, and personal transformation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="font-sans text-xs font-medium tracking-wider uppercase mb-6"
              style={{ color: '#0B0F19', opacity: 0.5 }}
            >
              Services
            </h4>
            <ul className="space-y-3 font-sans text-sm font-light" style={{ color: '#0B0F19' }}>
              <li className="hover:text-[#0D9488] transition-colors cursor-pointer opacity-85 hover:opacity-100">
                Mind Coaching
              </li>
              <li className="hover:text-[#0D9488] transition-colors cursor-pointer opacity-85 hover:opacity-100">
                Education & Mentorship
              </li>
              <li className="hover:text-[#0D9488] transition-colors cursor-pointer opacity-85 hover:opacity-100">
                Professional Consultation
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 
              className="font-sans text-xs font-medium tracking-wider uppercase mb-6"
              style={{ color: '#0B0F19', opacity: 0.5 }}
            >
              Company
            </h4>
            <ul className="space-y-3 font-sans text-sm font-light" style={{ color: '#0B0F19' }}>
              <li>
                <Link href="/about" className="hover:text-[#0D9488] transition-colors opacity-85 hover:opacity-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#0D9488] transition-colors opacity-85 hover:opacity-100">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#0D9488] transition-colors opacity-85 hover:opacity-100">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#0D9488] transition-colors opacity-85 hover:opacity-100">
                  Courses
                </Link>
              </li>
               <li>
                <Link href="/gallery" className="hover:text-[#0D9488] transition-colors opacity-85 hover:opacity-100">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0D9488] transition-colors opacity-85 hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="font-sans text-xs font-medium tracking-wider uppercase mb-6"
              style={{ color: '#0B0F19', opacity: 0.5 }}
            >
              Contact Info
            </h4>
            <div className="space-y-3 font-sans text-sm font-light leading-relaxed" style={{ color: '#0B0F19', opacity: 0.85 }}>
              <p>
                <a
                  href="mailto:contact@themindclaritystudio.com"
                  className="hover:text-[#0D9488] transition-colors break-all"
                >
                  contact@themindclaritystudio.com
                </a>
              </p>
              <p>+91 79902 02179</p>
              <p className="leading-relaxed text-xs opacity-75">
                E-1206, PNTC (Times of India Press Road),<br />
                Vejalpur, Ahmedabad - 380015
              </p>
            </div>

            <div className="mt-8">
              <h5 
                className="font-sans text-xs font-medium tracking-wider uppercase mb-4"
                style={{ color: '#0B0F19', opacity: 0.5 }}
              >
                Follow Us
              </h5>
              <div className="flex items-center gap-5">
                <a
                  href="https://www.linkedin.com/in/lavina-pratap-bhambhani-0176051a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0D9488] transition-all hover:scale-105"
                  style={{ color: '#0B0F19', opacity: 0.8 }}
                >
                  <FaLinkedin size={20} />
                </a>
<a
                  href="https://www.youtube.com/@TheMindClarityStudioByLavina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0D9488] transition-all hover:scale-105"
                  style={{ color: '#0B0F19', opacity: 0.8 }}
                >
                  <FaYoutube size={20} />
                </a>
                <a
                  href="https://www.instagram.com/lavina_bhambhani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0D9488] transition-all hover:scale-105"
                  style={{ color: '#0B0F19', opacity: 0.8 }}
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://www.facebook.com/lavina.bhambhani.77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0D9488] transition-all hover:scale-105"
                  style={{ color: '#0B0F19', opacity: 0.8 }}
                >
                  <FaFacebook size={20} />
                </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="border-t mt-16 pt-8 text-center"
          style={{ borderColor: '#E2E8F0' }}
        >
          <p 
            className="font-sans text-xs font-light tracking-wide"
            style={{ color: '#0B0F19', opacity: 0.6 }}
          >
            © 2026 The Mind Clarity Studio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;