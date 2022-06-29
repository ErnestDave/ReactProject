import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Card extends Component{
    constructor(props){
        super(props)
        
        this.state = {
          firstName: 'Master Splinter',
          initials: 'MS',
          info: [
                {title: 'Birthday', text: 'Jan 1 1960'},
                {title: 'Address', text: '123 Empire Avenue'},
                {title: 'Phone', text: '786-212-9833'},
                {title: 'Email', text: "Splinter@ms.com"}
            ]
        }
    }
    render() {
        
        const {
        firstName,
        initials,
        info
        } = this.state;

        return (
          <React.Fragment>
            <section className= "card-container">
                <header className= "card-header">
                  <span initials={this.state.initials}></span> 
                  <h2>{ this.state.firstName }</h2> 
                </header>

                <main>
                    <ul>
                        {info.map((row, index) => {
                            return (
                                <li>
                                    <span>{row.title}</span>
                                    {row.text ? row.text: 'n/a'}
                                </li>
                            )
                        })
                        
                        }
                    </ul>
                </main>
            </section>
          </React.Fragment>
        )
    }
}

export default Card;