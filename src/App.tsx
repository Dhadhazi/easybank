import React from "react";
import { ArticleCard } from "./components/ArticleCard";
import { FeatureCard } from "./components/FeatureCard";
import { RequestInviteButton } from "./components/RequestInviteButton";
import { SocialBox } from "./components/SocialBox";
import { TopmenuItem } from "./components/TopmenuItem";
import { TOPMENU, FEATURES, ARTICLES } from "./content";

function App() {
  return (
    <div id="maindiv">
      <header>
        <div id="topmenu">
          <div>
            <img src="./logo.svg" alt="Easybank Logo" />
          </div>
          <span>
            {TOPMENU.map((title, index) => (
              <TopmenuItem title={title} key={`topmenu-${index}`} />
            ))}
          </span>
          <div>
            <RequestInviteButton />
          </div>
        </div>
      </header>
      <div id="firstboxcontainer">
        <div id="firstbox">
          <div id="getinvite">
            <h1>Next Generation digital banking</h1>
            <span>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </span>
            <RequestInviteButton />
          </div>
          <img
            id="mockups-bg"
            src="./bg-intro-desktop.svg"
            alt="Background for mockups"
          />
          <img
            id="mockups"
            src="./images/image-mockups.png"
            alt="Images of our platform"
          />
        </div>
      </div>
      <div id="secondboxcontainer">
        <div id="secondbox">
          <div id="description">
            <h2>Why choose Easybank?</h2>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </div>
          <div id="features">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                key={`feature-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div id="thirdboxcontainer">
        <div id="thirdbox">
          <h2>Latest Articles</h2>
          <div id="articles">
            {ARTICLES.map((article, index) => (
              <ArticleCard
                image={article.image}
                author={article.author}
                title={article.title}
                description={article.description}
                key={`article-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
      <footer id="footercontainer">
        <div id="footerbox">
          <div id="footerleft">
            <div>
              <img src="./logo-white.svg" alt="Easybank Logo" />
            </div>
            <div>
              <SocialBox />
            </div>
          </div>
          <div id="footermenu">
            About Us Contact Blog Careers Support Privacy Policy
          </div>
          <div id="footerright">
            <RequestInviteButton />© Easybank. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
