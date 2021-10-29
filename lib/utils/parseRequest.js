module.exports = rawRequest => {
  const parsedRequest = rawRequest.split('\r\n\r\n'); 
  const [method, path] = parsedRequest[0].split(' ');
  const body = parsedRequest[1];
  return { method, path, body };
};
