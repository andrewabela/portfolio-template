
'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledMarkdown = styled(ReactMarkdown)`
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
`;

const PageContent = ({ descriptions }: { descriptions: string[] }) => {
  return (
    <div>
      {descriptions.map((description, index) => (
        <StyledMarkdown key={index}>{description}</StyledMarkdown>
      ))}
    </div>
  );
};

export default PageContent;