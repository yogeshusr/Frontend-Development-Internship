import React from 'react';

const Copyright = () => {
  return (
    <section className="copyright">
      <p>
        &copy; {new Date().getFullYear()} 1MDM ⚡ by{' '}
        <a href="https://www.superlabs.co" target="_blank" rel="noopener noreferrer">
          SuperLabs
        </a>
      </p>
    </section>
  );
};

export default Copyright;
