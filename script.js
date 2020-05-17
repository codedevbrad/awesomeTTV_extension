
var chatContainer = document.querySelector('.chat-scrollable-area__message-container');

var matched__emotes = [
  [ '%potato_curl' , 'img_1' ] , ['%potato_happy' , 'img_2' ] , [ '%potato_bleh' , 'img_3' ]
]

const mutateString = ( words , string ) => {
    words.forEach( ( each_word ) => {
        string = new__string.replace( each_word[0] , each_word[1] );
    });
    return string;
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
