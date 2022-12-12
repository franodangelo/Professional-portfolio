import { createContext, useState } from "react";

export const LanguageContext = createContext();

const initialLanguage = "en";
const translations = {
    en: {
        navbarMyself: `Myself`,
        navbarProjects: `Projects`,
        navbarSkills: `Skills`,
        navbarButtonCV: `Resume`,
        cvDocument: `https://drive.google.com/file/d/1xUcCZHkkhZBkNMRjk3GeB6gG4dyyxyRR/view?usp=share_link`,
        navbarButtonContact: `Contact me`,
        navbarWTC: `Want to connect?`,
        headerSection: `Welcome to my portfolio`,
        headerH1: `Hi everyone, I'm Frano!`,
        headerH2: `A Frontend Developer based in Buenos Aires, Argentina`,
        headerNickname: `Yeah, this is my nickname 😅`,
        headerCTA: `Scroll down to know a little bit more about me`,
        myselfH1: `I'm searching for new challenges & experiences to keep learning and improving`,
        myselfP: `I'm interested in working in technology to collaborate on projects with a high social impact where I can really solve people's needs, contributing with all my knowledge in development and design, and fulfilling my dream of ideating and creating digital products in the real world.`,
        myselfP2: `See my experience and background in detail`,
        myselfSection: `This is me`,
        projectsSection: `Projects`,
        projectsH1: `My works so far`,
        projectsResponsive: `Responsive design`,
        projectsNotResponsive: `Working on Responsive design`,
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
        footerUpdate: `Last update:`
    },
    es: {
        navbarMyself: `Sobre mi`,
        navbarProjects: `Proyectos`,
        navbarSkills: `Habilidades`,
        navbarButtonCV: `Currículum`,
        cvDocument: `https://drive.google.com/file/d/1p1C6XtCSdH2ekgagXY2Vut7y2A0QUXHh/view?usp=share_link`,
        navbarButtonContact: `Contactame`,
        navbarWTC: `Quieres conectar?`,
        headerSection: `Bienvenidos a mi portfolio`,
        headerH1: `Hola a todos, soy Frano!`,
        headerNickname: `Sí, este es mi apodo 😅`,
        headerH2: `Un desarrollador Frontend de Buenos Aires, Argentina`,
        headerCTA: `Scrolleá hacia abajo para conocer un poco más sobre mi`,
        myselfH1: `Busco nuevos desafíos y experiencias para seguir aprendiendo y mejorando`,
        myselfP: `Me interesa trabajar en tecnología para colaborar en proyectos de alto impacto social donde realmente pueda resolver las necesidades de las personas, aportando todo mi conocimiento en desarrollo y diseño, cumpliendo así mi sueño de idear y crear productos digitales en el mundo real.`,
        myselfP2: `Mira mi experiencia y formación en detalle`,
        myselfSection: `Sobre mi`,
        projectsSection: `Proyectos`,
        projectsH1: `Mis trabajos hasta ahora`,
        projectsResponsive: `Diseño responsivo`,
        projectsNotResponsive: `Trabajando en Diseño responsivo`,
        projectsAug: `Ago`,
        projectsDec: `Dic`,
        projectsWorkingOn: `Estoy trabajando en estos proyectos`,
        skillsSection: `Habilidades`,
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
        contactP: `Llamame, escribeme un correo o WhatsApp, o simplemente conectemos y hablemos por Linkedin.`,
        contactPhone: `Nro. de teléfono`,
        footerCreated: `Este portfolio fue creado con`,
        footerThanks: `Gracias por mirar!`,
        footerUpdate: `Última actualización:`
    }
}

export default function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    function handleLanguage(e) {
        if(e.target.value === "en") {
            setLanguage("en");
            setTexts(translations.en);
        } else {
            setLanguage("es");
            setTexts(translations.es);
        }
    }

    const data = {texts, handleLanguage};

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}