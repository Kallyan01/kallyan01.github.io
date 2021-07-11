function bgrmnu()
{
var menu =document.getElementById('mnu');
if(menu.classList.contains("showMenu"))
{
    menu.classList.remove("showMenu");
    document.querySelector(".navbar").style="height:10vh;"
}
else
{
    menu.classList.add("showMenu");
    document.querySelector(".navbar").style="height:100%;"
}
}