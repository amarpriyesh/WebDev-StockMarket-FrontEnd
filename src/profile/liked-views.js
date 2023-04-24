import {useSelector} from "react-redux";
import {findAllLikedViewsByUser} from "../services/user-action-service";
import {useState} from "react";
function LikedViews() {
    const { currentUser } = useSelector((state) => state.user);
    const [allLikedViews, setAllLikedViews] = useState([])
    findAllLikedViewsByUser(currentUser._id).then(res => {
        console.log(res)
        if (res && res.length !== 0) {
            setAllLikedViews(res[0].likedView)
            console.log("Inside" ,allLikedViews)
        }
    });

    return (
        <>
            <ul>
                {
                    allLikedViews.map(t => {
                        <li>t.viewId</li>
                    })
                }
            </ul>

            <h2>Inside </h2>
        </>
    )

}

export default LikedViews;