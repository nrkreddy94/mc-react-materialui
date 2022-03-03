import { ErrorFields } from "./Constants";

import "whatwg-fetch";

const errorResponse = error => {
  let response = {};
  response[ErrorFields.STATUS] = error.status;
  response[ErrorFields.ERROR] = error.error;
  response[ErrorFields.MESSAGE] = error.message;
  return response;
};

/**
 *
 * @param {String} path
 * @param {Function} handleSucess
 * @param {Function} handleFailure
 */
export const jsonGet = (path, handleSucess, handleFailure) => {
  window
    .fetch(path)
    .then(response => {
      if (!response.ok) throw response;
      return response.json();
    })
    .then(response => {
      handleSucess(response);
    })
    .catch(error => {
      error
        .text()
        .then(response => handleFailure(errorResponse(JSON.parse(response))));
    });
};

/**
 *
 * @param {String} path
 * @param {Function} handleSucess
 * @param {Function} handleFailure
 */
export const jsonPost = (path, payload, handleSucess, handleFailure) => {
  window
    .fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) throw response;
      return response.json();
    })
    .then(response => {
      handleSucess(response);
    })
    .catch(error => {
      error
        .text()
        .then(response => handleFailure(errorResponse(JSON.parse(response))));
    });
};
