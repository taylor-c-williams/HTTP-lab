module.exports = rawRequest => {
  const parsedRequest = rawRequest.split('\r\n\r\n'); 
  const [method, path] = parsedRequest[0].split(' ');
  // return method  === 'POST' ? { method, path, body: parsedRequest[1] }
  //   : { method, path };


  const body = parsedRequest[1];
  return { method, path, body };
};
