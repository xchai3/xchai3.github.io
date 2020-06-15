import React,{Component} from 'react'
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


function Quiz(props) {

    function ToContinue(e){
        e.preventDefault();
        props.nextStep();
    }
    //生成每一个选项
    function renderAnswerOptions(key) {
        console.log("key",key);
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.content}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Sports: What say you?"/>
                <QuestionCount counter={props.questionId} total={props.questionTotal} />
                <Question content={props.question} />
                <ul className="answerOptions">
                    {props.answerOptions.map(renderAnswerOptions)}
                </ul>
                <div className="ContinueButton">
                <RaisedButton
                    label="Continue"
                    id="nStep"
                    primary={true}
                    onClick={ToContinue}
                    disabled={!props.choose}
                />
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    );
}

Quiz.propTypes = {
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
}
export default Quiz;
