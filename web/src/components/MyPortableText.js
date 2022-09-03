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
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
    h2: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
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

function MyPortableText({ value }) {
  return <PortableText value={value} components={myPortableTextComponents} />;
}

export default MyPortableText;
