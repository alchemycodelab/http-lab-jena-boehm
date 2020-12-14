module.exports = rawRequest => {

  const stringy = String(rawRequest);
  const data = stringy.split(' ');
  const body = data[4].split('\r\n');
  
  console.log(data, body, 'HELLOOOO');


  return {
    method: data[0],
    path: data[1],
    body: body[2]
  };
};
