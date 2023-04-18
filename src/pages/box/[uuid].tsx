import {
  BasketballBoxScore,
  Text,
  BaseballBoxScore,
} from '@/components';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { useMemo } from 'react';
import { Game } from '@prisma/client';
import { useRouter } from 'next/router';

export default function BoxScore() {
  const router = useRouter();

  const { uuid } = router.query;

  const { data, error, isLoading } = useSWR(
    uuid ? `/api/game/${uuid}` : null,
    fetcher<Game | any>
  );

  const renderDatabaseDataBox = useMemo(() => {
    if (error) return <Text>{error}</Text>;
    if (isLoading) return <Text>{'Loading...'}</Text>;
    if (data && data.jsonData) {
      const {
        league,
        home_team,
        away_team,
        home_period_scores,
        away_period_scores,
        home_errors,
        away_errors,
        home_batter_totals,
        away_batter_totals,
        home_totals,
        away_totals,
      } = data.jsonData;

      if (league && league == 'MLB') {
        return (
          <BaseballBoxScore
            league={league}
            homeTeam={home_team.full_name}
            awayTeam={away_team.full_name}
            homeTeamAbbreviation={home_team.abbreviation}
            awayTeamAbbreviation={away_team.abbreviation}
            homeScores={home_period_scores}
            awayScores={away_period_scores}
            homeHighlights={{
              runs:
                home_batter_totals?.runs != null
                  ? home_batter_totals.runs
                  : 'n/a',
              hits:
                home_batter_totals?.hits != null
                  ? home_batter_totals.hits
                  : 'n/a',
              errors: home_errors != null ? home_errors : 'n/a',
            }}
            awayHighlights={{
              runs:
                away_batter_totals?.runs != null
                  ? away_batter_totals.runs
                  : 'n/a',
              hits:
                away_batter_totals?.hits != null
                  ? away_batter_totals.hits
                  : 'n/a',
              errors: away_errors != null ? away_errors : 'n/a',
            }}
          />
        );
      } else if (league && league == 'NBA') {
        return (
          <BasketballBoxScore
          league={league}
          homeTeam={home_team.full_name}
          awayTeam={away_team.full_name}
          homeTeamAbbreviation={home_team.abbreviation}
          awayTeamAbbreviation={away_team.abbreviation}
          homeScores={home_period_scores}
          awayScores={away_period_scores}
          homeHighlights={{
            total: home_totals.points,
          }}
          awayHighlights={{
            total: away_totals.points
          }}
        />
        );
      }
    }
  }, [data, error, isLoading]);

  return <>{renderDatabaseDataBox}</>;
}
