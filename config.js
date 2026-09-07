// Copy this file to config.js.
// Option 1: local mock demo only
window.QUICK_DEMO_CONFIG = {
  mode: "mock", // "mock" or "embed-url"
  appName: "AnyCompany Order Portal",
  quickEmbedUrl: "us-east-1.quicksight.aws.amazon.com/sn/account/211125351774/start/agents?view=21e5e9bb-c5e8-4414-bdcc-d4fcb8aef5a0" // paste generated Quick chat embed URL here for real embed-url mode
};

// Option 2: real Quick embed URL returned by your secure backend
// window.QUICK_DEMO_CONFIG = {
//   mode: "embed-url",
//   appName: "AnyCompany Order Portal",
//   quickEmbedUrl: "https://<region>.quicksight.aws.amazon.com/embedding/.../quick/chat?..."
// };
