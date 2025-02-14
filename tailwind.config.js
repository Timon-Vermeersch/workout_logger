
module.exports = {
    theme: {
      extend: {
        clipPath: {
          'top-crop': 'inset(3000px 0 0 0)',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
      require('tailwind-clip-path'), // Optional plugin for clip-path utilities
    ],
  };
  