/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)

class Table{
    #tbody

    get tbody(){
        return this.#tbody
    }

    constructor(headerArr){
        this.#tbody = makeTableBodyWithHeader(headerArr);
    }
    /**
     * @callback RenderRowCallBack
     * @param {HTMLSection}
     */
    appendRow(callback){
        callback(this.#tbody)
    }
}

class ColspanTable extends Table{
    constructor(headerArr){
        super(headerArr);
    }

    render(a){
        renderColspanBody(this.tbody, a);
    }
}

class RowspanTable extends Table{
    constructor(headerArr){
        super(headerArr);
    }

    render(b){
        renderRowspanBody(this.tbody, b);
    }
}
 
const colspan = new ColspanTable(colspanHeaderArr);
colspan.render(colspanBodyArr);

const rowspan = new RowspanTable(rowspanHeaderArr);
rowspan.render(rowspanBodyArr);

function doSomething(callback){
    callback(tbody)
}

doSomething(function (tableBody) {
    const tr = document.createElement("tr")
    tableBody.appendChild(tr)
})
 
const button = document.createElement("button")
button.innerText = "rowspan hozzáadás"
document.body.appendChild(button)
 
//