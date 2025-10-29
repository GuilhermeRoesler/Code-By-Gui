export interface SkillProject {
  alias: string;
  link: string;
}

export interface SkillAchievement {
  titulo: string;
  descricao: string;
}

export interface Skill {
  name: string;
  level: string;
  proficiency: number;
  icon: string;
  time: string;
  tags: string[];
  about: string;
  projects: SkillProject[];
  achievements: SkillAchievement[];
}