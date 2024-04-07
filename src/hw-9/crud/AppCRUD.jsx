import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Posts from "./components/Posts.jsx";
import CreatePost from "./components/CreatePost.jsx";
import "./index.css";
import PostPage from "./components/PostPage.jsx";
import EditPost from "./components/EditPost.jsx";

function AppNavMenu() {
    return (
        <div className="crud">
            <Router>
                <Routes>
                    <Route path="/" exact element={<Posts />} />
                    <Route path="/posts/new" exact element={<CreatePost />} />
                    <Route path="/posts/:id" exact element={<PostPage />} />
                    <Route path="/posts/edit/:id" exact element={<EditPost />} />
                </Routes>
            </Router>
        </div>
    );
}

export default AppNavMenu;