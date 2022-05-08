/*
    === Keys ===
    Keys help React identify which items have changed, are added, or are removed. 
    Keys should be given to the elements inside the array to give the elements a stable identity:

    if you need to rerender an component when prop changes you need to set that attribute in key={thatProp}

    Keys Must Only Be Unique Among Siblings
    Keys used within arrays should be unique among their siblings. 
    However, they don’t need to be globally unique. We can use the same keys when we produce two different arrays

    Keys serve as a hint to React but they don’t get passed to your components. 
    If you need the same value in your component, pass it explicitly as a prop with a different name:


*/

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
    const content = props.posts.map((post) => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    ));
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    { id: 2, title: "Installation", content: "You can install React from npm." }
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Blog posts={posts} />);
