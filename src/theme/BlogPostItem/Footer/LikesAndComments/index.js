import React, {useState, useEffect} from 'react';

export default function LikesAndComments(props) {
  const [webmentionCount, setWebmentionCount] = useState(0);

  useEffect(() => {
    fetch(`https://webmention.io/api/count?target=${window.location.href}`)
      .then(response => response.json())
      .then(data => setWebmentionCount(data.count))
      .catch(error => console.log(error))
  }, [])

  return (<><p>{webmentionCount} Webmentions(s)</p></>)
}
