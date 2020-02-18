function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("tab-current", "tab-not-current");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className = evt.currentTarget.className.replace("tab-not-current", "");
    evt.currentTarget.className += "tab-current";
}