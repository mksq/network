exports.makeCollapsible = function(elem, isInitialized){
	if (isInitialized) return;

	$(elem).collapsible({
		accordion: false
	});

  //Currently, this method is not actively called; functionality
  //was present in Student/Outcomes views for list of applications,
  //but this was changed to drop down buttons late in project life
};

exports.pickDates = function(elem, isInitialized){
	if (isInitialized) return;

  $(elem).pickadate({
    selectMonths: true, // Creates dropdown to control month
    selectYears: 15, // Creates dropdown of 15 years to control year

    dateFormat: 'yyyy-mm-dd',
	  format: 'mmmm dd, yyyy',
	  formatSubmit: 'yyyy-mm-dd',
	  hiddenPrefix: 'prefix__',
	  hiddenSuffix: '__suffix',

	  //The onSet section is needed to prevent the modal from closing when
		//clicking left/right buttons to cycle through months
		onSet: function (date) {
			if(date.select === undefined) return;
			else if (date) this.close();
		},

		onClose: function(){
	    $(document.activeElement).blur()
	  }
  });
};

exports.tabInit = function(elem, isInitialized){
	if (isInitialized) return;

  $(elem).tabs(); 
};

exports.modalClick = function(elem, isInitialized){
	if (isInitialized) return;

  $(elem).leanModal({  //.modal-trigger
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
    // ready: function() { alert('Ready'); }, // Callback for Modal open
    // complete: function() { alert('Closed'); } // Callback for Modal close
  });
};

exports.navDrop = function(elem, isInitialized){
	if (isInitialized) return;

	$(elem).sideNav();
};

exports.dropDowns = function (elem, isInitialized){
	if (isInitialized) return;

	$(elem).dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 10, // Spacing from edge
    belowOrigin: true // Displays dropdown below the button
  });
}

exports.carosel = function(elem, isInitialized){
	if (isInitialized) return;

  $(elem).slider({full_width: true, interval: 10000000});

}

exports.fullScreenSlider = function(elem, isInitialized){
	if (isInitialized) return;

	$(elem).slider({full_width: true});
}

