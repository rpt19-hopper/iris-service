import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import css from './style.css';
import ImageView from './components/imageView.jsx';
import ZoomView from './components/zoomView.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: '',
      imageList: ['empty', 'empty']
    };

  }

  componentDidMount() {
    this.getUrls();

  }

  getUrls(productNumber = '549504785') {
    $.ajax(`/product/${productNumber}`, {
      success: (imageObj) => {
        const parsedObj = JSON.parse(imageObj);
        const imageUrls = parsedObj.imageUrls;
        this.setState({
          imageList: imageUrls,
          mainImage: imageUrls[1]
        }, () => {
          console.log('new state', this.state);
        });
      }
    });
  }

  handleClickOnPhoto(e) {

  }

  render() {
    console.log('mainImage', this.state.mainImage);
    return (
      <div id='normal'>
        <ImageView
          images={this.state.imageList}
          mainImage={this.state.mainImage}
          imageClick={this.handleClickOnPhoto.bind(this)}
        />
      </div>
    );
  }
}


ReactDom.render(<App />, document.getElementById('app'));
