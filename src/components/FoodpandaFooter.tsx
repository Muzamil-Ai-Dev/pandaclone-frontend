import { Link } from "react-router-dom";
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
    ],
  };

  const socialLinks = [
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
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-secondary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-secondary" />
                </a>
              ))}
            </div>
          </div>

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
        </div>
      </div>
    </footer>
  );
};

export default FoodpandaFooter;
