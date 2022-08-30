const BASE_URL = 'http://localhost:7890';

export async function signUpUser(userData) {
  const resp = await fetch(`${BASE_URL}/api/v1/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
    credentials: 'include',
  });
  const data = await resp.json();
  if (resp.ok) {
    location.replace('./todos');
  } 
}
export async function signInUser(userData) {
  const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
    credentials: 'include',
  });
  const data = await resp.json();
  if (resp.ok) {
    location.replace('./todos');
  } else {
    console.error(data.message);
  }
}

export async function getUser() {
  const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (resp.ok) {
    const user = await resp.json();
    return user;
  }
}

export async function checkUser() {
  const user = await getUser();
  if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
  const user = await getUser();
  if (user) {
    location.replace('./todos');
  }
}

export async function logoutUser() {
  const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (resp.ok) {
    location.replace('../');
  }
}
