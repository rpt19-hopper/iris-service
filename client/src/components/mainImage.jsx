import React from 'react';


const MainImage = ({mainImage}) => {
  if (mainImage === '') {
    return (<div>Please wait for the main image to load</div>);
  } else {
    return (<div>
      <h1>mainImage</h1>
      <div className='thumbnail'>
        <img className='standard'src={mainImage}></img>
      </div>;

    </div>
    );
  }
};


export default MainImage;