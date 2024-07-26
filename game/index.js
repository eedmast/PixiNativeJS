const PIXIV4 = 'pixi.4.8.9.js'
const PIXIV8 = 'pixi_8.2.5.js'

let scriptsV4 = [
    ["./extLibs/pixi.4.8.9.js","ISO-8859-1"],
    ["./extLibs/gsap.min.js"],
    ["./src/ResourceManagerV4.js","ISO-8859-1"],
    ["./src/components/Dude.js","ISO-8859-1"],
    ["./src/mainV4.js","ISO-8859-1"]
];

let scriptsV8 = [
    ["./extLibs/pixi_8.2.5.js","ISO-8859-1"],
    ["./extLibs/gsap.min.js"],
    ["./src/ResourceManager.js","ISO-8859-1"],
    ["./src/components/Bunny.js","ISO-8859-1"],
    ["./src/main.js","ISO-8859-1"],
];

function loadScripts(scrpitsToLoad)
{
    for(let i = 0, len = scriptsV4.length; i < len; i++)
    {
        const charset = scrpitsToLoad[i][1] === "UTF-8" ? ` charset="utf-8"` : `\\`;
        const scriptLink = `<script type="text/javascript" src="${scrpitsToLoad[i][0]}"${charset}></script>`;
        document.write(scriptLink);
    }
}

loadScripts(scriptsV8);
// loadScripts(scriptsV4);
