import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import css from './style.css';
import ImageView from './components/imageView.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faChevronLeft, faHeart} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faChevronRight, faChevronLeft, faHeart);



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productNumber: 549504785,
      imageList: ["https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy2.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy3.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy4.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy5.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy6.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy7.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy8.jpg"
    ],
      mainImage: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg",
      mainImageIndex: 0,
      zoom: false
    };

    this.getUrls = this.getUrls = this.getUrls.bind(this);
    this.handleClickOnArrow = this.handleClickOnArrow.bind(this);
    this.handleHoverOnThumbnail = this.handleHoverOnThumbnail.bind(this);
    this.handleHoverOnMainImage = this.handleHoverOnMainImage.bind(this);

  }

  componentDidMount() {
    const productId = window.location.pathname.split('/')[2] || this.state.productNumber;
    console.log('productId', productId);
      this.setState(({productNumber: productId}), () => {
        console.log('state after productId', this.state);
        this.getUrls(this.state.productNumber);
      })
  }

  getUrls(productNumber) {
    // localhost:8000/product

    $.ajax(`http://ec2-50-18-28-6.us-west-1.compute.amazonaws.com/${productNumber}`, {
      success: (imageObj) => {
        const parsedObj = JSON.parse(imageObj);
        const imageUrls = parsedObj.imageUrls;
        this.setState({
          imageList: imageUrls,
          mainImage: imageUrls[0],
          mainImageIndex: 0
        }, () => {
          console.log('state after urls', this.state);
        });
      }
    });
  }

  handleClickOnArrow(target) {
    const currIndex = this.state.mainImageIndex;
    const imageList = this.state.imageList;

    if (target.className === 'nav-prev') {
      if (currIndex === 0) {
        this.setState({
          mainImage: imageList[imageList.length - 1],
          mainImageIndex: imageList.length - 1});
      } else {
        this.setState({
          mainImage: imageList[currIndex - 1],
          mainImageIndex: currIndex -1});
      }
    }

    if (target.className === 'nav-next') {
      if (currIndex === imageList.length - 1) {
        this.setState({
          mainImage: imageList[0],
          mainImageIndex: 0
        });

      } else {
        this.setState({
          mainImage: imageList[currIndex + 1],
          mainImageIndex: currIndex + 1
        });
      }
    }
  }

  handleHoverOnThumbnail(target, index) {
    this.setState({mainImage: target.src, mainImageIndex: index});
  }

  handleHoverOnMainImage() {
    console.log('Hover');
  }

  render() {
    return (
      <div id='normal'>
        <ImageView
          images={this.state.imageList}
          mainImage={this.state.mainImage}
          arrowClick={this.handleClickOnArrow}
          thumbnailHover={this.handleHoverOnThumbnail}
          mainImageHover={this.handleHoverOnMainImage}
        />
      </div>
    );
  }
}


ReactDom.render(<App />, document.getElementById('image'));

export default App;