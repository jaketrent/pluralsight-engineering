import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import * as Text from '@pluralsight/ps-design-system-text/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import Head from '../src/head'

const GlobalStyles = _ => (
  <style global jsx>{`
    html,
    body {
      background: ${core.colors.white};
    }
    h1,
    h2,
    h3 {
      text-transform: uppercase;
    }
  `}</style>
)

const Title = _ => (
  <header className="title">
    <Logo />
    <Text.Heading>
      <h1>Engineering at Pluralsight</h1>
    </Text.Heading>
    <style jsx>{`
      .title {
        display: block;
        padding: ${core.layout.spacingLarge};
        background: ${core.colors.gradientHorz};
        color: ${core.colors.white};
      }
    `}</style>
  </header>
)

const Logo = _ => (
  <div className="logo">
    <LogoSvg />
    <h2 className="text">PLURALSIGHT</h2>
    <style jsx>{`
      .logo {
        display: flex;
        align-items: center;
      }
      .text {
        margin: 0;
        letter-spacing: 0.15em;
        font-size: ${core.type.fontSizeXSmall};
        font-weight: ${core.type.fontWeightMedium};
      }
    `}</style>
  </div>
)

const LogoSvg = props => (
  <svg
    className="logoSvg"
    viewBox="-2 -2 36 36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path
        className="circle"
        d="M16 32c8.837 0 16-7.164 16-15.9993C32.0007 7.164 24.837 0 16 0 7.1637 0 0 7.164 0 16.0007 0 24.836 7.163 32 16 32z"
      />
      <path
        className="arrow"
        d="M8.625 9.5v13l11.25-6.5-11.25-6.5zM10 11.8824L17.1265 16 10 20.1174v-8.235z"
      />
      <path
        className="arrow"
        d="M11.875 7.625v16.75L26.25 16 11.875 7.625zm1.375 2.3924L23.5186 16 13.25 21.9826V10.0174z"
      />
    </g>
    <style jsx>{`
      .logoSvg {
        height: 31px;
        width: 31px;
        margin-right: 8px;
      }
      .arrow {
        fill: ${core.colors.white};
      }
      .circle {
        stroke-width: 2;
        stroke: ${core.colors.white};
      }
    `}</style>
  </svg>
)

const Section = props => (
  <section className="section">
    <header className="header">
      <Text.Heading size={Text.Heading.sizes.large}>
        <h2 style={{ lineHeight: '1.5em' }}>{props.title}</h2>
      </Text.Heading>
    </header>
    <div className="lists">
      <SubSection title="What we do" points={props.do} />
      <SubSection title="What we encourage" points={props.encourage} />
      <SubSection title="What we avoid" points={props.avoid} />
    </div>
    <style jsx>{`
      .section {
        padding-top: ${core.layout.spacingXLarge};
      }
      .header {
        border-bottom: 1px solid ${core.colors.pink};
      }
      @media (min-width: 700px) {
        .section {
          display: flex;
        }
        .header {
          flex: 2;
          align-self: stretch;
          display: flex;
          align-items: center;
          border-bottom: none;
          border-right: 1px solid ${core.colors.pink};
          text-align: right;
          word-spacing: 311px;
          padding-right: ${core.layout.spacingLarge};
        }
        .lists {
          flex: 3;
          padding-left: ${core.layout.spacingXLarge};
        }
      }
    `}</style>
  </section>
)

const SubSection = props =>
  Array.isArray(props.points) && props.points.length > 0 ? (
    <div className="subsection">
      <Text.Heading size={Text.Heading.sizes.medium}>
        <h3>{props.title}</h3>
      </Text.Heading>
      <List points={props.points} />
      <style jsx>{`
        .subsection {
          padding-bottom: ${core.layout.spacingLarge};
        }
      `}</style>
    </div>
  ) : null

const List = props => (
  <div>
    <Text.Heading>
      <h3>{props.title}</h3>
    </Text.Heading>
    <Text.List
      type={Text.List.types.bulleted}
      style={{ color: core.colors.gray03 }}
    >
      {props.points.map((point, i) => (
        <Text.List.Item>{point}</Text.List.Item>
      ))}
    </Text.List>
  </div>
)

const Main = props => (
  <main className="main">
    {props.children}
    <style jsx>{`
      .main {
        margin: 0 auto ${core.layout.spacingXLarge} auto;
        padding: 0 ${core.layout.spacingLarge};
        max-width: 780px;
      }
    `}</style>
  </main>
)

const Caveat = props => (
  <div className="caveat">
    {props.children}
    <style jsx>{`
      .caveat {
        margin: 0 auto;
        padding: ${core.layout.spacingXXLarge} ${core.layout.spacingLarge};
        max-width: 500px;
        font-weight: ${core.type.fontWeightBold};
      }
    `}</style>
  </div>
)

