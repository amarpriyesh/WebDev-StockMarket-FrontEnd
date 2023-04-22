import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import * as newsCommentsService from "../services/news-comments-service"

const CreateComment =(newsID) => {
    const { currentUser } = useSelector((state) => state.user);
    const [inputText,setInputText] = useState('')

    const createComment = () => {
        newsCommentsService.createComment({"news":newsID.newsID,
                                          "user":currentUser._id,
                                          "comment":inputText}).then(res => {console.log("COMMENT CREATED",res)})

    }


    return(<div><div className="row">
        <div className="col-2"> <img className="rounded-5" src={currentUser.profilePhoto} height={50} width={50}/></div>
        <div className="col-10"> <input type="text" value={inputText} className="bg-white text-wrap" onChange={(event) => {setInputText(event.target.value)}} placeholder="Type your comment"/>
        <button className="btn-primary" onClick={event => {createComment()}}>Create</button>
        </div>

    </div></div>)

}

export  default CreateComment