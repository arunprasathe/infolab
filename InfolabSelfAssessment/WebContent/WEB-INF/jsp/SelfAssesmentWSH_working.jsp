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
	createBreadCrumb("breadcrumbs", "Home|Training | Self-Assessment of WSH Competencies", "/|#");
});

</script> 
<script type="text/javascript"  src="<%=request.getContextPath() %>/js/infoLabSelfAssessment.js" ></script>
<form id="SelfAssessmentList" name="SelfAssessmentList" method="post" action="${getCompetencyList}" ng-controller="InfolabSelfAssessment" autocomplete="off">

<div class="main-container rounded-white-box col-sm-8 col-md-9 main">
<div class="breadcrumbs"></div>
	
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
                                      <select  id="courseName" name="courseName" class="form-control">
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
                                      <select  id="language" name="language" class="form-control">
                                       <option value="" >-- Select Language --</option>
                                          <c:forEach items="${languageList}" var="language">
											<option value="${language.getCTListCode()}" >${language.getCTListDesc()}</option>
										</c:forEach>
                                    </select>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="col-sm-offset-10 col-sm-2">
                                      <input type="button" name="btnSelfAssessmentSearch" value="Search" ng-click="fetchAssessmentList('${getCompetencyList}')" class="btn btn-primary pull-right">
                                    </div>
                                  </div>
                                </form>

                                        
     	<div class="cms-table tab-content rounded-light-green-box">
  			<table id="table1" class="cms-stats table">
				<thead> 
					<tr>
					    <th class="header" >S/No</th>
						<th class="header" >Question</th>
						<th class="header" >Answer</th>
						<th class="header" >Action</th>
					</tr>
				</thead>
				<tbody> 
					<tr ng-repeat="obj in data" ng-class="{'odd' : $even}" >
						<td>{{ $index + start }}</td>
						<td>{{ obj.selfAssessmentQuestion }}</td>
						<td>{{ obj.selfAssessmentAnswer }}</td>
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
	        </div>
	        <!--row-->
        </div>    
         
 
    </form>
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