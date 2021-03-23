const theme2_link = `<link rel="stylesheet" href="./style/theme_2.css"/>`;
let currentTheme = "";



const toggleThemes = ()=>{
    if (currentTheme === "dafault") {
        document.querySelector("head").insertAdjacentHTML('beforeend',theme2_link);
        currentTheme = "theme-2";
    }
    else if (currentTheme === "theme-2") {
        document.querySelector("head").lastChild.remove();
        currentTheme = "dafault";
    }
    localStorage.setItem('theme', currentTheme);
};
$("#themes").on("click", toggleThemes);



const restoreSavedParameters=()=>{  // ф-ция возобновления сессии
    currentTheme = localStorage.getItem('theme');
    if (currentTheme === "theme-2") document.querySelector("head").insertAdjacentHTML('beforeend',theme2_link);
};
const setDefaultParameters=()=>{  // ф-ция задания дефолтных значений при первом запуске
    currentTheme = "dafault";
};


//  инициализация
localStorage.getItem('theme') ? restoreSavedParameters() : setDefaultParameters();