import React from 'react';
import Feedback from '../Components/Feedback/Feedback';
import Places from '../Components/Places/Places';
import ScenerySlider from '../Components/ScenerySlider/ScenerySlider';

const Home = () => {
    return (
        <div className='home'>
            <ScenerySlider />
            <Places />
            <Feedback />
        </div>
    );
};

export default Home;