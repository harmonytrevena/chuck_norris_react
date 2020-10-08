import React from "react";
import "./ChuckQuote.css";

const ChuckQuote = (props) => {
    const { quoteData } = props;
    return (
        <p>{quoteData}</p>
    );
}
export default ChuckQuote;