var dropMenu = document.querySelector('.catDrop-list');
var dropMenuItems = document.querySelectorAll('.catDrop-item');
var dropSubmenus = document.querySelectorAll('.catDrop__submenu');

for(var i = 0; i < dropMenuItems.length; i++) {
    dropMenuItems[i].onclick = showSubmenu;
}

for(var j = 0; j < dropMenuItems.length; j++) {
    dropSubmenus[j];
}

function showSubmenu(e) {
    dropSubmenus[j].classList.toggle('active');
}
