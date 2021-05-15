function burgermenu()
{
    let menu = document.getElementById("menulist")
    if(menu.style.opacity == "0")
    {
        menu.style.opacity="100"
        document.getElementById("menu").classList.add("change")
        document.getElementById("menu-bg").classList.add("change-bg")
    }
    else
    {
        menu.style.opacity="0"
        document.getElementById("menu").classList.remove("change")
        document.getElementById("menu-bg").classList.remove("change-bg")
    }
    
}
