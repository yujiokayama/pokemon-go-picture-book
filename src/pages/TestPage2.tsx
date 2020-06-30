import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

const Page2 = ({ history }: Props) => {
  return (
    <div>
      <a onClick={history.goBack}>Previous Page</a>
      <Link to="/">Top</Link>
      <Link to="/page1">Page 1</Link>
      page1
    </div>
  );
};

export default Page2;
