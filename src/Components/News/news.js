import Card from '../../UI/NewsCard/newsCard'
import classes from './news.module.css'
import { useHistory } from 'react-router-dom'
const News = (props) =>{
    const news = props.news
    const history = useHistory()
    const onClickNewsHandler = () =>{
        props.onClick(props.news)
        history.push("/news")

    }

    return <Card className = {classes.news} onClick={onClickNewsHandler} >
    <img src={news.image} onClick={onClickNewsHandler} alt=''/>
    <h2 onClick={onClickNewsHandler}>{news.title}</h2>
    <p>{news.source.name}</p>
    </Card>
}

export default News