function log(message) {
console.log(`[Wyne] ${new Date().toISOString()} - ${message}`);
}

module.exports = { log };
