import React, { Component } from 'react'

class ListContacts extends Component {
    render() {
        //to see what data we're passing in as props
        console.log('Props', this.props)
        return (
            <ol className='contact-list'>
            
            </ol>
        )
    }
}

export default ListContacts
