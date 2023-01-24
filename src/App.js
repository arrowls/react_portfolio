import { useState } from "react";
import Filters from "./components/Filters";
import postsItems from "./static/posts";

export default function App() {
    const [filter, updateFilter] = useState({selected: 'all'});
    const [posts, setPosts] = useState({sorted: [...postsItems]});

    const filters = ['all', 'Websites', 'Flayers', 'Business Cards'];

    function changeFilter(filter) {
        updateFilter({ selected: filter });
        filterPosts();
    }

    function filterPosts() {
        if (filter.selected === 'all') {
            setPosts({ sorted: postsItems} );
        } else {
            const filtered = postsItems.filter((post) => post.category === filter.selected);
            setPosts({ sorted: filtered });
        }
    }

    function spreadPosts(col) {
        return posts.sorted.filter((item, index) => !((index + col) % 3));
    }

    return (
        <>
            <Filters selected={filter.selected} handler={changeFilter} items={filters}/>
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
