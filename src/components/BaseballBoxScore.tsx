import React from 'react';
import { useTheme } from 'styled-components';
import {
  Table,
  TableBody,
  TableData,
  TableDataProps,
  TableHead,
  TableHeader,
  TableHeaderProps,
  TableProps,
  TableRow,
  TableRowProps,
} from './elements';
import { View, HStack, VStack, Text, ScrollView } from '@/components';

/**
 * Custom component that extends TableRow to provide styling for all rows
 */
interface ScoreTableHeaderProps extends TableHeaderProps {}

const ScoreTableHeader: React.FC<ScoreTableHeaderProps> = (props) => {
  const { children, ...rest } = props;
  const theme = useTheme();

  return (
    <TableHeader
      fontSize={theme.scoreTableFontSize}
      textAlign={'center'}
      border={'solid'}
      borderWidth={theme.scoreTableBorderWidth}
      borderColor={theme.colors.scoreTableHeaderBorder}
      backgroundColor={theme.colors.scoreTableHeaderBackground}
      color={theme.colors.scoreTableHeaderForeground}
      {...rest}
    >
      {children}
    </TableHeader>
  );
};

/**
 * Custom component that extends TableData to provide styling for all data cells
 */
interface ScoreTableDataProps extends TableDataProps {}

const ScoreTableData: React.FC<ScoreTableDataProps> = (props) => {
  const { children, ...rest } = props;
  const theme = useTheme();

  return (
    <TableData
      fontSize={theme.scoreTableFontSize}
      textAlign={'center'}
      border={'solid'}
      borderWidth={theme.scoreTableBorderWidth}
      borderColor={theme.colors.scoreTableBorder}
      backgroundColor={theme.colors.scoreTablePrimaryBackground}
      color={theme.colors.scoreTableForeground}
      {...rest}
    >
      {children}
    </TableData>
  );
};

/**
 * Custom component that extends TableRow to provide styling for all rows
 */
interface ScoreTableRowProps extends TableRowProps {}

const ScoreTableRow: React.FC<ScoreTableRowProps> = (props) => {
  const { children, ...rest } = props;
  const theme = useTheme();

  return (
    <TableRow height={theme.scoreTableRowHeight} {...rest}>
      {children}
    </TableRow>
  );
};

/**
 * Custom component that extends TableRow with logic for top row
 */
interface ScoreTableIntervalRowProps extends ScoreTableRowProps {
  intervals: number;
}

const ScoreTableIntervalRow: React.FC<ScoreTableIntervalRowProps> = (props) => {
  const { intervals, children, ...rest } = props;
  const theme = useTheme();

  const colArr = [
    <ScoreTableHeader
      key={0}
      backgroundColor={theme.colors.scoreTableSecondaryBackground}
    >
      {null}
    </ScoreTableHeader>,
  ];
  for (let i = 1; i <= intervals; i++) {
    colArr.push(<ScoreTableHeader key={i}>{i}</ScoreTableHeader>);
  }

  return (
    <ScoreTableRow {...rest}>
      {colArr}
      <ScoreTableHeader
        backgroundColor={theme.colors.scoreTableSecondaryBackground}
        key={intervals + 1}
      >
        {'R'}
      </ScoreTableHeader>
      <ScoreTableHeader
        backgroundColor={theme.colors.scoreTableSecondaryBackground}
        key={intervals + 2}
      >
        {'H'}
      </ScoreTableHeader>
      <ScoreTableHeader
        backgroundColor={theme.colors.scoreTableSecondaryBackground}
        key={intervals + 3}
      >
        {'E'}
      </ScoreTableHeader>
    </ScoreTableRow>
  );
};

/**
 * Custom component that extends TableRow with logic for scores rows
 */
interface ScoreTableScoresRowProps extends ScoreTableRowProps {
  abbreviation: string;
  scores: number[];
  highlights: {
    runs: number | string;
    hits: number | string;
    errors: number | string;
  };
  home: boolean;
}

