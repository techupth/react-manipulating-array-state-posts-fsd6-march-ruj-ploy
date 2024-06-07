import "./App.css";
import Posts from "./components/Posts";
import { postsObj } from "./data/Posts";
import { useState } from "react";

function App() {
  const [post, setPost] = useState(postsObj);

  const likeButtonHandle = (id) => {
    const newPost = post.map((item) => {
      if (item.id === id) {
        return { ...item, likes: (item.likes += 1) };
      } else {
        return item;
      }
    });

    setPost(newPost);
  };
  const dislikeButtonHandle = (id) => {
    const newPost = post.map((item) => {
      if (item.id === id && item.likes !== 0) {
        return { ...item, likes: (item.likes -= 1) };
      } else {
        return item;
      }
    });

    setPost(newPost);
  };

  return (
    <div className="App">
      <Posts
        likeButtonHandle={likeButtonHandle}
        dislikeButtonHandle={dislikeButtonHandle}
        postsObj={post}
      />
    </div>
  );
}

export default App;
