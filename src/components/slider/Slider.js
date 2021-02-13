import React, { Component } from "react";
import SliderContent from "./SliderContent";
import "./Slider.css";
import Slide from "./Slide";
import Arrow from "./Arrow";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }
  state = {
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
    slideWidth: 0,
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      slideWidth: this.slider.current.offsetWidth,
    });
    this.slider.current.addEventListener("resize", this.handleResize);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      ...this.state,
      translate: this.state.activeSlide * this.getWidth(),
      transition: 0,
    });
  };

  nextSlide = () => {
    if (this.state.activeSlide === this.props.slides.length - 1) {
      return this.setState({
        ...this.state,
        translate: 0,
        activeSlide: 0,
        transition: 0,
      });
    }

    this.setState({
      ...this.state,
      activeSlide: this.state.activeSlide + 1,
      translate: (this.state.activeSlide + 1) * this.getWidth(),
      transition: 0.45,
    });
  };

  prevSlide = () => {
    if (this.state.activeSlide === 0) {
      return this.setState({
        ...this.state,
        translate: (this.props.slides.length - 1) * this.getWidth(),
        activeSlide: this.props.slides.length - 1,
        transition: 0,
      });
    }

    this.setState({
      ...this.state,
      activeSlide: this.state.activeSlide - 1,
      translate: (this.state.activeSlide - 1) * this.getWidth(),
      transition: 0.45,
    });
  };

  getWidth = () => {
    return this.state.slideWidth;
  };

  getCurrentSlideIndex = () => {
    return this.state.activeSlide < 1 ||
      this.state.activeSlide > this.props.slides.length
      ? 1
      : this.state.activeSlide + 1;
  };

  // Autoplay
  // componentDidMount() {
  //   setInterval(this.nextSlide, 3000);
  // }

  render() {
    const { translate, transition } = this.state;

    return (
      <div className="slider" ref={this.slider}>
        <SliderContent
          translate={translate}
          transition={transition}
          width={this.getWidth() * this.props.slides.length}
        >
          {this.props.slides.map((slide, i) => (
            <Slide key={slide + i} content={slide} />
          ))}
        </SliderContent>
        <Arrow direction="left" handleClick={this.prevSlide} />
        <Arrow direction="right" handleClick={this.nextSlide} />
        <span className="slider-indicator">
          {this.getCurrentSlideIndex()}/{this.props.slides.length}
        </span>
      </div>
    );
  }
}
