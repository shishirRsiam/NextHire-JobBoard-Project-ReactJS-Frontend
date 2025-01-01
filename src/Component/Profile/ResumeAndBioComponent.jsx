const ResumeAndBioComponent = ({ resume, setResume, bio, setBio }) => {
    return (
        <>
            <div className="mb-4">
                <label htmlFor="resume" className="block text-lg font-bold mb-2">
                    Resume Link
                </label>
                <textarea id="resume" name="resume" rows="2" value={resume}
                    onChange={(e) => setResume(e.target.value)} required
                    placeholder="Upload your resume Google Drive or other platform and enter your resume link here..."
                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="bio" className="block text-lg font-bold mb-2">
                    Bio
                </label>
                <textarea id="bio" name="bio" rows="3" value={bio}
                    onChange={(e) => setBio(e.target.value)} required
                    placeholder="Enter your bio here..."
                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
            </div>
        </>
    );
}

export default ResumeAndBioComponent;