let tag = document.getElementById('tag')
user = prompt('(1)Names (2)DOI (3)Elocation-id')

function names(){
    names = prompt('Names: ')
    split(names)
}
function split(names) {
    author = names.split(' ')
    loop(author)
}
function loop(author) {
    output = []
    for (var i = 0; i < author.length; i++){
        if (i % 2 == 0) {
            output.push(`<name><surname>${author[i]}</surname>`)
        }else{
            output.push(`<given-names>${author[i]}</given-names></name>`)
        out = toString(output)
        }
        if (author.length >= 12) {
            out = `${output}<etal/>`
        } else if (author.length < 12){
            out = `${output}`
        }
    }
    tag.append(out.replaceAll(',', ' '))
}

function DOI(){
    userInput = prompt('DOI>>> ')
    out = ` doi: <pub-id pub-id-type="doi">${userInput}</pub-id>`
    tag.append(out)
}

function eloc(){
    userInput = prompt('elocation id>>> ')
    out = `<elocation-id>${userInput}</elocation-id>`
    tag.append(out)
}
if (user == 1){
    names()
} else if(user == 2){
    DOI()
} else if(user == 3){
    eloc()
}
