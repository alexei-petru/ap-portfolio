module.exports = {
  // Lint & Prettify TS and JS files within the src directory
  "src/**/*.{ts,tsx,js}": (filenames) => {
    const filesToLint = filenames.join(' ');
    return [
      `next lint --file ${filesToLint}`,
      `tsc --noEmit --skipLibCheck`,
      `prettier --write ${filesToLint}`
    ];
  },

  // Prettify only Markdown and JSON files within the src directory
  "src/**/*.{md,json}": "prettier --write"
};
