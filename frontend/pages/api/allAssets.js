
import excuteQuery from "../../db/mysql";

const handler=async(req,res)=>{
    try{
        const result=await excuteQuery({
            query:`SELECT * FROM TA_Risk WHERE Ticker = 'BTC-USD' AND Date = '2023-01-15' AND Step = 1 AND Cl > 0.98`,
            // content:[req.body.content]
        })
        console.log(result)
    } catch(err){
        console.log(err)
    }
}

export default handler;