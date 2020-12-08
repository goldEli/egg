// alert('user')

function login() {
  fetch('user/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id: '123',
      name: 'samuel',
    }),
  }).then(() => {
    location.reload();
  });
}

function logout() {
  fetch('user/logout', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  }).then(() => {
    location.reload();
  });
}