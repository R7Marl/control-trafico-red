import RIOTAPI from '../../utils/RiotApi/keyRiotApi.js'
import { Constants } from 'twisted';
async function getRiotAccount (username, region) {
    const tag = username.split("#")[1];
    username = username.split("#")[0];
    try {
        const riotData = await RIOTAPI.Account.getByRiotId(username, tag, Constants.RegionGroups.AMERICAS);
        console.log(riotData)
        return riotData.response;
    } catch (error){
        console.log(error)
    }
}

export default getRiotAccount;