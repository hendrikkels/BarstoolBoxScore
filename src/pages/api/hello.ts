// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetcher from '@/utils/fetcher';
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json('Hello World')
}
