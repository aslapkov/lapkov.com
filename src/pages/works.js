import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import TypedReact from '../components/typedReact';
import WorksBlock from '../components/WorksBlock';

const WorksPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            dataPage {
              dataWorks {
                year
                desc
                siteUrl
                siteName
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <Seo
        title="Works"
        description="This is a part of my works and projects in which I participated. Learn more about me on the home page."
        slug="/works/"
      />
      <h1>
        <span style={{ display: `none` }}>Works</span>
        <TypedReact strings={[`Some works`]} />
      </h1>
      <h4>These are part of the projects to can show</h4>
      <p>
        There are not all of the works or projects I've participated in. The
        reason is some of them I cannot present, due to trade secrets, to the
        nature of the applications, they no longer exist and for some other
        reasons
      </p>
      <WorksBlock data={data.site.siteMetadata.dataPage.dataWorks} />
    </Layout>
  );
};

export default WorksPage;
