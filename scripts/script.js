"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.addEventListener('load', () => {
    function initializeScript(dynamicUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = dynamicUrl;
            const mainHeadingElement = document.getElementById("main-heading");
            const mainContentDiv = document.getElementById("main-content");
            const searchInputElement = document.getElementById("searchBar");
            const searchButton = document.getElementById("searchButton");
            function getAllPosts(url) {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield fetch(url);
                    const posts = yield res.json();
                    return posts['articles'];
                });
            }
            function createPostElement(post) {
                const articleElement = document.createElement('article');
                const articleTitleElement = document.createElement('a');
                const articleDescriptionElement = document.createElement('p');
                const articleAndImageWrapper = document.createElement('div');
                const articleImg = document.createElement('img');
                articleAndImageWrapper.className = "flex flex-col ";
                articleElement.className = "max-h-fit flex flex-col justify-start gap-4 z-10 w-80 md:w-96";
                articleTitleElement.className = "text-2xl font-serif font-medium decoration-1 hover:underline";
                articleTitleElement.href = "/page.html";
                articleImg.className = "h-32 w-full h-auto";
                articleTitleElement.textContent = post.title;
                articleDescriptionElement.textContent = post.description;
                articleImg.src = post.urlToImage;
                articleTitleElement.addEventListener('click', () => {
                    localStorage.setItem('postData', JSON.stringify(post));
                });
                articleAndImageWrapper.appendChild(articleTitleElement);
                articleAndImageWrapper.appendChild(articleDescriptionElement);
                articleElement.appendChild(articleImg);
                articleElement.appendChild(articleAndImageWrapper);
                return articleElement;
            }
            function displayPosts() {
                return __awaiter(this, arguments, void 0, function* (filter = "") {
                    if (filter == "") {
                        mainHeadingElement.style.display = "block";
                    }
                    else {
                        mainHeadingElement.style.display = "none";
                    }
                    if (mainContentDiv != null) {
                        mainContentDiv.innerHTML = "";
                        const posts = yield getAllPosts(url);
                        let filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(filter.toLowerCase().trim()) && post.author != null && post.urlToImage != null && post.author != "BBC Radio");
                        for (const post of filteredPosts) {
                            const postElement = createPostElement(post);
                            mainContentDiv === null || mainContentDiv === void 0 ? void 0 : mainContentDiv.appendChild(postElement);
                        }
                    }
                });
            }
            searchButton === null || searchButton === void 0 ? void 0 : searchButton.addEventListener('click', () => {
                const searchTerm = searchInputElement.value;
                displayPosts(searchTerm);
            });
            displayPosts();
        });
    }
    initializeScript(apiUrl);
});
