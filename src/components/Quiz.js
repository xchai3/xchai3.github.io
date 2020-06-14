import React,{Component} from 'react'
import PropTypes from 'prop-types';
import quizQuestions from "../api/quizQuestions";
// import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

//每一道题的容器： 标题+问题+选项
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
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }

    return (
        //  没用的样式变换
        // <CSSTransitionGroup
        //   className="container"
        //   component="div"
        //   transitionName="fade"
        //   transitionEnterTimeout={800}
        //   transitionLeaveTimeout={500}
        //   transitionAppear
        //   transitionAppearTimeout={500}
        // >

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
        // </CSSTransitionGroup>
    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
}
export default Quiz;
