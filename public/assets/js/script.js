function myFunction() {
    var elmnt = document.getElementsByTagName("body");
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
    console.log(y);
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    //Mission successful. We are now able to animate the

    var val = document.documentElement.scrollTop;
    var shift = (110 - 80) * val / 80;
    if (document.documentElement.scrollTop > 80) {
        document.getElementById("homepage-header").style.height = "80px";
        // document.getElementById("homepage-header").style.backgroundColor = "rgba(67, 160, 71, 1)";
        document.getElementById("homepage-header").style.backgroundColor = "#1565c0";
        document.getElementById("homepage-header").style.borderBottomColor = "transparent";
        document.getElementById("homepage-logo").style.width = "70px";
        document.getElementById("homepage-logo").style.height = "70px";
        document.getElementById("header-text-left").style.color = "white";
        document.getElementById("header-text-right").style.color = "white";
        // document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("homepage-header").style.height = (110 - shift) + "px";
        document.getElementById("homepage-navbar").style.top = (135 - 4 * shift) + "px";
        // document.getElementById("homepage-header").style.backgroundColor = "rgba(67, 160, 71," + (0.8 + val / 400) + ")";
        document.getElementById("homepage-header").style.backgroundColor = "white";
        document.getElementById("homepage-header").style.borderBottomColor = "#1e88e5";
        document.getElementById("homepage-logo").style.width = (100 - shift) + "px";
        document.getElementById("homepage-logo").style.height = (100 - shift) + "px";
        document.getElementById("header-text-left").style.color = "#1565c0";
        document.getElementById("header-text-right").style.color = "#1565c0";
        document.getElementById("header-text-left").style.top = (80 - (val * 15 / 80)) + "px";
        document.getElementById("header-text-right").style.top = (80 - (val * 15 / 80)) + "px";
        // document.getElementById("logo").style.fontSize = "35px";
    }
}