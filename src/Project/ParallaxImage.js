import React from 'react';
import './ParallaxImage.scss';

class ParallaxImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll(); // Initial calculation
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.ticking) {
      cancelAnimationFrame(this.ticking);
    }
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = requestAnimationFrame(() => {
        this.updateParallax();
        this.ticking = null;
      });
    }
  };

  updateParallax = () => {
    if (this.containerRef.current) {
      const rect = this.containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress (0 to 1)
      const scrollProgress = 1 - (containerTop / windowHeight);

      this.setState({ scrollY: scrollProgress });
    }
  };

  render() {
    const { layers, className = '' } = this.props;
    const { scrollY } = this.state;

    return (
      <div
        ref={this.containerRef}
        className={`parallax-container ${className}`}
      >
        {layers.map((layer, index) => {
          // Each layer moves at different speed
          // Reduced multiplier for smoother, subtler effect
          const speed = layer.speed || (index * 0.5);  // Was 0.3
          const translateY = scrollY * speed * 50;  // Was 100

          return (
            <div
              key={index}
              className={`parallax-layer ${layer.className || ''}`}
              style={{
                transform: `translate3d(0, ${translateY}px, 0)`,  // Use translate3d for GPU
                zIndex: index
              }}
            >
              <img
                src={layer.src}
                alt={layer.alt || `Layer ${index + 1}`}
                className={layer.imgClassName || ''}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ParallaxImage;
