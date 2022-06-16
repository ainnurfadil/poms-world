module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      spacing: {
        '25': '6.5rem',
        '30': '7.75rem',
        '130': '26rem',
        '135': '28rem',
        '138': '32rem',
        '139': '34.75rem',
        '282': '65rem',
        'mhero': '31rem',
        'hero': '65rem',
        'synopsis': '45rem',
        'collection': '48rem',
        'faq': '55rem',
        'team': '59rem',
        'joinus': '32rem',
      },
      
      colors: {
        birumuda: '#49B1DF',
        birunavbar: '#52C3FB',
        ijo: '#138D92',
        
      },
    },
    // width: {
    //   '1/10': '10%',
    //   '2/10': '20%',
    //   '3/10': '30%',
    //   '4/10': '40%',
    //   '5/10': '50%',
    //   '6/10': '60%',
    //   '7/10': '70%',
    //   '8/10': '80%',
    //   '9/10': '90%',
    // },
  },
  plugins: [],
}
