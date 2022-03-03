import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {usePosts} from '../hooks';


const Posts = () => {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const {posts, isLoading, addMutation, deleteMutation} = usePosts({});


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <div>
                <input type="text" ref={titleRef}/>
                <button
                    onClick={() => {
                        addMutation.mutate({
                            author: 'admin',
                            title: titleRef.current?.value
                        });
                    }}
                >
                    Add
                </button>
            </div>
            <ul>
                {
                    posts?.map((post: any, index: number) =>
                        <div key={index}>
                            <Link to={`/product/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <button
                                onClick={() => deleteMutation.mutate(post.id)}
                            >Delete
                            </button>
                        </div>
                    )
                }
            </ul>
        </div>
    );
};

export default Posts;
