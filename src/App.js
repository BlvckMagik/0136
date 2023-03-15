import { useEffect, useState } from 'react';
import PersonInfo from './components/PersonInfo';
import ServicesStatistic from './components/ServicesStatistic';
import Reviews from './components/Reviews';
import InputBlock from './components/InputBlock/InputBlock';
import { DEFAULT_INFO, DEFAULT_USERNAME } from './constants';
import { getItem, setItem } from './utils';
import moment from 'moment';

import { Layout } from './App.styled';
import './App.css';

const App = () => {
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = getItem('posts');
    if (!posts) {
      setItem('posts', DEFAULT_INFO);
      setPosts(DEFAULT_INFO);
    } else {
      setPosts(posts);
    }
  }, []);

  const handleChange = value => {
    setComment(value);
  };

  const handleClick = () => {
    if (!comment) return;
    const newPosts = [
      ...posts,
      {
        name: DEFAULT_USERNAME,
        date: moment().format('D MMM YYYY'),
        content: comment,
      },
    ];
    setPosts(newPosts);
    setItem('posts', newPosts);

    setComment('');
  };

  const handleKeypress = event => {
    if ((event.keyCode === 10 || event.keyCode === 13) && event.ctrlKey) {
      handleClick();
    }
  };

  return (
    <Layout>
      <PersonInfo />
      <ServicesStatistic />
      <Reviews posts={posts} />
      <InputBlock
        comment={comment}
        onChange={handleChange}
        onClick={handleClick}
        onKeypress={handleKeypress}
      />
    </Layout>
  );
};

export default App;
