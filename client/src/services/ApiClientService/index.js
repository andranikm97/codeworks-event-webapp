const ApiUrl = 'http://localhost:3001/';
const ApiClient = {};

function getEvents () {
  return fetchRequest('events', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function postEvent (info) {
  return fetchRequest('events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(info)
  });
}

function fetchRequest (path, options) {
  return fetch(ApiUrl + path, options)
    .then(res => res.status < 400 ? res : null)
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(err => {
      console.error(`Error: ${err}\nIn fetch request from ${path}\nAt ${ApiUrl}`);
    })
}


ApiClient.getEvents = getEvents;
ApiClient.postEvent = postEvent;

export default ApiClient;
