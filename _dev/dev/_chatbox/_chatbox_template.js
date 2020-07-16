const emotes_html = require('./_chatbox_emotes.js').emotes_html;

var template = document.createElement('template');
    template.innerHTML = `
       		<style>
              #chatbot-container {
                  position: relative;
                  display: inline-block;
                  margin-top: 400px;
                  margin-left: 100px;
                  float: right;
              }

              .isOpen#chatbot-box {
             		 	display: block;
              }

              #chatbot-box {
                  width: 350px; height: 250px; background: white; border-radius: 10px;
                  padding: 20px; display: none;
                  position: absolute;
                  right: 0;
                  bottom: 50px;
                  margin-bottom: 20px;
              }

               #column_adjust_2 {
                   width: 100%; height: 100%; display: flex; flex-wrap: wrap;
                   background: white; overflow-y: scroll;
               }

               #column_adjust_2 > .item {
                   flex: 0 0 50%;
                   height: auto;
                   padding: 10px;
                   box-sizing: border-box;
               }

               .item > div { width: 100%; height: auto;  cursor: pointer; }
               .item > div > img {
                   width: 100%; height: auto; border-radius: 10px;
               }

               #chatbot-button {
               		 background: white; display: inline-block; padding: 10px 20px;
                   border-radius: 15px; cursor: pointer;
                   position: relative;
               }

          </style>

          <div id="chatbot-container">
              <div id="chatbot-box">
                   <div id="column_adjust_2">
                        ${ emotes_html }
                   </div>
              </div>
              <p id="chatbot-button"> chatbox </p>
          </div>
`;

module.exports.template = template;
