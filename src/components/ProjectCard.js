import { Col, Row, Tab } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, projUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
        <a href={projUrl}>  <h4>{title}</h4> </a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export const ProjectCardCode = ({ title, inscription, imgUrl, codeUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
        <a href={codeUrl}>  <h4>{title}</h4> </a>
          <span>{inscription}</span>
        </div>
      </div>
    </Col>
  );
};
