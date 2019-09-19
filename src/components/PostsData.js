import React, { Component } from 'react';

import Posts from './Posts';

class PostsData extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Rafael',
          avatar: 'https://imgur.com/wCCue8m.jpeg',
        },
        date: 'September 19 2019',
        content: 'What is Lorem Ipsum?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Marcel',
              avatar: 'https://imgur.com/Qg2JHk9.png',
            },
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        ],
      },
    ]
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="posts">
        {posts.map(post => (
          <Posts key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostsData;