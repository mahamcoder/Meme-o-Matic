document.addEventListener('DOMContentLoaded', () => {
    const gentmembtn = document.querySelector(".meme-generator .generator-meme-button");
    const memimg = document.querySelector(".meme-generator img");
    const memtitle = document.querySelector(".meme-generator .meme-title");
    const memauthor = document.querySelector(".meme-generator .meme-author");

    const updateDetails = (url, title) => {
        memimg.setAttribute("src", url);
        memtitle.innerHTML = title;
        memauthor.innerHTML = `Author: Memer😎`;  // Imgflip doesn't provide the author's name, so we'll use a placeholder
    }

    const generatmeme = () => {
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((data) => {
                const memes = data.data.memes;
                const randomMeme = memes[Math.floor(Math.random() * memes.length)];
                
                updateDetails(randomMeme.url, randomMeme.name);
            })
            .catch((error) => console.error('Error fetching meme:', error));
    }

    gentmembtn.addEventListener("click", generatmeme);
});
