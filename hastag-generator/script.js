const tagContainer = document.getElementById("tag-container");
const generateButton = document.querySelector('.btn');
const loader = document.querySelector('.loader');

let index = 0;

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function copyText(text) {
    console.log(text);
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard: ' + text);
    }).catch((error) => {
        console.error('Unable to copy to clipboard: ', error);
    });
}

function displayLoader() {
    loader.style.display = 'block';
    generateButton.style.opacity = '0.5';
    generateButton.disabled = true;
}

function hideLoader() {
    loader.style.display = 'none';
    generateButton.style.opacity = '1';
    generateButton.disabled = false;
}

async function getHashtags(text) {

    const API_KEY = "AIzaSyAlLOJISXBqOYbF2-QLk4JBA6nxbj8HlDM";
    const url =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
        API_KEY;

    const prompt = `Here is an instagram post text: '${text}'. Generate 5 hashtags based on the
        text. do not include the # character in the strings. return the hashtags in comma seperated
        values`;

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: prompt,
                        },
                    ],
                },
            ],
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            const commaSeperatedHastags = data.candidates[0].content.parts[0].text;
            const hashtagArray = commaSeperatedHastags
                .split(",")
                .map((tag) => tag.trim());
            return hashtagArray;
        });
}


function createHasgtagElement(data) {
    const element = document.createElement("p");
    element.innerHTML = `#${data}`;
    element.classList.add("tag");
    element.style.backgroundColor = getRandomColor();

    element.addEventListener('click', () => copyText(`#${data}`));

    return element;
}


function createCopyAllHashtags(allData) {
    const copyAllTagsElement = document.createElement('i');
    copyAllTagsElement.classList.add("fa-regular");
    copyAllTagsElement.classList.add("fa-copy");
    copyAllTagsElement.classList.add("copy-icon");

    iconClick(copyAllTagsElement, allData);

    tagContainer.appendChild(copyAllTagsElement);
}


function iconClick(element, hashtags) {
    element.addEventListener('click', () => {

        let copyHashtags = hashtags.map((hashtag) => `#${hashtag}`);
        const text = copyHashtags.join(' ');
        copyText(text);

    })
}


function renderHashtagElements(hashtags) {
    hideLoader();

    tagContainer.innerHTML = "";

    createCopyAllHashtags(hashtags);

    hashtags.forEach((text) => {
        if (index >= hashtags.length) {
            return;
        }

        const element = createHasgtagElement(text);

        setTimeout(() => {
            tagContainer.appendChild(element);
        }, index * 500)

        index++;
    });
}


function getData(text) {
    displayLoader();

    getHashtags(text).then((hashtags) => {
        console.log(hashtags); // [...] array of items
        Array.isArray(hashtags) && renderHashtagElements(hashtags);
    });
}