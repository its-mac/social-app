import './onlineFriends.css'
function OnlineFriends({ user }) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
                <img src={user.profilePicture} alt="" className="rightbarFriendProfileImg" />
                <span className="rightbarFriendStatus"></span>
            </div>
            <div className="rightbarFriendName">{user.username}</div>
        </li>
    )
}

export default OnlineFriends