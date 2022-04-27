import React from "react";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const rowHeight = 10;
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / rowHeight);

    this.setState({ spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
