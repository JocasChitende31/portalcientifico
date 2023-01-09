var ul = document.querySelector('.nav-inferior ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open')
    }else{
        ul.classList.add('open');
    }
}