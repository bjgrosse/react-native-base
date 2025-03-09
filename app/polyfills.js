// Simple polyfill for FinalizationRegistry
if (typeof global.FinalizationRegistry === 'undefined') {
  global.FinalizationRegistry = class FinalizationRegistry {
    constructor(callback) {
      this.callback = callback;
      this.registry = new Map();
    }
    
    register(target, heldValue, unregisterToken) {
      this.registry.set(unregisterToken || target, { target, heldValue });
    }
    
    unregister(unregisterToken) {
      this.registry.delete(unregisterToken);
    }
    
    // Note: This is a simplified polyfill that doesn't actually perform cleanup
    // when objects are garbage collected, since that's not possible in JS without
    // the actual FinalizationRegistry
  }
} 