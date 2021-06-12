import React from 'react'

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>
            {/*headr=>avatar+username*/}
            <img className="post__image" src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            {/*image */}
            <h4>Username : Caption</h4>

        </div>
    )
}

export default Post
