import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <div>
        <Link className='customLink'
          style= {{ textDecoration: "none", borderBottom:match?"4px solid brown":'',
           fontWeight:'bold' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </div>
    );
  }
export default CustomLink;