import {useEffect, useState} from "react";
import Filters from "./components/Filters";
import postsItems from "./static/posts";

export default function App() {
    const [filter, updateFilter] = useState( 'all');
    const [posts, setPosts] = useState(postsItems);

    const filters = ['all', 'Websites', 'Flayers', 'Business Cards'];

    function changeFilter(newFilter) {
        updateFilter(newFilter);
    }

    useEffect(() => {
        filterPosts();
    }, [filter]);

    function filterPosts() {
        if (filter === 'all') {
            setPosts(postsItems);
        } else {
            const filtered = postsItems.filter((post) => post.category === filter);
            setPosts(filtered);
        }
    }

    return (
        <>
            <Filters selected={filter} handler={(s) => changeFilter(s)} items={filters}/>
            <div className="s-posts__container">
                {posts.map((post, id) =>
                    <img src={post.img} alt=" " className="s-posts__img" key={id}/>
                )}
            </div>
        </>
    )
}
