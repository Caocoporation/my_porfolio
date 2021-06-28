/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

class AboutMe extends React.Component{
  state = {

  }

  render() {
    return(
      <AboutMeSection className="main-section">
        <div className="upper-section">
            <div className="infor-section">
                <div className="inner-infor-wrapper">
                    <div className="avatar">
                        <img className="my-avatar" src="my_avatar.jpeg" alt="my-avatar" />
                    </div>

                    <div className="inner-infor-section">
                        <img className="drawing-pin" src="drawing_pin.png" alt="none"/>
                        <h2>What I Do</h2>
                        <p> I build and develop websites with primary focus on Django and React</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="lower-section">
            <div className="more-about-me">
                <h2>About Me</h2>
                <p>Put .... here </p>
            </div>

            <div className="skills">
                <h2>Technical Skills</h2>
                <p 
                    style={{
                        marginTop: "10px",
                        marginBottom: "10px"
                    }}>
                        Fullstack web developer with primary focus on Django and React
                </p>
                <p style={{ marginBottom: "10px" }}>
                    Check out my resume for more information <span><a className="resume" href="#fsdf">View Resume</a></span>
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

    div.upper-section {
        display: flex;
        flex-direction: row;
        width: 80%;
        margin-top: 30px;
        background-color: yellowgreen;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 640px) {
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
        background-color: yellowgreen;
        width: 80%;

        @media only screen and (max-width: 640px) {
            width: 100%;
        }

        div.more-about-me {
            height: 180px;
            padding: 20px;
        }

        div.skills {
            padding: 20px;
            width: 100%;

            p {
                font-size: 18px;
            }

            span {
                background-image: linear-gradient(360deg, #cfcfcf 10%, #fcfcfc 55%);
                background-repeat: no-repeat;
                background-size: 100% 1px;
                background-position: 0% 100%;
                transition: background-size 0.5s;
                
                &:hover {
                    background-size: 100% 100%;
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

                    @media only screen and (max-width: 640px) {
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

                @media only screen and (max-width: 640px) {
                    flex-direction: column;
                }
            }
        }
    }
`;



export default AboutMe;