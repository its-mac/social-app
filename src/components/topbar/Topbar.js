import { Chat, Notifications, Person, Search } from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./topbar.css"
function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to={'/'}>
                    <div className="logo">MACSocial</div>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for Friend, Post or Video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">4</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">13</span>
                    </div>
                </div>
                <Link to={'/profile'}>
                    <img src="assets/person/1.jpg" alt="Profile" className="topbarImg" />
                </Link>
            </div>
        </div>
    )
}

export default Topbar