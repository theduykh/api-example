const request = require('sync-request');
const url = require('url');

/**
 * Post request
 * @param {string} testPath 
 * @param {ojbect} body 
 * @param {string} token 
 * @returns {object} the body of the respone
 */
function post(testPath, body, token) {
  // merge the url
  let testUrl = url.resolve(`${PROTOCOL}://${HOST}`, testPath);

  // make the header
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  };

  // get the current time before sending request
  let beforeTime = new Date();

  // send request
  let res = request('POST', testUrl, {
    headers: headers,
    json: body
  });

  // get the current time after recieving respone
  let afterTime = new Date();

  // encode the body of the respone to object
  let result;
  try {
    result = res.getBody('utf8');
  } catch (err) {
    result = err.body.toString('utf8');
  }

  // log the request
  logger.info(`{ "time": "${beforeTime.toISOString()}", "duration": ${afterTime - beforeTime},
    "POST": "${testUrl}",
    "headers": ${JSON.stringify(headers)},
    "body": ${JSON.stringify(body)},
    "respone": ${result.trim().slice(0, LOG_LENGTH)}
  }`);

  return JSON.parse(result);
}

/**
 * Get request
 * @param {string} testPath
 * @param {string} token 
 * @returns {object} the body of the respone
 */
function get(testPath, token) {
  // merge the url
  let testUrl = url.resolve(`${PROTOCOL}://${HOST}`, testPath);

  // make the header
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  };

  // get the current time before sending request
  let beforeTime = new Date();

  // send request
  let res = request('GET', testUrl, {
    headers: headers
  });

  // get the current time after recieving respone
  let afterTime = new Date();

  // encode the body of the respone to object
  let result;
  try {
    result = res.getBody('utf8');
  } catch (err) {
    result = err.body.toString('utf8');
  }

  // log the request
  logger.info(`{ "time": "${beforeTime.toISOString()}", "duration": ${afterTime - beforeTime},
    "GET": "${testUrl}",
    "headers": ${JSON.stringify(headers)},
    "respone": ${result.trim().slice(0, LOG_LENGTH)}
  }`);

  return JSON.parse(result);
}

/**
 * Put request
 * @param {string} testPath
 * @param {ojbect} body
 * @param {string} token
 * @returns {object} the body of the respone
 */
function put(testPath, body, token) {
  // merge the url
  let testUrl = url.resolve(`${PROTOCOL}://${HOST}`, testPath);

  // make the header
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  };

  // get the current time before sending request
  let beforeTime = new Date();

  // send request
  let res = request('PUT', testUrl, {
    headers: headers,
    json: body
  });

  // get the current time after recieving respone
  let afterTime = new Date();

  // encode the body of the respone to object
  let result;
  try {
    result = res.getBody('utf8');
  } catch (err) {
    result = err.body.toString('utf8');
  }

  // log the request
  logger.info(`{ "time": "${beforeTime.toISOString()}", "duration": ${afterTime - beforeTime},
    "PUT": "${testUrl}",
    "headers": ${JSON.stringify(headers)},
    "body": ${JSON.stringify(body)},
    "respone": ${result.trim().slice(0, LOG_LENGTH)}
  }`);

  return JSON.parse(result);
}

/**
 * Delete request
 * @param {string} testPath
 * @param {ojbect} body
 * @param {string} token
 * @returns {object} the body of the respone
 */
function del(testPath, body, token) {
  // merge the url
  let testUrl = url.resolve(`${PROTOCOL}://${HOST}`, testPath);

  // make the header
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  };

  // get the current time before sending request
  let beforeTime = new Date();

  // send request
  let res = request('DELETE', testUrl, {
    headers: headers,
    json: body
  });

  // get the current time after recieving respone
  let afterTime = new Date();

  // encode the body of the respone to object
  let result;
  try {
    result = res.getBody('utf8');
  } catch (err) {
    result = err.body.toString('utf8');
  }

  // log the request
  logger.info(`{ "time": "${beforeTime.toISOString()}", "duration": ${afterTime - beforeTime},
    "DELETE": "${testUrl}",
    "headers": ${JSON.stringify(headers)},
    "body": ${JSON.stringify(body)},
    "respone": ${result.trim().slice(0, LOG_LENGTH)}
  }`);

  return JSON.parse(result);
}

module.exports = { post, get, put, del };
