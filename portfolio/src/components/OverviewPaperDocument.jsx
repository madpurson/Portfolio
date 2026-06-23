import React from 'react';

const OverviewPaperDocument = ({ 
  referenceId = "ORDER #0042", 
  title = "PROJECT OVERVIEW", 
  label = "Technology for the future",
  date = new Date().toLocaleDateString(),
  problemStatement = "How can we leverage cutting-edge technologies to create innovative solutions",
  solutionStatement = "By harnessing the power of AI, IoT, and blockchain.", 
  projectSummary = "This project explores the integration of AI, IoT, and blockchain.",
  positions = "fullstack",
}) => {
  return (
    <div className="document-container">
      <div className='overview-paper-content-overlay'></div>
      <div className="document-content">
        <div className="document-header secondary-color">
          <div className="headnotes-container">
            <span className="document-reference">{referenceId}</span>
          </div>
          <div className="subheader-container">
            <span className="document-title">PROJECT REPORT</span>
            
            <div className="document-form-table">
                <div className='table-body'>
                  <span className="document-table-row">
                    <div className="subrow">
                      <span className='row-title'>SUBJECT</span>
                      <span className="subject row-body">{title.toUpperCase()}</span>
                    </div>
                    <div className="subrow">
                      <span className='row-title'>TYPE</span>
                      <span className="row-body">ACADEMIC</span>
                    </div>
                    <div className="subrow">
                      <span className='row-title'>DATE</span>
                      <span className="row-body"><span className="document-date">{date}</span></span>
                    </div>
                  </span>

                  <span className="document-table-row">
                    <span className='row-title'>ABSTRACT</span>
                    <span colSpan={6} className='document-label row-body'>{label.toUpperCase()}</span>
                  </span>

                  <span className="document-table-row">
                    <span className='row-title'>RESPONSIBILITY</span>
                    <span colSpan={6} className='row-body'>{positions.toUpperCase()}</span>
                  </span>
                </div>
            </div>
          </div>

          
  
        </div>
        <div className="document-body secondary-color">
          <span className="problem-statement-container document-section">
            <span className="document-section-title">Problem Statement</span>
            <span className="problem-statement">{problemStatement}</span>
          </span>
          <span className="solution-statement-container document-section">
            <span className="document-section-title">Solution Statement</span>
            <span className="solution-statement">{solutionStatement}</span>
          </span>
          <span className="project-summary-container document-section">
            <span className="document-section-title">Project Summary</span>
            <span className="project-summary ">{projectSummary}</span>
          </span>
          
          
        </div>
        <span className="document-footer secondary-color">
          <hr />
          <span className='page-number'>page 1 of 1</span>
        </span>
      </div>
      
    </div>
  );
};

export default OverviewPaperDocument;