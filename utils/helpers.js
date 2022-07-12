module.exports = {
    // helper'format_time'= take a timestamp and return a string
    format_time: (date) => {
        //'toLocaleTimeString()' method to format the time 
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        });
    },
    //cuts content down for front page/index
    format_summary: (content) => {
        if (content.length > 300) {
            return content.substring(0, 300) + "...";
        } else {
            return content;
        }
    },
};
