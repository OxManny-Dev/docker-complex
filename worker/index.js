const keys = require('./keys.js');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redistPort,
    retry_strategy: () => 1000
});


const sub = redisClient.duplicate();

function fib(index){
    if(index < 1) return 1;
    return fib(index - 1) + fib(index - 2);
}

sub.on('message', (channel, message) => {
    //  Any time we get a value
    // We're going to save it in a hash of values

    redisClient.hset('values', message, fib(parseInt(message)));
});

// Listen for any insert event
sub.subscribe('insert');