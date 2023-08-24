import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChangeFilter = newName => {
    this.setState({ filter: newName });
  };

  getСontactByFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  handleAdd = newContact => {
    const { contacts } = this.state;
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevSate => {
      return {
        contacts: [...prevSate.contacts, newContact],
      };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
          margin: 40,
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAdd={this.handleAdd} />
          {this.state.contacts.length > 0 && (
            <>
              <h2>Contacts</h2>
              <Filter
                value={this.state.filter}
                onChangeFilter={this.handleChangeFilter}
              />
              <ContactList
                contacts={this.getСontactByFilter()}
                onDelete={this.handleDelete}
              />
            </>
          )}
          <GlobalStyle />
        </div>
      </div>
    );
  }
}
