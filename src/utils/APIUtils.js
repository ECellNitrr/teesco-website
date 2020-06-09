// Backend provided format of error:
// {
// "email": [
//     "This field is required."
//     ],
// "password": [
//     "This field is required."
//     ]
// }

// Developer friendly format of error
// {
//     "email": "This field is required.",
//     "password": "This field is required."
// }

// Converts the <backend provided format of error> 
// into <developer friendly format of error> 
// plus provides the status code of the error
export const makeErrorDict = (errObj) => {
    let errorDict = {}
    if (!errObj.response) {
        return { statusCode: 421, errorDict }
    }

    const statusCode = errObj.response.status
    const rawErrorData = errObj.response.data


    // convert err to required format
    for (let key in rawErrorData) {
        if (Array.isArray(rawErrorData[key])) {
            errorDict[key] = rawErrorData[key].join('')
        } else {
            errorDict[key] = rawErrorData[key]
        }
    }

    return { statusCode, errorDict }
}