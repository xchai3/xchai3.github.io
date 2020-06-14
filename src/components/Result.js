import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import { CSSTransitionGroup } from 'react-transition-group';

function Result() {
  return (
    // <CSSTransitionGroup
    //   className="container result"
    //   component="div"
    //   transitionName="fade"
    //   transitionEnterTimeout={800}
    //   transitionLeaveTimeout={500}
    //   transitionAppear
    //   transitionAppearTimeout={500}
    // >
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar/>
              < div className= 'Submit'>
              <h1>Thank You For You participation </h1>
              <p> We heard your voice! </p>
              </div>
          </React.Fragment>
      </MuiThemeProvider>
    // </CSSTransitionGroup>
  );
}

// Result.propTypes = {
//   quizResult: PropTypes.string.isRequired
// };

export default Result;
