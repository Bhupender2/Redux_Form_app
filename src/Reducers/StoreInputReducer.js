const initialstate=[];

export const StoreInputReducer = (state=initialstate , action)=>{
     switch(action.type)
     {
      case "TYPE_DETAILS":
         return[...state, action.payload]

         default: return state
       
     

     }
     
}