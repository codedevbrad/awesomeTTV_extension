//
import { emotes_list as matched__emotes , emotes_html as emotes } from './_chatbox/_chatbox_emotes.js';
import { template } from './_chatbox/_chatbox_template.js';
import './extension_styles.scss';

let twitch_chat = 'chat-input.tw-block' ,
          isDev = true ,
           env = isDev ? '#app' : twitch_chat;

// var chatContainer = document.querySelector('.chat-scrollable-area__message-container');
// const mutateString = ( words , string ) => {
//     var newString = string;
//     words.forEach( ( each_word ) => {
//         newString = newString.replace( each_word[0] , `<img src=${ each_word[1] } width="32" height="32" />` );
//     });
//     return newString;
// }

// var chat__watchMessages = new MutationObserver( ( e ) => {
//
//     let chatMsg__all  = chatContainer.querySelectorAll('.chat-line__message .text-fragment');
//     let chatMsg__curr_index = chatMsg__all.length - 1;
//     let chatMsg__curr = chatMsg__all[ chatMsg__curr_index ].innerHTML;
//
//     let mutated = mutateString( matched__emotes , chatMsg__curr );
//
//     let new__msg__container = chatContainer.querySelectorAll('.chat-line__message .text-fragment');
//     let new__msg__ready = new__msg__container[ new__msg__container.length - 1 ];
//
//     new__msg__ready.innerHTML = mutated;
// });
// chat__watchMessages.observe( chatContainer , { childList: true });

class Chatbox extends HTMLElement {
    constructor() {
         super();
         this.attachShadow({ mode: 'open' });
         this.shadowRoot.appendChild( template.content.cloneNode( true ) );
    }

    appendToChat( emote ) {
    		 let elem = document.getElementById('.chat-input__textarea');
             elem.value += emote;
    }

    attachClicksToEmotes ( images ) {
    		 for (let i = 0; i < images.length; i++ ) {
             images[i].addEventListener("click", ( e ) => {
                 let emote = e.currentTarget.getAttribute('data-emote');
                 this.appendToChat( emote );
                 console.log( emote );
             });
         }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('p').addEventListener('click' , ( ) => {
             let el = this.shadowRoot.querySelector('#chatbot-box');
                 el.classList.toggle('isOpen');
        });
        let images = this.shadowRoot.querySelectorAll('.item > div');

        this.attachClicksToEmotes( images );
    }
}


 // if the TTV_page doesn't have a chat window, don't load the app.
if ( document.querySelector( env ) ) {
		 window.customElements.define('chatbox-card', Chatbox );
     document.querySelector( env ).appendChild( new Chatbox() );
}

//
