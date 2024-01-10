import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import axios from "axios";

const Form = () => {
  const options = ["Regularly", "Occasionaly"];
  const navigate = useNavigate();
  const [foodRating, setFoodRating] = useState(5);
  const [experienceRating, setExperienceRating] = useState(4);
  const [serviceRating, setServiceRating] = useState(2);

  // const [foodRating, setFoodRating] = useState("");
  // const [experienceRating, setExperienceRating] = useState("");
  // const [serviceRating, setServiceRating] = useState("");

  const [suggestion, setsuggestion] = useState("");
  const [visitOption, setVisitOption] = useState("regulary");
  const [recommandResturant, setRecommandResturant] = useState(false);
  const [followUp, setFollowUp] = useState(false);

  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="yellow"
      height={24}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (suggestion.length === 0) {
      alert("Type something");
    } else {
      const feedbackData = {
        visitOption,
        foodRating,
        serviceRating,
        experienceRating,
        recommandResturant,
        suggestion,
        followUp,
      };

      axios
        .post("http://localhost:7777/feedback", feedbackData)
        .then(() => {
          navigate("/welcome");
        })
        .catch((error) => {
          console.error("Error in Axios request:", error);
        });
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="logo">
          <img src={logo} height={35} width={35} />
        </div>
        <h2 className="heading">UNIWELL</h2>
        <img
          src="https://plus.unsplash.com/premium_photo-1686090448301-4c453ee74718?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="backgroundImage"
          height={20}
        />

        <p className="subHeading">HELLO, THANKS FOR visitOptionING</p>
        <p>
          Please help us improve our cafe services by filling in our feedback
          form, Thank you!
        </p>

        <p className="subHeading">HOW OFTEN DO YOU visitOption HERE?</p>

        <select onChange={(e) => setVisitOption(e.target.value)}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <p className="subHeading">QUALITY OF THE FOOD</p>

        {[...Array(5)].map((_, index) => (
          <StarIcon
            value={foodRating}
            key={index}
            // onClick={() => setFoodRating(index + 1)}
             onClick={() => setFoodRating(foodRating)}
          />
        ))}
        <p className="subHeading">SERVICE QUALITY</p>
        {[...Array(5)].map((_, index) => (
          <StarIcon
            value={serviceRating}
            // onClick={() => setServiceRating(index + 1)}

            onClick={() => setServiceRating(serviceRating)}
          />
        ))}
        <p className="subHeading">OVERALL EXPERIENCE</p>
        {[...Array(5)].map((_, index) => (
          <StarIcon
            value={experienceRating}
            // onClick={() => setExperienceRating(index + 1)}
             onClick={() => setExperienceRating(experienceRating)}
          />
        ))}
        <p className="subHeading">
          WOULD YOU recommandResturant OUR RESTAURANT TO OTHERS?
        </p>
        <div className=" flex">
          <label>
            <input
              type="radio"
              name="yesOrNo"
              value="YES"
              onClick={() => {
                setRecommandResturant(true);
              }}
            />
            YES
          </label>
          <label>
            <input
              type="radio"
              name="yesOrNo"
              value="NO"
              onClick={() => {
                setRecommandResturant(false);
              }}
            />
            NO
          </label>
        </div>
        <p className="subHeading">YOUR SUGGESTION TO IMPROVE</p>
        <textarea
          type="textarea"
          rows={5}
          value={suggestion}
          onChange={(e) => {
            setsuggestion(e.target.value);
          }}
        ></textarea>

        <div>
          <div className="checkBoxContainer ">
            <input
              type="checkbox"
              checked={followUp} 
              onChange={() => setFollowUp(!followUp)}
            />

            <p className="checkBoxContainer">
              RECEIVE PERSONAL FOLLOW UP TO YOUR FEEDBACK
            </p>
          </div>
        </div>
        <button type="submit">SUMBIT FEEDBACK</button>
      </form>
    </div>
  );
};

export default Form;
