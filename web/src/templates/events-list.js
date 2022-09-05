import React from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';
import PageSpace from '../components/PageSpace';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import BlogGrid from '../components/blogs/BlogGrid';
import ParagraphText from '../components/typography/ParagraphText';
import Pagination from '../components/Pagination';

export const EventsQuery = graphql`
  query eventsQuery($limit: Int!, $offset: Int!) {
    allSanityEvents(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        publishedAt
        title
        slug {
          current
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function EventsList({ data, pageContext }) {
  const eventsMain = data.allSanityEvents.nodes;

  console.log(events.publishedAt);
  const { currentPage, numberOfPages } = pageContext;

  const currentTime = Date.now();
  /*const now = new Date(currentTime).toISOString();
  const d1 = (element) => {
    new Date(element).toISOString();
  };*/
const checkIsCurrent=(event)=>{
let date = Date.parse(event.publishedAt);
return date>=currentTime;
}
const events = eventsMain.filter(checkIsCurrent);
  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="Events" />
      <div className="container">
        <PageHeader
          title="Upcoming Events"
          description="Checkout this page regularly to be notified of any upcoming event that we are organizing!"
        />
        <div>
          {events.length>0 ? (
            events.forEach(({ id }) => <BlogGrid blogs={events} key={id} />)
          ) : (
            <ParagraphText>
              No Upcoming events for now! Check back later 😉😏
            </ParagraphText>
          )}
        </div>
        {numberOfPages > 1 && (
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            baseURL="/events"
          />
        )}
        <PageHeader
          title="Past Events"
          description="Incase you missed an event , you can come here to get a summary of what happened at the event"
        />
      </div>
    </PageSpace>
  );
}

export default EventsList;
