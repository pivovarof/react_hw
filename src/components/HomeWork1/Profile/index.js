import React from 'react';
import './styles.css'

  
const user = {
  "username": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
}



function Profile(){ 
    
   
    return (
      <div className='card'>
        <div className='image-logo'>
          <img src={user.avatar} alt='logo' />
        </div>
        <div className="content">
        <div className="Name">
          <h2>{user.username}</h2>
        </div>
        <p>@{user.tag}</p>
        <p>{user.location}</p>
        <div className="propers">
          <div className="item-proper">
            <p>Followers</p>
            <p>{user.stats.followers}</p>
          </div>
          <div className="item-proper">
            <p>Views</p>
            <p>{user.stats.views}</p>
          </div>
          <div className="item-proper">
            <p>Likes</p>
            <p>{user.stats.likes}</p>
          </div>
        </div>
        </div>
        

        
      </div>
          
      )
  }

  export default Profile;