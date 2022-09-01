import { useEffect, useState } from "react";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import { useGetArticles } from "../../Hooks/useHttp";
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import  './Home.css';
function Home({navigate}) {
    const [page,setPage] = useState(false);
    const [data,request] = useGetArticles();
    useEffect(()=>{
        if(page === false) {
            request('blog');
            setPage(true);
        }
    },[page]);
    document.title = 'Eqaim Blog';

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={data.loading}
            >
                {data.status === 500 ? <Alert severity={data.status === 201 ? 'success' : 'error'}>{data.msg}</Alert> : <CircularProgress style={{color:'var(--black)'}} />}
                
            </Backdrop>
            <div className="main home">
                {data.data.length ? data.data.reverse().map((i,idx)=><ArticleCard navigate={navigate} key={idx} data={i} />) : <div className="blankCard"><p>Click on <strong>'New Article'</strong> button.</p></div>}
                <button onClick={()=>navigate('/new_article')} className="new_article"><LibraryAddOutlinedIcon /> New Article?</button>
            </div>
        </>
    )
}

export default Home;