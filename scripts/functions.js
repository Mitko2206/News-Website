export function createHeader() {
    const headerElement = document.getElementById("header-main");
    const navElement = document.createElement("nav");
    const homeButton = document.createElement("a");
    const searchButton = document.createElement("a");
    const popularButton = document.createElement("a");
    //nav-div style
    navElement.className = "flex w-full justify-start gap-5 px-4 h-10";
    //nav-buttons style
    let navButtonsClass = "no-underline px-4 py-2 border rounded-md";
    homeButton.className = navButtonsClass;
    searchButton.className = navButtonsClass;
    popularButton.className = navButtonsClass;
    homeButton.href = "/index.html";
    searchButton.href = "";
    popularButton.href = "";
    homeButton.textContent = "Home";
    popularButton.textContent = "Popular";
    searchButton.textContent = "Search";
    if (headerElement) {
        headerElement.appendChild(navElement);
        navElement.appendChild(homeButton);
        navElement.appendChild(popularButton);
        navElement.appendChild(searchButton);
    }
}
export function createFooter() {
    const bodyElement = document.getElementsByClassName("content-div")[0];
    const footerElement = document.createElement("footer");
    const contentWrapper = document.createElement("div");
    const copyrightText = document.createElement("p");
    contentWrapper.className = "";
    footerElement.className = "flex justify-start h-48 w-full bg-black";
    contentWrapper.className = "flex flex-col h-24 w-full justify-between";
    copyrightText.className = "text-slate-100";
    copyrightText.textContent = "Copyright 2024; Designed by ...";
    contentWrapper.appendChild(copyrightText);
    footerElement.appendChild(contentWrapper);
    bodyElement === null || bodyElement === void 0 ? void 0 : bodyElement.appendChild(footerElement);
}
