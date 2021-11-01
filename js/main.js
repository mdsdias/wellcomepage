var search = document.getElementsByClassName('search')[0];
var barraSearch = document.getElementById('barra');
var searchbtn = document.getElementById('searchbtn');
var date = document.getElementById('date');
var body = document.body;

searchbtn.onclick = function () {
    if (barraSearch.value == '') return;
    window.open(`https://duckduckgo.com/?q=${barraSearch.value}`)
    console.log('test search');
}
barraSearch.addEventListener('keydown', function (e) {
    if (barraSearch.value == '') return;
    if (e.keyCode == 13) {
        window.open(`https://duckduckgo.com/?q=${barraSearch.value}`)
    }
});
function datee() {
    date.style.font = "monospace;"
    date.innerHTML = "Hour: " + new Date().toLocaleTimeString();
    setTimeout(datee, 600);
}
datee();
