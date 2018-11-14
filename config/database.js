if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://raftar2097:224199520Rr@ds137220.mlab.com:37220/ranklist1'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
} 