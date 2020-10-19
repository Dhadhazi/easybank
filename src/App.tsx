import React from 'react';
import { ArticleCard } from './components/ArticleCard';
import { FeatureCard } from './components/FeatureCard';
import { RequestInviteButton } from './components/RequestInviteButton';
import { TopmenuItem } from './components/TopmenuItem';

const TOPMENU = ["Home", "About", "Contact","Blog","Carriers"]

function App() {
  return (
    <div id="maindiv">
      <header>
        <div id="topmenu">

        
        <div><img src="./logo.svg" alt="Easybank Logo" /></div>
        <span>
          {TOPMENU.map((title, index)=><TopmenuItem title={title} key={`topmenu-${index}`}/> )}
          
        </span>
        <div><RequestInviteButton /></div></div>
      </header>
      <div>
        <h1>Next Generation digital banking</h1>
        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
        <RequestInviteButton />
        <img src="./images/image-mockups.png" alt="Images of our platform" />
      </div>
      <div>
        <h2>Why choose Easybank?</h2>
        We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        <FeatureCard />
      </div>
      <div>
        <h2>Latest Articles</h2>
        <ArticleCard />
      </div>
      <footer>
        <div>
        <img src="./logo.svg" alt="Easybank Logo" />
        Social logoes
        </div>
        <div>
          About Us Contact Blog 
          Careers Support Privacy Policy
        </div>
        <div>
          <RequestInviteButton />
          © Easybank. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
