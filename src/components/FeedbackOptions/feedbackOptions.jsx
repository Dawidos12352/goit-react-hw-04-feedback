import React from "react";
import PropTypes from "prop-types";
import css from "./feedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>
        {options.map((option) => {
          return (
            <button
              className={css.Btn}
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  };
  
  FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  
export default FeedbackOptions;

