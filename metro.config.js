const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add .sql to source extensions so migrations are bundled as strings
config.resolver.sourceExts.push('sql');

module.exports = config;
