import React from 'react';
import {Link} from "react-router-dom";

function Profile() {
    // const { profileId } = useParams();
    // const [profileData, setProfileData] = useState(null);
    //
    // useEffect(() => {
    //     axios.get(`/api/profile/${profileId}`)
    //         .then(response => {
    //             setProfileData(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, [profileId]);
    //
    // if (!profileData) {
    //     return <div>Loading...</div>;
    // }
    //
    // return (
    //     <div className="container">
    //         <h2>Profile</h2>
    //         <div className="row">
    //             <div className="col-md-6">
    //                 <h3>Personal Information</h3>
    //                 <p>{profileData.name}</p>
    //                 {profileData.isOwner &&
    //                     <div>
    //                         <p>{profileData.email}</p>
    //                         <p>{profileData.phone}</p>
    //                     </div>
    //                 }
    //             </div>
    //             <div className="col-md-6">
    //                 <h3>Following</h3>
    //                 <ul>
    //                     {profileData.following.map(user => (
    //                         <li key={user.id}><a href={`/profile/${user.id}`}>{user.name}</a></li>
    //                     ))}
    //                 </ul>
    //             </div>
    //         </div>
    //         <div className="row">
    //             <div className="col-md-6">
    //                 <h3>Followers</h3>
    //                 <ul>
    //                     {profileData.followers.map(user => (
    //                         <li key={user.id}><a href={`/profile/${user.id}`}>{user.name}</a></li>
    //                     ))}
    //                 </ul>
    //             </div>
    //             <div className="col-md-6">
    //                 <h3>Bookmarks</h3>
    //                 <ul>
    //                     {profileData.bookmarks.map(bookmark => (
    //                         <li key={bookmark.id}><a href={bookmark.url}>{bookmark.title}</a></li>
    //                     ))}
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div className="container">
            <h2>Profile</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3>Personal Information</h3>
                    <p>John Doe</p>
                    <Link to="/search" className="btn btn-primary">
                        Search Results
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Profile;
