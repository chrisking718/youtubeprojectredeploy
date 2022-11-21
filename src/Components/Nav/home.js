import { useState, useEffect} from "react"

import ResultError from "../errors/ResultsError"
import Video from "../Video/Video"
import {getYoutubeVideos} from '../../api/fetch'

import "./home.css"

export default function Home () {
const [youtube , setYoutube] = useState([])
const [resultError, setResultError] = useState(false)
const [search, setSearch] = useState("");
const [storedResults, setStoredResults] = useState([])



// this function calls the fetch with the search results, sets the results.items into the youtube array.
   function getResults(){
    if (search.length > 0){
    getYoutubeVideos(search)
     .then((response) => {
         setYoutube(response.items);
         setResultError(true)
       })
       .catch((error) => {

       });

    }
   }


    // useEffect(() => {
    // localStorage.setItem('stored-results', JSON.stringify(youtube));
    // }, [search]);


    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('stored-results'));
    //     if (storedResults) {
    //      setStoredResults(items);
    //     }
    //   }, []);

  // this function gets the value that the user typed in the search bar and sets it to the search state  
   function handleTextChange(event) {
    const title = event.target.value;
  
  
    setSearch(title);

  
  }
//   console.log(youtube)
//   console.log(search.length)
console.log(localStorage.getItem('stored-results'))
    return (
        <div className="search-feature">
           <input
            className="search"
            type="text"
            placeholder="Search..."
            onChange={handleTextChange}/>
            
            <button onClick={() => getResults()}>Submit</button>
        <div>
            <br></br>
            <br></br>

            {!resultError ? (<ResultError/>):(
            <div className="thumbnails">
                
       
        {
           storedResults.map((yt) => {
               return (
                   <Video key={yt.id.videoId} yt={yt}/>
               )
           })
        }
            </div>
            )}
        </div>
        </div>
    )
}