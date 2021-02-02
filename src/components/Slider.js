import React, { Component } from "react";
import RentData from "../data/data.json";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import "./Slider.css";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }

  state = {
    currentIndex: 1,
    imageSize: 640,
    images: [],
  };

  componentDidMount() {
    this.setState(
      {
        images: RentData.filter((o) => o.id === this.props.id).map(
          (o) => o.pictures
        )[0],
      },
      () => {
        this.goTo(1);
      }
    );
  }

  prevSlide = () => {
    if (this.state.currentIndex <= 0) return;
    this.slider.current.style.transition = "transform 0.4s ease-in-out";
    this.setState({ currentIndex: this.state.currentIndex - 1 }, () =>
      this.goTo(this.state.currentIndex)
    );
  };

  nextSlide = () => {
    if (this.state.currentIndex > this.state.images.length) return;
    this.slider.current.style.transition = "transform 0.4s ease-in-out";
    this.setState({ currentIndex: this.state.currentIndex + 1 }, () =>
      this.goTo(this.state.currentIndex)
    );
  };

  handleSliderLoop = () => {
    if (this.state.currentIndex === 0) {
      this.slider.current.style.transition = "none";
      this.setState({ currentIndex: this.state.images.length }, () =>
        this.goTo(this.state.currentIndex)
      );
    }

    if (this.state.currentIndex > this.state.images.length) {
      this.slider.current.style.transition = "none";
      this.setState({ currentIndex: 1 }, () =>
        this.goTo(this.state.currentIndex)
      );
    }
  };

  goTo = (index) => {
    this.slider.current.style.transform =
      "translateX(" + -this.state.imageSize * index + "px)";
  };

  getCurrentSlideIndex = () => {
    return this.state.currentIndex < 1 ||
      this.state.currentIndex > this.state.images.length
      ? 1
      : this.state.currentIndex;
  };

  render() {
    return (
      <>
        <div className="slider-container">
          {this.state.images.length > 1 && (
            <>
              {" "}
              <img
                src={LeftArrow}
                alt="left-arrow"
                className="slider-button"
                id="prevBtn"
                onClick={this.prevSlide}
              />
              <img
                src={RightArrow}
                alt="right-arrow"
                className="slider-button"
                id="nextBtn"
                onClick={this.nextSlide}
              />
            </>
          )}
          <div
            className="slider"
            ref={this.slider}
            onTransitionEnd={this.handleSliderLoop}
          >
            <img
              src={this.state.images[this.state.images.length - 1]}
              id="lastClone"
              alt="sliderImage"
            />
            {this.state.images.map((image, index) => (
              <img src={image} alt="sliderImage" key={index} />
            ))}
            <img src={this.state.images[0]} id="firstClone" alt="sliderImage" />
          </div>
          <span className="slider-indicator">
            {this.getCurrentSlideIndex()}/{this.state.images.length}
          </span>
        </div>
      </>
    );
  }
}
