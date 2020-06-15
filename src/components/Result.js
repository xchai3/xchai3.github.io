import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

function Result() {
  return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar/>
              < div className= 'Submit'>
              <h1>Thank You For You Participation </h1>
              <p> We heard your voice! </p>
              </div>
          </React.Fragment>
      </MuiThemeProvider>
  );
}


export default Result;
