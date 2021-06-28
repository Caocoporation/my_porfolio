/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

class MyProjects extends React.Component{
  state = {

  }

  render() {
    return(
      <ProjectSection className="main-section">
          <h1>My Projects</h1>
          <div className="my-projects">
              <div>
                  <img className="e-commerce-website" src="e_commerce_website.jpeg" alt="error" />
                  <b className="project-name">Online Store</b>
                  <p className="project-description">Description</p>
                  <span>
                    <a href="p1">Read More >></a>
                  </span>
              </div>
                 
              <div>
                <img className="real-time-chat" src="real_time_chat.png" alt="error" />
                <b className="project-name">Real Time Chat App</b>
                <p className="project-description">Real time chat app with many useful functions like modern social media website like facebook, zalo, linkedln. Users can create chatroom and invite others to form group chats </p>
                <span>
                  <a href="p1">Read More >></a>
                </span>
              </div>

              <div>
                <img className="weather-forecast-app" src="weather_forecast_website.jpg" alt="error" />
                <b className="project-name">Weather Forecast App</b>
                <p className="project-description">
                  ST. PETERSBURG, Fla. (AP) -- Nearly three years before an oceanfront building collapsed near Miami, an engineering firm estimated that major repairs the building needed would cost more than $9 million, according to newly released emails.

                  The email from the firm of Morabito Consultants was among a series of documents released by the city of Surfside as rescue efforts continued at the site of the collapsed building, where more than 150 people remained unaccounted for. At least five people were killed in the collapse.
                </p>
                <span>
                  <a href="p1">Read More >></a>
                </span>
              </div>
          </div>
      </ProjectSection>
    )
  }
}

const ProjectSection = styled.div`
  background-color: rgb(38, 38, 38);
  /* padding: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: white;
    margin-top: 20px;
  }

  div.my-projects {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 100%;
    /* align-items: center; */
    justify-content: center;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      /* align-items: center; */
      width: 100%;
    }

    img {
      height: 250px;
      width: 100%;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    span {
      background-image: linear-gradient(360deg, #403c3c 10%, #000000 55%);
      background-repeat: no-repeat;
      background-size: 0 100%;
      background-position: 0% 100%;
      transition: background-size 0.5s;
      /* border: 2px solid black; */

      &:hover {
        background-size: 100% 100%;
      }

      a {
        color: black;
        font-weight: 600;
        text-decoration: none;

        &:hover {
          color: white;
        }
      }
    }

    div {
      width: 280px;
      margin: 10px;
      padding: 15px;
      background-color: white;
      border-radius: 5px;
      color: black;

      /* transition: width 0.5s, height 0.5s; */

      @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 90%;
        margin-bottom: 20px;
      }

      b.project-name {
        font-size: 20px;
        /* background-color: aquamarine; */
      }

      p.project-description {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        overflow-y: scroll;
        max-height: 150px;
        border-top: 5px solid black;
        padding-top: 3px;
        padding-right: 3px;

        &::-webkit-scrollbar {
          width: 3px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: gray;
          border-radius: 50px;
        }

        &::-webkit-scrollbar-track {
          background-color: white;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default MyProjects;