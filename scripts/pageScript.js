"use strict";
//import * as functions from "./functions.js";
window.addEventListener('load', () => {
    //functions.createHeader();
    const postContainer = document.getElementById('post-container');
    const postDataRaw = localStorage.getItem('postData');
    if (postDataRaw !== null) {
        const postData = JSON.parse(postDataRaw);
        if (postData) {
            const articleElement = document.createElement('article');
            const articleTitleElement = document.createElement('h1');
            const articleContentElement = document.createElement('p');
            const articleImg = document.createElement('img');
            const authorDivElement = document.createElement('div');
            const authorPElement = document.createElement('p');
            const postDataString = postData.content.split("[+")[0];
            authorPElement.textContent = postData.author + " - " + postData.publishedAt.split(":")[0];
            articleTitleElement.textContent = postData.title;
            articleContentElement.textContent = postDataString;
            articleContentElement.innerHTML += "<a href='" + postData.url + "' class=' font-semibold hover:underline font-poppins text-lg' >Read full article</a>";
            articleImg.src = postData.urlToImage;
            articleElement.className = "flex flex-col relative top-24 mb-24 w-72 md:w-full";
            if (postContainer) {
                postContainer.className = "max-w-3xl";
            }
            articleContentElement.className = "font-serif text-lg";
            articleTitleElement.className = "text-4xl mb-2 font-serif";
            articleImg.className = "w-full h-auto my-4";
            authorDivElement.appendChild(authorPElement);
            articleElement.appendChild(articleTitleElement);
            articleElement.appendChild(authorDivElement);
            articleElement.appendChild(articleImg);
            articleElement.appendChild(articleContentElement);
            postContainer === null || postContainer === void 0 ? void 0 : postContainer.appendChild(articleElement);
        }
    }
    //functions.createFooter();
});
