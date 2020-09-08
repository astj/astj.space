import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const apiHandler: NextApiHandler = (
  _: NextApiRequest,
  res: NextApiResponse
) => {
  res.status(200).json({ text: "Hello" });
};

export default apiHandler;
