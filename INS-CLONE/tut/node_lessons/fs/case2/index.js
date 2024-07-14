// output GACM
const fs = require('fs')
// read file
fs.readFile('./input.txt', 'utf8', (err, content) => {
    if (err) {
        console.error('Read file failed', err)
        return
    }
    // 提取每一行的方法
    // console.log('Data:', content)
    // Extract the first letter of each word in each line of the content
    // const lines = content.split('\n')
    // console.log('Lines:', lines)
    // const initials = lines.map(line => {
    //     const words = line.split(' ')
    //     const firstLetters = words.map(word => word.charAt(0))
    //     return firstLetters.join('')
    // })

    // console.log('Initials:', initials)

    // content = initials.join('\n')
    // 如果只是提取一行的方法：
    console.log('Content:', content)
    const output = content
        .split(" ")
        .map((word) => {
            return word[0]
        })
        .join("");
    console.log('Output:', output);

    // write content from source.js to source2.js
    fs.writeFile('./output.txt', output, 'utf8', (err) => {
        if (err) {
            console.error('Write file failed', err)
            return
        } else {
            console.log('Write file successfully')
        }
    })
})