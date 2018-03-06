// import { POST_SUCCESS, ON_SUBMIT } from './timesheetAction'


// const prevState = {
//     isDataPosted: false
// }

// const postDataReducer = (state = prevState, action) => {


//     switch (action.type) {

//         case POST_SUCCESS:
//             console.log("postDataReducer is executing================================")
//             return Object.assign({}, state, {
//                 isDataPosted: action.isDataPosted,
//                 inputData: action.meta.payload
//             })
//         case ON_SUBMIT:
//             console.log("ON_SUBMIT case is executing-------------------------------")
//             return Object.assign({}, state, {
//                 isDataSubmitted: action.isDataSubmitted,
//                 payload: action.payload
//             })
//         // case POST_FAILURE:
//         //     return Object.assign({}, state, {
//         //         dataPosted: action.dataPosted
//         //     })
//         default:
//             return state
//     }
// }

// export default postDataReducer