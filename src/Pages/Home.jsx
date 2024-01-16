import React from 'react'
import Home_Innerpage from '../InnerPages/Home_Innerpage';
import Home_InnerpageTwo from '../InnerPages/Home_InnerpageTwo';
import Home_InnerpageThree from '../InnerPages/Home_InnerpageThree';
import Home_Innerpagefour from '../InnerPages/Home_Innerpagefour';
import Home_InnerpageFive from '../InnerPages/Home_InnerpageFive';

const Home = () => {
  return (
    <div>
      <Home_Innerpage/>
      <Home_InnerpageTwo/>
      <Home_InnerpageThree/>
      <Home_Innerpagefour/>
      <Home_InnerpageFive/>
    </div>
  )
}

export default Home;

