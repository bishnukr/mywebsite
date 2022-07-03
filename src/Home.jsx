import React from 'react';
import web from "../src/images/rocket.png";
import Common from './Common';

const Home =() =>{
 return(
    <>
<Common name='Grow Your Business With' imgsrc={web} visit='/service' btname='Get Started' />
    </>
 );
};

export default Home;