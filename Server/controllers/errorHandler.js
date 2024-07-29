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
            message: message || 'Internal Server Error',
        };
    },
};

const handleError = (res, error) => {
    // Assuming the error object contains a 'type' to distinguish error types
    switch (error.type) {
        case 'badRequest':
            res.status(400).json(httpErrors.badRequest(error.message));
            break;
        case 'unauthorized':
            res.status(401).json(httpErrors.unauthorized(error.message));
            break;
        case 'notFound':
            res.status(404).json(httpErrors.notFound(error.message));
            break;
        default:
            res.status(500).json(httpErrors.internalServerError(error.message));
            break;
    }
};

module.exports = { httpErrors, handleError };
