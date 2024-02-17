


// const BASE_URL = "https://swapi.dev/api"
// const SwApi = {
//    get: async(endpoint) => {
//     try {
//         const response = await fetch (`${BASE_URL}/${endpoint}`);
//         const data = await response.json();
//         return data;
//     } catch (error){
//         console.error('Error fetching data: ', error);
//         throw error;
//     }
//    },
//    getAllStarships: async () => {
//     try {
//         const result = await SwApi.get('starships');
//         return result;
//     } catch (error) {
//         console.error('Error fetching starships: ', error);
//         throw error;
//     }
// }

// }


// export const getAllStarships = SwApi.getAllStarships;
// export default SwApi;

//const BASE_URL = "https://swapi.dev/api/starships"

export async function getAllStarships(BASE_URL){
    try{
        const res = await fetch(BASE_URL)
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const starshipData = await res.json();
      return starshipData;
    } catch (error) {
      console.error("Error fetching starships:", error);
      throw error; // Rethrow the error to handle it at the calling site if needed
    }
}




