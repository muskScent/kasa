import React, { Component } from "react";
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
    images: [
      "../assets/images/slide-1.jpg",
      "../assets/images/slide-2.jpg",
      "../assets/images/slide-3.jpg",
      "../assets/images/slide-4.jpg",
      "../assets/images/slide-5.jpg",
    ],
  };

  componentDidMount() {
    this.slider.current.style.transform =
      "translateX(" + -this.state.imageSize * this.state.currentIndex + "px)";
  }

  prevSlide = () => {
    if (this.state.currentIndex <= 0) return;
    this.slider.current.style.transition = "transform 0.4s ease-in-out";
    this.state.currentIndex--;
    this.slider.current.style.transform =
      "translateX(" + -this.state.imageSize * this.state.currentIndex + "px)";
    console.log(this.state.currentIndex);
  };

  nextSlide = () => {
    if (this.state.currentIndex > this.state.images.length) return;
    this.slider.current.style.transition = "transform 0.4s ease-in-out";
    this.state.currentIndex++;
    this.slider.current.style.transform =
      "translateX(" + -this.state.imageSize * this.state.currentIndex + "px)";
    console.log(this.state.currentIndex);
  };

  handleSliderLoop = () => {
    if (this.state.currentIndex === 0) {
      this.slider.current.style.transition = "none";
      this.state.currentIndex = this.state.images.length;
      this.slider.current.style.transform =
        "translateX(" + -this.state.imageSize * this.state.currentIndex + "px)";
    }

    if (this.state.currentIndex > this.state.images.length) {
      this.slider.current.style.transition = "none";
      this.state.currentIndex = 1;
      this.slider.current.style.transform =
        "translateX(" + -this.state.imageSize * this.state.currentIndex + "px)";
    }
  };

  render() {
    return (
      <>
        <div className="slider-container">
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
            {this.state.images.map((image) => (
              <img src={image} alt="sliderImage" />
            ))}
            <img src={this.state.images[0]} id="firstClone" alt="sliderImage" />
          </div>
        </div>
      </>
    );
  }
}
