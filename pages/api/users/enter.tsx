import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        res.status(401).end();
    }
    console.log(req.body); //{"email":"aa@gmail.com"}
    console.log(req.body.email); //undefined : req.body는 req내용의 인코딩을 기준으로 parse되기때문
    // 해결하려면 프론트에서 headers를 설정해줘야한다
    res.status(200).end();
    // 어떤 요청이 오든 status200을 보내고 연결을 끊겠다
}
