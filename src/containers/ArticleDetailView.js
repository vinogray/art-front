import React from 'react'; 
import Axios from 'axios';

import { Button, Card } from 'antd';
import CustomForm from '../components/Form';


class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    UNSAFE_componentWillMount() {
        const articleID = this.props.match.params.articleID
        Axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });
            }) 
    }

    handleDelete = (event) => {
        const articleID = this.props.match.params.articleID;
        Axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
        this.props.history.push('/');
        this.setState(); 
        // не работает, доделать
    }    

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>
                        {this.state.article.content}
                    </p>
                </Card>
                <br />
                <CustomForm 
                    requestType="put"
                    articleID={this.props.match.params.articleID}
                    btnText="Update"/>
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="Submit">Delete</Button>
                </form>
            </div>
        )
    }
}


export default ArticleDetail;
 