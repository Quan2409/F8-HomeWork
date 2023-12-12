//Build HTTP Client
export const client = {
  send: async (url, method = "GET", body = null) => {
    // url = SERVER_API + url;
    const options = {
      method,
      headers: {
        "Content-Type": "applications/json",
      },
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const respone = await fetch(url, options);
    const data = await respone.json();
    return { respone, data };
  },

  get: function (url) {
    return this.send(url);
  },

  post: function (url, body) {
    return this.send(url, "POST", body);
  },

  put: function (url, body) {
    return this.send(url, "PUT", body);
  },

  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },

  delete: function (url) {
    return this.send(url, "DELETE");
  },
};
