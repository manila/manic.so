import React, {useState, useEffect} from 'react';
import './style.css';

function Spacer() {
  return <p></p>;  
}
export default function Webmentions(props) {
  const [webmentions, setWebmentions] = useState({});
  const baseUrl = 'https://webmention.io/api';
  const countEndpoint = (target) => `${baseUrl}/count?target=${target}`;
  const mentionEndpoint = (target) => `${baseUrl}/mentions.jf2?target=${target}`;
  const postUrl = window.location.href;

  useEffect(() => {
    const webmentionCount = fetch(countEndpoint(postUrl))
      .then(response => response.json())
      .then(data => data.count)
      .catch(error => console.log(error))
 
    const webmentionAuthors = fetch(mentionEndpoint(postUrl))
      .then(response => response.json())
      .then(data => data.children)
      .then(mentions => mentions.map(mention => mention.author))
      .catch(error => console.log(error))

    Promise.all([webmentionCount, webmentionAuthors])
      .then(([count, authors]) => setWebmentions({
        'count': count, 
        'authors': authors
      }))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Spacer />
      {webmentions.count > 0 && (
        <div className='webmentions'>
          <p className='webmention-counter'>Mentioned by <b>{webmentions.authors[0].name}</b></p>
        </div>
      )}
    </>
  )
}
