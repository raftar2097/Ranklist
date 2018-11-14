if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://raftar2097:224199520Rr@ds029821.mlab.com:29821/ranklist1'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
} 