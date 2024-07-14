import {createSelector} from 'reselect'

//memoization
const selectCategoryReducer = (state)=>{
    console.log('selector 1 fired')
    return state.categories;
}


export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        console.log('selector 2 fired')
        return categoriesSlice.categories
    }
);

// can also use above memoized selector in place of reducer and just use categories.reduce
export const getCategories = createSelector(
    [selectCategoryReducer],
    (categories)=>{
       console.log('selector 3 fired')
       return categories.categories.reduce((acc, category)=>{
        const {title , items} = category;
        acc[title.toLowerCase()] = items;
        return acc;
    },{})}
)

export const getCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>categoriesSlice.isLoading
);

// export const getCategories = (state)=>state.categories.categories.reduce((acc, category)=>{
//     const {title , items} = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
// },{});