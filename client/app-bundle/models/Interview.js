var m           = require('mithril');
var StudentApp  =  require('./StudentApp.js')

var Interview = module.exports = {

  vm: function (attrs) {
    attrs = attrs || '';

    return {
      app_id: m.prop(null),
      type: m.prop(null),
      contacts: m.prop(null),
      scheduled_on: m.prop(null),
      occured_on: m.prop(null),
      follow_up: m.prop(null),
      quality: m.prop(null),
      preparedness: m.prop(null),
      info: {
        questions: m.prop(null)
      }
    };
  },

  interviews: null,

  vmApp: function (attrs) {
    attrs = attrs || '';
    return {};
  },

  fetchInt: function (req) {
    return m.request({ methods: 'GET', url: '/API/interviews/' });
  },

  fetchIntsForApp: function (req) {
    return m.request({ methods: 'GET', url: '/API/interviews/' + req })
      .then(function (res) {
        Interview.interviews = res;
      })
  },  

  updatePhase: function(applicationFormData) {
    return m.request({ method: 'POST', url: '/API/applications/', data: applicationFormData})
  },

  postInterview: function (interview) {
    return m.request({ method: 'POST', url: '/API/interviews', data: interview })
      .then(function (serverResponse) {
        return serverResponse;
      })
  },
  
  all: function () {
    return Interview.vm();
  },

  intsForApp: function () {
    return Interview.interviews;
  },

  back: function(){
    window.history.back();
  }

};