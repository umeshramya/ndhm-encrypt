const {Encrypt} = require("ndhm-encrypt");

const messege = "how are you";

const encrypt = new Encrypt({
    dhpkU : "BF2LTTsrqIUn/gQ2CVdfcdaXxsH/xbfCT8aCdIHqT6z0Uf+yArnMvYEpRi9hD48/+6hYjbhjvKgrqDGQIjGL4nw=",
    hiuNounce : "eS4c/xv4S+HrzD2+AuiR+8WXAHURWNkEH3tk2M+jKbA="
})

const encrepted = encrypt.encrypt(messege);

console.log(encrepted)