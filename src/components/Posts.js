import React from 'react';

function Post({ author, date }) {
  return (
    <div className="post">
      <img className="userAvatar" src={author.avatar} />
      <div className="postInfo">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function Comments({ comments }) {
  return (
    <div className="comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="userAvatar" src={comment.author.avatar} />
          <span>{comment.author.name}</span>
          <span>{comment.content}</span>
        </div>
      ))}
    </div>
  );
}

function PostingPost({ author, date, comments, content}) {
  return (
    <div className="postingPost">
      <Post author={author} date={date} />
      <p className="content">{content}</p>
      <Comments comments={comments} />
    </div>
  )
}


export default PostingPost;