import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        recievedPost: [],
        selectedPost: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
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
        console.log('in select post', index);
        this.setState({ selectedPost: { ...this.state.recievedPost[index] } });
    }
    render() {
        let fullPost = (
            <FullPost />
        );
        const posts = this.state.recievedPost.map((post, index) => {
            return (
                <Post key={post.id} title={post.title} author={post.title} selectPost={this.selectPost.bind(this, index)} />
            )
        })
        if (this.state.selectedPost) {
            fullPost = (
                <FullPost id={this.state.selectedPost.id} title={this.state.selectedPost.title} author={this.state.selectedPost.author} />

            )
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    {fullPost}
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;