function search() {
    var name = document.getElementById("searchString");
    var text = name.value.toLowerCase();
    var rows = document.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i++) {
        if (!rows[i].children[0].innerHTML.toLowerCase().includes(text)) {
            rows[i].style.display = "none";
        } else {
            rows[i].style.display = "";
        }
    }
}