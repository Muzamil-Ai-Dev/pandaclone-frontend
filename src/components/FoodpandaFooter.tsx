import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const FoodpandaFooter = () => {
  const footerLinks = {
    company: [
      { name: "About us", path: "/about" },
      { name: "Newsroom", path: "/newsroom" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
    ],
    partners: [
      { name: "Become a partner", path: "/partners" },
      { name: "Partner portal", path: "#" },
      { name: "Rider opportunities", path: "#" },
    ],
    pandaAds: [
      { name: "panda ads Home", path: "/pandaads" },
      { name: "Solutions", path: "/pandaads/solutions" },
      { name: "Contact", path: "/pandaads/contact" },
    ],
    legal: [
      { name: "Terms & Conditions", path: "#" },
      { name: "Privacy Policy", path: "#" },
      { name: "Cookie Policy", path: "#" },
=======
import { Facebook, Instagram, Linkedin } from "lucide-react";
import FoodpandaLogo from "@/components/FoodpandaLogo";

const FoodpandaFooter = () => {
  const footerLinks = {
    navigate: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Newsroom", path: "/newsroom" },
    ],
    collaborate: [
      { name: "Explore careers", path: "https://careers.foodpanda.com/", isExternal: true },
      { name: "Become a rider", path: "https://careers.foodpanda.com/", isExternal: true },
      { name: "Feed your team", path: "/corporate" },
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
    ],
  };

  const socialLinks = [
<<<<<<< HEAD
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-panda-dark text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">🐼</span>
              </div>
              <span className="text-2xl font-bold text-secondary">
                foodpanda
              </span>
            </Link>
            <p className="text-secondary/70 text-sm mb-6">
              Your favorite food and groceries, delivered fast.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
=======
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=273039666130793", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/foodpanda", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/foodpandasg", label: "Instagram" },
  ];

  const renderFooterLink = (link: any) => {
    const className = "text-gray-300 hover:text-primary transition-colors text-sm font-medium block py-1";
    
    if (link.isExternal) {
      return (
        <a 
          href={link.path} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={className}
        >
          {link.name}
        </a>
      );
    }
    
    return (
      <Link to={link.path} className={className}>
        {link.name}
      </Link>
    );
  };

  return (
    <footer className="bg-panda-dark text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:w-1/3">
             <FoodpandaLogo className="h-8 md:h-10 text-primary w-fit" />
             <div className="text-sm text-gray-400 max-w-sm">
               The leading online food delivery marketplace in emerging markets. 
             </div>
             <div className="flex gap-4">
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
<<<<<<< HEAD
                  className="w-10 h-10 bg-secondary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-secondary" />
=======
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors text-white"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
                </a>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Company */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Partners</h3>
            <ul className="space-y-3">
              {footerLinks.partners.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Panda Ads */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">panda ads</h3>
            <ul className="space-y-3">
              {footerLinks.pandaAds.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary/70 text-sm">
              © {new Date().getFullYear()} foodpanda. All rights reserved.
            </p>
            <p className="text-secondary/70 text-sm">
              A subsidiary of Delivery Hero
            </p>
          </div>
=======
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-2/3">
            
            {/* Navigate */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Navigate</h3>
              <ul className="space-y-3">
                {footerLinks.navigate.map((link) => (
                  <li key={link.name}>
                    {renderFooterLink(link)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Collaborate */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Collaborate</h3>
              <ul className="space-y-3">
                {footerLinks.collaborate.map((link) => (
                  <li key={link.name}>
                    {renderFooterLink(link)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal / More */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium block py-1">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium block py-1">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              Copyright © {new Date().getFullYear()} <a href="https://foodpanda.com" className="hover:text-primary hover:underline text-white">foodpanda</a>. All rights reserved.
            </p>
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
        </div>
      </div>
    </footer>
  );
};

export default FoodpandaFooter;
