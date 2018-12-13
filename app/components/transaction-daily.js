// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';
import dateFns from 'date-fns';
import { TransactionItemComponent, type Transaction } from './transaction-item';
import { TextComponent } from './text';

const Wrapper = styled.div`
  border-radius: 7.5px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.cardBackgroundColor};
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const Day = styled(TextComponent)`
  text-transform: uppercase;
  color: ${props => props.theme.colors.transactionsDate};
  font-size: ${props => `${props.theme.fontSize.text * 0.9}em`};
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-bottom: 5px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.inactiveItem};
`;

type Props = {
  transactionsDate: string,
  transactions: Transaction[],
};

export const TransactionDailyComponent = ({ transactionsDate, transactions }: Props) => (
  <Fragment>
    <Day value={dateFns.format(transactionsDate, 'MMM D, YYYY')} />
    <Wrapper>
      {transactions.map(({
        date, type, address, amount,
      }) => (
        <div>
          <TransactionItemComponent type={type} date={date} address={address} amount={amount} />
          <Divider />
        </div>
      ))}
    </Wrapper>
  </Fragment>
);
