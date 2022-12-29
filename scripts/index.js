const BG_TIME = 7000;
const ANIM_INTERVAL = 2000;
const FP_BGS = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg", "bg7.jpg", "bg8.jpg", "bg9.jpg", "bg10.jpg"];
let bgs = [];
let bgs_loaded = 0;
let bg = 0;


FP_BGS.forEach(fp => {
    let bg = document.createElement("div");
    bg.classList.add("bg");
    bg.classList.add("animate");
    bg.style.backgroundImage = `url("images/${fp}")`;
    // Place first bg on page
    if (bgs_loaded) bg.style.transform = "translate(-100%)";

    bgs.push(bg);
    document.body.appendChild(bg);
    ++bgs_loaded;
    console.log(bgs_loaded);
});

function swapBG(quantity) {
    bgs[bg].style.transform = "translate(100%)";
    let bb = bg;
    setTimeout(() => {
        bgs[bb].classList.remove("animate");
        bgs[bb].style.transform = "translate(-100%)";
        setTimeout(() => bgs[bb].classList.add("animate"), ANIM_INTERVAL);
    }, ANIM_INTERVAL);
    bg = (bg + quantity) % FP_BGS.length;
    bgs[bg].style.removeProperty("transform");
}

let anim = setInterval(swapBG, BG_TIME, 1);


document.getElementById("hide").addEventListener("click", () => document.getElementById("content").classList.toggle("hidden"));
document.getElementById("pause").addEventListener("click", () => {
    if (anim) {
        clearInterval(anim);
        anim = null;
    }
    else {
        anim = setInterval(swapBG, BG_TIME, 1);
    }
})
