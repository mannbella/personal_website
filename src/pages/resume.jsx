const Resume = () => {
    return (
        <div className="hover-3d w-full min-h-screen pt-24 px-4 pb-10 flex justify-center bg-base-100">
            
            <iframe 
                src="/IsabellaMann_Resume.pdf" 
                className="w-full max-w-4xl h-[80vh] bg-blue-600 rounded-lg shadow-lg border border-base-300 transition-all duration-500 ease-in-out hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(37,99,235,0.5)] cursor-pointer"                
                title="Resume"
            />
            
        </div>
    );
};

export default Resume;