import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import Webmentions from '@site/src/theme/BlogPostItem/Footer/Webmentions';
import {useBlogPost} from '@docusaurus/theme-common/internal';

export default function FooterWrapper(props) {
  const {metadata, isBlogPostPage} = useBlogPost();
  return (
    <>
      <Footer {...props} />
      {isBlogPostPage && (<Webmentions />)}
    </>
  );
}