export default _ => (
  <div>
    <GlobalStyles />
    <Head />
    <Main>
      <Title />
      <Theme name={Theme.names.light}>
        <Section
          title="WE CONTINUOUSLY DELIVER VALUE TO PRODUCTION"
          do={[
            'We focus on flow efficiency over resource efficiency.',
            'We frequently release small changes to production.',
            'We set and follow work in progress (WIP) limits.',
            'We track our work on digital kanban boards.',
            'We extract platforms from working code'
          ]}
          encourage={[
            'We encourage trunk-based development.',
            'We encourage single-piece flow.',
            'We encourage limiting our planning horizon.'
          ]}
          avoid={[
            'We do not create big designs up-front.',
            'We do not work unsustainable schedules'
          ]}
        />

        <Section
          title="WE CREATE OUR PRODUCT COLLABORATIVELY"
          do={[
            'We work on cross-functional teams.',
            'We ensure that at least two people review all code before it ships.',
            'We integrate early and often within and across teams.',
            'We facilitate integration by documenting as we go.',
            'We make decisions guided by the technology decision delegation framework.'
          ]}
          encourage={['We encourage pair and mob programming.']}
          avoid={[
            'We do not create knowledge silos.',
            'e do not work in isolation.',
            'We do not hand off work to another group to own '
          ]}
        />

        <Section
          title="WE ARCHITECT OUR SYSTEM TO SUPPORT RESPONSIBLE, AUTONOMOUS TEAMS"
          do={[
            'We build highly cohesive, loosely coupled bounded contexts.',
            'We divide our product into full vertical slices.',
            'We collaborate with our architecture team on system design.',
            'We follow our technology radar.',
            'We participate in the architecture guild.'
          ]}
          encourage={[
            'We favor asynchronous integrations between bounded contexts.',
            'We choose practices that match our team and problem context.'
          ]}
          avoid={['We do not share data stores between bounded contexts']}
        />

        <Section
          title="WE MAKE DATA-DRIVEN DECISIONS AND BUILD DATA-CENTRIC PRODUCTS"
          do={[
            'We consider data consumers and publish key data.',
            'We comply with data-related legal codes, such as GDPR.',
            'We ensure business continuity through automated backup processes.'
          ]}
          encourage={[
            'We encourage empirical understanding of our product.',
            'We encourage tracking data changes in addition to state.',
            'We encourage publishing data changes to the system.'
          ]}
          avoid={['We do not store PII with third-party providers.    ']}
        />

        <Section
          title="WE CONTINUOUSLY VERIFY THE CORRECTNESS OF OUR CODE"
          do={[
            'We maintain a suite of good unit tests for all production code.'
          ]}
          encourage={['We encourage (acceptance) test driven development.']}
          avoid={['We do not rely on a separate QA team for testing.']}
        />
        <Section
          title="WE MAINTAIN A CLEAN, SECURE, HIGH-QUALITY CODE BASE"
          do={[
            'We believe that speed of delivery and quality are not mutually exclusive.',
            'We dedicate at least 20% of our time to technical debt reduction.'
          ]}
          encourage={['We encourage regular refactoring. ']}
        />

        <Section
          title="WE SAFELY DELIVER VALUE TO PRODUCTION"
          do={[
            'We automate our build pipelines.',
            'We release features in stages.',
            'We release new features under feature flags.',
            'We build immutable deploy artifacts.',
            'We create push-button-simple deploys and rollbacks.',
            'We take responsibility for the security of our product.'
          ]}
          encourage={[
            'We encourage deploying during the work day with zero-downtime.'
          ]}
          avoid={['We do not deploy code with failing tests ']}
        />

        <Section
          title="WE MAINTAIN HIGH AVAILABILITY AND RELIABILITY"
          do={[
            'We maintain a 99.9% uptime for customer-facing components.',
            'We own the code we ship.',
            'We define infrastructure as code.',
            'We follow our implementation checklist.',
            'We log and monitor our systems.',
            'We rotate on-call duty.',
            'We all learn how to respond to production alerts.'
          ]}
          encourage={[
            'We encourage automating everything.',
            'We encourage auto-scaling.'
          ]}
          avoid={[
            'We do not permit failures to cascade through the system.',
            'We do not permit single points of failure. '
          ]}
        />

        <Section
          title="WE HAVE A CULTURE OF CONTINUOUS LEARNING AND GIVING BACK"
          do={[
            'We use our product.',
            'We hold regular retrospective meetings.',
            'We perform a post-mortem on every production outage.',
            'We regularly run experiments.'
          ]}
          encourage={[
            'We encourage book clubs, guilds, and discussion groups.',
            'We encourage participating in conferences, meetups, and hack events.'
          ]}
          avoid={[
            'We do not accept “we do it this way because we’ve always done it this way.”    '
          ]}
        />

        <Section
          title="WE MAINTAIN A CULTURE OF PSYCHOLOGICAL SAFETY"
          do={[
            'We are committed to the Pluralsight Values.',
            'We value diversity.',
            'We treat each other respectfully.',
            'We commit to the group decisions even when we disagree with them.'
          ]}
          encourage={[
            'We encourage radical candor.',
            'We encourage healthy debates, and we challenge ideas instead of people.'
          ]}
          avoid={['We do not permit passive-aggressive behavior. ']}
        />

        <Caveat>
          We recognize that software development is a rapidly evolving
          profession, and we accept that our practices and requirements must
          evolve as well. These are our current practices, but we update them as
          we learn better ways to deliver customer value.
        </Caveat>
      </Theme>
    </Main>
  </div>
)
