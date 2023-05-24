function callBackendProcess() {
  fetch(
    'http://localhost:8080/api/sample',
    {
      credentials: 'include',
    }
  ).then((res) => {
    res.json().then(body => document.getElementById('space').innerText = JSON.stringify(body))
  })
}

document.getElementById('btn-callBackendProcess').onclick = () => callBackendProcess();
