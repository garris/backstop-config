const relativePaths = require('./relativePaths.js');
const scenarios = [];

const domain = "http://example.com"; // Put the domain of your website here.
const projectId = "sample project"; // Put the id of your project here. It can be any string.

relativePaths.map(relativePath => {
  scenarios.push({
    label: relativePath,
    url: `${domain}${relativePath}`,
    delay: 3000,
    requireSameDimensions: false
  });
});

module.exports = {
  id: projectId,
  // Add, remove, or update viewports if needed.
  viewports: [
    {
      name: "desktop",
      width: 1280,
      height: 1024
    },
    {
      name: "tablet",
      width: 1024,
      height: 768
    },
    {
      name: "phone",
      width: 320,
      height: 480
    },
  ],
  scenarios,
  paths: {
    bitmaps_reference: "test/backstop_data/bitmaps_reference",
    bitmaps_test: "test/backstop_data/bitmaps_test",
    html_report: "test/backstop_data/html_report"
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50
};
