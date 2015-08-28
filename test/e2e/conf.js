exports.config = {

  baseUrl: 'http://localhost:8080/app/',

  allScriptsTimeout: 10000,

  specs: ['githubProfileFeature.js'],

  capabilities: {
    'browserName': 'firefox'
  },

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};