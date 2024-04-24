// import { createSlice } from "@reduxjs/toolkit";
//
// const INITIAL_STATE = {
// 	contactList: [],
// 	searchBoxValue: "",
// };
//
// export const contactsSlice = createSlice({
// 	name: "contacts",
// 	initialState: INITIAL_STATE,
// 	reducers: {
// 		addContact(state, action) {
// 			state.contactList.push(action.payload);
// 		},
// 		delContact(state, action) {
// 			state.contactList = state.contactList.filter(
// 				(contact) => contact.id !== action.payload,
// 			);
// 		},
// 		searchContact(state, action) {
// 			state.searchBoxValue = action.payload;
// 		},
// 	},
// });
//
// export const { addContact, delContact, searchContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
