const Testimonials = () => {
  const testimonials = [
    {
      name: "Marina Silva",
      role: "CTO na TechStart Solutions",
      content: "Guilherme demonstrou excelência técnica e visão estratégica, entregando soluções robustas que impactaram diretamente nossos resultados.",
      source: "LinkedIn",
      avatar: "MS"
    },
    {
      name: "Roberto Costa",
      role: "Product Manager na InnovaCorp",
      content: "Sua expertise em IA e desenvolvimento full-stack foram fundamentais para o sucesso do nosso projeto de automação.",
      source: "Email",
      avatar: "RC"
    },
    {
      name: "Ana Ferreira",
      role: "Fundadora da DigitalFlow",
      content: "Profissional excepcional, combina habilidades técnicas avançadas com excelente comunicação e entrega consistente.",
      source: "LinkedIn",
      avatar: "AF"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Depoimentos</span> & Recomendações
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Feedback de líderes e parceiros que testemunharam o impacto do meu trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elevated hover-lift fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <blockquote className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Via {testimonial.source}</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-elevated max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="text-4xl text-primary mr-4">🎯</div>
              <h3 className="text-2xl font-bold gradient-text">Impacto Comprovado</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">45%</div>
                <p className="text-muted-foreground">Aumento de Eficiência</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">70%</div>
                <p className="text-muted-foreground">Redução de Tickets</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">35%</div>
                <p className="text-muted-foreground">Aumento de Conversões</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;