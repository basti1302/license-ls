const { table } = require('table')

module.exports =  function ({data, labels}) {

    const defaultLabels = {
        id: 'Row #',
        package: 'Name',
        version: 'Version',
        license: 'License',
        homepage: 'Homepage',
        repository: 'Repository',
        author: 'Author',
        dependencyLevel: 'Dependency type'
    }

    const finalLabels = Object.assign({}, labels, defaultLabels)

    const headers = Object.keys(data[0]).map(key => finalLabels[key])
    const rows = data.map(Object.values)
    try {
        return table([headers, ...rows])
    } catch (err) {
        console.warn('There was an error generating the table output', err)
        return ''
    }
}