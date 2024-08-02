var themepackage = (function () {
    return {
        tokyonightdark: tokyonightdark,
        vs2015: vs2015
    };
    function tokyonightdark(id) {
        var b = document.getElementById(id);
        b.href = "css/tokyo-night-dark.min.css";
    }
    function vs2015(id) {
        var b = document.getElementById(id);
        b.href = "css/vs2015.min.css";
    }
}());