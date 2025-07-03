// invocation mode for addContextListener 
// - single: when the app joins a channel, the context listener handler will be invoked ONLY ONCE, with the latest context on the channel, regardless of type
//      Scenario - the following contexts were previously broadcast in the channel:
//          - fdc3.instrument
//          - fdc3.instrumentList
//          - fdc3.contact
//      the handler will be invoked once with the latest context type, which is fdc3.contact.
// - multiple: the context listener handler will be invoked once with the latest context for each context type available in the channel.
//      Scenario - the following contexts were previously broadcast in the channel:
//          - fdc3.instrument
//          - fdc3.instrumentList
//          - fdc3.contact
//      the handler will be invoked three times, once for each context type, in the following order (Last In First Out):
//          - first with fdc3.contact
//          - then with fdc3.instrumentList
//          - finally with fdc3.instrument 
export type ContextListenerInvocationMode = 'Single' | 'Multiple';