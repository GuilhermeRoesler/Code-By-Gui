import heroProfile from '@/assets/hero-profile.jpg';
import { aboutData } from '@/data/about';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="section-padding"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container-max">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{aboutData.title}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {aboutData.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
              <img
                src={heroProfile}
                alt="Guilherme Roesler"
                className="relative w-full max-w-sm h-auto object-cover rounded-2xl shadow-large"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;