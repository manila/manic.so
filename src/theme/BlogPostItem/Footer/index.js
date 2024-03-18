import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import LikesAndComments from '@site/src/theme/BlogPostItem/Footer/LikesAndComments';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <LikesAndComments {...props} />
    </>
  );
}
