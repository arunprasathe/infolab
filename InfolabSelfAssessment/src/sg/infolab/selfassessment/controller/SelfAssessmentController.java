package sg.infolab.selfassessment.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.portlet.bind.annotation.ResourceMapping;

import sg.infolab.common.admin.domain.CTList;
import sg.infolab.common.admin.service.CTService;
import sg.infolab.common.admin.service.UserService;
import sg.infolab.common.selfassessment.bean.SelfAssessment;
import sg.infolab.common.selfassessment.service.SelfAssessmentService;
import sg.infolab.core.constant.InfolabConstant;
import sg.infolab.core.pager.Pager;
import sg.infolab.core.portlet.AbstractInfolabPlutoController;
import sg.infolab.selfassessment.constant.AuditPortletConstant;

@Controller
@RequestMapping("VIEW")
public class SelfAssessmentController extends AbstractInfolabPlutoController {

	private static Logger logger = Logger.getLogger(SelfAssessmentController.class);

	@Autowired
	SelfAssessmentService selfAssessmentService;

	@Autowired
	CTService ctService;

	@Autowired
	UserService userService;

	@RequestMapping
	public String defaults(RenderRequest request, RenderResponse response) {
		try {
			logger.info("[SelfAssessmentController]->[defaults]->[start]");
			
			List<CTList> languageList = ctService.getCTListByMasterCode(InfolabConstant.COMPETENCY_LANGUAGE_MASTER);
			List<CTList> courseList =   ctService.getCTListByMasterCode(InfolabConstant.COMPETENCY_COURSE_MASTER);
			logger.info("[SelfAssessmentController]->[defaults]->[end]"+languageList.size());
			logger.info("[SelfAssessmentController]->[defaults]->[end]"+courseList.size());
			request.setAttribute("courseList", courseList);
			request.setAttribute("languageList", languageList);
			
		} catch (Exception ex) {
			logger.error("[SelfAssessmentController]->[defaults]->[exception]", ex);
		}
		return AuditPortletConstant.JSP_ADUIT_LIST;
	}
	
	@ResourceMapping("getCompetencyList")
	public void viewJson(@ModelAttribute("pager") Pager pager, ResourceRequest request, ResourceResponse response) {
		
		Map map = new HashMap();
		String courseId = StringUtils.defaultIfEmpty((String) pager.getSearchCriteria().get("courseID"),"");
		String languageId = StringUtils.defaultIfEmpty((String) pager.getSearchCriteria().get("languageID"), "");
		selfAssessmentService.getCompetencyList(pager,courseId,languageId);
		if(pager.getResultList()!=null){
			logger.info("[AuditController]->[defaults]->[end]"+pager.getResultList().size());
		}
		map.put(InfolabConstant.RESULT, InfolabConstant.YES);
		map.put(InfolabConstant.DATAS, pager);
		super.printJson(response, map);
		logger.info("[SelfAssessmentController]->[getCompetencyList]->[end]");
	}

	
}
