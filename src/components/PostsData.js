import React, { Component } from 'react';

import Posts from './Posts';

class PostsData extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Rafael',
          avatar: '//avatar image here',
        },
        date: 'September 19 2019',
        content: '//comment here',
        comments: [
          {
            id: 1,
            author: {
              name: 'Marcel',
              avatar: '//avatar image here',
            },
            content: '//comment answer here'
          }
        ],
      },
      {
        // next id here
      }
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