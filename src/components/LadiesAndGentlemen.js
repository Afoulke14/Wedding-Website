import '../App.css'
import React, { Component } from 'react'
import LadyOrGentleman from './LadyOrGentleman'
import yara from '../assets/yara.jpg'

class LadiesAndGentlemen extends Component {
    ladiesAndGentlemen = [
        { 
            fname: "Alex",
            lname: "Foulke",
            picture: yara        },
        { 
            fname: "Colleen",
            lname: "Keevert",
            picture: yara        },
        { 
            fname: "Grayson",
            lname: "Keevert",
            picture: yara        },
        { 
            fname: "Jameson",
            lname: "Wildonger",
            picture: yara        },
        { 
            fname: "Kate",
            lname: "Wildonger",
            picture: yara        },
        { 
            fname: "Kyra",
            lname: "Pistolas",
            picture: yara        },
        { 
            fname: "Meaghan",
            lname: "Enos",
            picture: yara        },
        { 
            fname: "Samantha",
            lname: "Foulke",
            picture: yara        },
        { 
            fname: "Tyler",
            lname: "Blood",
            picture: yara        },
        { 
            fname: "Willam",
            lname: "Walsh",
            picture: yara        },
        { 
            fname: "Zach",
            lname: "Peace",
            picture: yara        }
    ];
    render() {
        return (
            <div className="App p-5">
                <header className="App-header">
                    <div className='Title-Font'> Honorable Ladies and Gentlemen </div>
                </header>
                {
                    this.ladiesAndGentlemen.map((person, i) =>
                    <LadyOrGentleman valueFromParent={this.ladiesAndGentlemen[i]}/>
                    )
                }
            </div>
        );
    }
}

export default LadiesAndGentlemen;