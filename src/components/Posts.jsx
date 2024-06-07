import data from "./data";
import { useState } from "react";
function Posts() {
  const [likesCount, setLikesCount] = useState([]);
  const handleLike = (index) => {
    const newLikesCount = [...likesCount];
    if (newLikesCount[index] === undefined) {
      newLikesCount[index] = data[index].likes + 1;
    } else {
      newLikesCount[index] += 1;
    }
    setLikesCount(newLikesCount);
  };
  const handleDislike = (index) => {
    const newLikesCount = [...likesCount];
    if (newLikesCount[index] === undefined && data[index].likes > 0) {
      newLikesCount[index] = data[index].likes - 1;
    } else if (newLikesCount[index] > 0) {
      newLikesCount[index] -= 1;
    }

    setLikesCount(newLikesCount);
  };
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <ul>
        {data.map((item, index) => {
          return (
            <>
              <div class="post-list">
                <div class="post-item" key={index}>
                  <div class="post-header">
                    <h2>
                      {item.title} #{item.id}
                    </h2>
                    <div class="post-social-media-stats">
                      <span class="stats-topic">Likes: </span>
                      <span class="post-likes">
                        {likesCount[index] === undefined
                          ? item.likes
                          : likesCount[index]}
                      </span>
                    </div>
                  </div>
                  <p class="post-content">{item.content}</p>
                  <div class="post-actions">
                    <button
                      class="like-button"
                      onClick={() => handleLike(index)}
                    >
                      Like
                    </button>
                    <button
                      class="dislike-button"
                      onClick={() => {
                        handleDislike(index);
                      }}
                    >
                      Dislike
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Posts;
