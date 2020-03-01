import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import Card from './Card'

const CardsContainer = () => {
  return (
      <MDBRow>
        <MDBCol className="px-0">
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-5">
                <MDBRow>
                  {[3,3,3,3,3,3,3,3].map(val => {
                    return <Card key={val + Math.random()} />
                  })}
                </MDBRow>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
  )
}

export default CardsContainer;