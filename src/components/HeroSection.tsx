interface HeroSectionProps {
  title: string | React.ReactNode;
  subtitle?: string;
  backgroundImage: string;
  children?: React.ReactNode;
  height?: string;
  overlay?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  children,
  height = "min-h-[60vh]",
  overlay = true,
}: HeroSectionProps) => {
  return (
    <section
      className={`relative ${height} flex items-center overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-panda-dark/70 to-panda-dark/40 z-10" />
      )}
      
      <div className="relative z-20 container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight animate-slide-up">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-secondary/90 mt-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
