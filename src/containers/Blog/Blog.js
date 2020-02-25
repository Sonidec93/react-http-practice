import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/posts';
import NewPost from './NewPost/NewPost';
class Blog extends Component {


    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/new-posts',
                                    hash: '#submit',
                                    search: '?name=Mukul&age=26'
                                }}>New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/" render={() => <h1>Hello from router</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-posts" component={NewPost} />

            </div>
        );
    }
}

export default Blog;