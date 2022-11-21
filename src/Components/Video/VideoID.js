import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



import YouTube from "react-youtube";

import Comment from "./Comment"
import CommentData from "./CommentData"
import Form from "./Form"

import "./VideoID.css"

 

export default function VideoID(){   

const [comment, setComment] = useState(CommentData)
const {id} = useParams()

// const ref = firebase.firestore().collection("youtube_comments/:id")



const [storedResults, setStoredResults] = useState([]);

// useEffect(() => {
//    const items = JSON.parse(localStorage.getItem('stored-results'));
//   if (storedResults) {
//     setStoredResults(items);
//   }
  
// }, []);

function handleComment(comments){
    
    // ref.add({
        //     name: "comment.name",
        //     comment: "comment.data"
        // })
        
        setComment([...comment, comments])
        
        
    }
    console.log("stored results",storedResults)




return(

    <section>
        <YouTube
        videoId={id}
        className={"youtube-video"}
        />
        <Form handleComment={handleComment}/>
        <Comment comment={comment}/>
    </section>
)
}