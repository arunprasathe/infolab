<%@page session="false" contentType="text/html" pageEncoding="UTF-8" import="java.util.*,javax.portlet.*, sg.infolab.core.constant.*" %>
<%@taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<portlet:defineObjects/>     

<portlet:resourceURL var="getCompetencyList" id="getCompetencyList" />
<%-- <portlet:resourceURL var="archiveAuditJson" id="archiveAuditJson" />
<portlet:resourceURL var="archiveSearch" id="archiveSearch" />
<portlet:resourceURL var="sortingRecords" id="sortingRecords" /> --%>
<script type="text/javascript">
$(document).ready(function() {
	createBreadCrumb("breadcrumbs", "Home|Audit Trails", "/|#");
});

</script> 
<script type="text/javascript"  src="<%=request.getContextPath() %>/js/infoLabSelfAssessment.js" ></script>
<form id="SelfAssessmentList" name="SelfAssessmentList" method="post" action="${getCompetencyList}" ng-controller="InfolabSelfAssessment" autocomplete="off">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Workplace Safety  and Health Council </title>
    <meta name="description" content="">
    <link rel="stylesheet" href="library/css/bootstrap.css">
    <link rel="stylesheet" href="library/css/style.css">
    <link rel="stylesheet" href="library/css/font-awesome.css">
    <link rel="stylesheet" href="library/css/showup.css">
    
    <script src="library/js/jquery-1.8.2.min.js"></script>
    <script src="library/js/showup.js"></script>
    
    <script>
    	 $().showUp('.navbar', {
        upClass: 'navbar-show',
        downClass: 'navbar-hide'
      });
	
    </script>
       
     <!-- Include the plugin's for multi select dropdown -->
	<script type="text/javascript" src="library/js/bootstrap-multiselect.js"></script>
	<link rel="stylesheet" href="library/css/bootstrap-multiselect.css" type="text/css"/> 
       
    <script type="text/javascript">		
		$(document).ready(function() {
			$('.multiselect').multiselect({
			  numberDisplayed: 1,
			  checkboxName: 'custom-name',
			  dropRight: true,
			  buttonWidth: '200px',
			  buttonContainer: '<span class="custom-check-box" />',
			  nonSelectedText: 'Select the website'
			});
		  });
		  
		</script>
       
    <script src="library/js/main.js"></script>
    <script src="library/js/bjqs.js"></script>
    <script src="library/js/jquery.form-validator.min.js"></script>
    <script src="library/js/dropdown.js"></script>
	



</head>
<body>
    <!--[if lt IE 7]>
