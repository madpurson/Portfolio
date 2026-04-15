import React from 'react';

const OverviewPaperDocument = ({ 
  referenceId = "ORDER #0042", 
  title = "PROJECT OVERVIEW", 
  label = "Technology for the future",
  date = new Date().toLocaleDateString(),
  problemStatement = "How can we leverage cutting-edge technologies to create innovative solutions",
  solutionStatement = "By harnessing the power of AI, IoT, and blockchain.", 
  projectSummary = "This project explores the integration of AI, IoT, and blockchain."
}) => {
  return (
    <div className="document-container">
      <div className='overview-paper-content-overlay'></div>
      <div className="document-content">
        <div className="document-header secondary-color">
          <span className="document-reference secondary-sm">{referenceId}</span>
          <span className="document-title secondary-sm">{title}</span>
          
          <span className="document-date secondary-sm">{date}</span>
          <span className="document-label secondary-sm">{label}</span>
  
        </div>
        <div className="document-body secondary-color secondary-sm">
          <span className="problem-statement-container document-section secondary-sm">
            <span className="section-title secondary-sm">Problem Statement</span>
            <span className="problem-statement secondary-sm">{problemStatement}</span>
          </span>
          <span className="solution-statement-container document-section">
            <span className="section-title secondary-sm">Solution Statement</span>
            <span className="solution-statement secondary-sm">{solutionStatement}</span>
          </span>
          <span className="project-summary-container document-section">
            <span className="section-title secondary-sm">Project Summary</span>
            <span className="project-summary secondary-sm ">{projectSummary}</span>
          </span>
          
          
        </div>
        <span className="document-footer secondary-sm">
          <hr />
          <span className='page-number secondary-sm'>page 1 of 1</span>
        </span>
      </div>
      
    </div>
  );
};

export default OverviewPaperDocument;