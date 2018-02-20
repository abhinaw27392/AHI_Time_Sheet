// import react
import React from 'react';

// import local
import Header from './header/Header'
import { Main } from './main/Main'
import { Footer } from './footer/Footer'

import UserErrors from './common/error/UserErrors'


//https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format/4673436#4673436
// if (!String.format) {
//   String.format = function(format) {
//     var args = Array.prototype.slice.call(arguments, 1);
//     return format.replace(/{(\d+)}/g, function(match, number) { 
//       return typeof args[number] !== 'undefined'
//         ? args[number] 
//         : match
//       ;
//     });
//   };
// }

// this component will be rendered by our <___Router>
const App = (props) => {

  // generic api error handling
  const { errors } = props;


  return (

    <div>
      {errors && errors.error && <UserErrors />}
      <Header />
      <Main />
      <Footer />
    </div>

  )
}
export default App;