import { postApi } from "../common/api"


export const FORM_REQUEST = 'FORM_REQUEST_DEPT'
export const FORM_SUBMITTED = 'FORM_SUBMITTED_DEPT'
export const SUBMIT_FAILURE = 'SUBMIT_FAILURE_DEPT'

export function requestFormData(formData) {
    return {
        type: FORM_REQUEST,
        isFetching: true,
        formData
    }
}

export function receiveFormData() {
    return {
        type: FORM_SUBMITTED,
        isFetching: false
    }
}
export function submitError(message) {
    return {
        type: SUBMIT_FAILURE, SUBMIT_FAILURE,
        isFetching: false,
        showErrorMessage: true,
        errorMessage: message
    }
}

export function departmentSubmit(formData) {
    let data = new FormData();

    data.append('name', formData.name);
    data.append('disc', formData.disc);
    data.append('headed_by', formData.headed_by);

    return dispatch => {
        dispatch(requestFormData(formData))

        return postApi({
            url: '/department/formsubmitted',
            dispatch,
            data,
            successCallBack: receiveFormData,
            failureCallback: submitError
        });
    }
}

export function addNewDept() {
    console.log("new button");
    
}


