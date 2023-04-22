// import React, {useEffect, useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {createViewCommentThunk, createViewThunk, findAllViewsThunk} from "../../thunks/views-thunk";
// import {createViewComment} from "../../services/views-service";
//
// function CreateComment({view,  func, commentCountFun}) {
//     let [newComment, setNewComment] = useState('');
//     const dispatch = useDispatch();
//
//     const { currentUser } = useSelector((state) => state.user);
//
//     view = useSelector((state) => state.view.view).find(item => item._id === view._id);
//
//     const comment = view.comment;
//
//     //const { view } = useSelector((state) => state.view);
//
//     // console.log("view state",view);
//     const commentClickHandler = () => {
//         if (!currentUser || newComment.trim().length === 0) {return}
//
//         let newCommentAdd = {
//             "userId": currentUser._id,
//             "username": currentUser.username,
//             "message": newComment,
//             "likes": 0,
//             "dislikes":0,
//             "profilePhoto": currentUser.profilePhoto,
//             "datePosted": new Date()
//         }
//
//         // console.log(comment, 'inside handler click')
//         //comment.push(comment[0]);
//         //let newCommentArray = {{comment}, newCommentAdd}
//         let newData = comment.map((item) =>
//             Object.assign({}, item, {selected:false})
//         )
//
//
//         //view["comment"] = newData;
//
//
//         newData.push(newCommentAdd)
//
//         let newView = {...view, messageCount:newData.length ,comment: newData}
//         //comment.push(newCommentAdd);
//         // console.log("comment");
//         // console.log(newData);
//         // console.log(newView);
//         dispatch(createViewCommentThunk(newView));
//         //dispatch(findAllViewsThunk)
//         //dispatch(findAllViewsThunk());
//         func(newData)
//         setNewComment('')
//         commentCountFun(newData.length)
//         // console.log("comment");
//     }
//
//
//
//
//     return (
//         <>
//             {currentUser &&
//                 <div className="row">
//                     <div className="col-12">
//                         <textarea value={newComment} placeholder="My Comment . . ."
//                                   className="form-control border-0"
//                                   onChange={(event) => setNewComment(event.target.value)}>
//                         </textarea>
//                         <div>
//                             <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
//                                     onClick={commentClickHandler}>
//                                 Comment
//                             </button>
//
//                         </div>
//                     </div>
//                     <div className="col-12"><hr/></div>
//                 </div>
//             }
//         </>
//     );
// }
//
// export default CreateComment;