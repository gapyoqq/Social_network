import React from "react";
import classes from './Post.module.css'


type PostPropsType = {
    message: string| undefined
    likesCount: number
    id: number
}

function Post(props: PostPropsType) {
    return <div >
                <div>
            <div className={classes.item}>
                <img alt={'image'} src={'https://pbs.twimg.com/profile_images/563771636076118016/GUQ_0-mU.png'}/>
                {props.message}
                <div>
                    <span>{props.likesCount}</span>
                </div>
            </div>
        </div>
    </div>
}

export default Post
