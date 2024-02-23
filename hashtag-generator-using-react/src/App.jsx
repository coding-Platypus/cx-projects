import { useState } from "react";

import "./App.css";
import Hashtag from "./Hashtag";
import CopyAllIcon from "@mui/icons-material/CopyAll";

function App() {
  const [hashtags, setHashtags] = useState([]);
  const [caption, setCaption] = useState("");
  const [showLoader, setShowLoader] = useState(false);

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

  function copyHashtag(text) {
    navigator.clipboard
      .writeText(`#${text}`)
      .then(() => {
        console.log("Copied to clipboard: " + text);
      })
      .catch((error) => {
        console.error("Unable to copy to clipboard: ", error);
      });
  }

  async function getData() {
    setShowLoader(true);
    const generatedHashtag = await getHashtags(caption);

    setHashtags(generatedHashtag);
    setShowLoader(false);
  }

  function copyAllHashtags() {
    let copyHashtags = hashtags.map((hashtag) => `#${hashtag}`);
    const allHashtag = copyHashtags.join(" ");

    copyHashtag(allHashtag);
  }

  return (
    <>
      <form className="form-container">
        <div className="header">
          <div className="logo-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
              height="50px"
            />
            <h2>
              Create <strong>#hashtags</strong> for post
            </h2>
          </div>

          <button type="button" className="btn" onClick={getData}>
            {showLoader ? <div className="loader"></div> : `Generate`}
          </button>
        </div>
        <textarea
          rows="20"
          cols="100"
          id="inputText"
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
          placeholder="Enter post content here..."
        ></textarea>

        <div id="tag-container"></div>
      </form>
      <div className="tag-container">
        {hashtags.length > 0 && (
          <CopyAllIcon className="copy-icon" onClick={copyAllHashtags} />
        )}
        {hashtags.map((hashtag, index) => (
          <Hashtag
            key={index + 1}
            delay={index * 500}
            copyHashtag={copyHashtag}
          >
            {hashtag}
          </Hashtag>
        ))}
      </div>
    </>
  );
}

export default App;
