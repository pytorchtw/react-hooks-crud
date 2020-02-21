import React from 'react'
import { useGetCallback } from "use-axios-react";
import PostTable from "./PostTable"

const DemoCRUDGet = () => {

    const Layout = ({ children }) => (
        <div className="p-5">
            <h1 className="mb-5">Get posts from https://jsonplaceholder.typicode.com/</h1>
            {children}
        </div>
    );

    const Button = ({ onClick, children }) => (
        <button onClick={onClick} className="btn btn-primary mr-2">
            {children}
        </button>
    );


    function getPostsRequest() {
        return {
            url: "https://jsonplaceholder.typicode.com/posts"
        };
    }

    /*
    function printMsg(obj) {
        console.log(obj);
        return true;
    }
     */

    const GetPosts = () => {
        const [exec, loading, {error, data}] = useGetCallback(getPostsRequest);
        return (
            <Layout>
                <Button onClick={() => exec()}>Get Posts</Button>
                <StatusBar sending={loading} error={error} data={data}/>
                {data && <PostTable posts={data} />}
            </Layout>
        );
    };

    const StatusBar = ({sending, error, data}) => (
        <div className="mt-5">
            {sending && <div>Sending...</div>}
            {error && <code>{error}</code>}
        </div>
    );

    return (
        <div className="container">
            <h1>React Hooks CRUD Demo</h1>
            <div className="flex-large">
                <GetPosts/>
            </div>
        </div>
    )
}

export default DemoCRUDGet