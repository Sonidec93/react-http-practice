import axios from 'axios';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import Post from './Post/Post';
import './posts.css';


class Posts extends Component {

    state = {
        recievedPost: [],
        selectedPost: null
    }
    componentDidMount() {
        axios.get('/posts').then(response => {
            const resp = response.data.slice(0, 4).map(post => {
                return {
                    ...post,
                    author: 'mukul'
                }
            });
            this.setState({ recievedPost: resp });
        }).catch(err => {
            console.log('Error occured while fetching from jsonplaceholder');
        });
    }
    selectPost = (index) => {
        this.setState({ selectedPost: { ...this.state.recievedPost[index] } });
        this.props.history.push({ pathname: this.props.match.url + '/' + index });
    }
    render() {
        console.log('url ', this.props.match.url)
        const posts = this.state.recievedPost.map((post, index) => {
            return (
                <Post key={post.id} title={post.title} author={post.title} selectPost={this.selectPost.bind(this, post.id)} />
            )
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
            </div>
        );
    }
}


export default Posts;