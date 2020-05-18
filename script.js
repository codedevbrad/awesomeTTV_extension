
var chatContainer = document.querySelector('.chat-scrollable-area__message-container');

var matched__emotes = [
  [ 'AWESOME_HA'  , 'https://res.cloudinary.com/dezoqwmss/image/upload/v1589817115/project_emotes/emote_3_shikj7.gif' ] ,
  [ 'AWESOME_SI'  , 'https://res.cloudinary.com/dezoqwmss/image/upload/v1589817114/project_emotes/emote_2_bghcil.jpg' ] ,
  [ 'AWESOME_SC'  , 'https://res.cloudinary.com/dezoqwmss/image/upload/v1589817114/project_emotes/emote_1_o8nz3p.jpg' ]
]

const mutateString = ( words , string ) => {
    var newString = string;

    words.forEach( ( each_word ) => {
        newString = newString.replace( each_word[0] , `<img src=${ each_word[1] } width="32" height="32" />` );
    });
    return newString;
}

var x = new MutationObserver( ( e ) => {

    let chatMsg__all  = chatContainer.querySelectorAll('.chat-line__message .text-fragment');
    let chatMsg__curr_index = chatMsg__all.length - 1;
    let chatMsg__curr = chatMsg__all[ chatMsg__curr_index ].innerHTML;

    let mutated = mutateString( matched__emotes , chatMsg__curr );

    let new__msg__container = chatContainer.querySelectorAll('.chat-line__message .text-fragment');
    let new__msg__ready = new__msg__container[ new__msg__container.length - 1 ];

    new__msg__ready.innerHTML = mutated;
});

x.observe( chatContainer , { childList: true });

// build out emote chooser

// let chat__textbox = false;
// let chat__emoteContainer = false;
//
// const chat__build = ( ) => {
//     let chat__newElement = document.createElement('div');
//         chat__newElement.id = 'chatbox_awesomeGIF';
//
//     matched__emotes.forEach( ( each_emote ) => {
//
//     });
// }

// <img src=${ each_word[1] } width="32" height="32" />
