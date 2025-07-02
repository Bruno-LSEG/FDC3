// invocation mode for addContextListener 
// - single: when the app joins a channel, invoke the handler ONLY ONCE, with the latest context on the channel, regardless of type
//      given these example previous broadcasts in the channel:
//          - fdc3.instrument
//          - fdc3.instrumentList
//          - fdc3.contact
//      the handler will be invoked once with the latest context type, which is fdc3.contact.
// - multiple: invoke handler once for each context type available in the channel.
//      given these example previous broadcasts in the channel:
//          - fdc3.instrument
//          - fdc3.instrumentList
//          - fdc3.contact
//      the handler will be invoked three times, once for each context type:
//          - first with fdc3.instrument
//          - then with fdc3.instrumentList
//          - finally with fdc3.contact
export type HandlerInvocationMode = 'single' | 'multiple';