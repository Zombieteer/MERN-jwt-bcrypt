import React, { Fragment, useContext, useEffect } from 'react'
// read react transition group documentation
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactItem from './ContactItem'
import Spinner from '../layout/Spinner'
import ContactContext from '../../context/contact/contactContext'

export const Contacts = () => {
    // have access to any state or method assocciated with contactContext
    const contactContext = useContext(ContactContext)

    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, [])

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
            {contacts !== null && !loading ? (
                <TransitionGroup>
                    {filtered !== null ?
                        filtered.map(contact => (<CSSTransition key={contact.id} timeout={500} classNames='item'>
                            <ContactItem contact={contact} />
                        </CSSTransition>)) :
                        contacts.map(contact => (<CSSTransition key={contact.id} timeout={500} classNames='item'>
                            <ContactItem contact={contact} />
                        </CSSTransition>))}
                </TransitionGroup>) : <Spinner />
            }
        </Fragment>
    )
}
export default Contacts;