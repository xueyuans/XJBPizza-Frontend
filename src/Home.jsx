import React from 'react';
import './css/App.css';
import Header from './Header';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      showRecommendation: false,
      showPayment: false,
    }
  }

  handleShowMenu = () => {
    const {showMenu} = this.state;
    this.setState({showMenu: !showMenu});
  }

  render() {
    const slogan = (
      <div className="slogan">
        <div>Eat Pizza</div>
        <div>Every</div>
        <div>Day</div>
      </div>
    )

    return (
      <div>
        <div className="background-pure background-pure-left"></div>
        <div className="background">
          <Header />
          {slogan}
        </div>
        <div className="background-pure background-pure-right"></div>
      </div>
    );
  }
}

export default Home;
