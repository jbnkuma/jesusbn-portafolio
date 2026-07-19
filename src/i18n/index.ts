import es from './es.json';
import en from './en.json';

export const translations = { es, en } as const;

export type Locale = keyof typeof translations;

export type TranslationKey = {
    [K in keyof typeof es]: (typeof es)[K] extends string ? K : never;
}[keyof typeof es];

export interface Course {
    date: string;
    course: string;
    icon: string;
}

/**
 * Combina los cursos de ambos idiomas en una sola estructura
 * lista para renderizar con el patrón data-lang.
 */
export function getBilingualCourses() {
    return translations.es['training.courses'].map((c, i) => ({
        date: c.date,
        icon: c.icon,
        es: c.course,
        en: translations.en['training.courses'][i].course,
    }));
}