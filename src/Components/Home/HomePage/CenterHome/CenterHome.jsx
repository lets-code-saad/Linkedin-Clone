import React from 'react'
import CreatePost from './createPost/CreatePost'
import Post from './Post/Post'

const CenterHome = () => {
  return (
    <div className='d-flex flex-column gap-3'>
      <CreatePost />
      <Post/>
    </div>
  )
}

export default CenterHome
