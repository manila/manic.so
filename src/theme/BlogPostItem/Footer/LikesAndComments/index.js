import React, {useState, useEffect} from 'react';
import './style.css';

export default function LikesAndComments(props) {
  const [webmentionCount, setWebmentionCount] = useState(0);

  useEffect(() => {
    fetch(`https://webmention.io/api/count?target=${window.location.href}`)
      .then(response => response.json())
      .then(data => setWebmentionCount(data.count))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <p className='webmention-counter'>{webmentionCount}</p>
    </>
  )
}
