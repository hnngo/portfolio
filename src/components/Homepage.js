import React, { Component } from 'react';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeaderTitle: false,
      showName: false,
      showDescript: false,
      showBtn: false,
    };
  }

  componentDidMount() {
    // Set interval for typing action here
    setTimeout(() => this.setState({
      showHeaderTitle: true,
    }, () => {
      setTimeout(() => this.setState({
        showName: true,
      }, () => {
        setTimeout(() => this.setState({
          showDescript: true,
        }, () => {
          setTimeout(() => this.setState({
            showBtn: true,
          }), 1000);
        }), 800);
      }), 1000);
    }), 1000);
  }


  renderTitle() {
    if (this.state.showHeaderTitle) {
      return (
        <div>
          <div className="d-flex">
            <h6 className="h-hi animated bounceInDown">Hi</h6>
            {
              this.state.showName ?
                <h6 className="h-name animated slideInRight">, I'm Nhan Ngo</h6> : <div />
            }
          </div>
          <div>
            {
              this.state.showDescript ?
                <h6 className="h-des animated fadeInUp slow">A self-taught front-end developer based in Singapore who is ambitious about web development and UI/UX design.</h6> : <div />
            }
          </div>
        </div>

      );
    } else {
      return <div />;
    }
  }

  renderBtn() {
    if (this.state.showBtn) {
      return (
        <div className="h-btn">
          <div className="h-about animated tada">About me</div>
          <div className="h-portfolio animated tada">Portfolio</div>
        </div>
      );
    } else {
      return <div />
    }
  }

  render() {
    return (
      <div className="h-container">
        <div className="h-header">
          {/* {this.renderHeaderTyping()} */}
          {this.renderTitle()}
          {this.renderBtn()}
        </div>
      </div>
    );
  }
}
