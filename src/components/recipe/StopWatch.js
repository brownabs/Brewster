
import React, { Component } from 'react'

export default class StopWatch extends Component {

  state = {
    time: 0,
    isOn: false,
    start: 0,
  }

  //will be called when the timer is started or resumed
  startTimer = () => {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now() - this.state.start
      })
    }, 10)
  }

  //function for stop
  stopTimer = () => {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }

  //function for reset
  resetTimer = () => {
    this.setState({
      start: 0,
      time: 0
    })
  }


  render() {


    const { time } = this.state;
    //Math.floor() returns the largest integer less than or equal to a given number
    
    //10 represents 1/100th of a second
    let centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);

    //1000 represents 1/60th of a minute
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);

    // 60000 represents 1/60th of an hour
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);

    //3600000 doesn't need a modulus if <100 hours
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2);

    return (
      <React.Fragment>
        <div className="Stopwatch">
          <div className="Stopwatch-header">Boil Timer</div>
          <div className="Stopwatch-display">
            {hours} : {minutes} : {seconds} : {centiseconds}
          </div>
          {this.state.isOn === false && this.state.time === 0 && (
            <button className="stopwatchbutton" onClick={this.startTimer}>Start</button>
          )}
          {this.state.isOn === true && (
            <button className="stopwatchbutton" onClick={this.stopTimer}>Stop</button>
          )}
          {this.state.isOn === false && this.state.time > 0 && (
            <button className="stopwatchbutton" onClick={this.startTimer}>Resume</button>
          )}
          {this.state.isOn === false && this.state.time > 0 && (
            <button className="stopwatchbutton" onClick={this.resetTimer}>Reset</button>
          )}
        </div>

      </React.Fragment>
    )
  }
}



