const ApiUrl = 'https://cw-events-092017.herokuapp.com/';
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
