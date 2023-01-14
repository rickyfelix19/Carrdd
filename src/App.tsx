import { useState } from "react";
import Button from './components/Button';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
          <div>
        <div>
        <div>
          <img src="./src/assets/Ricky-Felix.jpg" alt="Ricky Felix picture" />
          <h1>Ricky Felix</h1>

          <h3>
            <strong>a UI/UX Designer and a Front-End Developer</strong>
          </h3>
        </div>

        <div>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://docs.google.com/document/d/1EB-xPrKJwBG0rjFWHphBPPDc3juqEO63/edit?usp=share_link&ouid=101734197381420246632&rtpof=true&sd=true"
                className="mx-auto inline-block rounded-full bg-blue-600 px-5 py-2 align-middle font-semibold text-white no-underline hover:bg-blue-700 md:mx-0"
              >
                Download Resume
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener"
                href="https://rickyfelix019.super.site/"
                className="mx-auto inline-block rounded-full border-2 border-solid border-gray-600 px-5 py-2 align-middle font-semibold no-underline hover:border-blue-700 md:mx-0"
              >
                Open Website
              </a>
            </li>
          </ul>
        </div>

      <hr />

        <div>
          <h2>Summary</h2>
          <p>
            Ricky Felix is a recent UTS Bachelor of Science in IT graduate.
            After finishing his degree, he continued his studies at University
            of Sydney in Master of Interaction Design and Electronic Arts
            (MIDEA).
          </p>
          <div>
            <ul>
              <li>
                <i className="fa-regular fa-circle-chevron-right"></i>
                Granted with USYD International Students Award Scholarship for
                2023,
              </li>
              <li>
                <i className="fa-regular fa-circle-chevron-right"></i>
                Currently one of the student mentor for his faculty (USYD's
                Architecture, Design, and Planning),
              </li>
              <li>
                <i className="fa-regular fa-circle-chevron-right"></i>
                Joined the PPI-Australia (the Indonesian Student Association in
                Australia) and contributed as Front-End Developer and UI/UX
                Designer for multiple projects.
              </li>
            </ul>
          </div>
        </div>

      <hr />

        <h2>Find me at:</h2>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/rickyfelix19/"
              className="mx-auto inline-block rounded-full border-2 border-solid border-gray-600 px-5 py-2 align-middle font-semibold no-underline hover:border-blue-700 md:mx-0"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/rickyfelix19"
              className="mx-auto inline-block rounded-full border-2 border-solid border-gray-600 px-5 py-2 align-middle font-semibold no-underline hover:border-blue-700 md:mx-0"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="mailto:rickyfelix19@outlook.com"
              className="mx-auto inline-block rounded-full border-2 border-solid border-gray-600 px-5 py-2 align-middle font-semibold no-underline hover:border-blue-700 md:mx-0"
            >
              Email
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://onedrive.live.com/?authkey=%21AEVYvrGv7Nb%5FDKE&id=DB2641837DEACB12%211042&cid=DB2641837DEACB12/"
              className="mx-auto inline-block rounded-full border-2 border-solid border-gray-600 px-5 py-2 align-middle font-semibold no-underline hover:border-blue-700 md:mx-0"
            >
              Dropbox
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.figma.com/team_invite/redeem/kpiWLZwGT85YBN1DnWxpUh"
              className="mx-auto inline-block rounded-full border-2 border-solid border-gray-600 px-5 py-2 align-middle font-semibold no-underline hover:border-blue-700 md:mx-0"
            >
              Figma
            </a>
          </li>
        </ul>
    </div>
    </div>
  );
}

export default App;
