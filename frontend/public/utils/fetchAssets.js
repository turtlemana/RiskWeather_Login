import axios from "axios"

const fetchAssets=async()=>{
    const res=await fetch(`https://riskweather.org/api/AllAssets`)

    // const res=await fetch(`http://localhost:8000/api/AllAssets`)
    // if(res.ok===false){const error= new Error("An error occurred while fetching the data")
    // error.info=await res.json()
    // error.status=res.status
    // throw error }

    const data=await res.json()
    // console.log("userInfo",JSON.parse(userInfo.user))
    // const userInfo=data.user
    return data
}

export default fetchAssets