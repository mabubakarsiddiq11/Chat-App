// Create a named channel
const channel = new BroadcastChannel("chat-sync"); // can give anyName

// 🔊 Function to send message to all other tabs
export const sendToTabs = (type, payload) => {
    console.log("[sendToTabs]", type, payload); // log what's being sent
    channel.postMessage({ type, payload }); // broadcast the message
};

// 👂 Function to listen to messages from other tabs
export const listenToTabs = (callback) => {
    channel.onmessage = (event) => {
        console.log("[listenToTabs] received:", event.data); // log what's received
        callback(event.data); // pass data to whoever is listening
    };
};


// ✅ So Why Use BroadcastChannel?
// Because EventEmitter doesn’t work across tabs.
// Each tab is a different JavaScript world (different memory).

// So BroadcastChannel acts like a cross-tab EventEmitter.
// It lets one tab broadcast a message, and others listen and react — just like EventEmitter, but for tabs.