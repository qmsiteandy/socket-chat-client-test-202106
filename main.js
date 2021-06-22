const socket = io.connect("https://socket-chat-server-test-202106.herokuapp.com/", {transports: ["websocket"],});

$(document).ready(() => {

    var form = document.getElementById('form');
    var name = document.getElementById('name');
    var msg = document.getElementById('msg');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (name.value && msg.value) {
            socket.emit('sendMessage', {
                name: name.value,
                msg: msg.value
            });
            msg.value = '';
        }
    });

    socket.on("newMessage", function (data) {
        $("#messages").append(`
            <li>
                ${data.name}：${data.msg}
            </li>
        `);
    window.scrollTo(0, document.body.scrollHeight);
  });
});
