import React, { useState } from 'react'
import '../styles/Post.css'

const Post = ({userID,title,imgUrl}) => {

  const [like, setLike] = useState(1)

  const updateLike = () => {
      const likeBtn = document.getElementById(userID)
      if(likeBtn.textContent === 'Like Post'){
      setLike(like+1)
      likeBtn.style.backgroundColor = '#47F558'
      likeBtn.textContent = 'Liked'
      // likeBtn.disabled = 'true'
      }
      else{
        setLike(like-1)
      likeBtn.style.backgroundColor = '#1E1E1E'
      likeBtn.textContent = 'Like Post'
      }
    }
    
  return (
    <div className='container'>
      <img src={imgUrl} alt="img" />
      <div>User ID: {userID}</div>
      <div id='discription'>Title: {title}  </div>
      <div>Likes: {like}</div>
      <div>
        <button id={userID} onClick={updateLike}>Like Post</button>
      </div>
    </div>
  )
}

export default React.memo(Post)