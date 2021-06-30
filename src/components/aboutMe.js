/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import ResumeViewer from "./resume";

class AboutMe extends React.Component{
  state = {
    isClose: true,
    isButton: false,
  }

  openResumeModal = () => {
    this.setState({ 
        isClose: !this.state.isClose,
        isButton: !this.state.isButton
    });
  }

  gotoLinkedProfile = () => {
    window.open(
        "https://www.linkedin.com/in/cao-le-74ba181b9",
        "_blank"
    )
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <AboutMeSection className="main-section">
        {(() => {
            return this.state.isClose ? <div></div> :  <ResumeViewer />
        })()}

        {(() => {
            return this.state.isButton ? <div className="close-btn" onClick={this.openResumeModal}>X</div> : <div></div>
        })()}

        <div className="upper-section">
            <div className="infor-section">
                <div className="inner-infor-wrapper">
                    <div className="avatar">
                        <img className="my-avatar" src="my_avatar.jpeg" alt="my-avatar" />
                    </div>

                    <div className="inner-infor-section">
                        <img className="drawing-pin" src="drawing_pin.png" alt="none"/>
                        <h2>What I Do</h2>
                        <hr />
                        <p> I have built and developed websites and apps with primary focus on Django and React</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="lower-section">
            <div className="more-about-me">
                <div className="left-side">
                    <h2>About Me</h2>
                    <hr />
                    <p>
                        I'm Cao Le. A detail-oriented websites and apps developer with primary focus on Django and React. 
                    </p>

                    <p>
                        I've built, developed and designed websites for my personal projects and freelance projects with commonly-used development tools. 
                    </p>

                    <p>
                        Currently, I'm still looking for a web or app development job.
                    </p>
                </div>

                <div className="right-side">
                    <h2>Find Me</h2>
                    <hr />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "5px"
                    }}>
                        <b>View my profile on Linkedln: </b>
                        <span className="view-linkedln-profile" onClick={this.gotoLinkedProfile}>Click here</span>
                    </div>
                </div>

            
            </div>

            <div className="skills">
                <h2>Top Expertise</h2>
                <hr />
                <p 
                    style={{
                        marginTop: "10px",
                        marginBottom: "10px"
                    }}>
                        Fullstack web developer with primary focus on Django and React
                </p>
                <p style={{ marginBottom: "10px" }}>
                    Check out my resume for more information <span onClick={this.openResumeModal}>View Resume</span>
                </p>
                <div className="technical-skills">
                    <nav>
                        <img className="drawing-pin" src="drawing_pin.png" alt="none"/>
                        <ul>
                            <li><img src="star_icon.png" alt="star" />Python Programing</li>
                            <li><img src="star_icon.png" alt="star" />Django</li>
                            <li><img src="star_icon.png" alt="star" />Javascript</li>
                            <li><img src="star_icon.png" alt="star" />React</li>
                            <li><img src="star_icon.png" alt="star" />MySQL, Postgres</li>
                        </ul>
                    </nav>

                    <nav>
                        <img className="drawing-pin" src="drawing_pin.png" alt="none"/>
                        <ul>
                            <li><img src="star_icon.png" alt="star" />Git and Github</li>
                            <li><img src="star_icon.png" alt="star" />HTML/CSS</li>
                            <li><img src="star_icon.png" alt="star" />AWS</li>
                            <li><img src="star_icon.png" alt="star" />Heroku</li>
                            <li><img src="star_icon.png" alt="star" />Google Maps API</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
       

      </AboutMeSection>
    )
  }
}

const AboutMeSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(38,38,38);

    div.close-btn {
        top: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 10px;
        height: 30px;
        width: 30px;
        outline: white solid 2px;
        color: white;
        background-color: rgb(38, 38, 38);
        border: none;
        transition: background-color 0.5s;
        z-index: 1;

        &:hover {
            color: black;
            font-weight: 600;
            cursor: pointer;
            background-color: whitesmoke;
        }
    }

    div.upper-section {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 30px;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 768px) {
            width: 100%;
        }

        div.infor-section {
            display: flex;
            justify-content: flex-end;
            width: 450px;
            /* background-color: yellowgreen; */
            height: 250px;

            div.inner-infor-wrapper {
                display: flex;
                justify-content: flex-end;
                width: 100%;
                height: 100px;
                margin-top: 80px;
                background-color: white;
                border-radius: 5px;;

                div.avatar {
                    height: 200px;
                    width: 200px;
                    background-color: transparent;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 7px 7px 10px grey;
                    position: absolute;
                    left: 10px;
                    top: -55px;
                    
                    img.my-avatar {
                        height: 100%;
                        width: 100%;
                        border-radius: 5px;
                    }
                }
                            
                div.inner-infor-section {
                    background-color: white;
                    color: black;
                    width: 50%;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    /* align-items: center; */
                    flex-direction: column;
                    padding: 5px;
                    border-radius: 5px;

                    h2 {
                        margin-bottom: 5px;
                    }

                    img.drawing-pin {
                        width: 50px;
                        height: 50px;
                        position: absolute;
                        top: -15px;
                        right: -15px;
                    }
                }

            }
            
            @media only screen and (max-width: 768px) {
                margin-left: 0px;
            }
        }
    }

    div.lower-section {
        width: 100%;

        @media only screen and (max-width: 768px) {
            width: 100%;
        }

        div.more-about-me {
            padding: 20px;
            display: flex;
            flex-direction: row;
            
            div.left-side {
                width: 50%;
                height: auto;
                transition: all 0.5s;

                p {
                    margin-top: 5px;
                }

                @media only screen and (max-width: 768px) {
                    margin-left: 0px;
                    margin-top: 25px;
                    width: 100%;
                }
            }

            div.right-side {
                width: 50%;
                padding-left: 20px;
                transition: all 0.5s;

                span.view-linkedln-profile {
                    background-image: linear-gradient(360deg, #cfcfcf 10%, #fcfcfc 55%);
                    background-repeat: no-repeat;
                    background-size: 100% 1px;
                    background-position: 0% 100%;
                    transition: background-size 0.5s;
                    width: fit-content;
                    font-size: 16px;
                    cursor: pointer;
                    font-weight: 900;
                    margin-top: 10px;
                    
                    &:hover {
                        color: black;
                        background-size: 100% 100%;
                    }
                }

                @media only screen and (max-width: 768px) {
                    padding-left: 0px;
                    margin-top: 25px;
                    width: 100%;
                }
            }

            @media only screen and (max-width: 768px) {
                flex-direction: column;
            }
        }

        div.skills {
            padding: 20px;
            width: 100%;
            display: flex;
            flex-direction: column;

            /* p {
                font-size: 18px;
            } */

            span {
                background-image: linear-gradient(360deg, #cfcfcf 10%, #fcfcfc 55%);
                background-repeat: no-repeat;
                background-size: 100% 1px;
                background-position: 0% 100%;
                transition: background-size 0.5s;
                font-size: 19px;
                font-weight: 900;
                cursor: pointer;
                
                &:hover {
                    background-size: 100% 100%;
                    color: black;
                }
            }

            a.resume {
                text-decoration: none;
                font-weight: 600;
                color: white;


                &:hover {
                    color: black;
                }
            }

            div.technical-skills {
                display: flex;
                margin-top: 35px;
                margin-bottom: 20px;
                align-items: center;
                justify-content: left;
                width: 100%;
                color: black;
            
                
                nav {
                    background-color: white;
                    margin-left: 10px;
                    width: 40%;
                    padding: 20px 10px 10px 10px;
                    position: relative;
                    border-radius: 5px;

                    img.drawing-pin {
                        width: 50px;
                        height: 50px;
                        position: absolute;
                        top: -18px;
                        right: -18px;
                    }

                    @media only screen and (max-width: 768px) {
                        width: 100%;
                        margin-bottom: 20px;
                    }
                }

                ul {
                    list-style: none;

                    li {
                        max-height: 50px;
                        font-weight: 600;
                        font-size: 20px;
                        margin-bottom: 3px;
                        display: flex;
                        justify-content: left;
                        align-items: center;

                        img {
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            margin-right: 5px; 
                        }

                    }
                }

                @media only screen and (max-width: 768px) {
                    flex-direction: column;
                }
            }
        }
    }
`;



export default AboutMe;