// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Content = {
  title: string;
  vocal: string;
  url: string;
};
type Album = {
  title: string;
  url: string;
  createdTime: any;
  content: Content[];
};

const decuments = [
  {
    title: "in Subway",
    url: "",
    createdTime: "",
    content: [
      {
        title: "music",
        vocal: "vocal",
        url: "",
      },
    ],
  },
  {
    title: "Alone",
    url: "",
    createdTime: "",
    content: [
      {
        title: "music",
        vocal: "",
        url: "",
      },
    ],
  },
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Album[]>
) {
  if (req.method === "POST") {
    // Process a POST request
  } else {
    res.status(200).json(decuments);
  }
}
