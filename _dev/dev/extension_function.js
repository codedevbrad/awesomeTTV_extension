
import '@webcomponents/custom-elements';

import { emotes_list as matched__emotes , emotes_html as emotes } from './_chatbox/_chatbox_emotes.js';
import { template } from './_chatbox/_chatbox_template.js';
import './extension_styles.scss';

// var chatContainer = document.querySelector('.chat-scrollable-area__message-container');
// const mutateString = ( words , string ) => {
//     var newString = string;
//     words.forEach( ( each_word ) => {
//         newString = newString.replace( each_word[0] , `<img src=${ each_word[1] } width="32" height="32" />` );
//     });
//     return newString;
// }
//
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
         this.timer = null;
    }

    copyToClipboard ( emote ) {
        var el = document.createElement('textarea');
        el.value = emote;
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    removeTooltip ( tooltip ) {
        if ( this.timer) {
            clearTimeout( this.timer ); //cancel the previous timer.
            this.timer = null;
        }
        this.timer = setTimeout( ( ) => {
            tooltip.classList.add('clipboard_hidden');
        } , 4000 );
    }

    attachClicksToEmotes ( images ) {
    		 for (let i = 0; i < images.length; i++ ) {
             images[i].addEventListener("click", ( e ) => {
                   let emote = e.currentTarget.getAttribute('data-emote');
                   this.copyToClipboard( emote );
                   // if copied to clipboard element does not exist
                   if ( document.querySelector('#copiedClipboard') === null ) {
                      let tooltip = document.createElement( 'div' );
                          tooltip.id = 'copiedClipboard';
                          tooltip.innerHTML = ` <h1> copied ${ emote } to clipboard </h1> `;
                          document.body.appendChild( tooltip );

                          this.removeTooltip( tooltip );

                   } else {
                      let tooltip = document.querySelector('#copiedClipboard');
                          tooltip.classList.remove('clipboard_hidden');
                          tooltip.innerHTML = ` <h1> copied ${ emote } to clipboard </h1> `;

                          this.removeTooltip( tooltip );
                   }
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

console.log( window.customElements );
window.customElements.define('chatbox-card', Chatbox );

document.querySelector( 'body' ).appendChild( new Chatbox );

//
