import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';

import Posts from '../../blog/posts';
import PostsContext from '../../context/posts-context';

const Blog = ({ minimize }) => {
  const posts = useContext(PostsContext);

  return (
    <div className="block" id="blog">
      <header className="block--header">
        <div className="block--header-title">
          Keen Blog
        </div>
      </header>
      <div className="block--content">
        <Posts posts={posts.slice(0, minimize ? 2 : 3)} />
      </div>
    </div>
  );
};

Blog.propTypes = {
  minimize: PropTypes.bool.isRequired,
};

export default memo(Blog);
