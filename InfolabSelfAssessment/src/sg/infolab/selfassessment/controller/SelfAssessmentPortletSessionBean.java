/**
 * ****************************************************************************************
 * Copyright (c) 2009 Infolab Pte Ltd. All Rights Reserved.
 * 
 * Project: Infolab Portal
 * $Header$
 * *****************************************************************************************
 */
package sg.infolab.selfassessment.controller;

import java.util.List;

import sg.infolab.common.audit.bean.Audit;
import sg.infolab.common.audit.search.AuditSearch;
import sg.infolab.core.pager.Pager;

/**
 * 
 * A sample Java bean that stores portlet instance data in portlet session.
 * 
 */
public class SelfAssessmentPortletSessionBean {

	private List languageList;
	private List courseList;
	private List competencyList;
	private String courseID;
	private String languageID;
	private String competencyID;
	private String tempFolder;
	private Pager pager;
	private String cmsID;
	
	public List getLanguageList() {
		return languageList;
	}
	public void setLanguageList(List languageList) {
		this.languageList = languageList;
	}
	public List getCourseList() {
		return courseList;
	}
	public void setCourseList(List courseList) {
		this.courseList = courseList;
	}
	public List getCompetencyList() {
		return competencyList;
	}
	public void setCompetencyList(List competencyList) {
		this.competencyList = competencyList;
	}
	public String getCourseID() {
		return courseID;
	}
	public void setCourseID(String courseID) {
		this.courseID = courseID;
	}
	public String getLanguageID() {
		return languageID;
	}
	public void setLanguageID(String languageID) {
		this.languageID = languageID;
	}
	public String getTempFolder() {
		return tempFolder;
	}
	public void setTempFolder(String tempFolder) {
		this.tempFolder = tempFolder;
	}
	public Pager getPager() {
		return pager;
	}
	public void setPager(Pager pager) {
		this.pager = pager;
	}
	public String getCompetencyID() {
		return competencyID;
	}
	public void setCompetencyID(String competencyID) {
		this.competencyID = competencyID;
	}
	public String getCmsID() {
		return cmsID;
	}
	public void setCmsID(String cmsID) {
		this.cmsID = cmsID;
	}

}
