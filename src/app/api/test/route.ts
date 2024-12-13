import { TokenCardType } from "@/app/components/TokenCard";
import { NextResponse } from "next/server"

export const GET = async () : Promise<NextResponse<Array<TokenCardType> | unknown>> => {
    try {
        const u = await fetch('https://pump.uptos.xyz/token/api?page=1&pageSize=45&keyword=&orderField=tx_at&orderBy=desc');
        const i = await u.json();
        // console.log(i)
        
        const data = i[0].map((item: any) => (
            {
                name: item.name,
                src: item.img,
        description: item.description,
        marketcap: item.mCap,
        noOfReplies: item.repC,
        author: {
            walletAddress: item.userAddr,
            img: item.userImg
        },
        id: ''
            }
        ))
    //     const data = i.map((item: any) => (
    //         {name: item.name,
    //         src: item.img,
    // description: item.description,
    // marketcap: item.mCap,
    // noOfReplies: item.repC,
    // author: {
    //     walletAddress: item.userAddr,
    //     img: item.userImg
    // },
    // id: ''}
    //     ))
        // console.log('')
        // console.log()
        // console.log(typeof i)
        // console.log(data)
        
        return new NextResponse(JSON.stringify(data))
    } catch (error) {
        return new NextResponse(JSON.stringify('Error fetching data'+ error))
    }
}