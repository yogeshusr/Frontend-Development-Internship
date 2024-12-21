import React, { useState } from 'react';
import '../styles/style.css';

function Tabs() {
  const [activeTab, setActiveTab] = useState('custom-storefront');

  const tabContent = {
    'custom-storefront': {
      title: 'Set up a store that showcases your brand',
      description:
        'Differentiate yourself from the competition with a full store dedicated to your products - no coding or design skills necessary!',
      imgSrc: '1mdm-product-1.png',
    },
    'advertising-tools': {
      title: 'Increase exposure by up to 120% with smart advertising tools',
      description:
        'Get your products placed in the right spots to be noticed by the exact audience you are targeting.',
      imgSrc: '1mdm-product-image-4.png',
    },
    'data-analytics': {
      title: 'Optimize your every move with in-depth data and customer insights',
      description:
        'Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.',
      imgSrc: '1mdm-product-2.png',
    },
    'customer-support': {
      title: 'Know you’re supported throughout your journey',
      description:
        'From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you.',
      imgSrc: '1mdm-product-3.png',
    },
  };

  return (
    <section className="tabs">
      <h2 style={{ color: '#a10005' }}>Grow your business with a suite of tools built for you</h2>
      <div className="container">
        <div className="row tabs">
          <div className="col-2">
            <div className="list-group" role="tablist">
              {Object.keys(tabContent).map((tabKey) => (
                <button
                  key={tabKey}
                  className={`list-group-item list-group-item-action ${
                    activeTab === tabKey ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab(tabKey)}
                >
                  {tabKey.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
          <div className="col-md-10">
            <div className="tab-content">
              <div>
                <h1>{tabContent[activeTab].title}</h1>
                <p>{tabContent[activeTab].description}</p>
                <img
                  src={tabContent[activeTab].imgSrc}
                  className="img-fluid"
                  alt={activeTab}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
