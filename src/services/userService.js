export const userService = {
    login,
    register,
    getAllUsers,
    getGraphData
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`https://reqres.in/api/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('userToken', JSON.stringify(user.token));

            return user;
        });
}


function register(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`https://reqres.in/api/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('userToken', JSON.stringify(user.token));

            return user;
        });
}

function getAllUsers() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`https://reqres.in/api/users?page=2`).then(handleResponse);
}

function getGraphData() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`https://reqres.in/api/unkown`).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}