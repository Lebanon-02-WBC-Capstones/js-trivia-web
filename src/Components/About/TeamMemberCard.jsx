import React from "react";
// import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
/* eslint-disable react/prop-types */
function TeamMemberCard(props) {
  return (
    <div className="row row-cols-1 row-cols-xl-3 g-4 justify-content-center">
      {props.members.map((member, index) => {
        if (member.title !== "Team Leader") {
          return (
            <div className="col-md-4">
              <div className="col-md-9 mx-auto">
                <div className="card mt-5" id={index}>
                  <div className="card-body">
                    <img src={member.image} width="100%" height="100%"></img>
                    <h5 className="card-title text-dark">
                      <small>{member.name}</small>
                    </h5>
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
                    {"            "}
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
            </div>
          );
        }
      })}
    </div>
  );
}

export default TeamMemberCard;
