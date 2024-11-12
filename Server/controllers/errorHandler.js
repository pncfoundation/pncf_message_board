const httpErrors = {
    badRequest: (message) => {
        return {
            status: 400,
            message: message || 'Bad Request',
        };
    },

    unauthorized: (message) => {
        return {
            status: 401,
            message: message || 'Unauthorized',
        };
    },

    notFound: (message) => {
        return {
            status: 404,
            message: message || 'Not Found',
        };
    },

    internalServerError: (message) => {
        return {
            status: 500,
            message: message || 'Something went wrong',
        };
    },
};

const handleError = (res, error) => {
    // Assuming the error object contains a 'type' to distinguish error types
    switch (error.type) {
        case 'badRequest':
            res.status(400).send();
            break;
        case 'unauthorized':
            res.status(401).send();
            break;
        case 'notFound':
            res.status(404).send();
            break;
        case 'internalServerError':
            res.status(500).send();
            break;
        case 400:
            res.status(400).send();
            break;
        case 401:
            res.status(401).send();
            break;
        case 404:
            res.status(404).send();
            break;
        case 500:
            res.status(500).send();
            break;
        default:
            res.status(500).send();
            break;
    }
};

module.exports = { httpErrors, handleError };
