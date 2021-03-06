var m             = require('mithril');
var NewApp        = require('../../models/NewApp.js');
var materialize   = require('../../../lib/materialize.js');
var Fuzzy         = require('../Fuzzysearch.js');

exports.controller = function () {
  var ctrl = this;
  ctrl.newApp = NewApp.vm();

  ctrl.submit  = function (e) {
    e.preventDefault();
    NewApp.postNewApplication(ctrl.newApp).then(function () {
      ctrl.newApp = NewApp.vm();
      m.route('/profile');
    });
  };
  ctrl.fetchInfo = NewApp.fetchInfo();
};

exports.view = function (ctrl) {

  return m('.row', [
    m('.row', [
      m('a.btn[href=/profile]#backButton', { config: m.route }, 'Back to profile')
    ]),
    m('.row', [
      m('h3.center-align', 'Add Application')
    ]),
    m('form.col.s12', { onsubmit: ctrl.submit }, [
      m('.row', [
        m.component( Fuzzy, {
          search: 'companies',
          onSelect: function (company) {
            ctrl.newApp.company_id = company;
          },
          placeholder: 'Companies',
          optionView: function (company) {
            return company.name + "  -  " + company.address + "  -  " + company.url
          },
           route: m('a.waves-effect.waves-light.btn[href=/company/][style="float:right; width:200px"]', { config: m.route }, 'Add a Company')
        }),
        m.component( Fuzzy, {
          search: 'titles',
          onSelect: function (title) {
            ctrl.newApp.title_id = title;
          },
          placeholder: 'Title',
          optionView: function (titles) { return titles.title  },
           route: m('a.waves-effect.waves-light.btn[href=/title/][style="float:right; width:200px"]', { config: m.route }, 'Add a Title')
        }),
           m('.input-field.col.s12.m6', [
          m('input.validate[type=text][placeholder=Application Method][name=app_method]', {
            value: ctrl.newApp.app_method(),
            onchange: m.withAttr('value', ctrl.newApp.app_method)
          }),
        ]),
        m('.input-field.col.s12.m6', [
          m('input.[type=date][name=applied_on][placeholder="Applied On"]', {
            class: 'datepicker', 
            config: materialize.pickDates,
            value: ctrl.newApp.applied_on(),
            onchange: m.withAttr('value', ctrl.newApp.applied_on)
          }),
        ]),
      ]),
      m('.row.center-align', [
        m('button.btn.waves-effect.waves-light#backButton', 'Submit',  [
          m('i.mdi-content-send.right')
        ])
      ])
    ])
  ]);
};