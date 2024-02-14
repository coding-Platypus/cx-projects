function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getHashtags(text) {
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
            const commaSeperatedHastags =
                data.candidates[0].content.parts[0].text;
            const hashtagArray = commaSeperatedHastags
                .split(",")
                .map((tag) => tag.trim());
            return hashtagArray;
        });
}

function getData(text) {
    document.getElementById("tag-container").innerHTML = "";
    getHashtags(text).then((hashtags) => {
        console.log(hashtags); // [...] array of items
        Array.isArray(hashtags) &&
            hashtags.forEach((elem) => {
                var p = document.createElement("p");
                p.appendChild(document.createTextNode("#" + elem));
                p.classList.add("tag");
                p.style.backgroundColor = getRandomColor();
                document.getElementById("tag-container").appendChild(p);
            });
    });
}