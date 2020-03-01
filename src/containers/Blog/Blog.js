import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import AsyncComponent from '../../hoc/AsyncComponent';
import './Blog.css';
import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
// import Posts from './Posts/posts';

const Posts = lazy(() => {
    return import('./Posts/posts');
})

const AsyncComp = AsyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: false
    }
    toggleAuth = () => {
        this.setState((prevState, props) => {
            return {
                auth: !prevState.auth
            }
        })
    }
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
                                <NavLink activeClassName="my-active" to={{
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

                <button onClick={this.toggleAuth}>Toggle Auth </button>
                <Switch>
                    {this.state.auth ? <Route path="/new-posts" exact component={AsyncComp} /> : null}
                    {/* <Route path="/posts" component={Posts} /> */}
                    <Route path="/posts" render={(props) => (
                        <Suspense fallback={<div>Loading ...</div>}>
                            <Posts {...props} />
                        </Suspense>
                    )
                    } />

                    {/* <Redirect from="/" to="/posts" /> */}
                    <Route render={(props) => <FullPost {...props} >Hello FullPost</FullPost>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;