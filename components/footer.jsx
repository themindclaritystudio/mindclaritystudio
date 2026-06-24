import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer 
      className="py-20 border-t" 
      style={{ 
        backgroundColor: '#FCFCFA', 
        borderColor: '#EAF3F0' 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-6">
              <Image
                src="/images/logo.png"
                alt="The Mind Clarity Studio"
                width={320}
                height={120}
                priority
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>
            <p 
              className="max-w-xs text-lg leading-relaxed font-sans"
              style={{ color: '#2F3437' }}
            >
              For Stronger Minds, Think Lavina.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="text-xl font-bold mb-6"
              style={{ color: '#6E8F88' }}
            >
              Services
            </h4>
            <ul className="space-y-3 font-sans" style={{ color: '#2F3437' }}>
              <li className="hover:text-[#6E8F88] transition-colors cursor-pointer">
                Mind Coaching
              </li>
              <li className="hover:text-[#6E8F88] transition-colors cursor-pointer">
                Education & Mentorship
              </li>
              <li className="hover:text-[#6E8F88] transition-colors cursor-pointer">
                Professional Consultation
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 
              className="text-xl font-bold mb-6"
              style={{ color: '#6E8F88' }}
            >
              Company
            </h4>
            <ul className="space-y-3 font-sans" style={{ color: '#2F3437' }}>
              <li>
                <Link href="/about" className="hover:text-[#6E8F88] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#6E8F88] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#6E8F88] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#6E8F88] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#6E8F88] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-xl font-bold mb-6"
              style={{ color: '#6E8F88' }}
            >
              Contact Info
            </h4>
            <div className="space-y-3 font-sans" style={{ color: '#2F3437' }}>
              <p>
                <a
                  href="mailto:contact@themindclaritystudio.com"
                  className="hover:text-[#6E8F88] transition-colors"
                >
                  contact@themindclaritystudio.com
                </a>
              </p>
              <p>+91 79902 02179</p>
              <p className="leading-relaxed">
                E-1206, PNTC (Times of India Press Road),<br />
                Vejalpur, Ahmedabad - 380015
              </p>
            </div>

            <div className="mt-10">
              <h5 
                className="font-medium mb-4"
                style={{ color: '#6E8F88' }}
              >
                Follow Us
              </h5>
              <div className="flex items-center gap-6">
                <a
                  href="https://www.linkedin.com/in/lavina-pratap-bhambhani-0176051a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6E8F88] transition-all hover:scale-110"
                  style={{ color: '#2F3437' }}
                >
                  <FaLinkedin size={26} />
                </a>

                <a
                  href="https://www.instagram.com/lavina_bhambhani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6E8F88] transition-all hover:scale-110"
                  style={{ color: '#2F3437' }}
                >
                  <FaInstagram size={26} />
                </a>

                <a
                  href="https://www.facebook.com/lavina.bhambhani.77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6E8F88] transition-all hover:scale-110"
                  style={{ color: '#2F3437' }}
                >
                  <FaFacebook size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="border-t mt-16 pt-8 text-center"
          style={{ borderColor: '#EAF3F0' }}
        >
          <p 
            className="font-sans text-sm"
            style={{ color: '#6E8F88' }}
          >
            © 2026 The Mind Clarity Studio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;