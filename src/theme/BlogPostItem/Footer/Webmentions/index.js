import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';

function Spacer() {
  return <p></p>;  
}
export default function Webmentions(props) {
  const [webmentions, setWebmentions] = useState({});
  const baseUrl = 'https://webmention.io/api';
  const countEndpoint = (target) => `${baseUrl}/count?target=${target}`;
  const mentionEndpoint = (target) => `${baseUrl}/mentions.jf2?target=${target}`;

  useEffect(() => {
    const postUrl = window.location.href;

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
        <div className={styles.webmentions}>
          {webmentions.authors
              .filter((e,i) => i < 3)
              .map(author => (
                <img src={author.photo} className={`${styles.webmentionphoto} ${styles.horizontalalign}`} />
          ))}
          <p className={`${styles.webmentiontext} ${styles.horizontalalign}`}>
            Mentioned by <strong>{webmentions.authors[0].name}</strong>
            {webmentions.count === 2 && (
              <>{' and '}<strong>{webmentions.authors[1].name}</strong></>
            )}
            {webmentions.count > 2 && (
              <>{' and '}<strong>{webmentions.count - 1 + ' others.'}</strong></>
            )}
          </p>
        </div>
      )}
    </>
  )
}
