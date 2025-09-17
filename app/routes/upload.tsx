import { useState } from "react";
import FileUploader from "~/components/FileUploader";
import Navbar from "~/components/Navbar";

const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleFileSelect = (file: File | null) => {
        setFile(file);}

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {}

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>AI feedback for your job search</h1>
          <h2>Get AI-powered feedback on your resume</h2>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src='/images/resume-scan.gif' alt="Processing" className="w-full"/>
            </>
            ) : (
                <h2>Drop your resume for an ATS score and improvement tips here!</h2>
            )}
            {!isProcessing && (
              <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                <div className="form-div">
                  <label htmlFor="company-name">Company Name</label>
                  <input type="text" id="company-name" name="company-name" placeholder="Company Name"/>
                </div>
                <div className="form-div">
                  <label htmlFor="job-title">Job Title</label>
                  <input type="text" id="job-title" name="job-title" placeholder="Job Title"/>
                </div>
                <div className="form-div">
                  <label htmlFor="job-description">Job Description</label>
                  <textarea rows={5} id="job-description" name="job-description" placeholder="Job Description"/>
                </div>
                <div className="form-div">
                  <label htmlFor="uploader">Uploader</label>
                  <FileUploader onFileSelect={handleFileSelect}/>
                </div>
                <button className="primary-button" type="submit">
                  Analyze Resume
                </button>
              </form>)}
        </div>
      </section>
    </main>
  );
};

export default Upload;
