import type { Skill } from './types';

export const databases: Skill[] = [
    {
        name: "MySQL",
        level: "Dominante",
        proficiency: 90,
        icon: "devicon-mysql-plain",
        time: "3+ anos",
        tags: ["banco de dados", "sql", "backend"],
        about: "Tenho sólida experiência com MySQL, desde a modelagem de dados e criação de esquemas eficientes até a escrita de consultas SQL complexas. Sou capaz de administrar bancos de dados, otimizar queries para performance e garantir a integridade e segurança dos dados.",
        projects: [],
        achievements: [
            {
                titulo: "Modelagem de Dados",
                descricao: "Criação de esquemas de banco de dados eficientes e otimizados para diversas aplicações."
            },
            {
                titulo: "Consultas SQL Avançadas",
                descricao: "Elaboração de consultas complexas para extração, manipulação e análise de dados."
            },
            {
                titulo: "Otimização de Performance",
                descricao: "Ajuste de consultas e índices para garantir alta performance em bancos de dados de grande volume."
            },
            {
                titulo: "Administração de Banco de Dados",
                descricao: "Gerenciamento de usuários, permissões, backups e recuperação de dados."
            },
            {
                titulo: "Segurança de Dados",
                descricao: "Implementação de medidas de segurança para proteger informações sensíveis no banco de dados."
            },
            {
                titulo: "Integração com Aplicações",
                descricao: "Conexão e interação de bancos de dados MySQL com diferentes linguagens de programação e frameworks."
            }
        ],
    },
    {
        name: "PostgreSQL",
        level: "Familiarizado",
        proficiency: 75,
        icon: "devicon-postgresql-plain",
        time: "2+ anos",
        tags: ["banco de dados", "sql", "backend"],
        about: "Tenho experiência com PostgreSQL para projetos que demandam um banco de dados relacional robusto e com recursos avançados. Sou familiarizado com a modelagem de dados, escrita de consultas SQL e a administração básica do banco, utilizando-o como backend para diversas aplicações.",
        projects: [],
        achievements: [
            {
                titulo: "Modelagem de Dados Relacionais",
                descricao: "Criação de esquemas de banco de dados otimizados para PostgreSQL, incluindo tabelas, índices e relacionamentos."
            },
            {
                titulo: "Consultas SQL Avançadas",
                descricao: "Elaboração de consultas complexas, utilizando funções de janela, CTEs e otimização de performance."
            },
            {
                titulo: "Administração de Banco de Dados",
                descricao: "Gerenciamento de usuários, permissões, backups e recuperação de dados em ambientes PostgreSQL."
            },
            {
                titulo: "Funções e Procedures",
                descricao: "Criação de funções e stored procedures para automatizar tarefas e otimizar o processamento de dados."
            },
            {
                titulo: "Replicação e Alta Disponibilidade",
                descricao: "Configuração de replicação para garantir a alta disponibilidade e resiliência do banco de dados."
            },
            {
                titulo: "Integração com Aplicações",
                descricao: "Conexão e interação de bancos de dados PostgreSQL com diferentes linguagens de programação e frameworks."
            }

        ],
    },
    {
        name: "SQLite",
        level: "Dominante",
        proficiency: 100,
        icon: "devicon-sqlite-plain",
        time: "2+ anos",
        tags: ["banco de dados", "sql", "embarcado", "mobile"],
        about: "Utilizo SQLite como uma solução de banco de dados leve e eficiente para aplicações embarcadas, mobile e para prototipagem rápida. Domino a criação de esquemas, a execução de consultas SQL e a integração do SQLite em diversos ambientes de desenvolvimento, valorizando sua simplicidade e portabilidade.",
        projects: [],
        achievements: [
            {
                titulo: "Bancos de Dados Embarcados",
                descricao: "Utilização de SQLite como solução de banco de dados leve e eficiente para aplicações embarcadas e mobile."
            },
            {
                titulo: "Consultas SQL Básicas",
                descricao: "Elaboração de consultas SQL para manipulação e recuperação de dados em bancos SQLite."
            },
            {
                titulo: "Integração com Aplicações",
                descricao: "Conexão e interação de bancos de dados SQLite com diferentes linguagens de programação e frameworks."
            },
            {
                titulo: "Gerenciamento de Esquemas",
                descricao: "Criação e modificação de esquemas de banco de dados SQLite de forma simples e direta."
            },
            {
                titulo: "Portabilidade de Dados",
                descricao: "Uso de SQLite para armazenar dados de forma portátil, facilitando a distribuição de aplicações."
            },
            {
                titulo: "Testes e Prototipagem",
                descricao: "Aplicação de SQLite em ambientes de teste e prototipagem para agilizar o desenvolvimento."
            }
        ],
    },
];