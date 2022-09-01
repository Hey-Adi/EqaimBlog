import ReactQuill from 'react-quill';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {useGetArticle} from '../../Hooks/useHttp';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import './Article.css';
import Moment from 'react-moment';

export default function Article({useParams,navigate}) {
    const [page,setPage] = useState(false);
    const {slug} = useParams();
    const [data,request] = useGetArticle();
    useEffect(()=>{
        if(page === false) {
            request(`blog/${slug}`);
            setPage(true);
        }
    },[page]);
    document.title = `Eqaim Blog  • ${data.data.title}`;

    // <p><span>{data.data.author ? 'by ' + data.data.author : 'Posted On'} • <Moment date={data.data.date} format="MMM DD, YYYY" /></span></p>
    return (
        <div className="main article_block">
            <button onClick={()=>navigate('/')} className="side_home"><HomeOutlinedIcon /> Home</button>
            <p className="static">~ <span>{data.data.author ? 'by ' + data.data.author : 'Posted On'} • <Moment date={data.data.date} format="MMM DD, YYYY" /></span></p>
            <img src={'http://localhost:5000/'+data.data.img} alt={data.data.title} />
            <h1>{data.data.title}</h1>
            <div className="article_body">
                <ReactQuill readOnly value={data.data.body} modules={{toolbar: []}} theme='snow' />
            </div>
        </div>
    )
}