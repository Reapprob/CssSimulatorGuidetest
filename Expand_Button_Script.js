function toggleExpand(menuId, button) {

    const menu = document.getElementById(menuId);

    if (menu.style.display === "block") {
        menu.style.display = "none";
        button.querySelector("span").textContent = "▼";
    } else {
        menu.style.display = "block";
        button.querySelector("span").textContent = "▲";
    }

}