var data = [];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(element => {
            data.push({ id: element.id, title: element.title, body: element.body })
        });
    })

var filldata = () => {
    var fchild = document.getElementsByClassName('id');
    console.log(fchild.length);
    if (fchild.length == 0) {
        num = 0;
    } else if (fchild.length == 6) {
        num = 6;
    } else {
        num = fchild.length;
        if (fchild.length == 100) {
            return disable_btn();
        }
    }
    display_6(num);
};

function disable_btn() {
    alert('No More Data!!');
    document.getElementById("btn-1").hidden = true;
}

function display_6(num) {
    // console.log('working');
    var block = document.getElementById('main-block');
    for (var i = num; i < (num + 6); i++) {
        block.innerHTML += "<div class='title-data'>Id: <span class='id'>" + data[i].id + "</span></div>";
        block.innerHTML += "<div class='title-data'>Title: " + data[i].title + "</div>";
        block.innerHTML += "<div class='title-data'>Description: " + data[i].body + "</div>";
    };
}