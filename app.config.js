const path = require('path');
const dotenv = require('dotenv');

// Load env file based on environment
const envPath = path.resolve(__dirname, '.env.development');
dotenv.config({ path: envPath });

module.exports = {
  name: "test-app",
  version: "1.0.0",
  newArchEnabled: true,
  extra: {
    supabaseUrl: "https://zxybwjakcildfrrnyqsc.supabase.co",
    supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4eWJ3amFrY2lsZGZycm55cXNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NjQxOTgsImV4cCI6MjA1NzA0MDE5OH0.JtVtnwPLALqku_UCpuhQPIHepd9maLfngd36E0kdEGc",
    eas: {
      projectId: "your-project-id"
    }
  },
  plugins: ["expo-router"],
  scheme: "testapp",
  ios: {
    bundleIdentifier: "com.yourcompany.testapp"
  },
  android: {
    package: "com.yourcompany.testapp"
  }
}; 