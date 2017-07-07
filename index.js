var express = require("express");
var app = express();
app.use(express.static("public")); //http://localhost:3000/
app.set("view engine", "ejs");
app.set("views", "./views")

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", function (socket) {
    console.log("code socketio" + socket.id);
    socket.on("disconnect", function () {
        console.log("code ngat ket noi" + socket.id);
    });
    var arr = [];
    arr.push(socket.id);
    socket.on("Client-Send-Data", function (data) {
        console.log(data);
        io.sockets.emit("Client-Send-Data", data+"123<br/>"); //Phat tat ca 
        //socket.emit("Client-Send-Data", data+"123<br/>"); //Phat cho chinh no
        //socket.broadcast.emit("Client-Send-Data", data + "123<br/>"); //Chi phat cho con khong phat cho chinh no

        //io.to(arr[1]).emit("Client-Send-Data", data + "123<br/>");

    });
});

app.get("/", function (req, res) {
    res.render("trangchu")
});

