import React from 'react';
import './App.css';
import ImageCard from './component/ImageCard'
import images from './images.json'
import Header from './component/Header';

class App extends React.Component {

  state = {
    images,
    count: 0,
    highCount: 0,
    remainingChar: images
  }

  picked = (id) => {
    const remaining = this.state.remainingChar.filter(char => char.id !== id)
    this.setState({ remainingChar: remaining })

    const chosenId = this.state.remainingChar.find(char => char.id === id)

    if (chosenId) {
      this.score()
      this.sortImages(images)
    } else {
      alert("You already picked that character! Try Again")
      this.setState({ count: 0 })
      this.setState({ remainingChar: images })
      this.sortImages(images)
    }
  }

  score = () => {

    this.setState({ count: this.state.count + 1 })
    
    if(this.state.count === 15){
      alert("You won! Play Again!")
      this.setState({ count: 0 })
      this.setState({ remainingChar: images })
    }
    if (this.state.count >= this.state.highCount) {
      this.setState({ highCount: this.state.highCount + 1 })
    }
  }

sortImages = (images) => {
  
  for(let i=(images.length)-1; i>0; i--){
   let j= Math.floor(Math.random()*(i+1));
   const x = images[i];
   images[i] = images[j]
   images[j] = x 
  }
  return images
}



  render() {

    return (
      <>

        <Header
          count={this.state.count}
          highCount={this.state.highCount}
        />

        <div className="cardWrapper">

          {this.state.images.map(image => (
            <ImageCard
              image={image.image}
              key={image.id}
              id={image.id}
              name={image.name}
              picked={this.picked}
              chosen={image.chosen}
            />
          ))}
        </div>

      </>
    );
  }
}

export default App;
