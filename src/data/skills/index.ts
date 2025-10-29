import { languages } from './languages';
import { frontend } from './frontend';
import { backend } from './backend';
import { databases } from './databases';
import { aiData } from './ai-data';
import { mobileGameDev } from './mobile-gamedev';
import { toolsPlatforms } from './tools-platforms';
import { design } from './design';
import { softSkills } from './soft-skills';

const allSkills = [
    ...frontend,
    ...backend,
    ...databases,
    ...languages,
    ...aiData,
    ...mobileGameDev,
    ...toolsPlatforms,
    ...design,
    ...softSkills,
];

// To preserve the original order of skills for the featured section, 
// we are not sorting the final array alphabetically here.
// The AllSkills page will sort them for display purposes.
export const skills = allSkills;

export const skillsByCategory = {
    languages,
    frontend,
    backend,
    databases,
    aiData,
    mobileGameDev,
    toolsPlatforms,
    design,
    softSkills,
};