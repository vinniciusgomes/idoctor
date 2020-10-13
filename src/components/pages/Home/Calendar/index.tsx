import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import {
  Container, DayNumber, DaysList, Header,
} from './styles';

const Calendar: React.FC = () => (
  <Container>
    <Header>
      <div>
        <FiChevronLeft color="#7081FA" />
        <h1>Outubro de 2020</h1>
        <FiChevronRight color="#7081FA" />
      </div>
    </Header>

    <DaysList>
      <div>
        <strong>DOM</strong>
        <DayNumber disabled>
          <span>03</span>
        </DayNumber>
      </div>
      <div>
        <strong>SEG</strong>
        <DayNumber>
          <span>04</span>
        </DayNumber>
      </div>
      <div>
        <strong>TER</strong>
        <DayNumber>
          <span>05</span>
        </DayNumber>
      </div>
      <div>
        <strong>QUA</strong>
        <DayNumber>
          <span>06</span>
        </DayNumber>
      </div>
      <div>
        <strong>QUI</strong>
        <DayNumber selected>
          <span>07</span>
        </DayNumber>
      </div>
      <div>
        <strong>SEX</strong>
        <DayNumber>
          <span>08</span>
        </DayNumber>
      </div>
      <div>
        <strong>SAB</strong>
        <DayNumber>
          <span>09</span>
        </DayNumber>
      </div>
    </DaysList>
  </Container>
);

export default Calendar;
