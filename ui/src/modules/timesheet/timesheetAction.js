
// import { postApi } from '../../common/api';

// export function postSuccess() {
//     return {
//         type: POST_SUCCESS,
//         isDataPosted: true
//     }
// }

// export function postFailure(message) {
//     return {
//         type: POST_FAILURE,
//         message
//     }
// }

// export function postInputData(postData) {
//     let data = new FormData();

//     data.append('data', postData.payload);

//     return dispatch => {
//         // We dispatch requestLogin to kickoff the call to the API
//         dispatch(data)

//         return postApi({
//             url: '/',
//             dispatch,
//             data,
//             successCallBack: postSuccess,
//             failureCallback: postFailure
//         });


//     }
// }