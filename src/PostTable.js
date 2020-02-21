import React from 'react'

const PostTable = props => (
  <table>
    <thead>
      <tr>
          <th>Id</th>
          <th>User Id</th>
          <th>Title</th>
          <th>Body</th>
      </tr>
    </thead>
    <tbody>
      {props.posts.length > 0 ? (
        props.posts.map(post => (
          <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No posts</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default PostTable
