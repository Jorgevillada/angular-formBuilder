angular.module('mwFormBuilder', ['ngSanitize','ng-sortable', 'pascalprecht.translate', "textAngular"]);

angular.module('mwFormBuilder')
	.config(['$provide', function($provide){
		// https://github.com/textAngular/textAngular/wiki/Setting-Defaults
		$provide.decorator('taOptions', ['$delegate', function(taOptions){
                        /// set false to allow the textAngular-sanitize provider to be replaced
			taOptions.forceTextAngularSanitize = true;  
                        taOptions.classes = {
				focussed: 'focussed',
				toolbar: 'btn-toolbar md-toolbar md-toolbar-paragraph',
				toolbarGroup: 'btn-group md-button-group',
				toolbarButton: 'btn btn-default  md-raised md-button md-default md-button-mini',
				toolbarButtonActive: 'active',
				disabled: 'disabled',
				textEditor: 'form-control md-text-area',
				htmlEditor: 'form-control'
			};
			return taOptions; 
		}]);
	}]);
