import { postApi } from "../common/api"

export const FORM_REQUEST = 'FORM_REQUEST_EMP'
export const FORM_SUBMITTED = 'FORM_SUBMITTED_EMP'
export const SUBMIT_FAILURE = 'SUBMIT_FAILURE_EMP'

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

export function empSubmit(formData) {
    let data = new FormData();

    data.append('ename', formData.ename);
    data.append('joiningDate', formData.joiningDate);
    data.append('projectAssigned', formData.projectAssigned);
    data.append('supervisor', formData.supervisor);
    data.append('resourceType', formData.resourceType);
    data.append('workLocation', formData.workLocation);
    data.append('terminationDate', formData.terminationDate);
    data.append('dept', formData.dept);

    return dispatch => {
        dispatch(requestFormData(formData))

        return postApi({
            url: '/employee/formsubmitted',
            dispatch,
            data,
            successCallBack: receiveFormData,
            failureCallback: submitError
        });
    }
}


