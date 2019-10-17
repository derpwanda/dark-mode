import React from 'react';
import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage'


const useDarkMode = (key, initialValue) => {
    //`darkMode` is name of key; it's value is `false`
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)

    useEffect(() => {
        // we are manipulating the DOM here, specifically
        // the 'body'. We need to add the dark-mode class to
        // the body to get the changes. This is observed in devtools

        //call the body and hold it in a variable
        const body = document.querySelector('body');

        //if value from lS is not there, add it
        if (darkMode) {
            //DOM manipulation('from css')
            body.classList.add('dark-mode')
        //else is value is there, remove it
        } else {
            body.classList.remove('dark-mode');
        }
    }, [ darkMode ], //add darkMode to array to stop from running
    //with every component change
    )
    // return state
    return [darkMode, setDarkMode]
}

export default useDarkMode;