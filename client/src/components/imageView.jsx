import React from 'react';
import MainImage from './mainImage.jsx';
import ImageList from './imageList.jsx';


const ImageView = ({images, mainImage, isZoomed, isExpanded, arrowClick, thumbnailClick, toggleExpand}) => (
  <div id='imageviewcontainer'>
    <ul id='thumbnailcontainer'>
      <ImageList
        images={images}
        thumbnailClick={thumbnailClick}
      />
    </ul>
    <div id='mainimagecontainer'>
      <MainImage
        images={images}
        mainImage={mainImage}
        isZoomed={isZoomed}
        isExpanded={isExpanded}
        arrowClick={arrowClick}
        thumbnailClick={thumbnailClick}
        toggleExpand={toggleExpand}
      />
    </div>
  </div>
);


export default ImageView;