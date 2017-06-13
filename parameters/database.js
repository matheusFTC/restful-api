module.exports = function() {
  return {
    url: "mongodb://@ds119772.mlab.com:19772/restful-api",
    options: {
      server: {
        poolSize: 5
      },
      user: "root",
      pass: "root"
    }
  };
};