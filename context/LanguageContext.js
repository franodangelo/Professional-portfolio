import { createContext, useState } from "react";
export const LanguageContext = createContext();

const initialLanguage = "en";
const translations = {
    en: {
        navbarMyself: `Myself`,
        navbarProjects: `Projects`,
        navbarSkills: `Skills`,
        navbarButtonCV: `Resume`,
        cvDocument: `https://drive.google.com/file/d/13lyHc2L8ONq5CZlmvjJJnIt0T9niCx6E/view?usp=share_link`,
        navbarButtonContact: `Contact me`,
        navbarWTC: `Want to connect?`,
        headerSection: `Welcome to my portfolio`,
        headerH1: `Hi everyone, I'm Frano!`,
        headerH2: `A Full-Stack Developer based in Buenos Aires, Argentina`,
        headerNickname: `Yeah, this is my nickname 😅`,
        headerCTA: `Scroll down to know a little bit more about me`,
        myselfProfile: "UX/UI design",
        myselfH1: `I look for a good mix between design and development to create great solutions`,
        myselfP: `A few years ago I was delighted with the tech world, starting to learn about user experience design and then boosting myself into programming to became a full-stack developer. I am passionate about the frontend, an area where I can perfectly combine both backgrounds and take my skills to the top.`,
        myselfCTA: `See my experience and background in detail`,
        myselfSection: `This is me`,
        projectsSection: `Projects`,
        projectsH1: `My works so far`,
        projectsResponsive: `Responsive design`,
        projectsNotResponsive: `Working on Responsive design`,
        projectsJan: `Jan`,
        projectsAug: `Aug`,
        projectsDec: `Dec`,
        projectsWorkingOn: `I'm working on this projects`,
        skillsSection: `Skills`,
        skillsH1: `This is my tech stack`,
        skillsH2: `My current learning path`,
        pathFS: `Full-stack development`,
        pathFE: `Frontend development`,
        pathMD: `Mobile development`,
        skillsH3: `Other technologies & tools`,
        skillsSh1: `Coding workspace`,
        skillsSh2: `Design phase`,
        skillsSh3: `Organization & Follow-up`,
        contactSection: `Contact me`,
        contactH1: `Get in touch!`,
        contactP: `Call me, write me an e-mail or a WhatsApp message, or just connect and chat with me on Linkedin.`,
        contactPhone: `Phone number`,
        footerCreated: `This portfolio was created with`,
        footerThanks: `Thanks for watching!`,
        footerRights: `© Franco D'Angelo. All rights reserved.`,
    },
    es: {
        navbarMyself: `Sobre mi`,
        navbarProjects: `Proyectos`,
        navbarSkills: `Habilidades`,
        navbarButtonCV: `Currículum`,
        cvDocument: `https://drive.google.com/file/d/1xdNIYzGIm4DMcYPAgbeYchkOfIgAV2Eq/view?usp=share_link`,
        navbarButtonContact: `Contactame`,
        navbarWTC: `Quieres conectar?`,
        headerSection: `Bienvenidos a mi portfolio`,
        headerH1: `Hola a todos, soy Frano!`,
        headerNickname: `Sí, este es mi apodo 😅`,
        headerH2: `Un desarrollador Full-Stack de Buenos Aires, Argentina`,
        headerCTA: `Scrolleá hacia abajo para conocer un poco más sobre mi`,
        myselfProfile: "Diseño UX/UI",
        myselfH1: `Busco un buen balance entre diseño y desarrollo para crear las mejores soluciones`,
        myselfP: `Años atrás quedé encantado con el mundo IT, comenzando a aprender sobre diseño de experiencia de usuario para luego conocer sobre programación y convertirme en desarrollador full-stack. Me apasiona el frontend, área donde puedo combinar perfectamente ambas formaciones y aprovechar mis habilidades al 100%.`,
        myselfCTA: `Mira mi experiencia y formación en detalle`,
        myselfSection: `Sobre mi`,
        projectsSection: `Proyectos`,
        projectsH1: `Mis trabajos hasta ahora`,
        projectsResponsive: `Diseño responsivo`,
        projectsNotResponsive: `Trabajando en Diseño responsivo`,
        projectsJan: `Ene`,
        projectsAug: `Ago`,
        projectsDec: `Dic`,
        projectsWorkingOn: `Estoy trabajando en estos proyectos`,
        skillsSection: `Skills`,
        skillsH1: `Este es mi stack tecnológico`,
        skillsH2: `My ruta de aprendizaje actual`,
        pathFS: `Desarrollo full-stack`,
        pathFE: `Desarrollo frontend`,
        pathMD: `Desarrollo móvil`,
        skillsH3: `Otras tecnologías y herramientas`,
        skillsSh1: `Espacio de trabajo`,
        skillsSh2: `Fase de diseño`,
        skillsSh3: `Organización y seguimiento`,
        contactSection: `Contactame`,
        contactH1: `Comunicate conmigo!`,
        contactP: `Actualmente estoy buscando una oportunidad como desarrollador frontend o full-stack. Te interesaría conversar?`,
        contactPhone: `Nro. de teléfono`,
        footerCreated: `Este portfolio fue creado con`,
        footerThanks: `Gracias por mirar!`,
        footerRights: `© Franco D'Angelo. Todos los derechos reservados.`,
    },
};

export default function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    function handleLanguage(e) {
        if (e.target.value === "en") {
            setLanguage("en");
            setTexts(translations.en);
        } else {
            setLanguage("es");
            setTexts(translations.es);
        }
    }

    const data = { texts, handleLanguage };

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
}
