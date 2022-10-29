import React from "react";
const Links = () => {
  return (
    <div>
      {linkList.map((item) => (
        <a
          href={item.link}
          target='_blank'
          rel='noreferrer'
          className='link-button'
          key={item.key}
          id={item.id}
        >
          {" "}
          {item.name}
        </a>
      ))}
      <div className='link-img-wrap'>
        <a
          href='https://github.com/thefrontrade'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/img/slack.png' alt='img' />
        </a>
        <a
          href='https://github.com/thefrontrade'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/img/icon.png' alt='img' />
        </a>
      </div>
    </div>
  );
};
export default Links;

export const linkList = [
  {
    key: 1,
    id: 'twitter__link',
    name: 'Twitter link',
    link: 'https://twitter.com/theFrontrade',
  },
  {
    key: 2,
    id: 'btn__zuri',
    name: 'Zuri Team',
    link: 'https://training.zuri.team/',
  },
  {
    key: 3,
    id: 'books',
    name: 'Zuri Books',
    link: 'https://books.zuri.team/',
  },
  {
    key: 4,
    id: 'books__python',
    name: 'Python Books',
    link: 'https://books.zuri.team/python-for-beginners?ref_id=samueladeniyi',
  },
  {
    key: 5,
    id: 'pitch',
    name: 'Background Checks for Codes',
    link: 'https://background.zuri.team/',
  },
  {
    key: 6,
    id: 'books__design',
    name: 'Design Books',
    link: 'https://books.zuri.team/design-rules',
  },
];
