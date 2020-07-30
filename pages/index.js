import Head from 'next/head'
import Nav from '../components/Nav'
import Chart from '../components/Chart'
import Categories from '../components/Categories'
import Projects from '../components/Projects'
import Header from '../components/Header'
import projectData from '../sample'
import { useEffect, state, useState } from 'react'


export default function Home() {
  const [xfiProjectsData, setXfiProjectData] = useState([]);

  useEffect(()=>{
    setXfiProjectData(projectData)
  }, [])

  return (
    <div className="appContainer">
      <Head>
        <title>xfiPulse - Cross-chain Decentralized Finance Leaderboard</title>
       
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta charSet="utf-8" key="charset"/>
	      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport"/>
	      <link rel="stylesheet" href="https://jenil.github.io/bulmaswatch/superhero/bulmaswatch.min.css" key="bulma"/>
	      <link href="https://unpkg.com/@fortawesome/fontawesome-free@5.13.0/css/all.css" rel="stylesheet" key="fa"/>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100;400;700&display=swap" as="font" crossOrigin=""/>
        <link rel="preload"href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;800&display=swap"as="font"crossOrigin=""/>
        <link rel="preload"href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500&display=swap"as="font"crossOrigin=""/>
      </Head>

      <main>
        <Nav />
        <Header /> 

      {/* Chart & Dashboard  */} 
      <section className="section" style={{marginTop: "-60px"}}>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="box ">
              <div className="card-content">
                <h3 className="is-size-5 has-text-centered">Total Value Locked (USD)</h3>
                <div className="content is-size-1 has-text-centered header-font has-text-warning">
                  $3.51B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: "20px"}}>
        <div className="card">
          <div className="card-content">
            <h2 className="title header-font">Total Value Locked (USD)</h2>
            <Chart />
          </div>
        </div>
      </div>
    </section>

      
    {/* <Categories />  */}
    <Projects data={xfiProjectsData}/>

	  <section className="section section-faq" style={{marginTop: "-60px"}}>
		<div className="container">
			<div className="content">
				<h3>What is xfiPulse?</h3>
				<p>xfiPulse is an abbreviation of the phrase cross-chain finance which generally refers to the digital
					assets and financial smart contracts, protocols, and decentralized applications (DApps) built on
					Ethereum. In simpler terms, it's financial software built on the blockchain that can be pieced
					together like Money Legos. Read more about DeFi.</p>
			</div>
			<div className="content">
				<h3>How do we calculate total value locked (TVL)?</h3>
				<p>xfiPulse monitors each protocol’s underlying smart contracts on the Ethereum blockchain. Every
					hour, we refresh our charts by pulling the total balance of Ether (ETH) and ERC-20 tokens held by
					these smart contracts. TVL(USD) is calculated by taking these balances and multiplying them by their
					price in USD.</p>
			</div>
			<div className="content">
				<h3>How do I get involved in DeFi?</h3>
				<p>Crosschain finance is open for anyone to take part in. You can start by exploring the resources found
					on The DeFi List. And if you’re looking to dive head first into the world of DeFi, we’ve written a
					beginner’s guide called Zero to DeFi. It will teach you the basics, guiding you through how to start
					earning passive income via DeFi lending services.</p>
			</div>
		</div>
	</section>

	    <section className="section" style={{marginTop: "-60px"}}>
		<div className="container has-text-centered" style={{height: "25px", width: "auto", marginTop: "-2px", verticalAlign: "middle"}}
