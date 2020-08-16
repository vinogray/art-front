import React from 'react'; 
import Axios from 'axios';

import { Card } from 'antd';


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

    render() {
        return (
            <Card title={this.state.article.title}>
                <p>
                    {this.state.article.content}
                </p>
            </Card>
        )
    }
}


export default ArticleDetail;
 