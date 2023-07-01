const EventEmitter = require('events');
// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();
// Define an event handler function
const eventHandler = () => {
  console.log('Event occurred!');
};
// Attach the event handler to the 'myEvent' event
myEmitter.on('Swaraj', eventHandler);
// Emit the 'myEvent' event
myEmitter.emit('Swaraj');
eventHandler()