import React from 'react';
import PropTypes from 'prop-types';


// 每个问题的标题：一共几个问题，现在是第几个问题
function QuestionCount(props) {
    return (
        <div className="questionCount">
            Question <span>{props.counter}</span> of <span>{props.total}</span>
        </div>
    );
}

QuestionCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default QuestionCount;
