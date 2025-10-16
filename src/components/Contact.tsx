import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Construir URL do WhatsApp
    const whatsappMessage = `Olá Guilherme! 

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Assunto:* ${formData.subject || 'Contato via portfólio'}

*Mensagem:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/5551989354834?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para enviar sua mensagem via WhatsApp.",
    });

    // Limpar formulário
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "guiroesler2@gmail.com",
      href: "mailto:guiroesler2@gmail.com"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+55 51 98935-4834",
      href: "https://wa.me/5551989354834"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "guilherme-hubner-roesler",
      href: "https://linkedin.com/in/guilherme-hubner-roesler"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "GuilhermeRoesler",
      href: "https://github.com/GuilhermeRoesler"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Vamos</span> Conversar?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar suas ideias em soluções digitais? Entre em contato e vamos discutir seu próximo projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-elevated">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background resize-none"
                  placeholder="Descreva seu projeto ou como posso ajudá-lo..."
                />
              </div>

              <button type="submit" className="btn-hero w-full">
                Enviar via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Outras Formas de Contato</h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elevated hover-lift flex items-center p-6 transition-all duration-300 hover:border-primary/30"
                >
                  <div className="text-3xl mr-4">{method.icon}</div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{method.title}</h4>
                    <p className="text-muted-foreground">{method.value}</p>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 card-elevated">
              <h4 className="text-lg font-bold mb-4 gradient-text">Disponibilidade</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Disponível para novos projetos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span>Resposta em até 24h</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span>Consultoria gratuita inicial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;