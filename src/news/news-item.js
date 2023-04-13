import {Link} from "react-router-dom";
import Progress from "../progress/progress";
import SidebarComponent from "../sidebar/sidebar";
import {useDispatch,useSelector} from "react-redux";
import {setSidebar} from "../reducers/sidebar-reducer"

const NewsItem = ({news = {"description"
:
"Zomato NZ Media Private Limited is Zomato’s New Zealand-based wholly-owned subsidiary, whereas Zomato Australia Pty Limited is based out of Australia and is a step-down subsidiary, , zomato",
"image"
    :
    "https://static.businessworld.in/article/article_extra_large_image/1643610664_fx7jMh_zomato.png",
"title"
    :
    "Zomato Announces Dissolution Of Subsidiaries In NZ, Australia",
"uuid"
    :
    "771e55f3-e624-465a-a6a8-f4ee7599e327"

}}) => {
    const dispatch = useDispatch();
    const sidebar = useSelector(state => state.sidebar)

    return(

            <li className="list-group-item mt-1 mb-1 rounded bg-light" onClick={() => dispatch(setSidebar({component:"news",newsid:news.title}))}>
    <div className="row" >

        <div className="d-none d-sm-none d-md-block col-2">

            <img  src={news.image}  className="img-fluid"
            />
<div>
            <span>Symbol:</span> <span className="fw-bold text-nowrap"> {news.symbol}
               </span>
</div>
        </div>


        <div className="col-sm-12 col-md-10">
            <div className="row">
                <div className="col-md-4 col-6">
                    <span className="align-content-left fw-bolder fs-5"> {news.company}</span>
                </div>
                <div className="d-none d-sm-none d-md-block col-md-4 text-center">
                    <span >{news.industry}</span>         </div>
                <div className="col-md-4 col-6">
                    <span className="float-end">{new Date(news.time).toLocaleString()}</span>

                </div>
            </div>
            <a href={"https://"+news.source}>@{news.source}</a>
            <div className="row">
            <div className="fw-bold col-10 mr-2 text-justify">{news.title}</div>
            <div className="  d-none d-md-none d-lg-flex row col-lg-2 " style={{"border-width": "1px",
                "border-style": "outset",
                "box-shadow": "2px 2px #888888",
                "height":"50px"
            }} >
               <div className="text-center p-0" style={{ "margin": "0 auto",
                   float: "none"}} > Sentiment </div>
            <input style={{"width": "50px" , "margin": "0 auto",
                float: "none"}} type="range" className="form-range" min="-1" max="1" id="customRange3"  value={news.sentiment}  />
            </div>
            </div>
            <div className=" text-justify">{news.description}</div>
        </div>
        </div>
            </li>

    )
}

export default NewsItem