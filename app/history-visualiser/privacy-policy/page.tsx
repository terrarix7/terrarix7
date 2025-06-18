import React from "react";

function PrivacyPolicyPage() {
  const extensionName = "History Visualiser"; // Replace with your actual extension name
  const effectiveDate = "May 6, 2025"; // Replace with the effective date
  const supportContact = "terrarix7@gmail.com"; // Replace with your contact info

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Privacy Policy for {extensionName}
      </h1>

      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        <strong>Effective Date:</strong> {effectiveDate}
      </p>

      <p className="mb-4">
        This Privacy Policy explains how {extensionName} (referred to as "the
        Extension," "we," "us," or "our") collects, uses, and protects your
        information.
      </p>

      <p className="mb-6 p-4 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-400 text-yellow-800 dark:text-yellow-200">
        <strong>Please note:</strong> This Extension operates entirely within
        your web browser.{" "}
        <strong className="font-semibold">
          We do not collect, store, or transmit any of your personal data or
          browsing history outside of your local browser environment.
        </strong>
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        What Data We Access and Use
      </h2>
      <p className="mb-4">
        The core functionality of this Extension is dependent on accessing your
        browser history. As disclosed in the Chrome Web Store listing, the only
        type of user data we access and use is:
      </p>
      <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
        <li>
          <strong className="font-semibold">Web history:</strong> This includes
          the list of web pages you have visited, along with associated data
          such as the page title and the time of your visit.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">How We Use Your Data</h2>
      <p className="mb-4">
        Your web history is used{" "}
        <strong className="font-semibold">solely within your browser</strong>{" "}
        for the following purposes:
      </p>
      <ol className="list-decimal list-inside mb-4 ml-4 space-y-2">
        <li>
          <strong className="font-semibold">
            To provide summaries of your browsing history:
          </strong>{" "}
          The Extension analyzes your visit patterns.
        </li>
        <li>
          <strong className="font-semibold">
            To identify and quantify short-form content consumption:
          </strong>{" "}
          A primary function is to specifically detect visits to popular
          platforms known for short-form content (like reels, shorts, or posts)
          and calculate statistics on how much time or how many instances you
          have spent on these types of content.
        </li>
        <li>
          <strong className="font-semibold">To display usage insights:</strong>{" "}
          The analysis results are shown to you directly within the Extension's
          interface, helping you understand your browsing habits.
        </li>
      </ol>
      <p className="mb-6">
        <strong className="font-semibold">
          Crucially, all analysis and data processing are performed locally
          within your browser instance.
        </strong>
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Data Storage and Processing
      </h2>
      <p className="mb-4">
        <strong className="font-semibold">
          Your web history is not uploaded or stored on our servers, or any
          third-party servers.
        </strong>
      </p>
      <p className="mb-6">
        The Extension accesses the necessary history data from your browser's
        history API in real-time (or near real-time depending on browser
        implementation) to perform its analysis and display the results. Once
        the analysis is done or the data is no longer needed for the current
        view within the Extension interface, it is processed transiently by the
        Extension code running in your browser. No persistent copy of your full
        history, or summary data linked to you, is kept by us outside of your
        local browser storage (if any is used for settings or temporary display
        states, which would also remain local).
      </p>

      <h2 className="text-2xl font-semibold mb-3">Data We Do Not Collect</h2>
      <p className="mb-4">
        To be clear, and as stated in our Chrome Web Store disclosure, this
        Extension <strong className="font-semibold">does not</strong> collect or
        use any other types of user data, including but not limited to:
      </p>
      <ul className="list-disc list-inside mb-6 ml-4 space-y-1">
        <li>Personally identifiable information (e.g., name, email address)</li>
        <li>Health information</li>
        <li>Financial and payment information</li>
        <li>Authentication information (e.g., passwords)</li>
        <li>Personal communications (e.g., emails, texts)</li>
        <li>Location data</li>
        <li>
          General user activity (like network monitoring, keystroke logging,
          beyond the analysis of visited URLs/titles from history)
        </li>
        <li>
          Website content (beyond the URL and title obtained from history)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Data Sharing</h2>
      <p className="mb-6">
        We <strong className="font-semibold">do not</strong> sell, trade, or
        transfer your web history or any information derived from it to outside
        parties. Since all data processing is local to your browser, there is no
        data to share or transfer from our end. Your data remains on your
        device.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. We will post any
        changes on this page. Your continued use of the Extension after any
        changes constitutes your acceptance of the updated policy.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
      <p className="mb-8">
        If you have any questions about this Privacy Policy or the Extension's
        data handling practices, please contact us at{" "}
        <a
          href={
            supportContact.startsWith("http") ||
            supportContact.startsWith("mailto:")
              ? supportContact
              : `mailto:${supportContact}`
          }
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {supportContact}
        </a>
        .
      </p>

      <hr className="my-8 border-t border-gray-300 dark:border-gray-700" />
    </div>
  );
}

export default PrivacyPolicyPage;
