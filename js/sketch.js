// database access: https://console.firebase.google.com/u/0/project/chatbox-e5d1e/database/firestore/data~2F
// call to view errors
'use strict';

let nodeData; //object we will push to firebase
let fbData; //data we pull from firebase
let fbDataArray; //firebase data values converted to an array
let database; //reference to our firebase database
let folderName = 'UPlifting-ChatBox'; //name of folder you create in database

let messageInput;
let usernameInput;
let sendBtn;

let chatsLoaded = false;

let messageDiv;

function setup() {
  noCanvas();

  // Initialize firebase
  // support for Firebase Realtime Database 4 web here: https://firebase.google.com/docs/database/web/start
  // Copy and paste your config here (replace object commented out)
  // ---> directions on finding config below

  messageDiv = document.querySelector('#messageDiv');

  usernameInput = select('#usernameInput');
  messageInput = select('#messageInput');
  sendBtn = select('#sendBtn');

  messageInput.changed(sendMessage);
  sendBtn.mousePressed(sendMessage);

  // paste your config file here
  let config = {
    apiKey: "AIzaSyDn8R2gF7FlMchocZAkcezdNRu3cF2hu5s",
    authDomain: "upliftingwords-art101.firebaseapp.com",
    databaseURL: "https://upliftingwords-art101.firebaseio.com",
    projectId: "upliftingwords-art101",
    storageBucket: "upliftingwords-art101.appspot.com",
    messagingSenderId: "841878690691",
    appId: "1:841878690691:web:07d3b14ea73d8c6bae74b6",
  };

  // initialize the app
  firebase.initializeApp(config);

  // store the database
  database = firebase.database();

  // this references the folder you want your data to appear in
  let ref = database.ref(folderName);
  // **** folderName must be consistant across all calls to this folder

  ref.on('value', gotData, errData);

  // ---> To find your config object:
  // They will provide it during Firebase setup
  // or (if your project already created)
  // 1. Go to main console page
  // 2. Click on project
  // 3. On project home page click on name of app under project name (in large font)
  // 4. Click the gear icon --> it's in there!

}

function draw() {


}

function sendMessage() {

  if(usernameInput.value() !== '' && messageInput.value() !== ''){

  let timestamp = Date.now();
  let chatObject = {
    username: usernameInput.value(),
    message: messageInput.value(),
    timestamp: timestamp,
  }

  createNode(folderName, timestamp, chatObject);
  messageInput.value('');

  } else {
    alert('type username and message first!');
  }

}

function displayPastChats() {
  let length = fbDataArray.length;

  for (let i = 0; i < length; i++) {
    // let date = new Date(fbDataArray[i].timestamp);

    // ${date.toString()}: <br>
    // ^^ put in "let p", first, after `

    let p = createP(`${fbDataArray[i].username}: ${fbDataArray[i].message}`);
    p.parent('messageDiv');

    // p.position(i * 100, random(windowHeight));
    // p.style('background-color', `hsl(${(i * 5) % 300}, 80%, 50%)`);
    // // let opacity = map(i / length, 0, 1, 0, .9);
    // // p.style('opacity', opacity);
    // p.class('messages');
    // p.parent('messagesDiv');
  }
  // scrolltop = the point you are at in the scroll; height of the entire list - the size of how it appears on our screen
  messageDiv.scrollTop = messageDiv.scrollHeight - messageDiv.clientHeight;
}

function displayLastChat() {
  let index = fbDataArray.length - 1;

  let p = createP(`${fbDataArray[index].username}: ${fbDataArray[index].message}`);
  p.parent('messageDiv');

  // p.position(index * 100, random(windowHeight));
  // p.style('background-color', `hsl(${(index * 5) % 300}, 80%, 50%)`);
  // // let opacity = map(i / length, 0, 1, 0, .9);
  // // p.style('opacity', opacity);
  // p.class('messages');

  messageDiv.scrollTop = messageDiv.scrollHeight - messageDiv.clientHeight;
}
