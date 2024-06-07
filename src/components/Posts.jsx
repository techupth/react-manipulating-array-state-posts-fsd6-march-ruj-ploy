function Posts(props) {
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {props.postsObj.map((item, index) => {
          return (
            <div key={index} className="post-item">
              <div className="post-header">
                <h2>
                  {item.title} #{item.id}
                </h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{item.likes}</span>
                </div>
              </div>
              <p className="post-content">{item.content}</p>
              <div className="post-actions">
                <button
                  onClick={() => props.likeButtonHandle(item.id)}
                  className="like-button"
                >
                  Like
                </button>
                <button
                  onClick={() => props.dislikeButtonHandle(item.id)}
                  className="dislike-button"
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
