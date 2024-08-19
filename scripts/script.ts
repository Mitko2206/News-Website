window.addEventListener('load', () => {
    async function initializeScript(dynamicUrl: string) {
        const url = dynamicUrl;
        const mainHeadingElement = document.getElementById("main-heading") as HTMLElement;
        const mainContentDiv = document.getElementById("main-content");
        const searchInputElement = document.getElementById("searchBar") as HTMLInputElement;
        const searchButton = document.getElementById("searchButton");

        async function getAllPosts(url: string) {
            const res = await fetch(url);
            const posts = await res.json();
            return posts['articles'];
        }

        function createPostElement(post: any) {
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

        async function displayPosts(filter: string = "") {
            if (filter == "") {
                mainHeadingElement.style.display = "block";
            } else {
                mainHeadingElement.style.display = "none";
            }
            if (mainContentDiv != null) {
                mainContentDiv.innerHTML = "";
                const posts = await getAllPosts(url);
                let filteredPosts = posts.filter((post: any) => post.title.toLowerCase().includes(filter.toLowerCase().trim()) && post.author != null && post.urlToImage != null && post.author != "BBC Radio");
                for (const post of filteredPosts) {
                    const postElement = createPostElement(post);
                    mainContentDiv?.appendChild(postElement);
                }
            }
        }

        searchButton?.addEventListener('click', () => {
            const searchTerm = searchInputElement.value;
            displayPosts(searchTerm);
        });
        displayPosts();
    }
     initializeScript(apiUrl);
});