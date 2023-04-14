import ViewStats from "./view-stats";
import moment from "moment";

const ViewListItem = ({view = {
    "firstName": "John",
    "lastName": "Cusack",
    "age": 20,
    "username": "john123",
    "password": "123",
    "role": "ADMIN",
    "likes": 0,
    "messageCount": 0,
    "tags": "",
    "view": "This is the view written by John"}}) => {



    return(

        <li className="list-group-item mt-1 mb-1 rounded bg-light">
            <div className="row">
                <div className="col-1">
                    <img className="wd-who-to-follow-img" width="50px" height="50px" src="/images/elonavatar.jpg"/>
                </div>
                <div className="col-10">
                    <div className="ps-1">
                        <span className="wd-author"><strong>{view.username}</strong></span>
                        <i cl  assName="fa fa-check-circle"></i>

                        <span> - { moment(view.datePosted).format('DD MMM, YYYY')} </span>
                    </div>
                    <div>
                    </div>
                </div>


            </div>

            <div className="card mt-4" width="100%">
                <div className="card-body">
                    <p className="card-text wd-topic">{view.view}</p>
                </div>
            </div>

            <div>
                <div className="ms-2">

                    <ViewStats view={view}/>

                </div>
            </div>
        </li>

    )
}

export default ViewListItem;