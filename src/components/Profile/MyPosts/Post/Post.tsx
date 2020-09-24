import React from "react";
import classes from './Post.module.css'

function Post() {
    return <div>
        <div>
            <textarea></textarea>
            <button> Add post </button>
        </div>
        <div>
            <div className={classes.item}>
                <img src={'https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png'}/>
                Post 1
                <div>
                <span>like</span>
                </div>
            </div>
        </div>
    </div>
}

export default Post
