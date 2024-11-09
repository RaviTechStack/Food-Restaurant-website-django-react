const FoodlistReucer = (state, action) => {
    switch (action.type) {
        case "PUT_DATA":
            const listData = action.payload.dataToSend.results
            const category = action.payload.categoryData
            const trending = action.payload.trendingData
            return{
                ...state,
                "isLoading" : false, "FoodList":listData, "FoodListCopy": listData, "Category": [{food_type: 'ALL'}, ...category], "Trending": trending
            };
        case "SingleData":
            return{
                ...state,"isLoading" : false, "SingleFood":action.payload,

            };
        case "FiterData":
            if(action.payload === "ALL"){
                return{
                    ...state, "FoodList":state.FoodListCopy
                }
            }
            const NewFilterData = state.FoodListCopy.filter((ele)=>(ele.food_type.food_type == action.payload))
            return{
                ...state, "FoodList":NewFilterData
            }
        default:
            return{
                    ...state
                };
    
        
    }
  
  
}

export default FoodlistReucer
