export default ['$http', ($http) => {
  let data = {};
  return {
    'get': () => data,
    'promise': () => {
      // load your configs or prepare data here
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // http query emulation
          resolve({
            'data': 'value'
          });
        }, 0);
      }).then(received => {
        data = received;
      });
    }
  }
}];
