import { postApi } from "../common/api"

export const FORM_REQUEST = 'FORM_REQUEST_PROJECT'
export const FORM_SUBMITTED = 'FORM_SUBMITTED_PROJECT'
export const SUBMIT_FAILURE = 'SUBMIT_FAILURE_PROJECT'

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

export function projectSubmit(formData) {
    let data = new FormData();

    data.append('name', formData.name);
    data.append('disc', formData.disc);
    data.append('dept', formData.dept);
    data.append('headed_by', formData.headed_by);
    data.append('isCompleted', formData.isCompleted);
    data.append('startDate', formData.startDate);
    
    return dispatch => {
        dispatch(requestFormData(formData))

        return postApi({
            url: '/project/formsubmitted',
            dispatch,
            data,
            successCallBack: receiveFormData,
            failureCallback: submitError
        });
    }
}