<p class="chromeframe">
You are using an 
<strong>
outdated
</strong>
browser. Please 
<a href="http://browsehappy.com/">
upgrade your browser
</a>
or 
<a href="http://www.google.com/chromeframe/?redirect=true">
activate Google Chrome Frame
</a>
to improve your experience.
</p>
<![endif]-->
    <header class="header">
        <div class="offcanvas-top bg-blue">
            <div class="login-error-box">
                <div id="login-error" class="container">
                </div>
            </div>
            
       </div>
     </header>
    <div class="container">
         <div class="subpage page-bg">
        
            <!--Banner-->
            <div class="bg-grey blank-banner">
                <div class="pad-tb-10 all-text-white">
	                <div class="breadcrumbs all-text-white left-15"><a href="#">Home</a> >Shine Newsletter</div>
	                <h1 class="left-15">Tools1111 111 and Application</h1>
                </div>
            </div>
        
            <!--End of Banner-->
        
	        <!--row-->
	        <div class="row row-offcanvas row-offcanvas-left clear-40">
		        <div class="inner">
			        			        
			        <!--Main Content-->
			        
			        <div class="col-sm-8 col-md-9 main">
				        <div class="main-container rounded-white-box">
					        <p class="visible-xs">
					            <a class="bare-btn" data-toggle="offcanvas"><i class="fa fa-navicon fa-lg"></i></a>
					        </p>
					        <div class="body-container">
						        <h4>Self-Assessment of WSH Competencies Q&As Management</h4>
						        
						       
                               <div class="row">
                                <div class="col-md-12">
                                <p>
							       The revised safety training requirements were first introduced for the construction and shipyard industry on 1 July 2007. 
                                   The safety training requirements were implemented for the metalworking industry on 1 October 2009. </p>
                                   <p> 
                                   Under the revision, workers will be tested on their competency for the Construction Safety Orientation Course (CSOC), 
                                   Shipyard Safety Instruction Course (SSIC) and Metal Working Safety Orientation Course (MSOC) via WSHC's centralized test system. 
                                   Test sets in various language will be regularly updated for the Accredited Training Providers (ATPs) to 
                                   administer the test after the course is conducted.</p>
                                    <p>To test your WSH competency, you can do a self assessment. Upon selection of your desired course and language of test, 
                                   you will be provided with a sample test set. Each test consists of 30 safety and 10 well-being questions.
						        </p>
                                <div class="bottom-line-dotted"></div>
                                <form class="form-horizontal push-20" role="form">
                                  <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">Course</label>
                                    <div class="col-sm-10">
                                      <select class="form-control">
                                          <option value="" >-- Select Course --</option>
                                          <c:forEach items="${courseList}" var="course">
											<option value="${course.getCTListCode()}" >${course.getCTListDesc()}</option>
										</c:forEach>
                                        </select>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label for="inputPassword3" class="col-sm-2 control-label">Languages</label>
                                    <div class="col-sm-10">
                                      <select class="form-control">
                                       <option value="" >-- Select Language --</option>
                                          <c:forEach items="${languageList}" var="language">
											<option value="${language.getCTListCode()}" >${language.getCTListDesc()}</option>
										</c:forEach>
                                    </select>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="col-sm-offset-10 col-sm-2">
                                      <button type="submit" class="btn btn-primary pull-right">Search</button>
                                    </div>
                                  </div>
                                </form>
                                
                                <table class="cms-stats table">
                                  <thead>
                                    <tr class="">
                                      <th>S/No</th>
                                      <th>Question</th>
                                     
                                      <th>Answer</th>
                                      <th>Action</th>
                                    </tr>			
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>CSOC Bengali Test Set 1.pdf</td>
                                     
                                      <td>CSOC Ans Set 1.pdf</td>
                                      <td>
                                      	<a type="button" class="btn btn-link btn-xs">
                                          <span class="glyphicon glyphicon-share"></span> Recommend
                                        </a>
                                        <a type="button" class="btn btn-link btn-xs">
                                          <span class="glyphicon glyphicon-download-alt"></span> Download
                                        </a>
                                        <a type="button" class="btn btn-link btn-xs">
                                          <span class="glyphicon glyphicon-print"></span> Print
                                        </a>
                                        </td>
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td>CSOC Bengali Test Set 1.pdf</td>
                                     
                                      <td>CSOC Ans Set 1.pdf</td>
                                      <td>
                                      	<a type="button" class="btn btn-link btn-xs">
                                          <span class="glyphicon glyphicon-share"></span> Recommend
                                        </a>
                                        <a type="button" class="btn btn-link btn-xs">
                                          <span class="glyphicon glyphicon-download-alt"></span> Download
                                        </a>
                                        <a type="button" class="btn btn-link btn-xs">
                                          <span class="glyphicon glyphicon-print"></span> Print
                                        </a>
                                        </td>
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td>CSOC Bengali Test Set 1.pdf</td>
                                     
                                      <td>CSOC Ans Set 1.pdf</td>
                                      <td>
                                      	<a type="button" class="btn btn-link btn-xs">
                                          <span class="glyphicon glyphicon-share"></span> Recommend
                                        </a>
                                        <a type="button" class="btn btn-link btn-xs">
                                          <span class="glyphicon glyphicon-download-alt"></span> Download
                                        </a>
                                        <a type="button" class="btn btn-link btn-xs">
                                          <span class="glyphicon glyphicon-print"></span> Print
                                        </a>
                                        </td>
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td>CSOC Bengali Test Set 1.pdf</td>
                                     
                                      <td>CSOC Ans Set 1.pdf</td>
                                      <td>
                                      	<a type="button" class="btn btn-link btn-xs">
                                          <span class="glyphicon glyphicon-share"></span> Recommend
                                        </a>
                                        <a type="button" class="btn btn-link btn-xs">
                                          <span class="glyphicon glyphicon-download-alt"></span> Download
                                        </a>
                                        <a type="button" class="btn btn-link btn-xs">
                                          <span class="glyphicon glyphicon-print"></span> Print
                                        </a>
                                        </td>
                                    </tr>
                                  </tbody>
                                </table>
                                
                                
                                </div>
                                
                                
                                
                               </div>
					        </div>
				        </div>   
			        </div>
		        </div>
	        </div>
	        <!--row-->
        </div>    
         
    </div>
    <!--container--> 
    
   <!-- Bootstrap core JavaScript
================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="library/js/bootstrap.min.js">
    </script>
    <script src="library/js/bootstrap-hover-dropdown.js">
    </script>
</body>
 </html>        