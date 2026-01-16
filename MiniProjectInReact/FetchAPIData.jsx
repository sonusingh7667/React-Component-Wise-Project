import React, { useEffect, useState } from 'react'

const FetchAPIData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setData(data))
    } , [])

  return (
    <div>
      <h2>Fetching API Data </h2>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
            <li key={post.id}>{post.title}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default FetchAPIData;
