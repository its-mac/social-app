import { Users } from "../../dummyData"
import OnlineFriends from "../onlineFriends/OnlineFriends"
import "./rightbar.css"

function Rightbar({ profile }) {
    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Aber</b> and <b>3 Other Friends</b> have their birthdays today.
                    </span>
                </div>
                <img src="assets/ad.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <OnlineFriends key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }
    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoItemKey">City: </span>
                        <span className="rightbarInfoItemValue">Sarai Sidhu</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoItemKey">From: </span>
                        <span className="rightbarInfoItemValue">Pakistan</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoItemKey">Relationship: </span>
                        <span className="rightbarInfoItemValue">Engaged</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpg" alt="" className="righbarFollowingImg" />
                        <span className="righbarFollowingName">Peter Parker</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpg" alt="" className="righbarFollowingImg" />
                        <span className="righbarFollowingName">Peter Parker</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpg" alt="" className="righbarFollowingImg" />
                        <span className="righbarFollowingName">Peter Parker</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpg" alt="" className="righbarFollowingImg" />
                        <span className="righbarFollowingName">Peter Parker</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpg" alt="" className="righbarFollowingImg" />
                        <span className="righbarFollowingName">Peter Parker</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpg" alt="" className="righbarFollowingImg" />
                        <span className="righbarFollowingName">Peter Parker</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
}

export default Rightbar