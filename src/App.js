import {useEffect, useState} from "react";
import Filters from "./components/Filters";
import postsItems from "./static/posts";

export default function App() {
    const [filter, updateFilter] = useState( 'all');
    const [posts, setPosts] = useState({sorted: [...postsItems]});

    const filters = ['all', 'Websites', 'Flayers', 'Business Cards'];

    function changeFilter(newFilter) {
        updateFilter(newFilter);
    }

    useEffect(() => {
        filterPosts();
    }, [filter]);

    function filterPosts() {
        if (filter === 'all') {
            setPosts({ sorted: postsItems} );
        } else {
            const filtered = postsItems.filter((post) => post.category === filter);
            setPosts({ sorted: filtered });
        }
    }

    function spreadPosts(col) {
        return posts.sorted.filter((item, index) => !((index + col) % 3));
    }

    return (
        <>
            <Filters selected={filter} handler={(s) => changeFilter(s)} items={filters}/>
            <div className="s-posts__container">
                <div className="s-posts__column">
                    {spreadPosts(1).map((post, index) =>
                        <img key={index} src={post.img} alt=""/>)}
                </div>
                <div className="s-posts__column">
                    {spreadPosts(2).map((post, index) =>
                        <img key={index} src={post.img} alt=""/>)}
                </div>
                <div className="s-posts__column">
                    {spreadPosts(3).map((post, index) =>
                        <img key={index} src={post.img} alt=""/>)}
                </div>
            </div>
        </>
    )
}
