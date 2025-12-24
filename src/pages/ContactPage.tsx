<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { useState } from "react";
=======
import { useState } from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
<<<<<<< HEAD
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
=======
    alert("Form submitted! (Check console for data)");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Contact us"
<<<<<<< HEAD
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920"
        height="min-h-[50vh]"
=======
        backgroundImage="https://www.foodpanda.com/wp-content/uploads/2025/07/fp-contact.webp"
        height="min-h-[40svh] md:min-h-[50vh]"
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
      />

      {/* Contact Form Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
<<<<<<< HEAD
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Contact form
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
=======
          <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-24">
            {/* Form */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center md:text-left">
                Contact form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-bold text-gray-700">
                      Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="firstName"
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
                      type="text"
                      name="firstName"
                      placeholder="First"
                      value={formData.firstName}
                      onChange={handleChange}
<<<<<<< HEAD
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 opacity-0">
                      Last
                    </label>
                    <input
=======
                      className="h-12 rounded-xl border-gray-200 focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="font-bold text-gray-700 opacity-0 hidden sm:block"
                    >
                      Last
                    </Label>
                    <Input
                      id="lastName"
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
                      type="text"
                      name="lastName"
                      placeholder="Last"
                      value={formData.lastName}
                      onChange={handleChange}
<<<<<<< HEAD
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
=======
                      className="h-12 rounded-xl border-gray-200 focus:ring-primary"
                      required
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
                    />
                  </div>
                </div>

<<<<<<< HEAD
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
=======
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold text-gray-700">
                    Email <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
<<<<<<< HEAD
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your message <span className="text-primary">*</span>
                  </label>
                  <textarea
=======
                    className="h-12 rounded-xl border-gray-200 focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-bold text-gray-700">
                    Your message <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
<<<<<<< HEAD
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <Button variant="panda" size="lg" type="submit">
=======
                    className="rounded-xl border-gray-200 focus:ring-primary resize-none"
                    required
                  />
                </div>

                <Button variant="panda" size="lg" type="submit" className="w-full md:w-fit px-12 h-14 rounded-full shadow-pink text-lg font-bold">
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
                  Submit
                </Button>
              </form>
            </div>

<<<<<<< HEAD
            {/* Info */}
            <div className="lg:pl-12">
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <img
                  src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=300"
                  alt="Panda mascot"
                  className="w-40 h-40 object-contain mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Got a question about your order?
                </h3>
                <p className="text-muted-foreground mb-2">
                  Need help with some of your app features?
                </p>
                <p className="text-muted-foreground">
                  Contact <span className="font-semibold text-foreground">Help Centre</span> via <span className="font-semibold text-foreground">app</span> menu.
                </p>
              </div>

              <div className="mt-8 grid gap-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">General Inquiries</h4>
                  <p className="text-muted-foreground text-sm">
                    For general questions about foodpanda, partnerships, or media inquiries.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Partner Support</h4>
                  <p className="text-muted-foreground text-sm">
                    Restaurant and shop partners can reach out for business-related support.
                  </p>
                </div>
=======
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-md">
                 <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-110" />
                 <img
                  src="https://www.foodpanda.com/wp-content/uploads/2025/07/pau-pau.webp"
                  alt="Pau Pau mascot"
                  className="w-full h-auto rounded-3xl relative z-10 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

      {/* Help Centre Info Section */}
      <section className="py-16 md:py-24 bg-muted/30 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-50">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              Got a question about your order? <br />
              Need help with some of your app features? <br />
              Contact <strong className="text-foreground text-primary">Help Centre</strong> via{" "}
              <strong className="text-foreground text-primary">app</strong> menu.
            </p>
          </div>
        </div>
      </section>
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
    </>
  );
};

export default ContactPage;
