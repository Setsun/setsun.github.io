import React, { useState } from 'react';
import styled from 'styled-components';
import { Flipper } from 'react-flip-toolkit';
import { Route, Link, useRoute, useLocation } from 'wouter';
import { hot } from 'react-hot-loader/root';
import { FadeTransition, TranslateTransition } from 'react-transition-components';
import XCircle from 'react-feather/dist/icons/x-circle';

import Card from '../../components/Card';
import Heading from '../../components/Heading';
import Sunset from '../../components/Sunset';
import withLazy from '../../components/withLazy';

import kickstarterImg from '../../img/kickstarter.png';
import frameImg from '../../img/frame.png';
import jetImg from '../../img/jet.png';
import hubspotImg from '../../img/hubspot.png';

const delay = ms => new Promise((resolve) => setTimeout(resolve, ms));

const LazySketches = withLazy(() => import('../Sketches'));

LazySketches.preload();

const WorkImage = styled.img`
  height: 24px;
  width: auto;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 2rem;
`;

const MainContainer = styled.div`
  width: 100%;
  padding: 2rem 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardHeaderContainer = styled(HeaderContainer)`
  justify-content: space-between;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const Loading = ({ onFinish }: { onFinish: Function }) => (
  <LoadingContainer>
    <FadeTransition>
      <Sunset flipId="sunset" onFinish={onFinish} />
    </FadeTransition>
  </LoadingContainer>
);

const Section = ({
  heading,
  items,
  location,
}) => (
  <>
    <FlexContainer>
      <Heading fontSize={2.5}>{heading}</Heading>
    </FlexContainer>
    <FlexContainer style={{ maxWidth: '1150px', margin: '0 auto' }}>
      {items.length ? items.map((item, i) => (
        <TranslateTransition delay={300 * i}>
          {(style) => (
            <Link href={`/work/${item.heading.toLowerCase()}`}>
              <a style={style}>
                {`/work/${item.heading.toLowerCase()}` !== location && (
                  <Card flipId={`/work/${item.heading.toLowerCase()}`}>
                    <Heading fontSize={1.5}>{item.heading}</Heading>
                    <p>{item.text}</p>
                  </Card>
                )}
              </a>
            </Link>
          )}
        </TranslateTransition>
      )) : 'Coming Soon'}
    </FlexContainer>
  </>
)

const Main = ({
  items,
  location,
}) => (
  <MainContainer>
    <HeaderContainer>
      <Sunset
        flipId="sunset"
        animate={false}
        size={64}
        style={{ marginRight: '1rem' }}
      />

      <FadeTransition>
        <Heading fontSize={3}>
          I am Setsun.
        </Heading>
      </FadeTransition>
    </HeaderContainer>

    <FadeTransition>
      <div>
        <Section
          heading="Work"
          items={items}
          location={location}
        />

        <Section
          heading="Projects"
          items={[]}
          location={location}
        />

        <Section
          heading="Sketches"
          items={[]}
          location={location}
        />

        <FlexContainer>
          <Heading fontSize={2.5}>Connect</Heading>
        </FlexContainer>
        <FlexContainer
          style={{
            maxWidth: '1150px',
            margin: '0 auto',
            flexDirection: 'column',
          }}
        >
          <a href="https://github.com/setsun" target="_blank">https://github.com/setsun</a>
          <a href="https://linkedin.com/in/setsun" target="_blank">
            https://linkedin.com/in/setsun
          </a>
        </FlexContainer>
      </div>
    </FadeTransition>
  </MainContainer>
);

const App = () => {
  const [location, setLocation] = useLocation();
  const [match] = useRoute("/");
  const [loading, setLoading] = useState(true);

  const items = [
    {
      heading: 'Kickstarter',
      text: 'Bringing creative projects to life.',
      link: 'https://kickstarter.com',
      image: kickstarterImg,
    },
    {
      heading: 'Frame.io',
      text: 'Video review and collaboration, solved.',
      link: 'https://frame.io',
      image: frameImg,
    },
    {
      heading: 'Jet',
      text: 'Brands and city essentials, all in one place.',
      link: 'https://jet.com',
      image: jetImg,
    },
    {
      heading: 'HubSpot',
      text: 'There’s a better way to grow.',
      link: 'https://hubspot.com',
      image: hubspotImg,
    },
  ];

  return (
    <Flipper
      flipKey={loading || location}
      decisionData={{
        location,
        loading,
      }}
    >
      {loading ? (
        <Loading
          onFinish={async () => {
            await delay(600);
            setLoading(false);
          }}
        />
      ) : (
        <Main
          location={location}
          items={items}
        />
      )}

      <Route path="/work/:id">
        {({ id }) => {
          const item = items.find(i => i.heading.toLowerCase() === id);

          return (
            <Card fullscreen flipId={`/work/${id}`}>
              <FadeTransition delay={150}>
                {(style) => (
                  <>
                    <CardHeaderContainer>
                      <Heading fontSize={1.5}>{item.heading}</Heading>
                      <a href={item.link} target="_blank">
                        <WorkImage src={item.image} style={style} />
                      </a>
                      <Link href="/" style={style}>
                        Close <XCircle style={{ marginLeft: '0.25rem' }} />
                      </Link>
                    </CardHeaderContainer>
                    <p>{item.text}</p>
                    <h3 style={style}>Selected Works</h3>
                    <p style={style}>Coming soon.</p>
                  </>
                )}
              </FadeTransition>
            </Card>
          );
        }}
      </Route>

      <Route path="/sketches/:id">
        {({ id }) => (
          <Card fullscreen flipId={location}>
            <LazySketches id={parseInt(id, 10)}/>
          </Card>
        )}
      </Route>

      <FadeTransition delay={100} in={!match}>
        <Overlay onClick={() => setLocation('/')} />
      </FadeTransition>
    </Flipper>
  );
};

export default hot(App);
