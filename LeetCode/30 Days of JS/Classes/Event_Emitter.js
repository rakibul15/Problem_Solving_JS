class EventEmitter {
    constructor() {
        this.events = {};
        this.subscriptions = [];
    }

    /**
     * Subscribe to an event.
     * @param {string} eventName - The name of the event.
     * @param {Function} callback - The callback function to invoke when the event is emitted.
     * @return {Object} - An object with an `unsubscribe` method.
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
        const subscriptionIndex = this.subscriptions.length;
        this.subscriptions.push({ eventName, callback });

        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(
                    (listener) => listener !== callback
                );

                // Clean up if no listeners remain for the event
                if (this.events[eventName].length === 0) {
                    delete this.events[eventName];
                }
            }
        };
    }

    /**
     * Emit an event, calling all the callbacks associated with the event.
     * @param {string} eventName - The name of the event.
     * @param {Array} args - Arguments to pass to the callbacks.
     * @return {Array} - An array of results from each callback.
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return [];
        }

        return this.events[eventName].map((callback) => {
            return callback(...args);
        });
    }
}