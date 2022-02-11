import type { NextApiRequest, NextApiResponse } from 'next'
import testdata from '../../data/testdata.json'

type Data = {
  cod: string,
  message: number,
  cnt: number,
  list: any,
  city: {
    id: number,
    name: string,
    coord: {
      lat: number,
      lon: number
    },
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(testdata)
}
