// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetcher from '@/utils/fetcher';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getGame, setGame } from '@/controllers/game';

const cacheTimeInSeconds = 15;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get the uuid from the API, this uuid correlates to the id used in the external API request.
  const uuid = String(req.query.uuid);

  if (!uuid) {
    return res.status(422).json({ error: 'Missing id parameter' });
  }

  // Get the current cached game in the database
  const cachedRes = await getGame(uuid);

    // Test if the current game has an updatedAt that is more recent than 15 seconds
    const currentTime = Date.now();
    const cachedTime = cachedRes ? cachedRes.updatedAt.getTime() : 0;
    const isCacheValid = cachedTime + cacheTimeInSeconds * 1000 > currentTime;

      // If the difference between the currentTime and updateAt is larger than 15 seconds, 
    // fetch the data again and cache it in the database
    if (!isCacheValid) {
      console.log('Refetching data');
      const gameRes = await fetcher(`https://chumley.barstoolsports.com/dev/data/games/${uuid}.json`)
      if (gameRes) {
        const game = await setGame(uuid, gameRes);
        if (game) return res.status(200).json(game);
      }
    }

  // Return the cached data
  if (cachedRes) return res.status(200).json(cachedRes);
  
}
