'use strict';

ddescribe('angular.scenario.browserTrigger', function() {
  it('should trigger keydown event', function() {
    var element = angular.element('<input type="text" />');

    element.on('keyup', function(e) {
    	console.log('keyup', e.which, e.key, e.keyCode, e.keycode, e.keyCodeVal);
    });


	browserTrigger(element, 'keyup', { key: 13 });
  });
});
  