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
        answer: '',
        answersCount: {},
        result: '',
        final :[],
        choose: false
    };

    componentDidMount() {
        //创造一个字典
        const Options = quizQuestions.map(question =>
            question.answers
        );
        this.setState({
            //初始状态
            question: quizQuestions[0].question,
            // answerOptions: shuffledAnswerOptions[0]
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
        // if (this.state.questionId < quizQuestions.length) {
        //     setTimeout(() => this.setNextQuestion(), 300);
        // } else {
        //     // already get to the last question
        //     setTimeout(() => this.setResults(this.getResults()), 300);
        // }
    }
    nextStep=()=>{
        this.setNextQuestion=this.setNextQuestion.bind(this)
        if (this.state.questionId < quizQuestions.length) {

            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            // already get to the last question
            setTimeout(() => this.setResults(this.getResults()), 300);
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
            answer: '',
            choose:false
        });
    }

    getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map(key => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);
        console.log("test answer: ",this.state.answer);
        return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
    }

    setResults(result) {
        if (result.length === 1) {
            this.setState({ result: result[0] });
        } else {
            this.setState({ result: 'Undetermined' });
        }
    }

    renderQuiz() {
        // if(this.state.result)
        //   console.log("oo");
        // else{
        //   console.log('ya');
        // // }
        // console.log("this State",this.state);
        return (
            <Quiz
                answer={this.state.answer}
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
//Guess 如果state.result 不是null那么 返回 Result
    render() {
        return (
            <div className="App">
                <div className="container">
                {/*<div className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*</div>*/}
                {this.state.result ? this.renderResult() : this.renderQuiz()}
                </div>
            </div>
        );
    }
}

export default App;
