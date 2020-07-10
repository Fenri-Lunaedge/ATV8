import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import ContactItem from './components/ContactItem';
import ContactInput from './components/ContactInput';

export default function App() {
 
  const [contacts, setContacts] = useState ([]);
  const [contactsCount, setContactsCount] = useState(0);

  // C do CRUD
  const AddContact = (name, phone) => {
    var contact = name + " || " + phone 
    setContacts(
        contacts => {
          setContactsCount(contactsCount ++);
          return [{ key: contactsCount.toString(), value: contact }, ...contacts];
        })
       // console.log(lembrete);  
  }

// R do CRUD
  const removeContact = (keyToRemove) => {
    setContacts(contacts => {
      return contacts.filter((contact) => {
          return contact.key !== keyToRemove
      })
    })
  }
  
  return (  
    <View style={styles.telaPrincipalView}>
       <ContactInput onAddContact={AddContact}  />   
    <View>
      <FlatList data={contacts} renderItem={
         contact => (
           <ContactItem 
             chave={contact.item.key} 
             contact={contact.item.value}
             onDelete={removeContact} />
          )
      }
      />
   </View>
  </View>
       
);
}
//Se alguém quiser mudar, está com as cores 
const styles = StyleSheet.create({
  itemNaLista: {
    padding: 16,
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 12,
    fontSize: 16,
    width: '80%',
    alignSelf: 'center'
  },
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2
  }
});
