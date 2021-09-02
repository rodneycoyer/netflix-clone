import React from 'react';
import ListItem from '../list-item/ListItemComponent'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import './list.scss';

const List = () => {
    return (
        <div className="list">
            <span className="list-title"> Continue to Watch </span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon />
                <div className="container">
                    <ListItem />
                </div>
                <ArrowForwardIosOutlinedIcon />
            </div>
        </div>
    );
}

export default List;

