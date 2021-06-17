// 中栏到顶部固定
window.onload = function(){
    menuFixed('select-list');
}
function menuFixed(id){
    var obj = document.getElementById("select-list");
    var _getHeight = obj.offsetTop;

    window.onscroll = function(){
        changePos(id,_getHeight);
    }
}
function changePos(id,height){
    var obj = document.getElementById("select-list");
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop < height){
        document.getElementById("select-list").className="navbar custom-navbar Select-columns";
    }else{
        document.getElementById("select-list").className="navbar custom-navbar Select-columns navbar-fixed-top";
    }
}
// 双击进行某动作

var grade=0;
function judge() {
    if(grade<2)grade++;
    setTimeout(function () {
        if (grade==1) alert("Double click on the login.");
        if (grade==2) {
            window.location.href = 'index_logged.html';
        }
        grade=0;
    },200)
}

var grade=0;
function contact() {
    if(grade<2)grade++;
    setTimeout(function () {
        if (grade==2) {
            alert("Fill in relevant information, we will contact you as soon as possible.");
        }
        grade=0;
    },200)
}

var grade=0;
function added() {
    if(grade<2)grade++;
    setTimeout(function () {
        if (grade==2) {
            alert("Already added to cart.");
        }
        grade=0;
    },200)
}

