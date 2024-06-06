import data from "./data";
import { useState } from "react";
function Posts() {
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <ul>
        {data.map((item) => {
          const [likeCount, setLikeCount] = useState(0);
          let likeTotal = likeCount + item.likes;
          const handleLike = () => {
            setLikeCount(likeCount + 1);
          };
          const handleDislike = () => {
            if (likeTotal > 0) {
              setLikeCount(likeCount - 1);
            }
          };
          return (
            <>
              <div class="post-list">
                <div class="post-item">
                  <div class="post-header">
                    <h2>
                      {item.title} #{item.id}
                    </h2>
                    <div class="post-social-media-stats">
                      <span class="stats-topic">Likes: </span>
                      <span class="post-likes">{likeTotal}</span>
                    </div>
                  </div>
                  <p class="post-content">{item.content}</p>
                  <div class="post-actions">
                    <button class="like-button" onClick={handleLike}>
                      Like
                    </button>
                    <button class="dislike-button" onClick={handleDislike}>
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
