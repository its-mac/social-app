import { Favorite, FavoriteBorderOutlined, MoreVert, ThumbUp, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { Users } from '../../dummyData'
import './post.css'
function Post({ post }) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const handleLikeCounter = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUserName">{Users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className='postMenuDots' />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <div onClick={handleLikeCounter} className="likeIcon" >
                            {!isLiked ? <ThumbUpAltOutlined htmlColor='' /> :
                                <ThumbUp htmlColor={isLiked ? '#1877f2' : 'white'} className='postLike' />}
                        </div>
                        <div onClick={handleLikeCounter} className="likeIcon" >
                            {!isLiked ? <FavoriteBorderOutlined /> :
                                <Favorite htmlColor={isLiked ? 'red' : 'white'} className='postLike' />}
                        </div>
                        <span className="postLikeCounter">{like} people liked it.</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">{post.comment} Comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post