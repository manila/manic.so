import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

function Space() {
  return (<><p dangerouslySetInnerHTML={{__html: '&nbsp;'}} /></>);
}
export default function Now() {
  return (
    <Layout>
      <main className={clsx('container margin-vert--xl')}>
        <div className="row">
          <div className="col col--9 col--offset-1">
            <img src="img/profile.png" className={styles.profile}/>
            <Space />
            <Heading as="h1" className="hero__title">Manuel Nila</Heading>
            <Heading as="h2" className="hero__subtitle">/now</Heading>
            <Space />
            <Heading as="h2">Profession:</Heading>
            <p>Engineering @ BuzzFeed</p>
            <Space />
            <Heading as="h2">Specialty:</Heading>
            <p>Cloud Engineering (Kubernetes & GCP)</p>
            <Space />
            <Heading as="h2">Links:</Heading>
            <p><a href="https://manic.so/projects">manic.so/projects</a></p>
            <p><a href="https://github.com/manila">github.com/manila</a></p>
            <p><a href="https://glitch.com/@manila">glitch.com/@manila</a></p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
