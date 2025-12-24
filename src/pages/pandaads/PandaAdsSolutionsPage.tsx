import { Button } from "@/components/ui/button";

const PandaAdsSolutionsPage = () => {
  return (
    <>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Boost your brand with our retail media solutions</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">Harness the power of first-party retail data to connect with millions of high-value customers within and beyond the app.</p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-12">Reach high-value customers with in-app display ads</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Homescreen ad", desc: "Reach millions of customers at the beginning of their purchase journey" },
              { title: "Order tracking page ad", desc: "Drive engagement and results without disrupting their ordering experience" },
              { title: "Shopping ad", desc: "Boost conversion on pandamart and foodpanda shops" },
            ].map((item, i) => (
              <div key={i} className="bg-secondary p-8 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">Start advertising today</h2>
          <Button variant="pandaWhite" size="lg">Contact us</Button>
        </div>
      </section>
    </>
  );
};

export default PandaAdsSolutionsPage;
