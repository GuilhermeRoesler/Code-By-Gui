import type { Skill } from './types';

export const frontend: Skill[] = [
    {
        name: "React",
        level: "Dominante",
        proficiency: 95,
        icon: "devicon-react-original",
        time: "+2 anos",
        tags: ["frontend", "framework", "web", "javascript"],
        about: "React é minha principal ferramenta para construir interfaces web modernas, rápidas e escaláveis. Tenho vasta experiência na criação de componentes reutilizáveis, gerenciamento de estado complexo e otimização de performance, sempre buscando as melhores práticas do ecossistema.",
        projects: [
            {
                "alias": "Timeline",
                "link": "timeline.fwh.is"
            }
        ],
        achievements: [
            {
                titulo: "JSX e renderização de elementos",
                descricao: "Aprender a sintaxe JSX e como ela se transforma em chamadas de React.createElement."
            },
            {
                titulo: "Componentes funcionais e props",
                descricao: "Criar componentes reutilizáveis e passar dados via props."
            },
            {
                titulo: "Gerenciamento de estado com useState",
                descricao: "Controlar dados internos dos componentes de forma reativa."
            },
            {
                titulo: "Efeitos colaterais com useEffect",
                descricao: "Executar lógica após renderizações, como chamadas de API ou manipulação de DOM."
            },
            {
                titulo: "Navegação com React Router",
                descricao: "Criar rotas dinâmicas e páginas SPA com navegação fluida."
            },
            {
                titulo: "Context API para estado global",
                descricao: "Compartilhar dados entre componentes sem prop drilling."
            }
        ],
    },
    {
        name: "Tailwind CSS",
        level: "Dominante",
        proficiency: 98,
        icon: "devicon-tailwindcss-plain",
        time: "1+ anos",
        tags: ["frontend", "css", "framework", "design"],
        about: "Adotei o Tailwind CSS como meu principal framework para estilização, valorizando a agilidade e a consistência que ele proporciona. Sou proficiente na criação de interfaces responsivas e customizadas, utilizando seu sistema de classes utilitárias para construir design systems e prototipar rapidamente.",
        projects: [],
        achievements: [
            {
                titulo: "Desenvolvimento Rápido de UI",
                descricao: "Criação de interfaces de usuário responsivas e modernas de forma ágil e eficiente."
            },
            {
                titulo: "Design System e Componentização",
                descricao: "Construção de sistemas de design reutilizáveis e componentes UI para manter a consistência visual."
            },
            {
                titulo: "Otimização de Estilos",
                descricao: "Aplicação de classes utilitárias para otimizar o carregamento e a performance de estilos CSS."
            },
            {
                titulo: "Responsividade e Adaptação",
                descricao: "Criação de layouts que se adaptam perfeitamente a diferentes tamanhos de tela e dispositivos."
            },
            {
                titulo: "Integração com Frameworks JS",
                descricao: "Uso de Tailwind CSS em conjunto com React, Vue e Angular para desenvolvimento front-end."
            },
            {
                titulo: "Customização e Configuração",
                descricao: "Personalização do framework para atender às necessidades específicas de cada projeto."
            }
        ],
    },
    {
        name: "jQuery",
        level: "Familiarizado",
        proficiency: 60,
        icon: "devicon-jquery-plain",
        time: "2+ anos",
        tags: ["frontend", "biblioteca", "javascript", "legado"],
        about: "Tenho experiência com jQuery para manipulação do DOM e interatividade em projetos legados. Sou familiarizado com sua sintaxe para seleção de elementos, manipulação de eventos e requisições AJAX, compreendendo seu papel na história do desenvolvimento web.",
        projects: [],
        achievements: [
            {
                titulo: "Manipulação de DOM Simplificada",
                descricao: "Utilização de seletores e métodos jQuery para manipular elementos HTML de forma eficiente."
            },
            {
                titulo: "Event Handling",
                descricao: "Implementação de manipuladores de eventos para criar interações dinâmicas com o usuário."
            },
            {
                titulo: "Requisições AJAX",
                descricao: "Realização de requisições assíncronas para carregar dados de servidores sem recarregar a página."
            },
            {
                titulo: "Animações e Efeitos",
                descricao: "Criação de animações e efeitos visuais para melhorar a experiência do usuário."
            },
            {
                titulo: "Plugins e Extensões",
                descricao: "Utilização de plugins jQuery para adicionar funcionalidades extras e acelerar o desenvolvimento."
            },
            {
                titulo: "Compatibilidade entre Navegadores",
                descricao: "Garantia de que o código JavaScript funcione corretamente em diferentes navegadores e versões."
            }
        ],
    },
    {
        name: "Zustand",
        level: "Aplicando",
        proficiency: 70,
        icon: "devicon-zustand-plain",
        time: "1+ anos",
        tags: ["estado", "biblioteca", "react", "frontend"],
        about: "Adotei o Zustand para gerenciamento de estado em minhas aplicações React, valorizando sua simplicidade e performance. Tenho experiência na criação de stores reutilizáveis, na integração com hooks e na aplicação de técnicas para evitar re-renderizações desnecessárias, mantendo o código limpo e eficiente.",
        projects: [],
        achievements: [
            {
                titulo: "Gerenciamento de Estado Simplificado",
                descricao: "Utilização do Zustand para gerenciar o estado global de aplicações React de forma simples e eficiente."
            },
            {
                titulo: "Criação de Stores Reutilizáveis",
                descricao: "Desenvolvimento de stores com Zustand para encapsular a lógica de estado e torná-la reutilizável em componentes."
            },
            {
                titulo: "Integração com React Hooks",
                descricao: "Uso de hooks personalizados do Zustand para acessar e atualizar o estado em componentes funcionais React."
            },
            {
                titulo: "Otimização de Performance",
                descricao: "Aplicação de técnicas de otimização com Zustand para evitar re-renderizações desnecessárias e melhorar a performance."
            },
            {
                titulo: "Testes Unitários de Stores",
                descricao: "Criação de testes unitários para stores Zustand, garantindo a corretude da lógica de estado."
            },
            {
                titulo: "Persistência de Estado",
                descricao: "Implementação de persistência de estado com Zustand para manter os dados mesmo após o recarregamento da página."
            }
        ],
    },
    {
        name: "Vite",
        level: "Aplicando",
        proficiency: 85,
        icon: "devicon-vite-plain",
        time: "2+ anos",
        tags: ["build", "frontend", "ferramenta", "performance"],
        about: "Adotei o Vite como minha ferramenta de build preferida para projetos frontend. Tenho experiência em sua configuração para desenvolvimento com Hot Module Replacement (HMR) instantâneo e na otimização de builds para produção, aproveitando sua velocidade e simplicidade.",
        projects: [],
        achievements: [
            {
                titulo: "Desenvolvimento Frontend Rápido",
                descricao: "Utilização do Vite para iniciar e desenvolver projetos frontend com hot module replacement (HMR) instantâneo."
            },
            {
                titulo: "Configuração Otimizada",
                descricao: "Configuração de projetos Vite para otimização de performance, incluindo tree-shaking e code-splitting."
            },
            {
                titulo: "Suporte a Frameworks Modernos",
                descricao: "Integração do Vite com frameworks como React, Vue, Svelte e Lit para desenvolvimento de aplicações."
            },
            {
                titulo: "Build Otimizado para Produção",
                descricao: "Geração de builds otimizados para produção, com minificação e compressão de assets."
            },
            {
                titulo: "Desenvolvimento com TypeScript",
                descricao: "Configuração e uso do Vite para projetos TypeScript, garantindo tipagem segura e melhor desenvolvimento."
            },
            {
                titulo: "Integração com Ferramentas de Teste",
                descricao: "Configuração de ferramentas de teste como Vitest para testes unitários e de integração em projetos Vite."
            }
        ],
    },
];