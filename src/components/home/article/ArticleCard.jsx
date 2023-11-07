import React from "react";
import { formatDate, extractContent } from "../utils"; // Import the functions

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
// import axios                    from "axios";
// import { CardImg } from "react-bootstrap";
import Image from "react-bootstrap/Image";


function ArticleCard({ article }) {
  console.log(article);
  // const formattedDate = formatDate(article.pubDate);
  const content = extractContent(article.description);
  const thumbnailUrl = article.thumbnail.toString();

  return (
    <Col md={4}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Image src={thumbnailUrl} fluid/>
        <Card.Body>
          {/*<Card.Img variant="top" image={article.thumbnail} />*/}
          <Card.Title as="h5">{article.title || <Skeleton />} </Card.Title>
          <Card.Text>{content || <Skeleton count={3} />} </Card.Text>
          <hr />
          <Card.Text>
            <a
              href={article.link}
              target=" _blank"
              className="text-dark text-decoration-none"
            >
              <span className="text-dark card-link mr-4">
                <i className="fab fa-medium" /> Read More
              </span>
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
       );
}

export default ArticleCard;
