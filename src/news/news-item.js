
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

    return(

            <li className="list-group-item mt-1 mb-1 rounded bg-light">
    <div className="row" >

        <div className="col-2">

            <img  src={news.image} height={120} width={120}/>
<div>
            <span>Symbol:</span> <span className="fw-bold"> {news.symbol}
               </span>
</div>
        </div>


        <div className="col-10">
            <div className="row">
                <div className="col-3">
                    <span className="align-content-left fw-bolder fs-5"> {news.company}</span>
                </div>
                <div className="col-6 text-center">
                    <span >{news.industry}</span>         </div>
                <div className="col-3">
                    <span className="float-end">{new Date(news.time).toLocaleString()}</span>

                </div>
            </div>
            @{news.source}
            <div className="row">
            <div className="fw-bold col-10">{news.title}</div>

            <input style={{"width": "120px"}} type="range" className="form-range float-end col-2" min="-1" max="1" id="customRange3"  value={news.sentiment}  width={120}/>
            </div>
            <div>{news.description}</div>
        </div>
        </div>
            </li>

    )
}

export default NewsItem