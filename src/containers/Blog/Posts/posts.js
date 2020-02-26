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
        this.props.history.push({ pathname: '/'+ index});
        console.log('here');
    }
    render() {
        console.log(this.props);
        const posts = this.state.recievedPost.map((post, index) => {
            return (
                // <Link to={'/' + post.id} key={post.id}>
                <div onClick={this.selectPost.bind(this, post.id)} key={index} >
                    <Post key={post.id} title={post.title} author={post.title} />
                   
                </div>
                // </Link>
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