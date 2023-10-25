//src App.js file
import React, { Component } from 'react';
import './App.css';
//Methode state for class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Hamza Khaled',
        bio: 'Pre-Engineering student ',
        imgSrc: 'https://lh3.googleusercontent.com/a/ACg8ocJKWJCBsR0H-j5L6f5cL4rH-Zhjqz4QGOYwgurGPdlxzQ=s288-c-no',
        profession: 'Developpeur Fulstack',
      },
      // Button When the show state is true, the person's profile will appear.
      show: false,   
      mountedTime: new Date(),
      elapsedTime: 0,
    };
  }
//shows the time interval since the last component was mounted using the component
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000); // Update the elapsed time every second
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // Clear the interval to prevent memory leaks
  }
//button that toggles the show state
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button> 

        {show && (
          <div className="profile">
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>{profession}</p>
          </div>
        )}

        <p className="time">
          Mounted {elapsedTime} seconds ago.
        </p>
      </div>
    );
  }
}

export default App;
