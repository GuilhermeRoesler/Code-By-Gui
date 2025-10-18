import heroProfile from '@/assets/hero-profile.jpg';
import { aboutData } from '@/data/about';

const About = () => {
  return (
    <section id="about" className="section-padding">
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
          {/* Image Section */}
          <div className="lg:col-span-2 flex justify-center fade-in">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
              <img
                src={heroProfile}
                alt="Guilherme Roesler"
                className="relative w-full max-w-sm h-auto object-cover rounded-2xl shadow-large"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:col-span-3 space-y-6 fade-in">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {aboutData.stats.map((stat, index) => (
                <div key={index} className="text-center card-elevated p-4">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
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