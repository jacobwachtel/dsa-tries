class TrieNode {
    constructor() {
        this.end = false;
        this.children = {};
    }
    insert(str, pos = 0) {
        if (pos === str.length) {
            this.end = true;
            return;
        }
        let key = str[pos];
        if (!this.children[key]) {
            this.children[key] = new TrieNode();
        }
        this.children[key].insert(str, pos + 1);



        // while(pos !== str.length - 1) {
        //     this.children[str[pos]] = new TrieNode();
        //     pos++;
        // }
    }

    getAllWords(word = '', words = []) {
        if(this.end) {
            words.push(str);
        }
        for (let key in this.children) {
            this.children[key].getAllWords(word + key, words);
        }

        return words;
    }

    remove() {
        
    }
}



