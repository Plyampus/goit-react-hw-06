import { createSelector } from "@reduxjs/toolkit";

export const selectContact = (state) => state.contacts;
export const selectFilter = (state) => state.filter;
const filterContacts = (contacts, filter) => {
    return contacts.items.filter((contact) => contact.name.toLowerCase().includes(filter.name.toLowerCase())
    );
};

export const filteredContacts = createSelector([selectContact, selectFilter], (contacts, filter) => filterContacts(contacts, filter))