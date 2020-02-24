import React, { Component } from 'react';
import './posts.css'
import axios from 'axios';
import Post from './Post/Post';

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
    selectPost = () => {
        this.
    }
    render() {
        const posts = this.state.recievedPost.map((post, index) => {
            return (
                <Post key={post.id} title={post.title} author={post.title} selectPost={this.selectPost.bind(this, index)} />
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