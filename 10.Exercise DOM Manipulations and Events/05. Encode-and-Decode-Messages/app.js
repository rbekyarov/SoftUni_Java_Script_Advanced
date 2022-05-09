function encodeAndDecodeMessages() {

    [buttonEncode,buttonDecode] = Array.from(document.getElementsByTagName('button'));
    buttonEncode.addEventListener('click', encode);
    buttonDecode.addEventListener('click', decode);

    function encode(){
        let result='';
        [message, receivedMessage] =Array.from(document.getElementsByTagName('textarea'));
        message = message.value.toString();
        for (let i = 0; i <message.length ; i++) {
            let currentChar = Number(message.charCodeAt(i))+1;
            let char = String.fromCharCode(currentChar);
            result += char;
        }
        receivedMessage.value = result;
        let arr =Array.from(document.getElementsByTagName('textarea'));
        console.log(arr)
        arr[0].value = '';
    }

    function decode(){
        let result='';
        [message, receivedMessage] =Array.from(document.getElementsByTagName('textarea'));
        receivedMessage = receivedMessage.value;
        for (let i = 0; i <receivedMessage.length ; i++) {
            let currentChar = Number(receivedMessage.charCodeAt(i))-1;
            let char = String.fromCharCode(currentChar);
            result += char;
        }
        let arr =Array.from(document.getElementsByTagName('textarea'));
        arr[1].value = result;

    }
}