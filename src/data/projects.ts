import lifeSimpleImage from '@/assets/img/projects/life_simple.png';
import timelineImage from '@/assets/img/projects/timeline.png';
import mindMapImage from '@/assets/img/projects/mind_map.jpeg';
import alphaInsightsImage from '@/assets/img/projects/alpha_insights.jpeg';

export const projects = [
    {
        name: "MindMap",
        type: "Aplicação Web",
        impact: "Modernização da intranet hospitalar com React e TypeScript, permitindo acesso remoto seguro e otimizando processos administrativos.",
        repo: "https://github.com/GuilhermeRoesler/MindMap",
        link: "https://mind-map.fwh.is",
        tech: ["React", "TypeScript", "React Flow", "PHP", "MySQL", "Tailwind", "CSS"],
        image: mindMapImage
    },
    {
        name: "Timeline",
        type: "Aplicação Web",
        impact: "Ferramenta educacional interativa que facilita a compreensão de eventos e períodos históricos por meio de visualizações claras e acessíveis.",
        repo: "https://github.com/GuilhermeRoesler/Timeline",
        link: "https://timeline.fwh.is",
        tech: ["PHP", "MySQL", "React", "TypeScript", "Tailwind"],
        image: timelineImage
    },
    {
        name: "Life Simple",
        type: "Aplicação Web",
        impact: "Plataforma de e-commerce farmacêutico de manipulados com chatbot inteligente, conectando tecnologia e saúde ao comércio local.",
        repo: "https://github.com/GuilhermeRoesler/Life-Simple",
        link: "https://lifesimple.fwh.is",
        tech: ["Vibe Coding", "IA", "Chatbot", "React", "TypeScript", "Tailwind", "Firebase"],
        image: lifeSimpleImage
    },
    {
        name: "Alpha Insights",
        type: "Aplicação Web",
        impact: "Desenvolvimento de um chatbot inteligente que reduziu os tickets de suporte em 70% através de automação e Processamento de Linguagem Natural.",
        repo: "https://github.com/GuilhermeRoesler",
        link: "https://alpha-insights.fwh.is",
        tech: ["Python", "Flask", "HTML", "Google Colab", "Google Cloud Console", "Google Drive", "Google Planilhas", "Gemini API key"],
        image: alphaInsightsImage
    },
];