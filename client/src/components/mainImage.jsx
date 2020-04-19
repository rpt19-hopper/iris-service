import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageList from './imageList.jsx';
import Modal from './modal.jsx';

const MainImage = ({ images, mainImage, isZoomed, isExpanded, arrowClick, thumbnailClick, toggleExpand, toggleZoom}) => {
    const popUp = (condition) => (
      condition
        ? <Fragment>
            <Modal
              open={isExpanded}
              onClose={toggleExpand}
              isZoomed={isZoomed}
            >
              <img
                id='pop-up-main'
                src={mainImage}
                onClick={
                  (e) => { toggleZoom(e.target) }
                }/>
                <div className='nav-prev' onClick={(e) => { arrowClick(e.currentTarget) }} >
                  <FontAwesomeIcon icon='chevron-left' />
                </div>
                <div className='nav-next' onClick={(e) => { arrowClick(e.currentTarget) }} >
                  <FontAwesomeIcon icon='chevron-right' />
                </div>
              <ul id='pop-up-image-list'>
              < ImageList
                images={images}
                thumbnailClick={thumbnailClick}
              />
              </ul>
            </Modal>
          </Fragment>
        : null
    );

  return (
    <Fragment>
      <div id='mainimagecontainer'>
        <img id='mainimage' onClick={(e) => {toggleExpand()}} src={mainImage} />
      </div>
        {popUp(isExpanded)}
      <div id='favorites'>
        <FontAwesomeIcon icon='heart' />
      </div>
      <div className='nav-prev' onClick={(e) => { arrowClick(e.currentTarget) }} >
        <FontAwesomeIcon icon='chevron-left' />
      </div>
      <div className='nav-next' onClick={(e) => { arrowClick(e.currentTarget) }} >
        <FontAwesomeIcon icon='chevron-right' />
      </div>
    </Fragment>
  );
};


export default MainImage;