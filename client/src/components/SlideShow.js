import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const SlideShow = () => {
  return (
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1" className="viewHeight">
          <MDBView>
            <img
              className="d-block w-100 viewHeight"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2" className="viewHeight">
          <MDBView>
            <img
              className="d-block w-100 viewHeight"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3" className="viewHeight">
          <MDBView>
            <img
              className="d-block w-100 viewHeight"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default SlideShow;