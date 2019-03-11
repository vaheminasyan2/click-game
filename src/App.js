import React, { Component } from "react";
import ImageCard from "./components/ImageCard/imageCard";
import Wrapper from "./components/Wrapper/wrapper";
import Title from "./components/Title/title";
import Navbar from "./components/Navbar/navbar";
import Main from "./components/Main/main";
//import Col from "./components/Col/col";
import Row from "./components/Row/row";
import Footer from "./components/Footer/footer";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    score: 0,
    topScore: 0,
    userArr:[],
  };

  shuffleImages = (image) => {
    //console.log(image.id);
    if (!this.state.userArr.includes(image.id)){
      this.state.userArr.push(image.id);
      this.setState({score: this.state.score +1});
      if (this.state.topScore<=this.state.score) {
        this.setState({topScore: this.state.topScore +1})
      }
    }

    else {
      this.setState({score: 0});
      this.setState({userArr:[]})
    }

    
  
    const a = this.state.images;
    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    // Set this.state.images equal to the new images array
    this.setState({ a });

    
  };

  // Map over this.state.images and render a ImageCard component for each images object
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Title
          score={this.state.score}
          topScore={this.state.topScore}>
        </Title>
        <Main>
          <Row>
            {this.state.images.map(image => (
              <ImageCard
                shuffleImages={this.shuffleImages}
                id={image.id}
                key={image.id}
                image={image.image}
              />
            ))}
          </Row>
        </ Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;

