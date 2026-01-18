import lifeSimpleImage from '@/assets/img/projects/life_simple.png';
import timelineImage from '@/assets/img/projects/timeline.png';
import mindMapImage from '@/assets/img/projects/mind_map.jpeg';
import alphaInsightsImage from '@/assets/img/projects/alpha_insights.jpeg';
import swiftSendImage from '@/assets/img/projects/swift_send.png';

export const projects = [
    {
        name: "SwiftSend",
        type: "Aplicação Desktop",
        impact: "Aplicação desktop leve que permite o compartilhamento rápido de arquivos pesados em rede local (Wi-Fi/LAN) via navegador, eliminando a necessidade de internet ou pen-drives.",
        repo: "https://github.com/GuilhermeRoesler/SwiftSend",
        link: null,
        tech: ["Python", "Flask", "Pywebview", "TailwindCSS", "PyInstaller"],
        image: swiftSendImage,
        backgroundType: 'light'
    },
    // {
    //     name: "MindMap",
    //     type: "Aplicação Web",
    //     impact: "Ferramenta interativa para criação e gestão de mapas mentais, permitindo organizar ideias visualmente com nós e conexões, suporte a layout automático e múltiplos projetos.",
    //     repo: "https://github.com/GuilhermeRoesler/MindMap",
    //     link: "https://mind-map.fwh.is",
    //     tech: ["React 19", "Vite", "TypeScript", "React Flow (@xyflow/react)", "Zustand", "TailwindCSS", "Lucide React", "Dagre", "PHP", "SQLite"],
    //     image: mindMapImage,
    //     backgroundType: "dark"
    // },
    {
        name: "MindMap",
        type: "Aplicação Web",
        impact: "fjdk",
        repo: "https://github.com/GuilhermeRoesler/MindMap",
        link: "https://mind-map.fwh.is",
        tech: ["React", "TypeScript", "React Flow", "PHP", "MySQL", "Tailwind", "CSS"],
        image: mindMapImage,
        backgroundType: 'dark'
    },
    {
        name: "Timeline",
        type: "Aplicação Web",
        impact: "Ferramenta educacional interativa que facilita a compreensão de eventos e períodos históricos por meio de visualizações claras e acessíveis.",
        repo: "https://github.com/GuilhermeRoesler/Timeline",
        link: "https://timeline.fwh.is",
        tech: ["PHP", "MySQL", "React", "TypeScript", "Tailwind"],
        image: timelineImage,
        backgroundType: 'light'
    },
    {
        name: "Life Simple",
        type: "Aplicação Web",
        impact: "Plataforma de e-commerce farmacêutico de manipulados com chatbot inteligente, conectando tecnologia e saúde ao comércio local.",
        repo: "https://github.com/GuilhermeRoesler/Life-Simple",
        link: "https://lifesimple.fwh.is",
        tech: ["Vibe Coding", "IA", "Chatbot", "React", "TypeScript", "Tailwind", "Firebase"],
        image: lifeSimpleImage,
        backgroundType: 'dark'
    },
    {
        name: "Alpha Insights",
        type: "Aplicação Web",
        impact: "Desenvolvimento de um chatbot inteligente que reduziu os tickets de suporte em 70% através de automação e Processamento de Linguagem Natural.",
        repo: "https://github.com/GuilhermeRoesler",
        link: "https://alpha-insights.fwh.is",
        tech: ["Python", "Flask", "HTML", "Google Colab", "Google Cloud Console", "Google Drive", "Google Planilhas", "Gemini API key"],
        image: alphaInsightsImage,
        backgroundType: 'light'
    },
];