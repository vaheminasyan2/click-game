import React, { Component } from "react";
import ImageCard from "./components/ImageCard/imageCard";
import Wrapper from "./components/Wrapper/wrapper";
import Title from "./components/Title/title";
import Navbar from "./components/Navbar/navbar";
import Main from "./components/Main/main";
//import Col from "./components/Col/col";
import Row from "./components/Row/row";
import Footer from "./components/Footer/footer";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };



  shuffleFriends = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const a = this.state.friends;
    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    // Set this.state.friends equal to the new friends array
    this.setState({ a });
  };




// Map over this.state.friends and render a ImageCard component for each friend object
render() {
  return (
    <Wrapper>
      <Navbar />
      <Title></Title>
      <Main>
        <Row>
          {this.state.friends.map(friend => (
            <ImageCard
              shuffleFriends={this.shuffleFriends}
              id={friend.id}
              key={friend.id}
              image={friend.image}
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

