import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import Placeholder from './Placeholder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div className="App-intro">
            <button onClick={() => this.openModal()}>Open Modal </button>
            <Modal backdropStyle={{background:'rgba(100,0,0,0.3)'}} width={400} height={300} isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} >
              <h1>Modal title</h1>
              <p>hello</p>
              <p><button onClick={() => this.closeModal()}>Close</button></p>
              <Placeholder name='Able' />
            </Modal>
          </div>
      </div>
    );
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }
}

export default App;
