import { createSlice } from "@reduxjs/toolkit";
import { articles } from "../resources/articleSource";


export const articleSlice = createSlice({
    name: "article",
    initialState: {
        articleCount: Object.keys(articles).length,
        upvotes: articles['1'].upvotes,
        downvotes: articles['1'].downvotes
    },
    reducers: {
        upvote: (state) => {
            
            state.upvotes++;
            

        },
        downvote: (state) => {
            state.downvotes++;
            
        }
    }
})

export const { upvote, downvote } = articleSlice.actions;

export const selectArticle = (state) => state.article;

export default articleSlice.reducer;