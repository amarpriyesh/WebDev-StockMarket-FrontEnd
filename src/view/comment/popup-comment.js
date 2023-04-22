// import React, {useEffect, useState} from 'react';
// import 'reactjs-popup/dist/index.css';
// import {useDispatch, useSelector} from "react-redux";
// import moment from "moment/moment";
// import {createViewCommentThunk, findAllViewsThunk} from "../../thunks/views-thunk";
// import {Link} from "react-router-dom";
//
// export default function PopupComment ({view, key, func, commentCountFun, currentComment}){
//
//     const { currentUser } = useSelector((state) => state.user);
//     //view = useSelector((state) => state.view.view).find(item => item._id === view._id);
//
//     //let comment = view.comment
//
//     //comment = comment.find(item => item._id === currentComment._id);
//     let comment = currentComment
//     const dispatch = useDispatch();
//
//     //const {allUsers} = useSelector((state) => state.allUsers); //findUserByIdThunk(comment.userId);
//
//
//
// /*    useEffect(() => {
//             dispatch(findAllViewsThunk)
//         }
//         , [arrComment])*/
//
//
//     const deleteCommentHandler = () => {
//
//         func(comment._id)
//
//         let allComments = view.comment.map((item) =>
//             Object.assign({}, item, {selected:false})
//         )
//         //
//         let newComment = allComments.filter((item) =>
//             item._id !== comment._id)
//
//         //comment.push(comment[0]);
//
//         //let newCommentArray = {{comment}, newCommentAdd}
//
//
//
//         //view["comment"] = newData;
//
//         //let newView = {...view, comment: newComment}
//
//         //comment.push(newCommentAdd);
//         console.log(comment, "comment to be deleted")
//         console.log(newComment, "New Comment")
//         dispatch(createViewCommentThunk({...view, messageCount:newComment.length , comment: newComment}));
//         comment = newComment
//         console.log({...view, messageCount:newComment.length , comment: newComment});
//         dispatch(findAllViewsThunk);
//         console.log(findAllViewsThunk, "current view")
//         commentCountFun(newComment.length)
//
//     }
//
//
//     return(
//     <>
//         <li className="list-group-item mb-3 rounded bg-light">
//             <div className="row">
//                 <div className="col-2">
//                     <img className="wd-who-to-follow-img" width="50px" height="50px" src={comment.profilePhoto}/>
//                 </div>
//                 <div className="col-9">
//                     <div className="ps-1">
//                         <Link to={"/profile/" + comment.userId} ><span className="wd-author"><strong>{comment.username}</strong></span></Link>
//                         <span className="wd-time">  {moment(comment.datePosted).fromNow()}</span>
//                     </div>
//
//                     <div className="card mt-1" width="100%">
//                         <div className="card-body">
//                             <p className="card-text wd-topic">{comment.message}</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-1">
//                     {currentUser && currentUser.username === comment.username &&
//                         <i onClick={deleteCommentHandler} className="fas fa-remove fa-2x fa-pull-right"></i>
//                     }
//                 </div>
//             </div>
//
//         </li>
//     </>
//     );
// }