>
			Powered by Fennec / NiuWa
			<br />
      © 2020 xfiPulse, all rights reserved.
		</div>
	</section>
       
      </main>

      <footer>
      
      </footer>

      <style jsx>{`
      
      `}</style>

      <style jsx global>{`
        html,
        main,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        main {
          width: 100%;
        }

        .pulse {
          position: relative;
          display: inline-block;
          color: #d9534f;
        }

        .pulse1 {
          position: relative;
          animation: pulse-sizing 1s 5 ease-out;
        }

        .pulse2 {
          position: absolute;
          top: 0;
          animation: pulse-red 1s 5 ease-out;
          color: transparent;
        }

        @keyframes pulse-sizing {
          0% {
            transform: scale(1);
          }

          25% {
            transform: scale(0.95);
            opacity: 0.8;
          }

          50% {
            transform: scale(1);
          }
        }


        @keyframes pulse-red {
          0% {
            transform: scale(1);
            text-shadow: 0 0 5px rgba(217, 83, 79, 1);
          }

          100% {
            transform: scale(1.2);
            opacity: 0;
            text-shadow: 0 0 10px rgba(217, 83, 79, 0.8);
          }
        }

        .heart {
          animation: pulse 2s infinite;
          transform-origin: center;
          position: relative;
          display: inline-block;
          color: #d9534f;

        }

        /*
        @keyframes pulse {
          0% {
            color: #d9534f;
          }

          50% {
            color: #dd53ae;
            
          }

          100% {
            color: #d9534f;
          }
        }
        */


        /* Heart beat animation */
        @keyframes beat {
          0% {
            transform: scale(1);
            color: black;
          }

          20% {
            transform: scale(1.1);

          }

          40% {
            transform: scale(1);
          }

          60% {
            transform: scale(1.1);
          }

          80% {
            transform: scale(1);
          }

          100% {
            transform: scale(1);

          }
        }

        .section {
          background: transparent;
        }

        body {
          background: linear-gradient(rgba(0, 0, 0, 1), rgba(31, 45, 59, 0.8), rgba(31, 45, 59, 1)), url("what-the-hex.png");
        }


        h1.logo {

          font-size: calc(50px + 1.5vw);
          font-family: 'Exo 2', sans-serif;
          font-weight: 200;

        }

        h1.logo b {
          font-family: 'Exo 2', sans-serif;
          font-size: calc(50px + 1.5vw);
          font-weight: 400;


        }

        .navbar-brand .logo {
          font-size: 25px;
          font-family: 'Exo 2', sans-serif;
          font-weight: 200;
        }

        .navbar-brand .logo b {
          font-size: 25px;
          font-family: 'Exo 2', sans-serif;
          font-weight: 400;
        }

        .navbar-start .navbar-item {
          margin-right: 20px;
        }


        .subtitle {
          font-size: 0.8rem;
        }

        .header-font {
          font-family: 'MuseoModerno', sans-serif;
        }

        .tabs li.is-active a {
          /*color:#000!important;*/
          font-weight: bold;
          /*border-bottom-color: #000;*/
        }

        .container {
          max-width: 900px;
        }

        .is-size-1 {
          font-size: 4rem !important;
        }

        .xfi-table th {
          font-size: 18px;

        }

        .xfi-table td,
        .xfi-table th {
          vertical-align: middle;
        }

        .xfi-table .xfi-rank {
          width: 140px;
          text-align: left !important;
        }

        .xfi-table .xfi-chain {
          width: 140px;

        }

        .xfi-table .xfi-type {
          width: 140px;

        }

        .xfi-table .xfi-locked {
          width: 140px;
          text-align: right !important;

        }

        .xfi-table .xfi-percent {
          width: 140px;
          text-align: right !important;

        }

        .card {
          background: transparent;
          border: 0px;
        }

        .card-content {
          padding: 5px;
        }

        .box {
          box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, .3), 0 0 0 1px rgba(10, 10, 10, 0.2);
        }

        .section-faq h3 {
          font-size: 16px;
          font-weight: bold;
        }

        /*Mobile view*/

        @media (max-width: 900px) {
          h1.logo {
            text-align: center;
          }

          .subtitle {
            text-align: center;
            font-size: 12px;
          }

          .card-content {
            padding-top: 0px;
            padding-bottom: 0px;
          }

          .is-size-1 {
            font-size: 3rem !important;
          }

          .title {
            font-size: 1.2rem;
            margin-top: 20px
          }

          .button {
            padding: 10px !important;
            font-size: 13px;
          }

          .xfi-table th {
            font-size: 14px;
          }

          .xfi-table td {
            font-size: 12px;
          }

          .xfi-chain,
          .xfi-type {
            display: none;
          }

          .section {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }

          .section-header {
            padding-top: 10px !important;
          }

          .column {
            margin-top: -15px;
          }

          .card-content {
            padding: 5px;
          }

          .box {
            padding: 0.5rem;
          }

          .section-faq p {
            font-size: 12px;
          }

          .content {
            padding-left: 10px;
            padding-right: 10px;
          }

        }
      `}</style>
    </div>
  )
}
