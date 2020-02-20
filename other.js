function openTabAccount(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab-account");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink-account");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("tab-current", "tab-not-current");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className = evt.currentTarget.className.replace("tab-not-current", "");
    evt.currentTarget.className += "tab-current";
}

function openTabChiThu(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab-chi-thu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink-chi-thu");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("tab-current", "tab-not-current");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className = evt.currentTarget.className.replace("tab-not-current", "");
    evt.currentTarget.className += "tab-current";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
