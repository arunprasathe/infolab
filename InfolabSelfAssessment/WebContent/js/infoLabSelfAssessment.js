webApp.controller('InfolabSelfAssessment', [ '$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
	// set request params
	$scope.method = 'POST';
	$scope.url = $("#getCompetencyList").attr("action");
	$scope.data = {};
	$scope.total = 0;
	$scope.params = {};
	$scope.start = 1;
	$scope.resultPerPage = 20;

	// request template
	$scope.template = function(operation) {
		$scope.code = null;
		$scope.response = null;
		$http({
			method : $scope.method,
			url : $scope.url,
			params : $scope.params,
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(operation).error(function(data, status) {
			$scope.data = data || "Request failed";
			$scope.status = status;
		});
	};
	$scope.resetForm = function() {
		listbox_moveacross('moduleRightBox', 'moduleLeftBox');
		listbox_moveacross('userRightBox', 'userLeftBox');
		$("#auditList")[0].reset();
	};
	// common search
	$scope.search = function() {
		if ($('#isArchiveSort').val() == 'Y') {
			$('#archiveBtn').hide();
		} else {
			$('#archiveBtn').show();
		}
		$scope.url = $("#getCompetencyList").attr("action");
		var auditSearch = generateAuditSearch(1);
		$scope.params = auditSearch;
		$scope.template($scope.pagination);
	};
	
	// pagination only, no need change
	$scope.fetch = function(data, status) {
		$scope.status = status;
		$scope.data = data.datas.resultList;
		//$scope.total = data.datas.totalRecord;
		//$scope.start = getPageStart(data.datas);
	};
	$scope.fetchAssessmentList = function(url) {
		alert(url);
		$scope.url =url;
		var auditSearch = generateParamForAssessmentSearch();
		$scope.params = auditSearch;
		$scope.template($scope.fetch);
	};
	function generateParamForAssessmentSearch(){
		var languageId = $("#language").val();
		var courseId = $("#courseName").val();
        // Add more Params Here 
		alert(courseId);
		alert(languageId);
		return {"searchCriteria['courseID']" : courseId, "searchCriteria['languageID']": languageId};
	}
}
]);


