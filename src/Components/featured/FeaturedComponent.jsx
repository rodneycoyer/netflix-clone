import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import './featured.scss';

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Television"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure"> Adventure </option>
                        <option value="comedy"> Comedy </option>
                        <option value="crime"> Crime </option>
                        <option value="fantasy"> Fantasy </option>
                        <option value="historical"> Historical </option>
                        <option value="horror"> Horror</option>
                        <option value="romance"> Romance </option>
                        <option value="sci-fi"> Sci-Fi </option>
                        <option value="thriller"> Thriller </option>
                        <option value="western"> Western </option>
                        <option value="animation"> Animation </option>
                        <option value="drama"> Drama </option>
                        <option value="documentary"> Documentary </option>
                    </select>
                </div>
            )}
            <img
                src="https://i1.wp.com/www.filmtake.com/wp-content/uploads/2019/10/unnamed.png?fit=678%2C381&ssl=1"
                alt=""
            />
            <div className="info">
                <img
                    src="https://i1.wp.com/www.filmtake.com/wp-content/uploads/2019/10/unnamed.png?fit=678%2C381&ssl=1"
                    alt=""
                />
                <span className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                    inventore ipsum? Dolore rem corrupti maxime qui maiores error inventore
                    eaque assumenda nostrum mollitia. Perferendis, quisquam nemo laborum quae neque vitae.
                </span>
                <div className="buttons">
                    <button className="play-btn">
                        <PlayArrowIcon/>
                        <span>Play</span>
                    </button>
                    <button className="info-btn">
                        <InfoOutlinedIcon/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured;