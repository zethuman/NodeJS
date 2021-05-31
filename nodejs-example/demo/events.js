const EventEmitter = require('events')

const emitter = new EventEmitter()

// emitter.on('anything', data => {
//     console.log(
//         'On anything', data
//     )
// })

// emitter.emit('anything', {a: 1})

// setTimeout(() => {
//     emitter.emit('anything', {b: 2})
// }, 500)


class Dispatcher extends EventEmitter{
    subscribe(eventName, clb) {
        console.log('[Subscribing...]')
        this.on(eventName, clb)
    }
    dispatch(eventName, data){
        console.log('[Dispatching]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('lol', data => {
    console.log('On lol: ', data)
})

dis.dispatch('lol', {'lol': 'kek'})