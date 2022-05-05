import { getCurrentUserToken } from "../../services/auth/auth";

const createTrack = ()=>{
  try {
    const token = await getCurrentUserToken();
}catch(e){
  throw Error("Failed to fetch API")
}
}