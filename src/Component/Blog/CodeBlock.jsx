import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ value }) => (
  <SyntaxHighlighter language="javascript" style={docco}>
    {value}
  </SyntaxHighlighter>
);

