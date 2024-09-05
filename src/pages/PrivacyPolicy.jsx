import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          At PingRoute, we value your privacy and are committed to ensuring the
          security of your personal information. This privacy policy outlines
          the types of information we do not collect and how we handle data
          within our app.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          1. No Collection of Personal Information
        </h2>
        <p className="text-gray-700 mb-4">
          PingRoute does not collect, store, or process any personal information
          from users. We do not request access to personal data such as names,
          email addresses, or phone numbers.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          2. No Network Data Logging or Transmission
        </h2>
        <p className="text-gray-700 mb-4">
          PingRoute performs traceroutes and pings to analyze network paths and
          performance metrics. However, this data is processed locally on your
          device and is not logged, transmitted, or shared with any external
          servers or third parties. The app does not have any backend API
          connections for sending data.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          3. Local Data Processing
        </h2>
        <p className="text-gray-700 mb-4">
          All network diagnostics and performance analyses (such as packet loss,
          latency, jitter, etc.) are processed and displayed locally on your
          device. The app does not send or store this data outside of the
          device.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          4. No Third-Party Services
        </h2>
        <p className="text-gray-700 mb-4">
          PingRoute does not use any third-party services, analytics tools, or
          advertising networks that could collect or track your information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          5. Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          Since PingRoute does not collect or store any data, changes to this
          policy are unlikely. However, if there are any updates, we will notify
          users through the app's Microsoft Store listing.
        </p>

        <p className="text-gray-500 mt-6">
          This privacy policy was last updated on 6 September 2024. If you have any
          questions or concerns, please contact us at harmanpreetsingh@programmer.net.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
