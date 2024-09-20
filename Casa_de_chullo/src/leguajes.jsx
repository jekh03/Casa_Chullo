import React, { useState, useEffect } from 'react';
import i18n from 'i18next';

const LanguageToggle = () => {
    const [isEnglish, setIsEnglish] = useState(false); // Estado para el botón

    useEffect(() => {
        // Detectar el idioma del navegador al cargar la página
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('en')) {
        i18n.changeLanguage('en');
        setIsEnglish(true);
        } else {
        i18n.changeLanguage('es');
        setIsEnglish(false);
        }
    }, []);

    const toggleLanguage = () => {
        if (isEnglish) {
        i18n.changeLanguage('es');
        } else {
        i18n.changeLanguage('en');
        }
        setIsEnglish(!isEnglish); // Cambiar el estado
    };

    return (
        <div className='contIdiomas'>
            <button className="btnIdioma" onClick={toggleLanguage}>
                {isEnglish ? 'ES' : 'EN'}
            </button>
        </div>
    );
};

export default LanguageToggle;