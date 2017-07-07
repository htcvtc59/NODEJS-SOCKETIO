var express = require("express");
var app = express();
app.use(express.static("public")); //http://localhost:3000/
app.set("view engine", "ejs");
app.set("views", "./views")

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", function (socket) {
    console.log("Start " + socket.id);

    socket.on("Client-Send-Color", function (data) {
        io.sockets.emit("ServerSendC",data);

    });

});

app.get("/", function (req, res) {
    res.render("trangchu")
});

