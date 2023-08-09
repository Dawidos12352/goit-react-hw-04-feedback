import React from "react";
import propTypes from "prop-types";
import css from "./notification.module.css"

const Notification = ({message}) => (
    <p className={css.message}>{message}</p>
);

Notification.propTypes = {
    message: propTypes.string.isRequired,
};

export default Notification;