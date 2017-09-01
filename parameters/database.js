module.exports = function(app) {
  return {
    url: "mongodb://root:root@ds119772.mlab.com:19772/restful-api",
    options: {
      useMongoClient: true
    }
  };
};