const ScoreTableScoresRow: React.FC<ScoreTableScoresRowProps> = (props) => {
  const { abbreviation, scores, highlights, home, children, ...rest } = props;
  const theme = useTheme();

  return (
    <ScoreTableRow>
      <ScoreTableData
        fontWeight={'600'}
        backgroundColor={theme.colors.scoreTableSecondaryBackground}
      >
        {abbreviation}
      </ScoreTableData>
      {scores.map((score: number | string, index: number) => {
        return <ScoreTableData key={index}>{score}</ScoreTableData>;
      })}
      <ScoreTableData
        backgroundColor={theme.colors.scoreTableSecondaryBackground}
      >
        {highlights.runs}
      </ScoreTableData>
      <ScoreTableData
        backgroundColor={theme.colors.scoreTableSecondaryBackground}
      >
        {highlights.hits}
      </ScoreTableData>
      <ScoreTableData
        backgroundColor={theme.colors.scoreTableSecondaryBackground}
      >
        {highlights.errors}
      </ScoreTableData>
    </ScoreTableRow>
  );
};

interface ScoreTableProps extends TableProps {
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamAbbreviation: string;
  awayTeamAbbreviation: string;
  homeScores: number[];
  awayScores: number[];
  homeHighlights: {
    runs: number | string;
    hits: number | string;
    errors: number | string;
  };
  awayHighlights: {
    runs: number | string;
    hits: number | string;
    errors: number | string;
  };
}

const ScoreTable: React.FC<ScoreTableProps> = (props) => {
  const {
    league,
    homeTeam,
    awayTeam,
    homeTeamAbbreviation,
    awayTeamAbbreviation,
    homeScores,
    awayScores,
    homeHighlights,
    awayHighlights,
    children,
    ...rest
  } = props;
  const theme = useTheme();

  let intervals = 0;
  let half = 'n/a';
  if (homeScores && homeScores.length && awayScores && awayScores.length) {
    intervals =
      awayScores.length > homeScores.length
        ? awayScores.length
        : homeScores.length;
    half = awayScores.length > homeScores.length ? 'TOP' : 'BTM';
  }

  function nth(n: number){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}

  return (
    <ScrollView vertical={true} width={'100%'} {...rest}>
      <View display={'flex'} width={'100%'} minWidth={theme.scoreTableMinWidth}>
        <Table>
          <TableHead>
            <ScoreTableIntervalRow intervals={intervals} />
          </TableHead>
          <TableBody>
            <ScoreTableScoresRow
              abbreviation={awayTeamAbbreviation}
              scores={awayScores}
              highlights={awayHighlights}
              home={false}
            />
            <ScoreTableScoresRow
              abbreviation={homeTeamAbbreviation}
              scores={homeScores}
              highlights={homeHighlights}
              home={true}
            />
          </TableBody>
        </Table>
        <View
          width={'100%'}
          border={'solid'}
          height={theme.scoreTableFooterHeight}
          borderWidth={theme.scoreTableBorderWidth}
          borderTopWidth={'0px'}
          borderColor={theme.colors.scoreTableBorder}
        >
          <HStack width={'100%'} flex={1}>
            <VStack
              flex={0.4}
              space={'2px'}
              justifyContent={'center'}
              alignItems={'center'}
              backgroundColor={theme.colors.scoreTableAwayBackground}
            >
              <Text
                fontSize={theme.scoreTableTeamNameFontSize}
                textAlign={'center'}
                color={theme.colors.scoreTableAwayForeground}
              >
                {awayTeam}
              </Text>
              <Text
                fontSize={theme.scoreTableScoreFontSize}
                fontWeight={700}
                color={theme.colors.scoreTableAwayForeground}
              >
                {`${awayHighlights.runs}-${homeHighlights.runs}`}
              </Text>
            </VStack>
            <VStack
              flex={0.2}
              justifyContent={'center'}
              alignItems={'center'}
              backgroundColor={theme.colors.scoreTableFooterBackground}
            >
              <Text fontSize={'0.75em'} fontWeight={'600'}>
                {half}
              </Text>
              <Text fontSize={'1.25em'} fontWeight={'600'}>
                {`${intervals}${nth(intervals)}`}
              </Text>
            </VStack>
            <VStack
              flex={0.4}
              space={'2px'}
              justifyContent={'center'}
              alignItems={'center'}
              backgroundColor={theme.colors.scoreTableHomeBackground}
            >
              <Text
                fontSize={theme.scoreTableTeamNameFontSize}
                textAlign={'center'}
                color={theme.colors.scoreTableHomeForeground}
              >
                {homeTeam}
              </Text>
              <Text
                fontSize={theme.scoreTableScoreFontSize}
                fontWeight={700}
                color={theme.colors.scoreTableHomeForeground}
              >
                {`${awayHighlights.runs}-${homeHighlights.runs}`}
              </Text>
            </VStack>
          </HStack>
        </View>
      </View>
    </ScrollView>
  );
};

export { ScoreTable as BaseballBoxScore };
