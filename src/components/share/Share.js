import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './share.css'

function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <Link to={'/profile'}>
                        <img src="assets/person/1.jpg" alt="" className="shareProfileImg" />
                    </Link>
                    <input type="text" name="" id="" className="shareInput" placeholder="Whats's in your mind MAC...?" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareIcon' />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareIcon' />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <div className="shareBtn">Share</div>
                </div>
            </div>
        </div>
    )
}

export default Share