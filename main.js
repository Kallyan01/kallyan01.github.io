function openmenu() {
    document.getElementById("nav").style.height = '60vh';
    document.getElementById("bm").style.display = 'none';
    document.getElementById("cm").style.opacity = '100%';
    document.getElementById("m1").style.display = '';
}

function closemenu() {
    document.getElementById("nav").style.height = '10vh';
    document.getElementById("bm").style.display = '';
    document.getElementById("cm").style.opacity = '0%';
    document.getElementById("m1").style.display = 'none';
}

function loaddone()
{
   document.getElementById("load1").style.height = '0%';
    document.getElementById("load1").style.display = 'none';  
document.getElementById("m1").style.display = 'none'
}