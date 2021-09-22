(function(){

    const btnSwitchMode = document.querySelector(".switch-mode");
    const imgSwitchMode = btnSwitchMode.querySelector("img");
    const labelMode = btnSwitchMode.querySelector(".label-mode");

    const btnSwitchLanguage = document.querySelector(".switch-language");
    const imgSwitchLanguage = btnSwitchLanguage.querySelector("img");
    const labelLanguage = btnSwitchLanguage.querySelector(".label-language");

    let currentBrowserLanguage = navigator.language.split("-")[0];
    const i18n = {
        en:{
            "light":"light",
            "dark":"dark",
            "Em Construção":"Under construction",
            "Este Site encontra-se em construção":"This website is under construction",
            "Visite os outros Perfis do Erickson Vaz":"Visit other Erickson Vaz Profiles"
        },
        pt:{
            "light":"claro",
            "dark":"escuro",
            "Em Construção":"Em Construção",
            "Este Site encontra-se em construção":"Este Site encontra-se em construção",
            "Visite os outros Perfis do Erickson Vaz":"Visite os outros Perfis do Erickson Vaz"
        }
    }
    
    function main(){

        toggleLanguage();
        
        btnSwitchMode.addEventListener("click",switchLightMode);

        btnSwitchLanguage.addEventListener("click",switchPageLanguage);
    }

    function switchLightMode(){
        let isDarkMode = document.body.classList.contains("dark");
            
        imgSwitchMode.src = isDarkMode?"./img/sunny.svg":"./img/moon.svg";
        labelMode.innerText = isDarkMode?i18n[currentBrowserLanguage]["light"]:i18n[currentBrowserLanguage]["dark"];

        document.body.classList.toggle("dark");
    }

    function switchPageLanguage(){
        let htmlElement = document.body.parentElement;
        htmlElement.setAttribute("lang",htmlElement.getAttribute("lang")=="en"?"pt":"en");

        currentBrowserLanguage = htmlElement.getAttribute("lang");

        toggleLanguage();
    }

    function toggleLanguage(){
        imgSwitchLanguage.src = "./img/"+currentBrowserLanguage+".svg";
        labelLanguage.innerText = currentBrowserLanguage.toLocaleUpperCase();
        document.body.parentElement.setAttribute("lang",currentBrowserLanguage);

        translateLabels();
    };

    function translateLabels(){
        let labelsToTranslate = document.querySelectorAll("[data-i18n]");

        labelsToTranslate.forEach(label=>{
            let contentText = label.dataset.i18n.trim();

            label.innerText = i18n[currentBrowserLanguage][contentText];
        });
    }

    

    window.addEventListener("load",main);
}
)();
