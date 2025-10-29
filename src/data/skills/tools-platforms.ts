import type { Skill } from './types';

export const toolsPlatforms: Skill[] = [
    {
        name: "Versionamento (Git)",
        level: "Aplicando",
        proficiency: 80,
        icon: "devicon-git-plain",
        time: "4+ anos",
        tags: ["ferramenta", "devops", "versionamento"],
        about: "Utilizo Git diariamente para o controle de versão em todos os meus projetos. Tenho experiência em resolver conflitos de merge e em colaborar de forma eficiente com a equipe em plataformas como o GitHub.",
        projects: [],
        achievements: [
            {
                titulo: "Controle de Versão Distribuído",
                descricao: "Domínio de operações essenciais como commit, push, pull, branch, merge e rebase."
            },
            {
                titulo: "Colaboração em Equipe",
                descricao: "Uso de Git para trabalhar eficientemente em projetos colaborativos, resolvendo conflitos de merge e revisando código."
            },
            {
                titulo: "Fluxos de Trabalho (Workflows)",
                descricao: "Experiência com diferentes fluxos de trabalho Git, como Git Flow e GitHub Flow."
            },
            {
                titulo: "Gerenciamento de Repositórios",
                descricao: "Criação e gerenciamento de repositórios locais e remotos (GitHub, GitLab, Bitbucket)."
            },
            {
                titulo: "Automação e CI/CD",
                descricao: "Integração de Git com ferramentas de CI/CD para automação de builds e deployments."
            },
            {
                titulo: "Recuperação e Auditoria",
                descricao: "Habilidade de recuperar versões anteriores, auditar histórico de alterações e desfazer operações."
            }
        ],
    },
    {
        name: "Postman",
        level: "Dominante",
        proficiency: 100,
        icon: "devicon-postman-plain",
        time: "2+ anos",
        tags: ["ferramenta", "api", "teste", "backend"],
        about: "Postman é uma ferramenta essencial no meu fluxo de trabalho para testar, documentar e depurar APIs. Sou experiente na criação de coleções de requisições, automação de testes e no uso de ambientes para gerenciar diferentes configurações, garantindo a qualidade e a funcionalidade dos backends que desenvolvo.",
        projects: [],
        achievements: [
            {
                titulo: "Testes de API",
                descricao: "Criação e execução de testes automatizados para APIs REST e GraphQL, garantindo a funcionalidade e performance."
            },
            {
                titulo: "Documentação de API",
                descricao: "Geração de documentação interativa para APIs, facilitando a integração e o consumo por desenvolvedores."
            },
            {
                titulo: "Automação de Testes",
                descricao: "Configuração de coleções de testes para serem executadas automaticamente em pipelines de CI/CD."
            },
            {
                titulo: "Monitoramento de APIs",
                descricao: "Acompanhamento do desempenho e disponibilidade de APIs em produção, identificando e resolvendo problemas proativamente."
            },
            {
                titulo: "Colaboração em Equipe",
                descricao: "Compartilhamento de coleções e ambientes de trabalho para facilitar a colaboração entre desenvolvedores."
            },
            {
                titulo: "Simulação de Servidores (Mock Servers)",
                descricao: "Criação de mock servers para simular o comportamento de APIs em desenvolvimento, agilizando o front-end."
            }

        ],
    },
    {
        name: "JSON",
        level: "Dominante",
        proficiency: 100,
        icon: "devicon-json-plain",
        time: "3+ anos",
        tags: ["dados", "formato", "api", "web"],
        about: "JSON é o formato padrão que utilizo para intercâmbio de dados em todas as minhas aplicações web e APIs. Domino sua estrutura e sintaxe, e sou proficiente na serialização e desserialização de objetos em diversas linguagens, garantindo uma comunicação eficiente entre sistemas.",
        projects: [],
        achievements: [
            {
                titulo: "Estrutura e Sintaxe",
                descricao: "Compreensão da estrutura JSON, incluindo objetos, arrays, tipos de dados e regras de formatação."
            },
            {
                titulo: "Serialização e Desserialização",
                descricao: "Habilidade de converter objetos de e para JSON em diferentes linguagens de programação."
            },
            {
                titulo: "Intercâmbio de Dados",
                descricao: "Utilização de JSON como formato padrão para troca de dados entre aplicações web e APIs."
            },
            {
                titulo: "Manipulação de Dados",
                descricao: "Extração, modificação e criação de dados JSON de forma eficiente e programática."
            },
            {
                titulo: "Validação de Esquemas (JSON Schema)",
                descricao: "Definição e validação de estruturas JSON para garantir a consistência e integridade dos dados."
            },
            {
                titulo: "Integração com APIs RESTful",
                descricao: "Consumo e produção de dados JSON em APIs RESTful, facilitando a comunicação entre sistemas."
            }
        ],
    },
    {
        name: "Markdown",
        level: "Dominante",
        proficiency: 90,
        icon: "devicon-markdown-plain",
        time: "3+ anos",
        tags: ["documentação", "formato", "ferramenta"],
        about: "Utilizo Markdown extensivamente para criar documentação de projetos, READMEs e artigos. Domino sua sintaxe para formatar texto de forma clara e legível, e aproveito sua simplicidade para manter a documentação técnica sempre atualizada e acessível.",
        projects: [],
        achievements: [
            {
                titulo: "Sintaxe e Formatação",
                descricao: "Domínio da sintaxe Markdown para criar documentos formatados de forma clara e concisa."
            },
            {
                titulo: "Documentação de Projetos",
                descricao: "Criação de READMEs, guias e documentações técnicas para projetos de software."
            },
            {
                titulo: "Geração de Conteúdo",
                descricao: "Uso de Markdown para escrever artigos, posts de blog e outros conteúdos textuais."
            },
            {
                titulo: "Integração com Ferramentas",
                descricao: "Utilização de Markdown em plataformas como GitHub, GitLab, Notion e editores de texto."
            },
            {
                titulo: "Tabelas e Listas",
                descricao: "Criação de tabelas e listas para organizar informações de forma estruturada e legível."
            },
            {
                titulo: "Links e Imagens",
                descricao: "Inserção de links e imagens em documentos Markdown para enriquecer o conteúdo."
            }
        ],
    },
    {
        name: "Playwright",
        level: "Familiarizado",
        proficiency: 50,
        icon: "devicon-playwright-plain",
        time: "2+ anos",
        tags: ["teste", "automação", "frontend", "ferramenta"],
        about: "Utilizo Playwright para automação de testes end-to-end e web scraping. Sou familiarizado com a criação de scripts para simular interações de usuário em diferentes navegadores, garantindo a qualidade e a compatibilidade de aplicações web, além de extrair dados de forma confiável.",
        projects: [],
        achievements: [
            {
                titulo: "Automação de Testes End-to-End",
                descricao: "Criação de testes automatizados para simular interações de usuários em navegadores reais."
            },
            {
                titulo: "Testes Cross-Browser",
                descricao: "Execução de testes em diferentes navegadores (Chromium, Firefox, WebKit) para garantir compatibilidade."
            },
            {
                titulo: "Web Scraping e Extração de Dados",
                descricao: "Desenvolvimento de scripts para coletar informações de websites de forma eficiente e confiável."
            },
            {
                titulo: "Integração com CI/CD",
                descricao: "Configuração de pipelines de integração contínua para automatizar a execução de testes."
            },
            {
                titulo: "Geração de Relatórios",
                descricao: "Criação de relatórios detalhados com resultados dos testes, incluindo screenshots e vídeos."
            },
            {
                titulo: "Simulação de Interações Complexas",
                descricao: "Automação de cenários complexos, como upload de arquivos, arrastar e soltar, e manipulação de iframes."
            }
        ],
    },
    {
        name: "Eclipse",
        level: "Aplicando",
        proficiency: 70,
        icon: "devicon-eclipse-plain",
        time: "4+ anos",
        tags: ["ide", "java", "ferramenta"],
        about: "Utilizei o Eclipse como principal IDE para desenvolvimento Java durante meu curso técnico. Tenho experiência na criação e gerenciamento de projetos, depuração de código e na integração com sistemas de controle de versão, aproveitando seu ambiente robusto para construir aplicações Java.",
        projects: [],
        achievements: [
            {
                titulo: "Desenvolvimento de Aplicações Java",
                descricao: "Criação de aplicações Java robustas e escaláveis utilizando o ambiente de desenvolvimento Eclipse."
            },
            {
                titulo: "Depuração de Código",
                descricao: "Utilização das ferramentas de depuração do Eclipse para identificar e corrigir erros em aplicações."
            },
            {
                titulo: "Gerenciamento de Projetos",
                descricao: "Criação e gerenciamento de projetos Java, incluindo configuração de dependências e builds."
            },
            {
                titulo: "Integração com Sistemas de Controle de Versão",
                descricao: "Uso de plugins do Eclipse para integração com Git e outros sistemas de controle de versão."
            },
            {
                titulo: "Refatoração de Código",
                descricao: "Aplicação de ferramentas de refatoração para melhorar a qualidade e manutenibilidade do código."
            },
            {
                titulo: "Desenvolvimento de Plugins",
                descricao: "Criação de plugins personalizados para estender a funcionalidade do Eclipse e automatizar tarefas."
            }
        ],
    },
    {
        name: "Gradle",
        level: "Familiarizado",
        proficiency: 70,
        icon: "devicon-gradle-plain",
        time: "4+ anos",
        tags: ["build", "java", "android", "ferramenta"],
        about: "Tenho experiência com Gradle para automação de builds em projetos Java e Android. Sou capaz de criar scripts de build customizados, gerenciar dependências de forma eficiente e configurar projetos multi-módulo, garantindo um processo de compilação e empacotamento consistente.",
        projects: [],
        achievements: [
            {
                titulo: "Automação de Builds",
                descricao: "Criação de scripts de build para compilar, testar e empacotar projetos Java e Android."
            },
            {
                titulo: "Gerenciamento de Dependências",
                descricao: "Configuração e gerenciamento de dependências de projetos, incluindo bibliotecas externas e módulos internos."
            },
            {
                titulo: "Customização de Tarefas",
                descricao: "Criação de tarefas personalizadas para automatizar processos específicos do ciclo de desenvolvimento."
            },
            {
                titulo: "Integração Contínua (CI)",
                descricao: "Configuração de pipelines de CI para automatizar a execução de builds e testes em servidores."
            },
            {
                titulo: "Multi-projeto e Multi-módulo",
                descricao: "Gerenciamento de projetos complexos com múltiplos módulos e subprojetos."
            },
            {
                titulo: "Otimização de Performance",
                descricao: "Aplicação de técnicas para otimizar o tempo de build, como cache e paralelização."
            }
        ],
    },
    {
        name: "Maven",
        level: "Aplicando",
        proficiency: 80,
        icon: "devicon-maven-plain",
        time: "4+ anos",
        tags: ["build", "java", "ferramenta"],
        about: "Utilizo Maven para gerenciar o ciclo de vida e as dependências de projetos Java. Tenho sólida experiência na configuração do `pom.xml`, na utilização de plugins para automatizar tarefas e na gestão de projetos multi-módulo, assegurando builds consistentes e reprodutíveis.",
        projects: [],
        achievements: [
            {
                titulo: "Gerenciamento de Projetos",
                descricao: "Criação e gerenciamento de projetos Java, incluindo configuração de dependências e builds."
            },
            {
                titulo: "Gerenciamento de Dependências",
                descricao: "Configuração e gerenciamento de dependências de projetos, incluindo bibliotecas externas e módulos internos."
            },
            {
                titulo: "Ciclo de Vida de Build",
                descricao: "Compreensão e utilização do ciclo de vida de build do Maven para compilar, testar e empacotar projetos."
            },
            {
                titulo: "Plugins e Extensões",
                descricao: "Utilização de plugins do Maven para estender a funcionalidade e automatizar tarefas específicas."
            },
            {
                titulo: "Integração Contínua (CI)",
                descricao: "Configuração de pipelines de CI para automatizar a execução de builds e testes em servidores."
            },
            {
                titulo: "Multi-módulo e Herança",
                descricao: "Gerenciamento de projetos complexos com múltiplos módulos e herança de configurações."
            }
        ],
    },
    {
        name: "Kali Linux",
        level: "Familiarizado",
        proficiency: 60,
        icon: "devicon-kalilinux-plain",
        time: "4+ anos",
        tags: ["segurança", "pentest", "linux", "so"],
        about: "Tenho familiaridade com o Kali Linux como plataforma para estudos de segurança e testes de penetração. Sou capaz de utilizar suas ferramentas para realizar análises de vulnerabilidades, escaneamento de redes e aprender sobre técnicas de exploração em um ambiente controlado.",
        projects: [],
        achievements: [
            {
                titulo: "Testes de Penetração (Pentesting)",
                descricao: "Realização de testes de penetração em sistemas e redes para identificar vulnerabilidades e falhas de segurança."
            },
            {
                titulo: "Análise de Vulnerabilidades",
                descricao: "Utilização de ferramentas como Nmap, Nessus e OpenVAS para escanear e analisar vulnerabilidades em sistemas."
            },
            {
                titulo: "Engenharia Social",
                descricao: "Aplicação de técnicas de engenharia social para testar a resiliência de usuários e sistemas contra ataques."
            },
            {
                titulo: "Análise Forense Digital",
                descricao: "Coleta e análise de evidências digitais para investigar incidentes de segurança e recuperar informações."
            },
            {
                titulo: "Exploração de Vulnerabilidades",
                descricao: "Utilização de exploits e frameworks como Metasploit para explorar vulnerabilidades e obter acesso a sistemas."
            },
            {
                titulo: "Relatórios de Segurança",
                descricao: "Elaboração de relatórios detalhados com as vulnerabilidades encontradas e recomendações para mitigação."
            }
        ],
    },
    {
        name: "npm",
        level: "Aplicando",
        proficiency: 90,
        icon: "devicon-npm-plain",
        time: "4+ anos",
        tags: ["gerenciador de pacotes", "javascript", "nodejs", "ferramenta"],
        about: "Utilizo o npm como gerenciador de pacotes padrão para todos os meus projetos no ecossistema JavaScript. Tenho experiência na gestão de dependências, na criação de scripts para automação de tarefas e na configuração de projetos, garantindo um ambiente de desenvolvimento organizado e reprodutível.",
        projects: [],
        achievements: [
            {
                titulo: "Gerenciamento de Dependências",
                descricao: "Instalação, atualização e remoção de pacotes e bibliotecas para projetos Node.js e front-end."
            },
            {
                titulo: "Scripts Personalizados",
                descricao: "Criação de scripts npm para automatizar tarefas como build, teste, lint e deploy de aplicações."
            },
            {
                titulo: "Publicação de Pacotes",
                descricao: "Publicação de pacotes npm próprios para reutilização em outros projetos ou compartilhamento com a comunidade."
            },
            {
                titulo: "Gerenciamento de Versões",
                descricao: "Controle de versões de pacotes para garantir a compatibilidade e estabilidade das dependências."
            },
            {
                titulo: "Configuração de Projetos",
                descricao: "Configuração de arquivos package.json para definir metadados, scripts e dependências de projetos."
            },
            {
                titulo: "Integração com Ferramentas de Build",
                descricao: "Uso de npm em conjunto com Webpack, Gulp e Grunt para automatizar o processo de build de aplicações."
            }
        ],
    },
    {
        name: "Notion",
        level: "Familiarizado",
        proficiency: 60,
        icon: "devicon-notion-plain",
        time: "4+ anos",
        tags: ["produtividade", "organização", "documentação", "ferramenta"],
        about: "Utilizo o Notion para organizar projetos, gerenciar conhecimento e planejar tarefas. Sou familiarizado com a criação de bancos de dados, wikis e dashboards para manter as informações centralizadas e acessíveis, tanto para uso pessoal quanto para colaboração em equipe.",
        projects: [],
        achievements: [
            {
                titulo: "Organização de Projetos",
                descricao: "Criação de dashboards, bancos de dados e wikis para gerenciar projetos, tarefas e informações."
            },
            {
                titulo: "Gestão de Conhecimento",
                descricao: "Criação de bases de conhecimento, documentações e notas para organizar informações e facilitar o acesso."
            },
            {
                titulo: "Planejamento Pessoal e Profissional",
                descricao: "Utilização do Notion para planejar metas, acompanhar hábitos e organizar a vida pessoal e profissional."
            },
            {
                titulo: "Colaboração em Equipe",
                descricao: "Compartilhamento de páginas e workspaces para colaborar em projetos, documentos e tarefas com equipes."
            },
            {
                titulo: "Automação com Integrações",
                descricao: "Integração do Notion com outras ferramentas e automação de fluxos de trabalho para aumentar a produtividade."
            },
            {
                titulo: "Criação de Conteúdo",
                descricao: "Uso do Notion para escrever artigos, posts de blog, roteiros e outros conteúdos textuais."
            }
        ],
    },
    {
        name: "PuTTY",
        level: "Familiarizado",
        proficiency: 50,
        icon: "devicon-putty-plain",
        time: "1+ anos",
        tags: ["ssh", "terminal", "redes", "ferramenta"],
        about: "Tenho familiaridade com o PuTTY para estabelecer conexões SSH seguras com servidores remotos. Sou capaz de gerenciar sessões, transferir arquivos via SCP/SFTP e utilizar tunelamento SSH para acessar serviços de forma segura, facilitando a administração de ambientes Linux.",
        projects: [],
        achievements: [
            {
                titulo: "Conexão Remota Segura",
                descricao: "Utilização do PuTTY para estabelecer conexões SSH seguras com servidores remotos e dispositivos de rede."
            },
            {
                titulo: "Gerenciamento de Sessões",
                descricao: "Configuração e salvamento de sessões para acesso rápido e fácil a diferentes servidores e dispositivos."
            },
            {
                titulo: "Transferência de Arquivos (SCP/SFTP)",
                descricao: "Uso de ferramentas como PSCP e PSFTP para transferir arquivos de forma segura entre máquinas locais e remotas."
            },
            {
                titulo: "Tunelamento SSH",
                descricao: "Criação de túneis SSH para encaminhar tráfego de rede de forma segura e acessar serviços restritos."
            },
            {
                titulo: "Configuração de Portas Seriais",
                descricao: "Conexão a dispositivos de rede e servidores via porta serial para configuração e depuração."
            },
            {
                titulo: "Autenticação por Chave SSH",
                descricao: "Configuração de autenticação por chave SSH para maior segurança e conveniência no acesso remoto."
            }
        ],
    },
    {
        name: "Trello",
        level: "Explorando",
        proficiency: 15,
        icon: "devicon-trello-plain",
        time: "1+ anos",
        tags: ["produtividade", "organização", "kanban", "ferramenta"],
        about: "Estou explorando o Trello para gerenciamento de tarefas e projetos pessoais. Tenho conhecimento básico na criação de quadros, listas e cartões para visualizar fluxos de trabalho no estilo Kanban, buscando melhorar minha organização e produtividade.",
        projects: [],
        achievements: [
            {
                titulo: "Gerenciamento de Tarefas",
                descricao: "Criação e organização de tarefas em quadros, listas e cartões para acompanhar o progresso de projetos."
            },
            {
                titulo: "Colaboração em Equipe",
                descricao: "Compartilhamento de quadros e cartões com equipes para facilitar a comunicação e a colaboração em projetos."
            },
            {
                titulo: "Fluxos de Trabalho Personalizados",
                descricao: "Criação de fluxos de trabalho personalizados para se adaptar às necessidades específicas de cada projeto."
            },
            {
                titulo: "Automação de Tarefas",
                descricao: "Utilização de automações e integrações para otimizar processos e reduzir tarefas manuais."
            },
            {
                titulo: "Acompanhamento de Prazos",
                descricao: "Definição de prazos e lembretes para garantir que as tarefas sejam concluídas dentro do tempo."
            },
            {
                titulo: "Visualização de Projetos",
                descricao: "Utilização de diferentes visualizações (quadro, calendário, linha do tempo) para ter uma visão geral dos projetos."
            }
        ],
    },
    {
        name: "Vercel",
        level: "Aplicando",
        proficiency: 85,
        icon: "devicon-vercel-plain",
        time: "1+ anos",
        tags: ["deploy", "hosting", "frontend", "serveless", "devops"],
        about: "Utilizo a Vercel para realizar o deploy contínuo de minhas aplicações frontend. Tenho experiência na integração com repositórios Git, na configuração de domínios personalizados e no uso de suas otimizações automáticas para garantir performance e escalabilidade.",
        projects: [],
        achievements: [
            {
                titulo: "Deploy de Aplicações Web",
                descricao: "Realização de deploy contínuo de aplicações web estáticas e dinâmicas com Vercel, incluindo Next.js e React."
            },
            {
                titulo: "Configuração de Domínios Personalizados",
                descricao: "Configuração de domínios personalizados e certificados SSL para aplicações hospedadas na Vercel."
            },
            {
                titulo: "Integração com Git",
                descricao: "Conexão de repositórios Git (GitHub, GitLab, Bitbucket) para automação de deploys a cada push."
            },
            {
                titulo: "Funções Serverless (Serverless Functions)",
                descricao: "Desenvolvimento e deploy de funções serverless para estender a lógica de backend da aplicação."
            },
            {
                titulo: "Visualização de Builds e Logs",
                descricao: "Acompanhamento do processo de build e acesso a logs para depuração e monitoramento de aplicações."
            },
            {
                titulo: "Otimização de Performance",
                descricao: "Utilização de recursos da Vercel para otimizar o desempenho de aplicações, como CDN e Edge Functions."
            }
        ],
    },
    {
        name: "Vim",
        level: "Aplicando",
        proficiency: 80,
        icon: "devicon-vim-plain",
        time: "2+ anos",
        tags: ["editor", "terminal", "ferramenta", "produtividade"],
        about: "Utilizo o Vim para edição de texto eficiente diretamente no terminal, especialmente em ambientes de servidor. Tenho experiência com seus modos e comandos para navegar e manipular arquivos rapidamente, e personalizo meu ambiente com um `.vimrc` para otimizar meu fluxo de trabalho.",
        projects: [],
        achievements: [
            {
                titulo: "Edição de Texto Eficiente",
                descricao: "Domínio dos comandos e modos do Vim para edição de texto rápida e eficiente, sem o uso do mouse."
            },
            {
                titulo: "Navegação e Manipulação de Arquivos",
                descricao: "Utilização de atalhos e comandos para navegar por arquivos, diretórios e manipular conteúdo de forma ágil."
            },
            {
                titulo: "Configuração Personalizada (.vimrc)",
                descricao: "Criação e manutenção de um arquivo .vimrc para personalizar o ambiente do Vim com plugins e mapeamentos."
            },
            {
                titulo: "Automação de Tarefas",
                descricao: "Criação de macros e scripts para automatizar tarefas repetitivas e otimizar o fluxo de trabalho."
            },
            {
                titulo: "Integração com Ferramentas Externas",
                descricao: "Uso do Vim em conjunto com ferramentas como Git, compiladores e linters para desenvolvimento completo."
            },
            {
                titulo: "Desenvolvimento em Servidores Remotos",
                descricao: "Edição de arquivos diretamente em servidores remotos via SSH, utilizando o Vim como editor padrão."
            }
        ],
    },
    {
        name: "VSCode",
        level: "Dominante",
        proficiency: 95,
        icon: "devicon-vscode-plain",
        time: "5+ anos",
        tags: ["ide", "editor", "ferramenta", "produtividade"],
        about: "VSCode é meu ambiente de desenvolvimento principal. Domino a personalização do editor com extensões, temas e atalhos para maximizar a produtividade. Tenho ampla experiência com suas ferramentas de depuração, integração com Git e desenvolvimento remoto, adaptando-o para qualquer linguagem ou projeto.",
        projects: [],
        achievements: [
            {
                titulo: "Ambiente de Desenvolvimento Personalizado",
                descricao: "Configuração de extensões, temas e atalhos para otimizar o fluxo de trabalho e aumentar a produtividade."
            },
            {
                titulo: "Depuração de Código",
                descricao: "Utilização das ferramentas de depuração do VSCode para identificar e corrigir erros em diferentes linguagens."
            },
            {
                titulo: "Integração com Git",
                descricao: "Gerenciamento de controle de versão diretamente no VSCode, incluindo commits, branches e merges."
            },
            {
                titulo: "Desenvolvimento Remoto",
                descricao: "Conexão a servidores remotos e contêineres para desenvolver em ambientes isolados e consistentes."
            },
            {
                titulo: "Extensões e Produtividade",
                descricao: "Exploração e uso de uma vasta gama de extensões para adicionar funcionalidades e automatizar tarefas."
            },
            {
                titulo: "Live Share e Colaboração",
                descricao: "Colaboração em tempo real com outros desenvolvedores, compartilhando sessões de código e depuração."
            }
        ],
    },
    {
        name: "XML",
        level: "Aplicando",
        proficiency: 90,
        icon: "devicon-xml-plain",
        time: "3+ anos",
        tags: ["dados", "formato", "legado"],
        about: "Tenho experiência com XML para intercâmbio de dados, especialmente em integrações com sistemas legados. Sou capaz de ler, escrever e manipular documentos XML, além de validar sua estrutura com XSD/DTD, garantindo a consistência e a integridade das informações.",
        projects: [],
        achievements: [
            {
                titulo: "Estrutura e Sintaxe",
                descricao: "Compreensão da estrutura XML, incluindo elementos, atributos, namespaces e regras de validação."
            },
            {
                titulo: "Parsing e Manipulação",
                descricao: "Habilidade de ler, escrever e manipular documentos XML utilizando parsers como DOM e SAX."
            },
            {
                titulo: "Intercâmbio de Dados",
                descricao: "Utilização de XML como formato para troca de dados entre aplicações e sistemas legados."
            },
            {
                titulo: "Transformação (XSLT)",
                descricao: "Criação de folhas de estilo XSLT para transformar documentos XML em outros formatos (HTML, texto)."
            },
            {
                titulo: "Validação de Esquemas (XSD/DTD)",
                descricao: "Definição e validação de estruturas XML para garantir a consistência e integridade dos dados."
            },
            {
                titulo: "Integração com Aplicações",
                descricao: "Conexão e interação de documentos XML com diferentes linguagens de programação e frameworks."
            }
        ],
    },
    {
        name: "Yarn",
        level: "Aplicando",
        proficiency: 80,
        icon: "devicon-yarn-plain",
        time: "4+ anos",
        tags: ["gerenciador de pacotes", "javascript", "nodejs", "ferramenta"],
        about: "Utilizo o Yarn como um gerenciador de pacotes rápido e confiável para projetos JavaScript. Tenho experiência com seus recursos de workspaces para gerenciamento de monorepos e na automação de tarefas através de scripts, otimizando o fluxo de desenvolvimento.",
        projects: [],
        achievements: [
            {
                titulo: "Gerenciamento de Dependências",
                descricao: "Instalação, atualização e remoção de pacotes e bibliotecas para projetos Node.js e front-end."
            },
            {
                titulo: "Scripts Personalizados",
                descricao: "Criação de scripts Yarn para automatizar tarefas como build, teste, lint e deploy de aplicações."
            },
            {
                titulo: "Workspaces",
                descricao: "Utilização de workspaces para gerenciar múltiplos pacotes em um único repositório (monorepo)."
            },
            {
                titulo: "Gerenciamento de Versões",
                descricao: "Controle de versões de pacotes para garantir a compatibilidade e estabilidade das dependências."
            },
            {
                titulo: "Configuração de Projetos",
                descricao: "Configuração de arquivos package.json e yarn.lock para definir metadados, scripts e dependências."
            },
            {
                titulo: "Otimização de Performance",
                descricao: "Uso de recursos do Yarn para otimizar a instalação de dependências, como cache e paralelização."
            }
        ],
    },
    {
        name: "YAML",
        level: "Aplicando",
        proficiency: 80,
        icon: "devicon-yaml-plain",
        time: "1+ anos",
        tags: ["dados", "formato", "configuração", "devops"],
        about: "Utilizo YAML para escrever arquivos de configuração legíveis e estruturados, principalmente em ambientes de DevOps. Tenho experiência na definição de pipelines de CI/CD (como GitHub Actions) e na configuração de aplicações com Docker Compose, valorizando sua sintaxe limpa e intuitiva.",
        projects: [],
        achievements: [
            {
                titulo: "Estrutura e Sintaxe",
                descricao: "Compreensão da estrutura YAML, incluindo mapeamentos, sequências, escalares e regras de formatação."
            },
            {
                titulo: "Configuração de Aplicações",
                descricao: "Utilização de YAML para configurar aplicações, serviços e ambientes de deploy (Docker Compose, Kubernetes)."
            },
            {
                titulo: "Definição de Pipelines CI/CD",
                descricao: "Criação de arquivos YAML para definir pipelines de integração contínua e entrega contínua (GitHub Actions, GitLab CI)."
            },
            {
                titulo: "Serialização e Desserialização",
                descricao: "Habilidade de converter objetos de e para YAML em diferentes linguagens de programação."
            },
            {
                titulo: "Documentação e Dados Estruturados",
                descricao: "Uso de YAML para criar documentações, arquivos de configuração e dados estruturados de forma legível."
            },
            {
                titulo: "Integração com Ferramentas de Automação",
                descricao: "Conexão e interação de arquivos YAML com ferramentas de automação como Ansible e SaltStack."
            }
        ],
    },
    {
        name: "Zsh",
        level: "Aplicando",
        proficiency: 70,
        icon: "devicon-zsh-plain",
        time: "3+ anos",
        tags: ["terminal", "shell", "linux", "produtividade", "ferramenta"],
        about: "Utilizo Zsh como meu shell padrão, otimizando meu fluxo de trabalho no terminal com frameworks como Oh My Zsh. Tenho experiência na personalização do ambiente com plugins, temas e aliases, aproveitando seu autocompletar avançado e recursos de produtividade.",
        projects: [],
        achievements: [
            {
                titulo: "Configuração de Shell Personalizada",
                descricao: "Personalização do ambiente Zsh com plugins, temas e aliases para otimizar o fluxo de trabalho no terminal."
            },
            {
                titulo: "Autocompletar Avançado",
                descricao: "Utilização do recurso de autocompletar inteligente do Zsh para comandos, arquivos e argumentos."
            },
            {
                titulo: "Gerenciamento de Histórico de Comandos",
                descricao: "Navegação e busca eficiente no histórico de comandos para reutilizar e editar comandos anteriores."
            },
            {
                titulo: "Integração com Ferramentas de Desenvolvimento",
                descricao: "Uso do Zsh em conjunto com Git, Docker e outras ferramentas para um ambiente de desenvolvimento coeso."
            },
            {
                titulo: "Scripts e Automação",
                descricao: "Criação de scripts shell para automatizar tarefas repetitivas e otimizar processos no terminal."
            },
            {
                titulo: "Gerenciamento de Plugins (Oh My Zsh)",
                descricao: "Utilização de frameworks como Oh My Zsh para gerenciar e estender a funcionalidade do Zsh com facilidade."
            }
        ],
    },
];