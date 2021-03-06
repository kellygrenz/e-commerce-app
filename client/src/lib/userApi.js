
const ajaxRequest = (uri, method, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: method,
    body: JSON.stringify(body),
    credentials: 'include'
  }

  return fetch(`/api/${uri}`, options)
    .then(handleErrors)
    .then(response => response.json())
    .then(json => json.data)
}

const handleErrors = response => {
  console.log(response)
  if (!response.ok) {
    console.log('an error was found')
    return response.json()
      .then(({message, data}) => {
        console.log(data, 'SIGN UP SUCCESS')
        const err = Error(message)
        Object.assign(err, data)
        err.status = response.status
        throw err
      })
  }
  return response
}

export const signupUser = (user) => ajaxRequest('sign-up', 'POST', user)

export const loginUser = (email, password) => ajaxRequest('login', 'POST', {email, password})

export const getUser = (user) => ajaxRequest(`users/${user}`, 'GET')

export const logoutUser = () => ajaxRequest('logout', 'GET')
