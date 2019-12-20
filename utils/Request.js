const request = require('sync-request');
const url = require('url');

const LOG_LENGTH = 10000;

function post(yourPath, body) {
  let myUrl = url.resolve(`${PROTOCOL}://${HOST}`, yourPath);

  let headers = {
    'Content-Type': '"application/json; charset=UTF-8"',
  };
  let beforeTime = new Date();
  let res = request('POST', myUrl, {
    headers: headers,
    json: body

  });
  let afterTime = new Date();
  let result;
  try {
    result = res.getBody('utf8');
  } catch (err) {
    result = err.body.toString('utf8');
  }

  logger.info(`{ "time": "${beforeTime.toISOString()}", "duration": ${afterTime - beforeTime},
    "POST": "${myUrl}",
    "headers": ${JSON.stringify(headers)},
    "body": ${JSON.stringify(body)},
    "respone": ${result.trim().slice(0, LOG_LENGTH)}
  }`);

  return JSON.parse(result);
}

function get(yourPath) {
  let myUrl = url.resolve(`${PROTOCOL}://${HOST}`, yourPath);

  let headers = {
    'Content-Type': '"application/json; charset=UTF-8"',
  };
  let beforeTime = new Date();
  let res = request('GET', myUrl, {
    headers: headers
  });
  let afterTime = new Date();
  let result;
  try {
    result = res.getBody('utf8');
  } catch (err) {
    result = err.body.toString('utf8');
  }

  logger.info(`{ "time": "${beforeTime.toISOString()}", "duration": ${afterTime - beforeTime},
    "POST": "${myUrl}",
    "headers": ${JSON.stringify(headers)},
    "respone": ${result.trim().slice(0, LOG_LENGTH)}
  }`);

  return JSON.parse(result);
}

function put(yourPath, body) {
  let myUrl = url.resolve(`${PROTOCOL}://${HOST}`, yourPath);

  let headers = {
    'Content-Type': '"application/json; charset=UTF-8"',
  };
  let beforeTime = new Date();
  let res = request('PUT', myUrl, {
    headers: headers,
    json: body
  });
  let afterTime = new Date();
  let result;
  try {
    result = res.getBody('utf8');
  } catch (err) {
    result = err.body.toString('utf8');
  }

  logger.info(`{ "time": "${beforeTime.toISOString()}", "duration": ${afterTime - beforeTime},
    "POST": "${myUrl}",
    "headers": ${JSON.stringify(headers)},
    "body": ${JSON.stringify(body)},
    "respone": ${result.trim().slice(0, LOG_LENGTH)}
  }`);

  return JSON.parse(result);
}

module.exports = { post, get, put };
