const UserItem = ({user}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>
                        <span className="fw-bolder">{user.username}</span>&nbsp;
                        {user.role}</div>
                </div>
            </div>
        </li>
    );
};
export default UserItem;