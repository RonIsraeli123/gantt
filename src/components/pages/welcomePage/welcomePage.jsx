import React, { Component } from 'react';
import '../../../App.css';
import Configs from './configurations.json';

import ParticlesBg from 'particles-bg'
import Button from '@material-ui/core/Button';
import {
  Link
} from 'react-router-dom';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkBackgroundModes: [
        'day',
        'terminal',
        'torquoise',
        'alizarin',
        'amythyst',
        'carrot',
        'peterriver'
      ],
      lightBackgroundModes: [
        'night',
        'lightred',
        'lightpurple',
        'lightgreen',
        'lightblue',
        'lightyellow'
      ],
      backgroundType: Configs.backgroundType || 'plain',
      appClass: Configs.plainBackgroundMode || 'daylight',
      devIntro: Configs.devIntro || 'Lorem Ipsum',
      devDesc:
        Configs.devDesc ||
        'Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.',
      backgroundMode: 'default',
      backgroundIndex: 0,
      bgStyle: {},
    };
  }

  componentWillMount = () => {

  };

  render() {
    const {
      appClass, bgStyle, backgroundMode, devIntro, devDesc
    } = this.state;

    return (
      <div className={appClass} style={bgStyle}>
        <div
          className={backgroundMode}
        >
          <main className="App-main">
            <ParticlesBg type="circle" bg={true} />
            <div className="container">
              <h1 className="intro">{devIntro}</h1>
              <div className="shell">Real Time Estimation</div>
              <div className="tagline">
                <div>{devDesc}</div>
              </div>
              <div className='buttonGroup'>
                <Button component={Link} to="/form" variant="contained" color="secondary">start add tasks!</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default LandingPage;
