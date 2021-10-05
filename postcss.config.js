module.exports = {
    plugins: [
        require('precss')(),
        require('postcss-grid')({
            columns: 12, // the number of columns in the grid
            maxWidth: 960, // the maximum width of the grid (in px)
            gutter: 20, // the width of the gutter (in px)
            legacy: false
        })
    ]
}