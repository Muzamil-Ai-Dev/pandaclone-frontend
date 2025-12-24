import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { useState } from "react";

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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920"
        height="min-h-[50vh]"
      />

      {/* Contact Form Section */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
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
                      type="text"
                      name="firstName"
                      placeholder="First"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 opacity-0">
                      Last
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <Button variant="panda" size="lg" type="submit">
                  Submit
                </Button>
              </form>
            </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
