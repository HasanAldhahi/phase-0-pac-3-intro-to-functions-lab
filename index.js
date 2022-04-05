

function shout(message) {

    return message.toUpperCase();
}

function whisper(message) {

    return message.toLowerCase();
}

function logWhisper(message) {
    console.log(message.toLowerCase())
}

function logShout(message) {
    console.log(message.toUpperCase());
}

function sayHiToHeadphonedRoommate(message) {

    if (message === message.toLowerCase()) {
        return "I can\'t hear you!";
    }
    else if (message === message.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (message === "Let\'s have dinner together!") {
        return "I would love to!";
    }
}

shout('hello');
whisper("HELLO");
logShout('hello');
logShout('HELLO');

logWhisper('HELLO')
sayHiToHeadphonedRoommate('hello')
sayHiToHeadphonedRoommate("HELLO")
sayHiToHeadphonedRoommate("Let\'s have dinner together!")

