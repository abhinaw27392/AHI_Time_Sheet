import { postApi } from "../common/api"

export const FORM_REQUEST = 'FORM_REQUEST_TASKS'
export const FORM_SUBMITTED = 'FORM_SUBMITTED_PROJECT_TASKS'
export const SUBMIT_FAILURE = 'SUBMIT_FAILURE_PROJECT_TASKS'

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

export function tasksSubmit(formData) {
    let data = new FormData();


    data.append('taskName', formData.taskName);
    data.append('desc', formData.desc);
    data.append('projectName', formData.projectName);

    return dispatch => {
        dispatch(requestFormData(formData))

        return postApi({
            url: '/tasks/formsubmitted',
            dispatch,
            data,
            successCallBack: receiveFormData,
            failureCallback: submitError
        });
    }
}


