function openmenu() {
    document.getElementById("nav").style.height = '50vh';
    document.getElementById("nav").style.transition = '.8s ease-in';
    document.getElementById("bm").style.display = 'none';
    document.getElementById("cm").style.opacity = '100%';
    document.getElementById("m1").style.display = '';
     document.getElementById("bdy").style.overflow = 'hidden';
}

function closemenu() {
    document.getElementById("nav").style.height = '10vh';
    document.getElementById("bm").style.display = '';
    document.getElementById("cm").style.opacity = '0%';
    document.getElementById("m1").style.display = 'none';
    document.getElementById("bdy").style.overflow = '';
}

function loaddone()
{
   document.getElementById("load1").style.height = '0%';
    document.getElementById("load1").style.display = 'none';  
document.getElementById("m1").style.display = 'none';
}
