
// import { postApi } from '../common/api';

// export const POST_SUCCESS = '@@redux-form/CHANGE'
// export const ON_SUBMIT = '@@redux-form/SET_SUBMIT_SUCCEEDED'
// // export const POST_FAILURE = 'POST_FAILURE'

// // export function postSuccess() {
// //     console.log("--------------------------------post_success is executing------------------------------")
// //     return {
// //         type: POST_SUCCESS,
// //         isDataPosted: true
// //     }
// // }

// export function onSubmit() {
//     console.log("onSubmit is executing--------------------------------------")
//     return {
//         type: ON_SUBMIT,
//         isDataSubmitted: true
//     }
// }
// // export function postFailure() {
// //     return {
// //         type: POST_FAILURE,
// //         dataPosted: 'failure'
// //     }
// // }

// export function postInputData(postData) {
//     let data = new FormData();
//     console.log("-------------------------------------------postinputdata method is executing----------------------------------------------")
//     console.log("postData:" + JSON.stringify(postData))
//     data.append('data', postData.payload);
//     console.log("data:" + JSON.stringify(data))
//     return dispatch => {
//         dispatch(data)

//         return postApi({
//             url: '/',
//             dispatch,
//             data,
//             successCallBack: onSubmit
//             // failureCallback: postFailure
//         });

//     }
// }