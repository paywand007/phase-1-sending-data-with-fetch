// Add your code here
function submitData(email, name) {
    return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
            }),
        })
        .then((response) => response.json())
        .then((object) => (document.body.innerHTML = object['id']))
        .catch((error) => (document.body.innerHTML = error.message))
}