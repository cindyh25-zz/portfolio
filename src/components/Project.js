import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { lightGreenGray, mediumGray } from '../constants/colors';
import { ButtonWrapper } from '../constants/styles';
import Button from 'react-bootstrap/Button';

const ProjectRow = styled(Row)`
  padding: 25px 0;
`;

const ProjectDescCol = styled(Col)`
  padding: 12px 0;
`;
const ProjectImgCol = styled(Col)`
  padding-right: 12px;
`;

const ProjectHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`;
const ProjectTitle = styled.h5`
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 24px;
  display: inline;
`;

const ProjectRoleLabel = styled.div`
  background-color: ${lightGreenGray};
  padding: 4px 8px;
  font-style: italic;
  font-size: 0.75rem;
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 24px;
`;

const ProjectRoleText = styled.p`
  margin: 0;
`;

const NonPrimaryCTA = styled.p`
  color: ${mediumGray};
`;
const Project = ({
  imgSrc,
  title,
  description,
  role,
  isPrimaryCTA,
  ctaText,
  ctaHref,
}) => {
  return (
    <ProjectRow>
      <ProjectImgCol md={6} xs={12}>
        <Image src={imgSrc} fluid />
      </ProjectImgCol>
      <ProjectDescCol md={6} xs={12}>
        <ProjectHeaderWrapper>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectRoleLabel>
            <ProjectRoleText>{role}</ProjectRoleText>
          </ProjectRoleLabel>
        </ProjectHeaderWrapper>
        <p>{description}</p>

        {!isPrimaryCTA && ctaText && (
          <NonPrimaryCTA>{ctaText}</NonPrimaryCTA>
        )}
        {isPrimaryCTA && ctaText && ctaHref && (
          <ButtonWrapper>
            <Button href={ctaHref}>{ctaText}</Button>
          </ButtonWrapper>
        )}
      </ProjectDescCol>
    </ProjectRow>
  );
};

export default Project;
