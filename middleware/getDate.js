exports.getDate = {
  name: 'getDate',
  version: '1.0.0',
  register: async function (server, options) {

    const currentDate = function () {

      const date = new Date();
      return date + options.name;
    };
    server.decorate('toolkit', 'getDate', currentDate);
  }
};