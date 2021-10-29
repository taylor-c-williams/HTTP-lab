module.exports = rawRequest => {
  const parsedRequest = rawRequest.split('\r\n'); 
  const [method, path] = parsedRequest[0].split(' ');
  return method  === 'POST' ? { method, path, body: parsedRequest[4] }
    : { method, path };
};
