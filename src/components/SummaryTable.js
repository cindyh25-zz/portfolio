import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { darkGreen } from '../constants/colors';
import { MyLink } from '../constants/styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  cusdLink,
  hubspotLink,
  lyftLink,
  pearLink,
  softStitchLink,
  telieLink,
  threadLink,
  wiccLink,
} from '../constants/links';

const MyTable = styled(Row)`
  border-width: 1px;
  border-collapse: collapse;
  border-color: ${darkGreen};
  transition: 1s ease;
`;
const TableHeaderCell = styled.div`
  border-bottom: 1px solid ${darkGreen};
  padding-left: 1rem;
  padding-top: 0.5rem;
  font-family: 'Spectral', serif;
  font-weight: normal;
  font-size: 1.25rem;
`;
const TableCol = styled(Col)`
  border: 1px solid ${darkGreen};
  padding: 0 !important;
`;
const TableCell = styled.div`
  padding: 1rem;
`;
const TableItem = styled.p`
  margin-bottom: 0.75rem;
`;

const SummaryTable = () => {
  return (
    <MyTable>
      <TableCol md={4} sm={12}>
        <TableHeaderCell>
          <h4>current</h4>
        </TableHeaderCell>
        <TableCell>
          <TableItem>
            making tv and movies social with{' '}
            <MyLink bolded={true} href={telieLink} target="_blank">
              Telie
            </MyLink>
          </TableItem>
          <TableItem>
            connecting Cornell’s campus with{' '}
            <MyLink bolded={true} href={pearLink} target="_blank">
              Pear
            </MyLink>
          </TableItem>
        </TableCell>
      </TableCol>
      <TableCol md={4} sm={12}>
        <TableHeaderCell>
          <h4>past</h4>
        </TableHeaderCell>
        <TableCell>
          <TableItem>
            driver growth products at{' '}
            <MyLink bolded={true} href={lyftLink} target="_blank">
              Lyft
            </MyLink>
          </TableItem>
          <TableItem>
            automation for growing businesses at{' '}
            <MyLink bolded={true} href={hubspotLink} target="_blank">
              HubSpot
            </MyLink>
          </TableItem>
          <TableItem>
            graphic design (marketing, editorial, web) for{' '}
            <MyLink bolded={true} href={wiccLink} target="_blank">
              WICC
            </MyLink>
            ,{' '}
            <MyLink bolded={true} href={cusdLink} target="_blank">
              CUSD
            </MyLink>
            ,{' '}
            <MyLink bolded={true} href={threadLink} target="_blank">
              Thread Magazine
            </MyLink>
            , Guac Magazine{' '}
          </TableItem>
        </TableCell>
      </TableCol>
      <TableCol md={4} sm={12}>
        <TableHeaderCell>
          <h4>fun</h4>
        </TableHeaderCell>
        <TableCell>
          <TableItem>
            crafting threads at{' '}
            <MyLink
              bolded={true}
              href={softStitchLink}
              target="_blank"
            >
              softstitchdesign
            </MyLink>{' '}
          </TableItem>
          <TableItem>biking around whatever city i'm in</TableItem>
        </TableCell>
      </TableCol>
    </MyTable>
  );
};

export default SummaryTable;
