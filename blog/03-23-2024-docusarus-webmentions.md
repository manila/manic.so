---
layout: post
title: "Docusarus Webmentions"
date: 2024-03-23
authors: [manila]
tags: [indieweb]
slug: blog/docusarus-webmentions
---

A [Webmention](https://www.w3.org/TR/webmention/) is a way to notify websites when a link to a website is posted on a different website.

The purest form of this is where a website owner hosts a webmention endpoint that can receive webmentions, store them in a database, then display them on the appropriate page. Running this server is generally a little more involved but luckily there is a handy service called [webmention.io](https://webmention.io) which handles the receiving, storage, and provides a REST endpoint for fetching webmentions.

<!-- truncate -->

 ```mermaid
 sequenceDiagram
  participant A as Website A
  participant Webmention as Webmention.io
  participant B as Website B
  B ->> A: Check webmention endpoint
  A ->> B: Reply with webmention.io endpoint
  par B to Webmention.io
    B ->> Webmention: Send webmention
  and A to Webmention.io
    A ->> Webmention: Fetch webmention
  end
 ```

 One thing to keep in mind when using webmention.io is that it is pull-based, so your website will need to check for new webmentions. This is usually not a problem though since you'll only want to check for webmentions of page when that page is loaded.

 For my current site which uses Docusarus I do this with React, here is how I fetch webmentions:

 ```JavaScript
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
```
