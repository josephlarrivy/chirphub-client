import React, { useEffect, useState } from "react";



import '../styles/Feed.css'
import ChirpFeedItem from "./ChirpFeedItem";
import PostChirpForm from "../forms/PostChirpForm";
import ApiRequest from "../common/api";
import AddTagsToChirpForm from "../forms/AddTagsToChirpForm";
import useLocalStorage from "../hooks/useLocalStorage";


const Feed = () => {

  const [token, setTokenValue, removeToken, getToken, getDecodedToken] = useLocalStorage("token");
  const [currentUserId, setCurrentUserId] = useState(null)
  const [chirps, setChirps] = useState(null)
  const [postPhase, setPostPhase] = useState('chirp')

  const getChirps = async () => {
    const response = await ApiRequest.getChirps()
    setChirps(response.data.data)
  }

  const deleteChirp = async (chirpId) => {
  if (window.confirm("Are you sure you want to delete this chirp?")) {
    await ApiRequest.deleteChirp(
      { 'chirp_id': chirpId}
    );
    getChirps();
    } 
  };

  const deleteChirpBookmark = async (chirpId, userId) => {
    const chirp_id = chirpId
    const user_id = userId
    const bookmark = await ApiRequest.removeBookmark(
      { user_id, chirp_id }
    )
    console.log(bookmark)
    getChirps()
  }

  useEffect(() => {
    getChirps()
  }, [])

  if (postPhase === 'transition-tag') {
    setTimeout(() => {
      // navigate("/addTagsToChirpForm")
      setPostPhase('tag')
    }, 1000)
  }

  if (postPhase === 'transition-chirp') {
    setTimeout(() => {
      // navigate("/addTagsToChirpForm")
      setPostPhase('chirp')
    }, 1000)
  }


  return (
    <div id="feed-inner-container">
      <div className="post-chirp-form-container">
        {postPhase === 'chirp' ? (
          <div id="post-chirp-form-container-chirp">
            <PostChirpForm
              postPhase={postPhase}
              setPostPhase={setPostPhase}
            />
          </div>
        ) : postPhase === 'tag' ? (
          <div id="post-chirp-form-container-tag">
            <AddTagsToChirpForm
              postPhase={postPhase}
              setPostPhase={setPostPhase}
              getChirps={getChirps}
            />
          </div>
        ) : (
          <div id="post-chirp-form-container-transition">
            {/* <AddTagsToChirpForm
              postPhase={postPhase}
              setPostPhase={setPostPhase}
              getChirps={getChirps}
            /> */}
          </div>
        )}
      </div>
      {chirps && chirps.map((chirp) => {
        return (
          <ChirpFeedItem
            key={chirp.id}
            chirp={chirp}
            deleteChirp={deleteChirp}
            deleteChirpBookmark={deleteChirpBookmark}
          />
        );
      })}
    </div>
  );

}

export default Feed;