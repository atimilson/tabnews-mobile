const colors = {
    white: '#ffffff',
    black: '#000000',
    gray: {
        100: '#929497',
        300: '#5B5F63',
        500: '#24292F',
        700: '#1B1F23',
        900: '#121518',
    },
}

const theme = {
    colors,
    fontSize: {
        xs: '10px',
        sm: '12px',
        base: '14px',
        xl: '18px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '48px',
    },
    fontFamily: {
        regular: 'SF-Pro-Display-Regular',
        regularItalic: 'SF-Pro-Display-RegularItalic',
        bold: 'SF-Pro-Display-Bold',
        boldItalic: 'SF-Pro-Display-BoldItalic',
    },
}

module.exports = {
    colors,
    theme,
}