import axios from 'axios';
import React, { Component } from 'react';
import Post from './Post/Post';
import './posts.css';
import { Link } from 'react-router-dom';


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
        console.log('here');
    }
    render() {
        const posts = this.state.recievedPost.map((post, index) => {
            return (
                <Link to={'/fullpost/' + index} key={post.id}>
                    <Post key={post.id} title={post.title} author={post.title} selectPost={this.selectPost.bind(this, index)} />
                </Link>
            )
        });
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}


export default Posts;