import './ArticleCard.css';
import Moment from 'react-moment';
function Article({navigate,data={author:'',slug:'',title:'Inside Marvel\'s Spider-Man Remastered on PC - the Nixxes tech interview ',img:'/spider.jpg',date:Date.now()}}) {
    return (
        <div className="article_card">
            <div onClick={()=>navigate(`/${data.slug}`)} className='article_card_img' style={{backgroundImage:`url(http://localhost:5000${data.img})`}}></div>
            <h3 onClick={()=>navigate(`/${data.slug}`)}>{data.title}</h3>
            <p><span>{data.author.length? 'by ' + data.author : 'Posted On'} • <Moment date={data.date} format="MMM DD, YYYY" /></span></p>
        </div>
    )
}
export default Article;