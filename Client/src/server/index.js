// Define server url running on digital ocean. http://localhost:8081/ is for development on local machines
const server = "https://165.227.79.16:8081";

/*
    Here we define the available functions our front end can use to make http requests.
    We import this file as '@/server' in our <script setup> section.
    Then we can call any of these functions for our backend.

    Deal with errors whenever you use them as they may be different based on the route you call.

    Ensure that errors are caught and deal with appropriately. I set up the backend to return appropriate
    status codes. 200 = good | 404 = not found | 500 = internal server error (to name a few)

    Deal with errors based on the error provided.
    Take a look at <root>/server/controllers/<any controller> and errorHandler.js to know which errors these
    functions may throw.
*/
module.exports = {
    async getRequest(route) {
        const response = await fetch(`${server}${route}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok) {
            throw { type: response.status };
        } else {
            return response.json();
        }
    },

    async postRequest(data, route) {
        const response = await fetch(`${server}${route}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            throw { type: response.status };
        } else {
            return response.json();
        }
    },

    async putRequest(data, route) {
        const response = await fetch(`${server}${route}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            throw { type: response.status };
        } else {
            return response.json();
        }
    },

    async deleteRequest(data, route) {
        const response = await fetch(`${server}${route}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            throw { type: response.status };
        } else {
            return response.json();
        }
    }
}