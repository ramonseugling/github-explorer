module.exports = {
    presets: [
        '@babel/preset-env',
        // runtime to not need import react in all .jsx files
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]
    ]
}