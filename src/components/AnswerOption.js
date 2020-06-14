import React from 'react';
import PropTypes from 'prop-types';

// 按钮与选项
function AnswerOption(props) {
    // console.log("option",props);
    return (
        <div>
            <li className="answerOption">
                <input
                    type="radio"
                    className="radioCustomButton"
                    name="radioGroup"
                    id={props.answerContent}
                    value={props.answerContent}
                    // disabled={props.answer}
                    onChange={props.onAnswerSelected}
                />
                {/*label 一定要用htmlFor 与id绑定*/}
                <label className="radioCustomLabel" htmlFor={props.answerContent}>
                    {props.answerContent}
                </label>
            </li>
        </div>
    );
}

AnswerOption.propTypes = {
    // answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
