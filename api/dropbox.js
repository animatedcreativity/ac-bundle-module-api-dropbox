exports = module.exports = exports = module.exports = function() {
  var mod = {
    upload: async function(path, data, headers) {
      if (!app.has(headers)) headers = {};
      headers["Authorization"] = "Bearer " + config.dropbox.token;
      headers["Dropbox-API-Arg"] = JSON.stringify({path: config.dropbox.folder + path});
      var result = await fetch(config.dropbox.link + "/files/upload", {
        method: "POST",
        headers: headers,
        body: data
      });
      if (result.status === 200) {
        console.log("Uploaded file to dropbox: " + config.dropbox.folder + path);
      } else {
        console.log(await result.text());
      }
    }
  };
  return mod;
};