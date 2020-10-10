import {AddPostActionType, ChangeNewTextActionType, MessagesDataType, PostsDataType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const AddPostAC = (): AddPostActionType => ({type: 'ADD-POST'})
export const onPostChangeAC = (newText: string ): ChangeNewTextActionType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
})


const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        case ADD_POST:
            let newPost: PostsDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 10
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        default:
            return state
    }
}


export default profileReducer
