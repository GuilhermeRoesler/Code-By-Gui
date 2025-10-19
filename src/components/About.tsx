import { useState, useEffect, useRef } from 'react';
import { aboutData } from '@/data/about';
import { aboutImages } from '@/data/aboutImages';
import { use3dCardEffect } from '@/hooks/use3dCardEffect';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const statsContainerRef = useRef(null);
  use3dCardEffect(statsContainerRef);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 5000); // Muda a imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section-padding">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="filterEdges">
            <feConvolveMatrix
              kernelMatrix="0 1 0 1 -4 1 0 1 0"
              order="3 3"
              bias="0"
              divisor="1"
              preserveAlpha={true} />
          </filter>
        </defs>
      </svg>

      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{aboutData.title}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {aboutData.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image Carousel Section */}
          <div className="lg:col-span-2 flex justify-center fade-in">
            <div className="relative w-full max-w-sm" style={{ height: '450px' }}>
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
              <div className="relative w-full h-full rounded-2xl shadow-large overflow-hidden">
                {aboutImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:col-span-3 space-y-6 fade-in">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed fade-in">
                {paragraph}
              </p>
            ))}

            <div ref={statsContainerRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {aboutData.stats.map((stat, index) => (
                <div key={index} className="stat-card-3d slide-top"
                  style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="stat-card-3d-figure text-center card-elevated p-4">
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;