import React, {createContext, useState, useEffect, ReactNode} from 'react';

const Context = createContext();

type ContactsProviderProps = {
  children: ReactNode;
};

function ContactsProvider(props: ContactsProviderProps) {
  const [selectedContact, setSelectedContact] = useState(null);
  function changeSelectedContact(contact) {
    setSelectedContact(contact);
  }

  return (
    <Context.Provider
      value={{
        selectedContact,
        changeSelectedContact,
      }}>
      {props.children}
    </Context.Provider>
  );
}

export {Context, ContactsProvider};
