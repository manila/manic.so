import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import { useBlogPost } from '@docusaurus/theme-common/internal';

function Space() {
  return (<><p dangerouslySetInnerHTML={{__html: '&nbsp;'}} /></>);
}
export default function Now() {
  console.log(useBlogPost())
  return (
    <Layout>
      <main className={clsx('container margin-vert--xl')}>
        <div className="row">
          <div className="col col--6 col--offset-3">
            <Heading as="h1" className="hero__title">Manuel Nila</Heading>
            <Heading as="h2">/now</Heading>
            <Space />
            <Heading as="h3">Profession:</Heading>
            <p>Engineering @ BuzzFeed</p>
            <Space />
            <Heading as="h3">Specialty:</Heading>
            <p>Cloud Engineering (Kubernetes & GCP)</p>
            <Space />
            <Heading as="h3">Links:</Heading>
            <p><a href="https://manic.so/projects">manic.so/projects</a></p>
            <p><a href="https://github.com/manila">github.com/manila</a></p>
            <p><a href="https://glitch.com/@manila">glitch.com/@manila</a></p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
