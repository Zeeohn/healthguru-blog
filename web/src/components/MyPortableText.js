import { PortableText } from '@portabletext/react';
import React from 'react';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import { GatsbyImage } from 'gatsby-plugin-image';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';

// const Table = ({ value }) => (
//   <table style={{ border: '2px solid black', padding: '2px' }}>
//     {value.rows?.map((row) => (
//       <TableRow row={row} />
//     ))}
//   </table>
// );

// const TableRow = ({ row }) => (
//   <tbody>
//     <tr style={{ borderBottom: '2px solid black' }}>
//       {row.cells?.map((cell) => (
//         <td>{cell}</td>
//       ))}
//     </tr>
//   </tbody>
// );

function BlockTable(props) {
  const [head, ...rows] = props.value.rows;
  const isBiDirectional = head.cells[0].length === 0;

  return (
    <table>
      <thead>
        <tr>
          {head.cells?.map((cell) => (
            <th key={cell}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, index1) => (
          <tr key={index1}>
            {row.cells?.map((cell, index) => {
              const Comp = isBiDirectional === 0 ? 'th' : 'td';
              return <Comp key={index}>{cell}</Comp>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <ParagraphText style={{ color: 'gray' }}>{children}</ParagraphText>
    ),
    h1: ({ children }) => <Title>{children}</Title>,
    h2: ({ children }) => <h3 style={{ color: '#166D3B' }}>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: ({ children }) => <a style={{ color: 'blue' }}>{children}</a>,
    strong: ({ children }) => (
      <strong style={{ fontWeight: '600' }}>{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    sup: ({ children }) => (
      <sup style={{ fontWeight: '500', fontSize: '20px' }}>{children}</sup>
    ),
    sub: ({ children }) => (
      <sub style={{ fontWeight: '500', fontSize: '20px' }}>{children}</sub>
    ),
  },
  lists: {
    bullet: ({ children }) => <ul style={{ Left: '20px' }}>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <ParagraphText style={{ marginLeft: '30px' }}>
        <li style={{ listStyleType: 'square' }}>{children}</li>
      </ParagraphText>
    ),
    number: ({ children }) => (
      <ParagraphText>
        <li style={{ listStyleType: 'decimal' }}>{children}</li>
      </ParagraphText>
    ),
  },
  types: {
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);

      const image = {
        url: imageData.url,
        height,
        width,
      };
      const gatsbyImageData = getSanityImageData({
        image,
        layout: 'constrained',
      });
      return (
        <GatsbyImage
          image={gatsbyImageData}
          alt={value.alt}
          className="bodyImage"
        />
      );
    },
    customTable: BlockTable,
  },
};

function MyPortableText({ values }) {
  return <PortableText value={values} components={myPortableTextComponents} />;
}

export default MyPortableText;
