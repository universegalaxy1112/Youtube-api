import React, { useState } from "react";
import SearchBar from "./components/Searchbar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const App = () => {
  const [state, setState] = useState({ videos: [], selectedVideo: null });

  const handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    setState({
      ...state,
      videos: response.data.items,
    });
  };

  const handleVideoSelect = (video) => {
    setState({ ...state, selectedVideo: video });
  };
  return (
    <div className="ui container" style={{ marginTop: "1em" }}>
      <SearchBar handleFormSubmit={handleSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              handleVideoSelect={handleVideoSelect}
              videos={state.videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
