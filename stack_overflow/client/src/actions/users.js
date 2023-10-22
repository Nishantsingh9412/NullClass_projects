import * as api from '../api/index.js'

export const fetchAllUsers = () => async(dispatch) => {
    try {
        const {data} = await api.fetchAllUsers();
        dispatch({type: "FETCH_USERS",payload:data})
    } catch (error) {
        console.log(error);
    }
} 
