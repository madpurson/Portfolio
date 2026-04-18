import React from 'react';

const OverviewPaperDocument = ({ 
  referenceId = "ORDER #0042", 
  title = "PROJECT OVERVIEW", 
  label = "Technology for the future",
  date = new Date().toLocaleDateString(),
  problemStatement = "How can we leverage cutting-edge technologies to create innovative solutions",
  solutionStatement = "By harnessing the power of AI, IoT, and blockchain.", 
  projectSummary = "This project explores the integration of AI, IoT, and blockchain.",
  responsibilities = "fullstack",
  id = 1
}) => {
  return (
    <div className="document-container">
      <div className='overview-paper-content-overlay'></div>
      <div className="document-content">
        <div className="document-header secondary-color">
          <div className="headnotes-container">
            <span className="document-reference">{referenceId}</span>
            <span className="document-date">{date}</span>
          </div>
          <div className="subheader-container">
            <span className="document-title">PROJECT REPORT</span>
            
            <div className="document-form-table">
              <table>
                <tbody>
                  <tr>
                    <td className='row-title'>SUBJECT</td>
                    <td className="subject row-body">{title.toUpperCase()}</td>

                    <td className='row-title'>TYPE</td>
                    <td className="row-body">ACADEMIC</td>
                    
                  </tr>

                  <tr>
                    <td colSpan={2} className='row-title'>ABSTRACT</td>
                    <td colSpan={2} className='document-label row-body'>{label.toUpperCase()}</td>
                  </tr>

                  <tr>
                    <td colSpan={2} className='row-title'>RESPONSIBILITIES</td>
                    <td colSpan={2} className='row-body'>{responsibilities.toUpperCase()}</td>
                  </tr>
                </tbody>
              </table>
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