 

export const validateString = (value, maxLength) => {
    if (!value || typeof value !== 'string', value.length > maxLength) {
        return false;
    }

    return true;
}

export const getErrorMessage =  (error) => {
    let message;
    if (!error) {
        message = 'Something went wrong, please try again later';
    }
    if (error instanceof Error || typeof error === 'object' && error.message) {
        message = error.message;
    };

    return message;
}