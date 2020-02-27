import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './Blog.css';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/posts';
class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/posts"
                                    activeStyle={{
                                        color: 'red',
                                        textDecoration: 'underline'
                                    }}
                                    >Home</NavLink>
                            </li>
                            <li>
                                {/* <Link to={this.props.match.url + '/new-posts'}>New Post</Link> //for relative path follow this way */}
                                <NavLink activeClassName="my-active"  to={{
                                    pathname: '/new-posts',
                                    search: '?name=mukul&age=26',
                                    hash: '#fragment'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/" render={() => <h1>Hello from router</h1>} /> */}


                <Switch>
                    <Route path="/new-posts" exact component={NewPost} />
                    <Route path="/posts"  component={Posts} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    <Route render={()=><h1>Not Found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;