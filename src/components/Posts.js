import React from 'react';

function Post({ author, date }) {
  return (
    <div className="post-user">
      <img className="userAvatar" src={author.avatar} />
      <div className="userInfo">
        <strong><span>{author.name}</span></strong>
        <span>{date}</span>
      </div>
    </div>
  );
}

function Comments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="replyComment">
          <img className="replyAvatar" src={comment.author.avatar} />
          <p>
            <strong><span>{comment.author.name}</span></strong>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function PostedPost({ author, date, comments, content}) {
  return (
    <div className="post">
      <Post author={author} date={date} />
      <p className="post-content">{content}</p>
      <Comments comments={comments} />
    </div>
  )
}


export default PostedPost;