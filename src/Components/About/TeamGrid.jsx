import React from "react";
// import { Row, Col } from "react-bootstrap";
// import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
// import TeamMemberCard from "./TeamMemberCard";
import TeamMembers from "./TeamMembers";
import "bootstrap/dist/css/bootstrap.min.css";
function TeamGrid() {
  return (
    <>
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img
                  src={TeamMembers[0].image}
                  width="100%"
                  height="100%"
                ></img>
                <h5 className="card-title text-dark">{TeamMembers[0].name}</h5>
                <p className="card-text text-dark">
                  <small>{TeamMembers[0].title}</small>
                </p>
                <a href={TeamMembers[0].linkedInLink}>
                  <img
                    src="https://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png"
                    width="10%"
                    height="10%"
                  ></img>
                </a>
                <a href={TeamMembers[0].githubLink}>
                  <img
                    src="https://major.io/wp-content/uploads/2014/08/github-150x150.png"
                    width="10%"
                    height="10%"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-xl-3 g-4">
          {TeamMembers.map((member, index) => {
            if (member.title !== "Team Leader") {
              return (
                <div className="col-md-4">
                  <div className="card mt-5" id={index}>
                    <div className="card-body">
                      <img src={member.image} width="100%" height="100%"></img>
                      <h5 className="card-title text-dark">{member.name}</h5>
                      <p className="card-text text-dark">
                        <small>{member.title}</small>
                      </p>
                      <a href={member.linkedInLink}>
                        <img
                          src="https://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png"
                          width="10%"
                          height="10%"
                        ></img>
                      </a>
                      <a href={member.githubLink}>
                        <img
                          src="https://major.io/wp-content/uploads/2014/08/github-150x150.png"
                          width="10%"
                          height="10%"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </Container>
    </>
  );
}

export default TeamGrid;
