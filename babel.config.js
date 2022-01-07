module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        // runtime to not need import react in all .jsx files
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]
    ]
}