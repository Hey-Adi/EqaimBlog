import ReactQuill from 'react-quill';
import useInput from '../../Hooks/useInput';
import {usePostArticle} from '../../Hooks/useHttp';
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import 'react-quill/dist/quill.snow.css';
import './Create.css';
const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],[{ 'font': ['sans-serif','serif','monospace'] }],
    ['bold', 'italic', 'underline', 'strike', { 'align': [] }],
    ['image', 'link', 'code-block', 'blockquote'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }]
];

function Create({navigate}) {
    const [reqData,setReqData] = useInput({title:'',author:'',img:'',body:''});
    const [conf,submit,setConf] = usePostArticle();
    document.title = 'Eqaim Blog  • New Article';

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={conf.open}
                onClick={()=>setConf({...conf,open:false})}
            >
                <Alert severity={conf.status === 201 ? 'success' : 'error'}>{conf.msg} Code: {conf.status}</Alert>
            </Backdrop>
            <div className="main create">
                <div className='create_side_buttons'>
                    <button onClick={()=>navigate('/')} className="side_home"><HomeOutlinedIcon /> Home</button>
                    <button disabled={conf.loading} onClick={async ()=>!conf.loading && await submit(reqData,'blog/new_article',navigate)} className="side_create">{conf.loading?<CircularProgress style={{color: 'var(--grey)'}} size={15} />:<AddTaskOutlinedIcon />} {conf.loading?'Loading':'Submit'}</button>
                </div>
                <div className="create_main">
                    <div className="create_input">
                        <label htmlFor="Title">Title (Min:30 Chars & Max:100)</label>
                        <input onChange={e=>setReqData(e,'title')} type="text" placeholder='Your article title...' />
                    </div>
                    <div className="create_input">
                        <label htmlFor="Author">Author (Max:6 Chars & optional)</label>
                        <input onChange={e=>setReqData(e,'author')} type="text" placeholder='Enter your nick-name...' />
                    </div>
                    <div className="create_input">
                        <label htmlFor="Image">Choose Image (All types supported)</label>
                        <input accept="image/*" onChange={e=>setReqData(e,'img',true)} style={{cursor:'pointer'}} type="file" />
                    </div>
                    <div className="create_input">
                        <label htmlFor="Body">Start Writing A Story</label>
                        <ReactQuill value={reqData.body} onChange={e=>setReqData(e,'body',false,true)} modules={{toolbar: toolbarOptions}} placeholder='Once apon a time...' theme='snow' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;