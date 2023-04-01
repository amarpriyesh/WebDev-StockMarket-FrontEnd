
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
        <>
    <div className="row pt-2 pb-2" style={{"border": "1px solid #343a40"}}>
        <div className="col-2">
            <img className="float-start" src={news.image} height={100} width={100}/>
        </div>
        <div className="col-10">
            <div>{news.title}</div>
            <div>{news.description}</div>
        </div>

    </div>
    </>
    )
}

export default NewsItem