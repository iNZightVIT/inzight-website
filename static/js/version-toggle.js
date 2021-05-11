var liteMode = document.getElementById("versionLiteMode");

var desktopToggle = document.getElementById("desktopToggle");
var liteToggle = document.getElementById("liteToggle");

desktopToggle.addEventListener("click", function(e) {
    e.preventDefault();
    setVersion("desktop");
})
liteToggle.addEventListener("click", function(e) {
    e.preventDefault();
    setVersion("lite");
})

function setVersion(v) {
    localStorage.setItem("inzight-documentation-version", v);
    liteMode.disabled = (v === "desktop");
}

var mode = localStorage.getItem("inzight-documentation-version") || "desktop";
setVersion(mode);
