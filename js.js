var job_tab = document.getElementById("job_tab"), current = document.getElementById("current"), newCurrent = document.getElementById("newCurrent");
var hotList = document.getElementById("hotList"), oDiv =hotList.getElementsByTagName('div'), hotCareer = document.getElementById("hotCareer"), newCareer = document.getElementById("newCareer");
document.onclick = function (e) {
    e = e || window.event;
    e.target = e.target || e.srcElement;
    hotCareer.style.display = "block";
    newCareer.style.display = "none";
    if (e.target.id === "current") {
        hotCareer.style.display = "block";

    } else if (e.target.id === "newCurrent") {
        newCareer.style.display = "block";
    }
};



















































