export async function signUpUser(userData) {
  const resp = await fetch('/api/v1/users', {
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
    location.replace('/todos');
  } else {
    console.error(data.message);
  }
    
}
