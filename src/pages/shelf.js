import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Head from '../components/Head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer';
import Plant1 from '../images/plant 1.svg';
import Plant2 from '../images/plant 2.svg';
import Books from '../images/books.svg';
import Plant3 from '../images/plant 3.svg';
import Frame2 from '../images/frames 2.svg';
import Frame from '../images/frame.svg';
import Zero from '../images/zerotoone.jpg';
import Item1 from '../images/Frame01.png';
import Item2 from '../images/Frame02.png';
import Item3 from '../images/Frame03.png';
import Item4 from '../images/Frame04.png';
import Item5 from '../images/Frame05.png';
import {
  PageContainer,
  pageStyles,
  SectionHeader,
} from '../constants/styles';
import { leafGreen } from '../constants/colors';
import { Image } from 'react-bootstrap';

const Shelf = styled(Row)``;
const ShelfItem = styled(Col)`
  border-bottom: 2px solid ${leafGreen};
  padding-bottom: 0.5em;
  margin-bottom: 4em;
`;

const ShelfPage = () => {
  return (
    <main style={pageStyles}>
      <PageContainer>
        <Head page="shelf" />
        <section style={{ marginTop: '4rem' }}>
          <SectionHeader>My shelf</SectionHeader>
          <p>What I've been creating and consuming</p>
          <Shelf className="align-items-end">
            <ShelfItem md={3} sm={8} xs={9}>
              <Image fluid src={Item2} />
            </ShelfItem>
            <ShelfItem md={1} sm={4} xs={3}>
              <Image fluid src={Plant1} />
            </ShelfItem>
            <ShelfItem md={3} sm={8} xs={9}>
              <Image fluid src={Item5} />
            </ShelfItem>
            <ShelfItem md={1} sm={4} xs={3}>
              <Image fluid src={Frame} />
            </ShelfItem>
            <ShelfItem md={3} sm={8} xs={9}>
              <Image width="60%" src={Zero} />
            </ShelfItem>
            <ShelfItem md={1} sm={4} xs={3}>
              <Image fluid src={Books} />
            </ShelfItem>
          </Shelf>

          <Shelf className="align-items-end">
            <ShelfItem md={1} sm={4} xs={3}>
              <Image fluid src={Plant3} />
            </ShelfItem>
            <ShelfItem md={3} sm={8} xs={9}>
              <Image fluid src={Item4} />
            </ShelfItem>
            <ShelfItem md={1} sm={4} xs={3}>
              <Image fluid src={Frame2} />
            </ShelfItem>
            <ShelfItem md={3} sm={8} xs={9}>
              <Image fluid src={Item3} />
            </ShelfItem>
            <ShelfItem md={1} sm={4} xs={3}>
              <Image fluid src={Plant2} />
            </ShelfItem>
            <ShelfItem md={3} sm={8} xs={9}>
              <Image fluid src={Item1} />
            </ShelfItem>
          </Shelf>
        </section>
      </PageContainer>
      <Footer />
    </main>
  );
};

export default ShelfPage;
