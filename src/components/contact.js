/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

class Contact extends React.Component{
  state = {

  }

  render() {
    return(
      <ContactSection className="main-section">
          <h1>Get In Touch With Me</h1>
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <h2 className="form-title">
                Contact Me
              </h2>

              <div className="input-group">
                <label>Name: </label>
                <input type="text" placeholder="What should I call you..." />
              </div>

              <div className="input-group">
                <label>Email: </label>
                <input type="text" placeholder="Let me know how to contact you back..." />
              </div>

              <div className="input-group">
                <label>Message: </label>
                <textarea className="contact-message" placeholder="What would you like to tell me..."></textarea>
              </div>

              <div className="button-group">
                <input className="submit-button" type="button" value="Submit"/>
              </div>
            </form>
          </div>
      </ContactSection>
    )
  }
}

const ContactSection = styled.div`
  /* display: none; */
  height: 400px;
  background-color: rgb(38,38,38);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  h1 {
    margin-top: 20px;
  }

  div.contact-form-wrapper {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form.contact-form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 25px;

    h2 {
      margin-bottom: 20px;
    }

    div.input-group {
      display: flex;
      flex-direction: column;

      label {
        height: 25px;
        margin-top: 5px;
      }

      /* textarea */
      input {
        outline: none;
        border: none;
        color: white;
        height: 30px;
        padding: 5px;
        border-radius: 2px;
        background-color: rgb(38,38,38);

        &:focus {
          border-bottom: 2px solid white;
        }
      }
    }

    div.button-group {
      display: flex;
      justify-content: flex-end;

      input.submit-button {
        height: 35px;
        width: 100px;
        color: white;
        background-color: rgb(38, 38, 38);
        border: none;
        outline: rgb(245, 245, 245) solid;
        font-size: 15px;
        transition: background-color 0.5s;

        &:hover {
          background-color: rgb(245, 245, 245);
          color: black;
          font-weight: 600;
        }

      }
    }

    textarea {
      margin-bottom: 15px;
      outline: none;
      border: none;
      background-color: rgb(38,38,38);
      padding: 5px;
      height: 50px;
      color: white;

      &:focus {
          border-bottom: 2px solid white;
      }

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
`;



export default Contact;