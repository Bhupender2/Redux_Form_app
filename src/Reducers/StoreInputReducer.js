const initialstate=[{}];

export const StoreInputReducer = (state=initialstate , action)=>{
     switch(action.type)
     {
        case "TYPE_NAME":
        return action.payload
      
        case "TYPE_EMAIL":
         return action.payload

        case "TYPE_PHONENO":
         return action.payload

        defualt: return state;

     }
     
}