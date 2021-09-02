import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import './list-item.scss';

const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/video/511324800?h=283af90635&title=0";
    return (
        <div
            className="list-item"
            style={{left: isHovered && index * 225 -50 + index * 2.5}}
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
        >
            <img
                src="https://cdn.onebauer.media/one/empire-tmdb/films/107/images/w6Ecdh1Erq285jEVVKmjnkFUIdj.jpg?format=jpg&quality=80&width=850&ratio=16-9&resize=aspectfill"
                alt=""
            />
            {isHovered && (
            <React.Fragment>
            <video src={trailer} autoPlay={true} loop/>
                <div className="item-info">
                    <div className="icons">
                        <PlayArrowIcon className="icon"/>
                        <AddIcon className="icon"/>
                        <ThumbUpAltOutlinedIcon className="icon"/>
                        <ThumbDownOutlinedIcon className="icon"/>
                    </div>
                    <div className="item-info-top">
                        <span> 1 hr 44 min </span>
                        <span className="age-restriction"> R </span>
                        <span> 2000 </span>
                    </div>
                    <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis ipsum aut nemo modi quam neque, consequatur doloribus.
                    </div>
                    <div className="genre"> action comedy drama</div>
                </div>
            </React.Fragment>
            )}
        </div>
    );
}

export default ListItem;

