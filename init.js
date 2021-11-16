let ben10 = document.getElementById("omnitrix");
ben10.addEventListener("change", myfunc);
function myfunc(e) {
    let getImage = document.getElementById("getImage");
    let path = "";
    let selection = e.target.value;
    if (selection === "greymatter") {
        path = "./images/OmniverseGreyMatter.png"
    }
    else if (selection === "heatblast") {
        path = "./images/Heatblast_omniverse_official.png"
    }
    else if (selection === "diamondhead") {
        path = "./images/Diamondhead_oficial.png"
    }
    else if (selection === "fourarms") {
        path = "./images/7FF55.png"
    }
    else if (selection === "upgrade") {
        path = "./images/OV_Upgrade.png"
    }
    else if (selection === "stinkfly") {
        path = "./images/Stinkfly_os_render.png"
    }
    else if (selection === "canonbolt") {
        path = "./images/Cannonbolt_true_colors.png"
    }
    else if (selection === "ghostfreak") {
        path = "./images/GhostfreakPose2.png"
    }
    getImage.src = path;
}