import React from 'react';
import styled from 'styled-components/macro';

const responive = [
  '.avif 1x',
  '@2x.avif 2x',
  '@3x.avif 3x',
  '.jpg 1x',
  '@2x.jpg 2x',
  '@3x.jpg 3x',
];

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const set = React.useMemo(
    () => responive.map((value) => src.replace('.jpg', value)).join(','),
    [src],
  );

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image src={src} srcSet={set} alt={alt} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
`;

const Tag = styled.li`
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  &:last-of-type {
    overflow: hidden;
  }
`;

export default PhotoGridItem;
