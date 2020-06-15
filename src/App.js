import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
// import logo from './svg/logo.svg';
import './App.css';

class App extends Component {
    state = {
        counter: 0,
        questionId: 1,
        question: '',
        answerOptions: [],
        final :[],
        choose: false
    };

    componentDidMount() {
        const Options = quizQuestions.map(question =>
            question.answers
        );
        this.setState({
            //initial
            question: quizQuestions[0].question,
            answerOptions: Options[0]
        });
        console.log("choose",this.state.answerOptions);
    }

    /*** What is this ***/
    handleAnswerSelected=(event)=> {
        console.log("event",event.currentTarget);
        this.setUserAnswer(event.currentTarget.value);
        this.setState({
            choose:true
        })
    }
    nextStep=()=>{
        this.setNextQuestion=this.setNextQuestion.bind(this)
        if (this.state.questionId < quizQuestions.length) {

            setTimeout(() => this.setNextQuestion(), 300);
        }
        else {
            // already get to the last question
            const questionId = this.state.questionId + 1;
            this.setState({questionId:questionId})
        }
    }

    setUserAnswer =(param)=> {
        const len=this.state.final.length;
        if(len=== this.state.counter) {
            this.setState({
                    final: [...this.state.final, param]
                }
            );
        }
        else
        {
            const array=[...this.state.final];
            array.splice(this.state.counter,1);
            console.log("test",array);
            this.setState({
                    final: [...array,param]
                }
            );
        }
    }

    setNextQuestion=()=> {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            //设置问题和选项
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            choose:false
        });
    }


    renderQuiz() {
        return (
            <Quiz
                // answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
                nextStep={this.nextStep}
                choose={this.state.choose}
            />
        );
    }

    renderResult() {
        return <Result/>;
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                {this.state.questionId>quizQuestions.length ? this.renderResult() : this.renderQuiz()}
                </div>
            </div>
        );
    }
}

export default App;
