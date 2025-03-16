import { useLocation } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";

const SubtitleStudio = () => {
  const location = useLocation();
  const videoSrc = location.state?.videoSrc || null; // Get uploaded video

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Subtitle Studio</h2>

      {/* Pass video to the VideoPlayer component */}
      <VideoPlayer videoSrc={videoSrc} />
    </div>
  );
};

export default SubtitleStudio;
