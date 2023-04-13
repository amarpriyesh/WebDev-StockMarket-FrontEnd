import {useDispatch} from "react-redux";
import {updateViewThunk} from "../services/views-thunk";

const ViewStats = ({view}) => {
    const dispatch = useDispatch();
    const likeView = () => {
        dispatch({type: 'like-tuit', view});
    };
    return (
        <>
            <div className="p-2 pe-4 wd-float-left">
                <a className="wd-tabs-link" href="#"><i className="me-2 fa-regular fa-comment"></i>{view.messageCount}</a>
            </div>



            <div className="p-2 pe-4 wd-float-left">
                <a className="wd-tabs-link">
                    <span onClick={likeView}>
                        {
                            view.liked &&
                            <i onClick={() => dispatch(updateViewThunk({...view,likes: view.likes + 1}))}
                               className="me-2 fa-solid fa-heart"
                               style={{color: 'red'}}></i>
                        }
                        {
                            !view.liked &&
                            <i onClick={() => dispatch(updateViewThunk({...view,likes: view.likes + 1}))}
                               className="me-2 fa-solid fa-heart"
                               style={{color: 'red'}}></i>
                        }
                        {view && view.likes}
                    </span>
                </a>
            </div>

        </>
    );
}
export default ViewStats;