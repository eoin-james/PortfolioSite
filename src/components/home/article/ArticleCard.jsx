import React from "react";
import { extractContent } from "../utils";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import Image from "react-bootstrap/Image";

function ArticleCard({ article }) {
  // Destructure the article object to access properties
  console.log(article)
  const { title, description, link, thumbnail } = article;

  // Extract the content and ensure it's a string
  const content = extractContent(description) || '';

  return (
    <Col md={4}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Image src={thumbnail} fluid />
        <Card.Body>
          <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
          <Card.Text>{content || <Skeleton count={3} />} </Card.Text>
          <hr />
          <Card.Text>
            <a
              href={link}
              target="_blank" // Correct the space in target attribute
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
