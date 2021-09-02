import React from 'react';
import Featured from '../Components/featured/FeaturedComponent';
import Navbar from "../Components/navbar/Navbar";
import List from '../Components/list/ListComponent';
import './home.scss';

const Home = () => {
    return (
        <div className="main">
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
        </div>
    );
}

export default Home;