interface HeroSectionProps {
  title: string | React.ReactNode;
  subtitle?: string;
  backgroundImage: string;
<<<<<<< HEAD
=======
  backgroundVideo?: string;
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
  children?: React.ReactNode;
  height?: string;
  overlay?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
<<<<<<< HEAD
  children,
  height = "min-h-[60vh]",
=======
  backgroundVideo,
  children,
  height = "min-h-[50svh] md:min-h-[60vh]",
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
  overlay = true,
}: HeroSectionProps) => {
  return (
    <section
      className={`relative ${height} flex items-center overflow-hidden`}
      style={{
<<<<<<< HEAD
        backgroundImage: `url(${backgroundImage})`,
=======
        backgroundImage: !backgroundVideo ? `url(${backgroundImage})` : undefined,
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
<<<<<<< HEAD
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-panda-dark/70 to-panda-dark/40 z-10" />
      )}
      
      <div className="relative z-20 container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight animate-slide-up">
=======
      {backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {overlay && (
        <div className="absolute inset-0 bg-black/20 md:bg-gradient-to-r md:from-black/50 md:to-transparent z-10" />
      )}
      
      <div className="relative z-20 container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slide-up text-balance drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
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
