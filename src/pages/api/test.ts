import type { NextApiRequest, NextApiResponse } from 'next'
import data from "../../../content/blog/testing-slug.json"

type ResponseData = {
  data: object
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json(data)
}